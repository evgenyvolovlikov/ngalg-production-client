# REFACTOR_PLAN — просмотр статьи в drawer без перехода на страницу

**Зафиксированные решения:**

1. Статья открывается **внутри drawer**, выезжает справа налево на всю ширину.
2. `app-link` **расширяем под `<button>`**.
3. Роут `article-details-page` **удаляем**.

---

## 0. Токены — добавить недостающие

В `src/styles/_tokens.scss` нет двух переменных, которые нужны для навигации:

```scss
/* Новые токены (дописать в :root) */
--bg-hover: #eef1f6; /* нейтральный фон при наведении */
--tracking-wide: 0.05em; /* под uppercase-заголовки секций */
```

Также: `--bg-surface-active` и `--text-color` из старого кода **в наборе не существуют**. Грепнуть
проект:

```
grep -rn "bg-surface-active|--text-color" src/
```

Все вхождения заменить на `--brand-light` / `--text-primary`.

---

## 1. `app-link` — расширить под `<button>`

### `app-link.component.ts`

```typescript
import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	computed,
	inject,
	input,
} from '@angular/core';

export type LinkVariant = 'primary' | 'secondary' | 'underline';
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

@Component({
	selector: 'a[app-link], button[app-link]',
	standalone: true,
	template: '<ng-content />',
	styleUrl: './app-link.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class]': 'hostClass()',
		'[attr.type]': 'isButton ? "button" : null',
		'[attr.target]': 'isButton ? null : target()',
		'[attr.rel]': 'isButton ? null : relValue()',
	},
})
export class AppLinkComponent {
	readonly variant = input<LinkVariant>('primary');
	readonly target = input<LinkTarget>('_self');
	readonly rel = input<string | null>(null);
	readonly isActive = input<boolean>(false);

	private readonly el = inject(ElementRef<HTMLElement>);
	protected readonly isButton = this.el.nativeElement.tagName === 'BUTTON';

	protected readonly hostClass = computed(
		() => `app-link app-link--${this.variant()}${this.isActive() ? ' app-link--active' : ''}`,
	);

	protected readonly relValue = computed(() => {
		if (this.target() === '_blank') {
			return this.rel() ?? 'noopener noreferrer';
		}
		return this.rel();
	});
}
```

### `app-link.component.scss` — сброс кнопки

Добавить к существующим стилям:

```scss
:host(button) {
	padding: 0;
	background: none;
	border: none;
	font: inherit;
	text-align: left;
	cursor: pointer;
}
```

Остальные варианты (`--primary` / `--secondary` / `--underline` / `--active`) и `:focus-visible` —
без изменений.

---

## 2. Новый `ArticleViewComponent` (вынести из `article-details-page`)

Создать `src/entities/article/ui/article-view/article-view.component.ts`. Компонент **реактивен к
смене id** — иначе в drawer статья не перезагрузится при клике на другой пункт.

```typescript
import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	effect,
	inject,
	input,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { finalize } from 'rxjs';

import { Article, ArticleApiService, ArticleComponent } from '@entities/article';

@Component({
	selector: 'app-article-view',
	standalone: true,
	imports: [ArticleComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (article(); as data) {
			<app-article-content [article]="data" />
		} @else if (isLoading()) {
			<p class="article-view__status">Загрузка статьи…</p>
		} @else if (error(); as message) {
			<p class="article-view__status article-view__status--error">{{ message }}</p>
		}
	`,
	styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent {
	readonly articleId = input.required<string>();

	private readonly articleApi = inject(ArticleApiService);
	private readonly destroyRef = inject(DestroyRef);

	protected readonly article = signal<Article | null>(null);
	protected readonly isLoading = signal<boolean>(false);
	protected readonly error = signal<string | null>(null);

	constructor() {
		// Перезагрузка на каждое новое значение id — компонент живёт постоянно
		effect(() => {
			const id = this.articleId();
			if (!id) return;
			this.load(id);
		});
	}

	private load(id: string): void {
		this.isLoading.set(true);
		this.error.set(null);
		this.article.set(null);

		this.articleApi
			.getArticleById(id)
			.pipe(
				finalize(() => this.isLoading.set(false)),
				takeUntilDestroyed(this.destroyRef),
			)
			.subscribe({
				next: (data) => this.article.set(data),
				error: (err) => {
					console.error('Не удалось загрузить статью', err);
					this.error.set('Не удалось загрузить статью');
				},
			});
	}
}
```

`article-view.component.scss` — перенести статусы из `article-details-page.component.scss`:

```scss
:host {
	display: block;
	width: 100%;
}

.article-view__status {
	padding: var(--unit-6) 0;
	font-size: var(--font-size-base);
	color: var(--text-secondary);
	text-align: center;

	&--error {
		color: var(--status-error);
	}
}
```

Экспортировать через `entities/article/index.ts`.

---

## 3. `ArticleDrawerNavigationComponent` — дочистить

### `.ts`

```typescript
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ArticleNavigationApiService } from '@entities/article-navigation';

import { AccordionComponent } from '@shared/ui/accordion/accordion.component';
import { AppLinkComponent } from '@shared/ui/app-link';
import { BadgeComponent } from '@shared/ui/badge';

@Component({
	selector: 'app-article-drawer-navigation',
	standalone: true,
	imports: [AppLinkComponent, BadgeComponent, AccordionComponent],
	templateUrl: './article-drawer-navigation.component.html',
	styleUrl: './article-drawer-navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDrawerNavigationComponent {
	private readonly navigationApi = inject(ArticleNavigationApiService);

	readonly navigationTree = toSignal(this.navigationApi.getNavigationTree());

	readonly selectedId = input<string | null>(null);
	readonly articleSelected = output<string | number>();
}
```

**Удалить:** импорты `RouterLink`, `RouterLinkActive`, `RouteBuilder`; поля `getArticleLink`; метод
`onArticleClick`.

### `.html`

```html
<nav class="article-nav" aria-label="Навигация по статьям">
	@if (navigationTree(); as tree) { @for (section of tree; track section.id) {
	<section class="article-nav__section">
		<h2 class="article-nav__section-title">{{ section.title }}</h2>

		<ul class="article-nav__categories">
			@for (category of section.items; track category.id) {
			<li class="article-nav__category">
				<app-accordion [isOpen]="true">
					<ng-container ngProjectAs="[accordion-title]">
						{{ category.title }}
					</ng-container>

					<ul class="article-nav__list">
						@for (article of category.children; track article.id) {
						<li
							class="article-nav__list-item"
							[class.article-nav__list-item--active]="article.id === selectedId()"
						>
							<button
								app-link
								type="button"
								variant="secondary"
								[isActive]="article.id === selectedId()"
								class="article-nav__link"
								(click)="articleSelected.emit(article.id)"
							>
								<span class="article-nav__link-text">{{ article.title }}</span>

								@if (article.tag) {
								<app-badge size="sm" variant="outline">
									{{ article.tag }}
								</app-badge>
								}
							</button>
						</li>
						}
					</ul>
				</app-accordion>
			</li>
			}
		</ul>
	</section>
	} } @else {
	<div class="article-nav__loading">Загрузка навигации...</div>
	}
</nav>
```

**Убрать:** мёртвый `[class.is-clickable]="true"` и `eslint-disable`-комментарии сверху (они были
симптомом `<a>` без `href`).

### `.scss`

К `&__link` добавить `width: 100%` (для кнопки) и `cursor: pointer`. Блок `&__list-item--active`
теперь реально связывается через `[class...]` — проверить, что фон `--brand-light` на месте.
`letter-spacing: 0.05em` заменить на `var(--tracking-wide)`.

---

## 4. `ArticlesDrawerSidebarComponent` — состояние + выезд статьи

### `.ts`

```typescript
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

import { ArticleViewComponent } from '@entities/article';
import { ArticleDrawerNavigationComponent } from '@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button';
import { DrawerComponent } from '@shared/ui/drawer';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-articles-drawer-sidebar',
	standalone: true,
	templateUrl: './articles-drawer-sidebar.component.html',
	styleUrl: './articles-drawer-sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		IconComponent,
		DrawerComponent,
		ButtonComponent,
		ArticleDrawerNavigationComponent,
		ArticleViewComponent,
	],
})
export class ArticlesDrawerSidebarComponent {
	readonly isArticlesOpen = signal<boolean>(false);
	readonly selectedArticleId = signal<string | null>(null);

	constructor() {
		effect(() => {
			document.body.classList.toggle('lock-scroll', this.isArticlesOpen());
		});
	}

	protected onArticleSelected(id: string | number): void {
		this.selectedArticleId.set(String(id));
	}

	protected backToNavigation(): void {
		this.selectedArticleId.set(null);
	}

	protected toggleArticlesOpen(): void {
		this.isArticlesOpen.update((state) => !state);
	}
}
```

### `.html`

```html
<div class="draw-sidebar" [class.draw-sidebar--hidden]="isArticlesOpen()">
	<button
		app-button
		type="button"
		variant="fab"
		color="primary"
		(click)="toggleArticlesOpen()"
		aria-label="Открыть глоссарий"
	>
		<span class="draw-sidebar__content">
			<app-icon name="book-open" size="m" />
			<span>A-Z</span>
		</span>
	</button>
</div>

<app-drawer [(isOpen)]="isArticlesOpen">
	<div drawer-header>Header</div>

	<div class="drawer-inner-content">
		<div
			class="drawer-inner-content__panel drawer-inner-content__panel--nav"
			[class.drawer-inner-content__panel--shifted]="!!selectedArticleId()"
		>
			<app-article-drawer-navigation
				[selectedId]="selectedArticleId()"
				(articleSelected)="onArticleSelected($event)"
			/>
		</div>

		<div
			class="drawer-inner-content__panel drawer-inner-content__panel--article"
			[class.drawer-inner-content__panel--active]="!!selectedArticleId()"
		>
			@if (selectedArticleId(); as id) {
			<button
				app-button
				type="button"
				variant="clear"
				size="m"
				class="drawer-inner-content__back"
				(click)="backToNavigation()"
			>
				← Назад к списку
			</button>
			<app-article-view [articleId]="id" />
			}
		</div>
	</div>
</app-drawer>
```

### SCSS — механика выезда

```scss
.drawer-inner-content {
	position: relative;
	height: 100%;
	overflow: hidden;

	&__panel {
		height: 100%;
		transition: transform var(--transition-base);
	}

	/* Навигация: уезжает влево, когда открыта статья */
	&__panel--nav {
		transform: translateX(0);

		&.drawer-inner-content__panel--shifted {
			transform: translateX(-100%);
		}
	}

	/* Статья: стоит справа за краем, выезжает влево на всю ширину */
	&__panel--article {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		gap: var(--unit-4);
		background-color: var(--bg-card);
		overflow-y: auto;
		transform: translateX(100%);

		&.drawer-inner-content__panel--active {
			transform: translateX(0);
		}
	}

	&__back {
		align-self: flex-start;
	}
}
```

**Проверить:** если у `.drawer-inner-content` есть собственные `padding`, абсолютная панель статьи
закроет и его. Тогда панели нужен внутренний padding, либо снять padding с контейнера.

---

## 5. Удаление роута + побочный эффект в редакторе

### Удалить

- папку `src/pages/article-details-page/` целиком;
- регистрацию роута в `src/app/routes/app.routes.ts` **[проверить точное имя файла и путь]**;
- хелпер `RouteBuilder.ARTICLE_DETAILS` в `routes.config.ts`, если больше нигде не нужен.

### ⚠️ Критично: редактор статьи ссылается на этот роут

В `article-form.component.ts` есть навигация на удаляемый роут:

```typescript
protected handleCancel(): void {
	const id = this.articleId();
	this.router.navigateByUrl(id ? RouteBuilder.ARTICLE_DETAILS(id) : RouteBuilder.HOME());
}

// и в handleSave:
next: (savedArticle) => this.router.navigateByUrl(RouteBuilder.ARTICLE_DETAILS(savedArticle.id)),
```

После удаления роута эти вызовы приведут на несуществующий путь. **Нужно решить, куда вести:** в
редактор-список (`ARTICLE_EDITOR`) или на главную (`HOME()`). Пока — заглушка:

```typescript
// handleCancel
this.router.navigateByUrl(RouteBuilder.HOME());

// handleSave
next: () => this.router.navigateByUrl(RouteBuilder.HOME()),
```

Скажи, куда логичнее вести после сохранения — допишу точно.

---

## 6. Порядок внедрения

1. `_tokens.scss` — `--bg-hover`, `--tracking-wide`; грепнуть `--bg-surface-active` /
   `--text-color`.
2. `app-link` — селектор под `button`, сброс кнопки.
3. Создать `ArticleViewComponent`, экспорт из `entities/article`.
4. `ArticleDrawerNavigationComponent` — `input selectedId`, `output`, чистка `.ts/.html/.scss`.
5. `ArticlesDrawerSidebarComponent` — состояние + разметка + SCSS выезда.
6. Удалить роут и починить навигацию в `article-form`.
7. Проверка: открыть статью A → затем B → контент обновляется, навигация уезжает влево, статья
   выезжает справа.

---

## 7. Риски

| Риск                                     | Где                         | Что делать                                          |
| ---------------------------------------- | --------------------------- | --------------------------------------------------- |
| Статья не перезагружается при смене id   | `ArticleViewComponent`      | `effect`, не `ngOnInit`                             |
| Анимация не срабатывает при `@if`        | панель статьи               | анимируется панель, содержимое внутри — условное    |
| Панель статьи перекрывает padding drawer | `.drawer-inner-content`     | внутренний padding панели или снять с контейнера    |
| `article.id === selectedId` не сработает | шаблон навигации            | `String(id)` при emit                               |
| Мёртвые токены в палитре                 | весь проект                 | грепнуть `--bg-surface-active`, `--text-color`      |
| Редактор ведёт на удалённый роут         | `article-form.component.ts` | заменить `ARTICLE_DETAILS` на целевой роут          |
| Обрезанный дамп                          | анализ                      | сверить `app.routes.ts`, `article.types.ts` целиком |

---

## 8. Что уже ОК (не трогать)

- ✅ `app-link` — логика `hostClass` / `relValue` / `isActive` корректна.
- ✅ `accordion` — `model` + `(toggle)`, реактивность работает.
- ✅ `article-api.service` — `getArticleById` с `encodeURIComponent`.
- ✅ `ArticleComponent` (`app-article-content`) — готов к переиспользованию.
- ✅ Токены бренда/текста/границ/радиусов/переходов — консистентны.

---
