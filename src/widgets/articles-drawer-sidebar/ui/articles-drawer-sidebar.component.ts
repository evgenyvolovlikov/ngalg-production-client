import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

import { ArticleComponent } from '@entities/article';
import { Article } from '@entities/article';

import { ButtonComponent } from '@shared/ui/button';
import { DrawerComponent } from '@shared/ui/drawer';
import { IconComponent } from '@shared/ui/icon';

export const MOCK_ARTICLE_DETAILS: Article = {
	id: 'art_9b1deb4d-3b7d-4bad',
	slug: 'mastering-angular-signals-architecture',
	title: 'Архитектура Angular Signals: Погружение в новую реактивность',
	leadText:
		'Подробный разбор работы новых примитивов реактивности в Angular. Узнайте, как оптимизировать Change Detection и спроектировать масштабируемый State Management без Zone.js.',
	description:
		'В этом практическом руководстве мы разберем внутреннее устройство Writable и Computed сигналов. Мы пройдем путь от базовых концепций до продвинутых паттернов архитектуры, включая оценку вычислительной сложности алгоритмов синхронизации графа зависимостей и интеграцию с внешними API.',
	problemId: 'prob_reactive-counter-2026',
	authorId: 'auth_evgeny-volovlikov',
	categoryId: 'cat_frontend-advanced',
	tags: ['ARCHITECTURE', 'COMPONENT', 'STRUCTURE', 'THEORY'],
	status: 'PUBLISHED',
	level: 'ADVANCED',
	coverImage: {
		url: 'https://opensource.google/static/images/projects/os-projects-angular.svg',
		alt: 'Абстрактное превью архитектуры Angular приложений',
		caption: 'Граф зависимостей и реактивные узлы в Angular 17+',
	},
	readingTimeMinutes: 14,
	seo: {
		description:
			'Глубокий анализ Angular Signals, примеры кода, оценка пространственной и временной сложности реактивного графа.',
		keywords: ['Angular', 'Signals', 'Реактивность', 'State Management', 'Change Detection'],
	},
	createdAt: '2026-03-15T10:00:00.000Z',
	updatedAt: '2026-09-23T18:30:00.000Z',
	blocks: [
		{
			type: 'TEXT',
			data: {
				format: 'MARKDOWN',
				content:
					'### Введение в реактивный граф\n\nДо появления сигналов Angular полагался на **Zone.js**, которая перехватывала любые асинхронные события и запускала проверку всего дерева компонентов сверху вниз. Сигналы меняют эту парадигму, внедряя мелкозернистую (fine-grained) реактивность. Теперь фреймворк точечно знает, какой именно узел графа изменился и какую часть DOM необходимо обновить.',
			},
		},
		// 2. Блок примечания (NOTE - WARNING)
		{
			type: 'NOTE',
			data: {
				noteType: 'WARNING',
				text: 'Никогда не изменяйте значения Writable сигналов внутри `computed()` блоков. Это приведет к неконтролируемым сайд-эффектам и вызовет ошибку циклической зависимости в реактивном графе.',
			},
		},
		// 3. Блок кода (CODE)
		{
			type: 'CODE',
			data: {
				language: 'typescript',
				filename: 'reactive-store.ts',
				code: `import { signal, computed } from '@angular/core';

export class ReactiveState {
  // Базовый Writable сигнал
  private readonly _users = signal<string[]>(['Евгений', 'Алексей']);

  // Зависимый Computed сигнал
  readonly uppercaseUsers = computed(() =>
    this._users().map(user => user.toUpperCase())
  );

  addUser(name: string): void {
    this._users.update(current => [...current, name]);
  }
}`,
			},
		},
		// 4. Блок сложности (COMPLEXITY)
		{
			type: 'COMPLEXITY',
			data: {
				time: 'O(1)',
				space: 'O(N)',
				description:
					'Чтение значения `computed()` сигнала выполняется за константное время благодаря мемоизации. Алгоритм вычисления графа ленивый (lazy evaluative). Пространственная сложность линейно зависит от количества зарегистрированных зависимостей (активных слушателей и авторов).',
			},
		},
		// 5. Блок изображения (IMAGE)
		{
			type: 'IMAGE',
			data: {
				url: 'https://opensource.google/static/images/projects/os-projects-angular.svg',
				alt: 'Диаграмма бенчмарков производительности Change Detection',
				caption:
					'Рис 1. Сравнение скорости рендеринга больших списков: Zone.js vs OnPush vs Signals',
			},
		},
		// 6. Блок преимуществ / фич (FEATURES)
		{
			type: 'FEATURES',
			data: {
				sectionTitle: 'Ключевые преимущества архитектуры на сигналах',
				items: [
					{
						title: 'Отсутствие Zone.js',
						text: 'Возможность полной сборки zoneless-приложений, что существенно снижает итоговый размер бандла и ускоряет инициализацию.',
					},
					{
						title: 'Мемоизация из коробки',
						text: 'Повторные вызовы вычисляемых сигналов не запускают перерасчет, пока не изменятся исходные реактивные зависимости.',
					},
					{
						title: 'Локальное обновление (Glitch-Free)',
						text: 'Гарантированная защита от временных несоответствий данных при множественных параллельных вычислениях за счет алгоритма динамического отслеживания зависимостей.',
					},
				],
			},
		},
		{
			type: 'NOTE',
			data: {
				noteType: 'ERROR',
				text: 'Если вы столкнулись с ошибкой "ExpressionChangedAfterItHasBeenCheckedError", это верный знак того, что вы пытаетесь использовать классический императивный подход управления состоянием параллельно с сигналами в рамках одного цикла рендеринга.',
			},
		},
	],
};

@Component({
	selector: 'app-articles-drawer-sidebar',
	standalone: true,
	templateUrl: './articles-drawer-sidebar.component.html',
	styleUrl: './articles-drawer-sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [IconComponent, DrawerComponent, ButtonComponent, ArticleComponent],
})
export class ArticlesDrawerSidebarComponent {
	readonly isArticlesOpen = signal<boolean>(false);

	readonly mockArticle = MOCK_ARTICLE_DETAILS;

	constructor() {
		effect(() => {
			if (this.isArticlesOpen()) {
				document.body.classList.add('lock-scroll');
			} else {
				document.body.classList.remove('lock-scroll');
			}
		});
	}

	protected toggleArticlesOpen(): void {
		this.isArticlesOpen.update((state) => !state);
	}
}
