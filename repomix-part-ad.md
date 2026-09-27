            - name: Lint (ESLint & Stylelint)
              run: pnpm -w lint

            - name: Build Application
              run: pnpm -w build:prod

            - name: Upload Build Artifacts
              uses: actions/upload-artifact@v4
              with:
                  name: dist
                  path: dist
                  retention-days: 7

</file>

<file path=".husky/pre-commit">
pnpm  lint-staged
pnpm  typecheck
</file>

<file path="public/assets/eye-closed.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M14.505 5.631a.75.75 0 0 1 1.219.875A9.6 9.6 0 0 1 13.8 8.501l1.355 1.712c.263.332.195.774-.15.986-.344.213-.836.116-1.099-.216l-1.329-1.68a9.5 9.5 0 0 1-1.972.806l.62 2.704c.092.403-.16.8-.564.886a.765.765 0 0 1-.9-.576l-.624-2.72a9.6 9.6 0 0 1-2.275.003l-.62 2.717a.765.765 0 0 1-.901.576.736.736 0 0 1-.565-.886l.618-2.698a9.4 9.4 0 0 1-1.977-.805l-1.323 1.673c-.263.332-.755.429-1.1.216-.344-.212-.41-.654-.148-.986l1.348-1.704a9.5 9.5 0 0 1-1.91-1.982.75.75 0 0 1 1.219-.875c3.19 4.44 9.811 4.424 13.002-.021"/></svg>
</file>

<file path="public/assets/eye-opened.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.87 8.515 1.641 8l.229-.515a6.708 6.708 0 0 1 12.26 0l.228.515-.229.515a6.708 6.708 0 0 1-12.259 0M.5 6.876l-.26.585a1.33 1.33 0 0 0 0 1.079l.26.584a8.208 8.208 0 0 0 15 0l.26-.584a1.33 1.33 0 0 0 0-1.08l-.26-.584a8.208 8.208 0 0 0-15 0M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/logo-github.svg">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 438.549 438.549" class="undefined lH8o3oFcT0JxdwXEIoPc"><path fill="currentColor" d="M409.132 114.573q-29.41-50.392-79.798-79.8C295.736 15.166 259.057 5.365 219.271 5.365c-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8Q0 164.966 0 224.63c0 47.78 13.94 90.745 41.827 128.906q41.827 57.245 108.063 79.227c5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562q0-.855-.144-15.417a2550 2550 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999q-10.28-1.848-19.13-8.559c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559q-6.139-7.995-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429q-1.712-1.996-2.568-3.997-.86-2.002 1.427-3.289c1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851q8.42 5.71 13.846 14.842c4.38 7.806 9.657 13.754 15.846 17.847q9.277 6.138 18.699 6.136 9.42-.001 16.274-1.423 6.848-1.43 12.847-4.285 2.57-19.135 13.988-29.41c-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979q-5.852-18.56-5.852-42.826c0-23.035 7.52-42.637 22.557-58.817q-10.566-25.977 1.997-58.24c5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994s9.089 5.618 12.135 7.708q26.556-7.42 54.818-7.421c28.262-.001 37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979q-9.286 11.282-23.131 18.986c-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146q14.841 12.845 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995q66.244-21.98 108.068-79.226c27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049"></path></svg>
</file>

<file path="public/assets/logo-google.svg">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 533.5 544.3" class="undefined lzy6UeGBe3aifQ4z6hGe"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2" style="fill: rgb(66, 133, 244);"></path><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9" style="fill: rgb(52, 168, 83);"></path><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4z" style="fill: rgb(251, 188, 4);"></path><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4" style="fill: rgb(234, 67, 53);"></path></svg>
</file>

<file path="public/assets/logo.svg">
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1280.000000pt" height="400.000000pt" viewBox="0 0 1280.000000 400.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none"> <path d="M2090 3454 c0 -12 923 -1994 927 -1990 7 7 101 1511 94 1518 -3 4
-231 111 -506 238 -274 127 -503 234 -507 236 -4 3 -8 2 -8 -2z"/>
<path d="M905 3216 l-499 -233 2 -49 c9 -160 93 -1478 95 -1480 2 -2 915 1960
925 1987 2 5 -2 9 -10 8 -7 -1 -238 -106 -513 -233z"/> <path d="M4120 2258 c-157 -446 -311 -885 -342 -975 l-57 -163 189 0 188 0 80
238 79 237 368 0 368 0 81 -237 81 -238 188 0 c106 0 187 4 185 9 -1 5 -156
444 -343 975 l-340 966 -220 0 -220 0 -285 -812z m643 29 c70 -210 127 -386
127 -390 0 -4 -119 -7 -265 -7 -146 0 -265 4 -265 9 0 8 227 687 249 744 6 15
14 27 18 27 5 0 66 -172 136 -383z"/>
<path d="M9800 2095 l0 -975 170 0 170 0 0 975 0 975 -170 0 -170 0 0 -975z"/>
<path d="M1751 2670 c-70 -160 -357 -871 -353 -875 6 -6 732 -7 732 -1 0 2
-83 205 -184 452 -165 402 -185 446 -195 424z"/> <path d="M6205 2586 c-115 -28 -214 -100 -267 -193 -16 -29 -34 -56 -39 -59
-5 -3 -9 48 -9 120 l0 126 -165 0 -165 0 0 -730 0 -730 170 0 170 0 0 428 c0
235 5 458 10 496 24 165 139 266 304 266 86 0 148 -23 200 -76 81 -81 80 -74
84 -626 l3 -488 169 0 170 0 0 523 c0 581 -2 595 -66 718 -62 118 -179 203
-313 229 -71 13 -193 11 -256 -4z"/>
<path d="M7361 2584 c-203 -54 -363 -233 -423 -470 -30 -119 -32 -390 -4 -499
44 -170 145 -316 271 -390 195 -115 459 -109 614 15 21 16 55 54 76 85 21 30
42 55 47 55 4 0 8 -76 8 -168 0 -206 -11 -254 -74 -317 -130 -130 -425 -123
-548 13 -19 22 -40 48 -46 58 -10 18 -16 17 -154 -15 -78 -18 -149 -36 -156
-40 -21 -12 44 -127 109 -192 193 -193 628 -237 927 -93 88 43 187 135 226
211 57 113 56 99 56 955 l0 788 -170 0 -170 0 0 -120 c0 -66 -3 -120 -7 -120
-5 0 -19 19 -32 42 -54 95 -151 173 -250 202 -68 20 -226 20 -300 0z m380
-291 c56 -25 120 -87 149 -143 74 -144 81 -398 15 -546 -66 -150 -220 -222
-384 -180 -161 41 -246 174 -258 401 -6 116 11 211 53 306 34 75 115 152 182
174 65 20 183 15 243 -12z"/> <path d="M10685 2585 c-163 -36 -285 -114 -366 -231 -28 -41 -73 -143 -66
-150 4 -5 272 -44 297 -44 11 0 26 12 34 28 22 43 87 103 136 126 66 30 228
30 285 -1 53 -28 81 -60 100 -112 21 -61 19 -113 -6 -145 -27 -34 -91 -51
-269 -71 -359 -40 -512 -111 -593 -274 -31 -63 -32 -70 -31 -181 1 -142 21
-203 96 -285 85 -93 187 -139 336 -151 203 -17 373 57 474 206 16 24 17 22 17
-77 l1 -103 165 0 165 0 0 538 c0 423 -3 548 -14 588 -46 172 -191 295 -398
338 -93 19 -279 20 -363 1z m434 -892 c-4 -105 -7 -124 -33 -176 -54 -111
-162 -170 -312 -170 -128 0 -209 50 -235 145 -24 89 14 163 107 209 48 24 96
36 215 54 85 13 172 30 194 38 70 25 67 30 64 -100z"/> <path d="M12158 2586 c-100 -36 -169 -98 -216 -192 -14 -30 -30 -54 -34 -54
-4 0 -8 54 -8 120 l0 120 -165 0 -165 0 0 -730 0 -730 169 0 170 0 3 468 3
467 26 55 c34 71 89 126 158 159 47 21 71 25 146 26 50 0 105 -3 123 -7 l32
-7 0 159 0 160 -102 0 c-58 -1 -119 -7 -140 -14z"/>
<path d="M8403 2058 c4 -582 5 -589 73 -719 68 -128 186 -208 341 -231 206
-30 407 62 493 225 14 26 28 47 32 47 5 0 8 -58 8 -130 l0 -130 165 0 165 0 0
730 0 730 -170 0 -170 0 0 -443 c0 -484 -4 -523 -58 -601 -60 -88 -185 -144
-290 -132 -96 11 -176 69 -216 156 -20 43 -21 62 -24 533 l-3 487 -175 0 -176
0 5 -522z"/> <path d="M1127 1173 c-37 -91 -66 -171 -64 -177 3 -6 161 -100 351 -209 l347
-198 354 202 354 203 -15 35 c-9 20 -41 98 -72 174 l-56 137 -565 0 -566 0
-68 -167z"/> </g> </svg> </file>

<file path="src/app/layouts/account-layout/account-layout.component.html">
<div class="account-layout">
	<div class="account-layout__header">
		<div class="account-layout__hero-container">
			@if (profile(); as user) {
				<app-user-profile-hero [profile]="user" />
			}
		</div>
	</div>

    <main class="account-layout__main">
    	<div class="account-layout__container">
    		<aside class="account-layout__sidebar">
    			<app-account-navigation />
    		</aside>
    		<div class="account-layout__content">
    			<router-outlet />
    		</div>
    	</div>
    </main>

</div>
</file>

<file path="src/app/layouts/account-layout/account-layout.component.ts">
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AccountNavigationComponent } from '@widgets/account-navigation';

import { UserApiService, UserProfile, UserProfileHeroComponent } from '@entities/user';

@Component({ selector: 'app-account-layout', standalone: true, imports: [RouterOutlet,
AccountNavigationComponent, UserProfileHeroComponent], templateUrl:
'./account-layout.component.html', styleUrl: './account-layout.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class AccountLayoutComponent { private readonly userApi =
inject(UserApiService);

    readonly profile = signal<UserProfile | null>(null);

    constructor() {
    	this.userApi.getMyProfile().subscribe({
    		next: (profile) => this.profile.set(profile),
    		error: () => this.profile.set(null),
    	});
    }

} </file>

<file path="src/app/ui/app.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({ selector: 'app-root', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, template: `<router-outlet />`, imports: [RouterOutlet], }) export
class AppComponent {} </file>

<file path="src/entities/article/api/article-api.service.ts">
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths'; import { BaseApiService } from
'@shared/api/base-api.service';

import { Article, CreateArticleDto, GetArticlesQueryDto, UpdateArticleDto, } from
'../model/types/article.types';

@Injectable({ providedIn: 'root', }) export class ArticleApiService extends BaseApiService { private
readonly basePath = ApiPaths.ARTICLES;

    /**
     * Создание новой статьи
     */
    public createArticle(dto: CreateArticleDto): Observable<Article> {
    	return this.post<Article>(this.basePath, dto);
    }

    /**
     * Получение списка статей с фильтрацией
     */
    public getArticles(query?: GetArticlesQueryDto): Observable<Article[]> {
    	return this.get<Article[]>(
    		this.basePath,
    		query as Record<
    			string,
    			string | number | boolean | object | unknown[] | null | undefined
    		>,
    	);
    }

    /**
     * Получение конкретной статьи.
     * Бекенд парсит UUID из строки, можно передавать как 'id', так и 'id-slug'
     */
    public getArticleById(idWithSlug: string): Observable<Article> {
    	return this.get<Article>(`${this.basePath}/${encodeURIComponent(idWithSlug)}`);
    }

    /**
     * Частичное обновление статьи
     */
    public updateArticle(idWithSlug: string, dto: UpdateArticleDto): Observable<Article> {
    	return this.patch<Article>(`${this.basePath}/${encodeURIComponent(idWithSlug)}`, dto);
    }

    /**
     * Удаление статьи
     */
    public deleteArticle(idWithSlug: string): Observable<void> {
    	return this.delete<void>(`${this.basePath}/${encodeURIComponent(idWithSlug)}`);
    }

} </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-registry.ts">
import { Type } from '@angular/core';

import { ArticleBlockType } from '../../../model/types/article.types'; import {
ArticleBlockCodeComponent } from './article-block-code/article-block-code.component'; import {
ArticleBlockComplexityComponent } from
'./article-block-complexity/article-block-complexity.component'; import {
ArticleBlockFeaturesComponent } from './article-block-features/article-block-features.component';
import { ArticleBlockImageComponent } from './article-block-image/article-block-image.component';
import { ArticleBlockNoteComponent } from './article-block-note/article-block-note.component';
import { ArticleBlockTextComponent } from './article-block-text/article-block-text.component';

export const ARTICLE_BLOCK_REGISTRY: Record<ArticleBlockType, Type<unknown>> = { TEXT:
ArticleBlockTextComponent, CODE: ArticleBlockCodeComponent, NOTE: ArticleBlockNoteComponent,
COMPLEXITY: ArticleBlockComplexityComponent, IMAGE: ArticleBlockImageComponent, FEATURES:
ArticleBlockFeaturesComponent, }; </file>

<file path="src/entities/article/ui/article-view/article-view.component.ts">
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

import { ArticleApiService } from '../../api/article-api.service'; import { Article } from
'../../model/types/article.types'; import { ArticleComponent } from
'../article-detalization/article-content/article.component';

@Component({ selector: 'app-article-view', standalone: true, imports: [ArticleComponent],
changeDetection: ChangeDetectionStrategy.OnPush, template:
` 		@if (article(); as data) { 			<app-article-content [article]="data" /> 		} @else if (isLoading()) { 			<p class="article-view__status">Загрузка статьи…</p> 		} @else if (error(); as message) { 			<p class="article-view__status article-view__status--error">{{ message }}</p> 		} 	`,
styleUrl: './article-view.component.scss', }) export class ArticleViewComponent { readonly articleId
= input.required<string>();

    private readonly articleApi = inject(ArticleApiService);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly article = signal<Article | null>(null);
    protected readonly isLoading = signal<boolean>(false);
    protected readonly error = signal<string | null>(null);

    constructor() {
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

} </file>

<file path="src/entities/article-navigation/api/article-navigation-api.service.ts">
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, shareReplay, switchMap, tap } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths'; import { BaseApiService } from
'@shared/api/base-api.service';

import { CreateCategoryDto, CreateSectionDto } from '../model/article-navigation.types'; import {
NavigationCategory, NavigationSection } from '../model/navigation-overview.types';

@Injectable({ providedIn: 'root' }) export class ArticleNavigationApiService extends BaseApiService
{ private readonly articlesPath = ApiPaths.ARTICLES; private readonly navigationPath =
ApiPaths.NAVIGATION;

    private readonly refreshTrigger$ = new BehaviorSubject<void>(undefined);

    /** Дерево навигации статей: секции → категории → статьи */
    public readonly navigationTree$: Observable<NavigationSection[]> = this.refreshTrigger$.pipe(
    	switchMap(() =>
    		this.get<NavigationSection[]>(`/${this.articlesPath}/${this.navigationPath}`),
    	),
    	shareReplay({ bufferSize: 1, refCount: true }),
    );

    /** Принудительно перезагрузить дерево навигации */
    public refresh(): void {
    	this.refreshTrigger$.next();
    }

    public getNavigationTree(): Observable<NavigationSection[]> {
    	return this.http.get<NavigationSection[]>(`/${this.articlesPath}/${this.navigationPath}`);
    }

    public createSection(dto: CreateSectionDto): Observable<NavigationSection> {
    	return this.post<NavigationSection, CreateSectionDto>(
    		`/${this.navigationPath}/sections`,
    		dto,
    	).pipe(tap(() => this.refresh()));
    }

    public createCategory(dto: CreateCategoryDto): Observable<NavigationCategory> {
    	return this.post<NavigationCategory, CreateCategoryDto>(
    		`/${this.navigationPath}/categories`,
    		dto,
    	).pipe(tap(() => this.refresh()));
    }

} </file>

<file path="src/entities/article-navigation/ui/article-drawer-navigation/ui/article-drawer-navigation.component.html">
<!-- eslint-disable @angular-eslint/template/interactive-supports-focus -->
<!-- eslint-disable @angular-eslint/template/click-events-have-key-events -->
<nav class="article-nav" aria-label="Навигация по статьям">
	@if (navigationTree(); as tree) {
		@for (section of tree; track section.id) {
			<section class="article-nav__section">
				<h2 class="article-nav__section-title">{{ section.title }}</h2>

    			<ul class="article-nav__categories">
    				@for (category of section.items; track category.id) {
    					<li class="article-nav__category">
    						<app-accordion [isOpen]="false">
    							<ng-container ngProjectAs="[accordion-title]">
    								{{ category.title }}
    							</ng-container>

    							<ul class="article-nav__list">
    								@for (article of category.children; track article.id) {
    									<li class="article-nav__list-item">
    										<a
    											app-link
    											variant="secondary"
    											(click)="onArticleClick(article.id)"
    											[class.is-selected]="article.id === selectedId()"
    											[class.is-clickable]="true"
    											class="article-nav__link"
    										>
    											<span class="article-nav__link-text">{{ article.title }}</span>

    											@if (article.tag) {
    												<app-badge size="sm" variant="outline">
    													{{ article.tag }}
    												</app-badge>
    											}
    										</a>
    									</li>
    								}
    							</ul>
    						</app-accordion>
    					</li>
    				}
    			</ul>
    		</section>
    	}
    } @else {
    	<div class="article-nav__loading">Загрузка навигации...</div>
    }

</nav>
</file>

<file path="src/entities/article-navigation/ui/article-drawer-navigation/ui/article-drawer-navigation.component.scss">
:host {
	display: block;
	width: 100%;
}

.article-nav { display: flex; flex-direction: column; gap: var(--unit-6);

    &__loading {
    	font-size: var(--font-size-sm);
    	color: var(--text-muted);
    }

    &__section {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-2);
    }

    &__section-title {
    	margin: 0 0 var(--unit-2) 0;
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-bold);
    	color: var(--text-muted);
    	text-transform: uppercase;
    	letter-spacing: 0.05em;
    }

    &__categories,
    &__list {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-2);
    	margin: 0;
    	padding: 0;
    	list-style: none;
    }

    &__list {
    	gap: var(--unit-1);
    }

    &__list-item {
    	display: block;

    	&--active .article-nav__link {
    		background-color: var(--brand-light);
    	}
    }

    &__link {
    	display: flex;
    	gap: var(--unit-2);
    	justify-content: space-between;
    	align-items: center;
    	padding: var(--unit-1) var(--unit-2);
    	border-radius: var(--radius-sm);
    	text-decoration: none;
    }

    &__link-text {
    	font-size: var(--font-size-sm);
    	line-height: var(--line-height-tight);
    }

} </file>

<file path="src/entities/article-navigation/ui/article-drawer-navigation/ui/article-drawer-navigation.component.ts">
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { AccordionComponent } from '@shared/ui/accordion/accordion.component'; import {
AppLinkComponent } from '@shared/ui/app-link'; import { BadgeComponent } from '@shared/ui/badge';

import { ArticleNavigationApiService } from '../../../api/article-navigation-api.service';

@Component({ selector: 'app-article-drawer-navigation', standalone: true, imports:
[AppLinkComponent, BadgeComponent, AccordionComponent], templateUrl:
'./article-drawer-navigation.component.html', styleUrl:
'./article-drawer-navigation.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, })
export class ArticleDrawerNavigationComponent { private readonly navigationApi =
inject(ArticleNavigationApiService);

    readonly navigationTree = toSignal(this.navigationApi.getNavigationTree());
    readonly selectedId = input<string | null>(null);
    readonly articleSelected = output<string | number>();

    public onArticleClick(id: string | number): void {
    	this.articleSelected.emit(id);
    }

} </file>

<file path="src/entities/lesson/ui/lesson-card/lesson-card.component.html">
<div class="lesson-box" [class.is-active]="isActive()" [class.is-locked]="isLocked()">
	<button type="button" class="lesson-card" [disabled]="isLocked()" (click)="onSelect()">
		<span class="lesson-title">{{ lesson().sequenceOrder }} - {{ lesson().title }}</span>
	</button>

    <span
    	class="lesson-status"
    	[class.is-free]="lesson().isFree && !lesson().isCompleted"
    	[class.is-completed]="lesson().isCompleted"
    >
    	@if (lesson().isCompleted) {
    		<app-icon name="check" size="s" />
    	} @else if (lesson().isFree) {
    		FREE
    	} @else {
    		<app-icon name="lock" size="s" />
    	}
    </span>

</div>
</file>

<file path="src/entities/lesson/ui/lesson-card/lesson-card.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.lesson-box { display: flex; justify-content: space-between; align-items: center; width: 100%;
padding-right: var(--unit-4); border-radius: var(--radius-md); transition: background-color
var(--transition-fast);

    @include m.media-below('lg') {
    	padding-right: var(--unit-2);
    }

    &:hover:not(.is-locked) {
    	background-color: var(--brand-light);

    	.lesson-card {
    		color: var(--brand-hover);
    	}
    }

    &.is-active {
    	background-color: var(--brand-light);

    	.lesson-card {
    		font-weight: var(--font-weight-medium);
    		color: var(--brand-primary);
    	}
    }

    &.is-locked {
    	opacity: var(--opacity-disabled);
    	cursor: not-allowed;
    }

}

.lesson-card { display: flex; flex-grow: 1; justify-content: flex-start; padding: var(--unit-2);
color: var(--text-primary); text-align: left; cursor: pointer; }

.lesson-title { display: block; width: 100%; font-size: var(--font-size-sm); line-height:
var(--line-height-normal); text-align: left; }

.lesson-status { display: flex; align-items: center; font-size: var(--font-size-xs); font-weight:
var(--font-weight-bold); color: var(--text-muted);

    app-icon {
    	display: flex;
    	color: inherit;
    }

    &.is-free {
    	color: var(--brand-primary);
    }

    &.is-completed {
    	color: var(--status-success);
    }

} </file>

<file path="src/entities/lesson/ui/lesson-header/lesson-header.component.html">
<header class="lesson-header">
	<div class="header-top">
		<h1 class="title">{{ lesson().sequenceOrder }} - {{ lesson().title }}</h1>
		<div class="duration">
			<app-icon name="clock" />
			{{ durationMinutes() }} min
		</div>
	</div>

    <p class="description">
    	{{ lesson().description }}
    </p>

</header>
</file>

<file path="src/entities/user/api/user-api.service.ts">
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths'; import { BaseApiService } from
'@shared/api/base-api.service';

import { UserProfile } from '../model/user.types';

@Injectable({ providedIn: 'root' }) export class UserApiService extends BaseApiService { private
readonly profilePath = ApiPaths.PROFILES;

    getMyProfile(): Observable<UserProfile> {
    	return this.get<UserProfile>(`/${this.profilePath}/me`);
    }

} </file>

<file path="src/entities/user/ui/user-profile-hero/user-profile-hero.component.scss">
@use 'media' as m;

:host { display: flex; flex-direction: row; gap: var(--unit-4); justify-content: center;
align-items: center; width: 100%; padding: var(--unit-8) 0 var(--unit-4) 0; background-color:
transparent; text-align: left;

    @include m.media-above('md') {
    	gap: var(--unit-5);
    	padding: var(--unit-16) 0 var(--unit-4) 0;
    }

}

.avatar { display: flex; flex-shrink: 0; justify-content: center; align-items: center; width:
4.5rem; height: 4.5rem; background-color: var(--brand-primary); border-radius: var(--radius-full);
font-size: var(--font-size-xl); font-weight: var(--font-weight-medium); color: var(--text-on-dark);
overflow: hidden;

    @include m.media-above('md') {
    	width: 5rem;
    	height: 5rem;
    	font-size: var(--font-size-xxl);
    }

    &__img {
    	width: 100%;
    	height: 100%;
    	object-fit: cover;
    }

}

.info { display: flex; flex-direction: column; gap: var(--unit-1); justify-content: center; }

.name { margin: 0; font-size: var(--font-size-xxl); font-weight: var(--font-weight-medium);
line-height: var(--line-height-none); color: var(--text-primary); letter-spacing: -0.02em;

    @include m.media-above('md') {
    	font-size: var(--font-size-xxxl);
    }

}

.account-type { margin: 0; font-size: var(--font-size-sm); font-weight: var(--font-weight-regular);
line-height: var(--line-height-normal); color: var(--text-secondary);

    &__value {
    	font-weight: var(--font-weight-regular);
    	color: var(--text-secondary);
    }

} </file>

<file path="src/entities/user/ui/user-profile-hero/user-profile-hero.component.ts">
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { UserProfile } from '../../model/user.types';

const PROVIDER_LABELS: Record<UserProfile['provider'], string> = { GOOGLE: 'Google', GITHUB:
'GitHub', LOCAL: 'Email', };

@Component({ selector: 'app-user-profile-hero', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './user-profile-hero.component.html', styleUrl:
'./user-profile-hero.component.scss', }) export class UserProfileHeroComponent { readonly profile =
input.required<UserProfile>();

    readonly name = computed(() => {
    	const profile = this.profile();
    	const fullName = `${profile.firstName ?? ''} ${profile.lastName ?? ''}`.trim();
    	return fullName || profile.username;
    });

    readonly initial = computed(() => this.name().charAt(0).toUpperCase());
    readonly avatarUrl = computed(() => this.profile().avatarUrl ?? null);
    readonly accountType = computed(() => PROVIDER_LABELS[this.profile().provider]);

} </file>

<file path="src/entities/user/index.ts">
export * from './ui/user-profile-hero/user-profile-hero.component';
export * from './api/user-api.service';
export * from './model/user.types';
</file>

<file path="src/environments/environment.ts">
export const environment = {
	production: true,
	apiUrl: '/api',
};
</file>

<file path="src/features/auth-by-oauth/ui/auth-by-oauth.component.html">
<app-modal [(isOpen)]="isOpen" size="s">
	<div class="auth-dialog">
		<h2 class="auth-dialog__title">Войти в NgAlg</h2>
		<p class="auth-dialog__subtitle">Войдите, чтобы сохранить свой прогресс обучения</p>

    	<div class="auth-dialog__providers">
    		<app-google-oauth-button (clickButton)="loginWithGoogle()" />
    		<app-github-oauth-button (clickButton)="loginWithGitHub()" />
    	</div>
    </div>

</app-modal>
</file>

<file path="src/features/auth-by-oauth/ui/auth-by-oauth.component.scss">
@use 'media' as m;

.auth-dialog { display: flex; flex-direction: column; align-items: center; width: 100%; text-align:
center;

    &__title {
    	margin-bottom: var(--unit-2);
    	font-size: var(--font-size-xxl);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-tight);
    	color: var(--text-primary);
    }

    &__subtitle {
    	width: 100%;
    	max-width: 100%;
    	margin-bottom: var(--unit-6);
    	font-size: clamp(0.8rem, 1.1vw, var(--font-size-sm));
    	line-height: var(--line-height-normal);
    	color: var(--text-secondary);
    	white-space: normal;
    	word-break: keep-all;
    }

    &__providers {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-3);
    	width: 100%;
    }

} </file>

<file path="src/features/auth-by-oauth/ui/auth-by-oauth.component.ts">
import { ChangeDetectionStrategy, Component, model } from '@angular/core';

import { ModalComponent } from '@shared/ui/modal';

import { GithubOauthButtonComponent } from './github-button/github-button.component'; import {
GoogleOauthButtonComponent } from './google-button/google-button.component';

@Component({ selector: 'app-auth-by-oauth', standalone: true, imports: [ModalComponent,
GoogleOauthButtonComponent, GithubOauthButtonComponent], templateUrl:
'./auth-by-oauth.component.html', styleUrl: './auth-by-oauth.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class AuthByOauthComponent { readonly isOpen =
model<boolean>(false);

    protected loginWithGitHub(): void {
    	// Бизнес-логика OAuth для GitHub
    	return;
    }

    protected loginWithGoogle(): void {
    	// Бизнес-логика OAuth для Google
    	return;
    }

} </file>

<file path="src/features/manage-article/ui/manage-article.component.ts">
import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	OnInit,
	computed,
	inject,
	input,
	signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { finalize } from 'rxjs';

import { Article, ArticleApiService, CreateArticleDto, UpdateArticleDto } from '@entities/article';
import { ArticleNavigationApiService } from '@entities/article-navigation';

import { RouteBuilder } from '@shared/config/routes.config';

import { createInitialArticleForm, populateArticleBlocks } from '../model/article-form.factory';
import { ArticleFormComponent } from './article-creation/article-form.component';

@Component({ selector: 'app-manage-article', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, imports: [ReactiveFormsModule, ArticleFormComponent], template:
` 		<app-article-form 			[form]="articleForm" 			[isEditMode]="isEditMode()" 			[isSubmitting]="isSubmitting()" 			[navigationTree]="navigationTree()" 			(save)="handleSave()" 			(cancel)="handleCancel()" 		/> 	`,
}) export class ManageArticleComponent implements OnInit { readonly articleId = input<string |
null>(null);

    protected readonly isSubmitting = signal<boolean>(false);

    private readonly fb = inject(NonNullableFormBuilder);
    private readonly router = inject(Router);
    private readonly articleApi = inject(ArticleApiService);
    private readonly navigationApi = inject(ArticleNavigationApiService);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly articleForm = createInitialArticleForm(this.fb);

    protected readonly navigationTree = toSignal(this.navigationApi.navigationTree$, {
    	initialValue: [],
    });

    readonly isEditMode = computed(() => !!this.articleId());

    ngOnInit(): void {
    	const id = this.articleId();
    	if (!id) return;

    	this.articleApi
    		.getArticleById(id)
    		.pipe(takeUntilDestroyed(this.destroyRef))
    		.subscribe({
    			next: (article) => this.patchForm(article),
    			error: (err) =>
    				console.error('Не удалось загрузить статью для редактирования', err),
    		});
    }

    private patchForm(article: Article): void {
    	this.articleForm.patchValue({
    		title: article.title,
    		slug: article.slug,
    		categoryId: article.categoryId,
    		status: article.status,
    		level: article.level,
    		leadText: article.leadText,
    		description: article.description,
    		problemId: article.problemId ?? null,
    		readingTimeMinutes: article.readingTimeMinutes,
    		coverImage: {
    			url: article.coverImage?.url ?? '',
    			alt: article.coverImage?.alt ?? '',
    			caption: article.coverImage?.caption ?? null,
    		},
    		tags: article.tags,
    		seo: {
    			description: article.seo?.description ?? null,
    			keywords: article.seo?.keywords ?? [],
    		},
    	});

    	populateArticleBlocks(this.fb, this.articleForm.controls.blocks, article.blocks);
    }

    private buildPayload(): CreateArticleDto {
    	const raw = this.articleForm.getRawValue();

    	return {
    		...raw,
    		readingTimeMinutes: Number(raw.readingTimeMinutes) || 0,
    		problemId: raw.problemId || undefined,
    	} as CreateArticleDto;
    }

    protected handleCancel(): void {
    	this.router.navigateByUrl(RouteBuilder.ARTICLES());
    }

    protected handleSave(): void {
    	if (this.articleForm.invalid) {
    		this.articleForm.markAllAsTouched();
    		return;
    	}

    	const id = this.articleId();
    	const payload = this.buildPayload();

    	this.isSubmitting.set(true);

    	const request$ = this.isEditMode()
    		? this.articleApi.updateArticle(id!, payload as UpdateArticleDto)
    		: this.articleApi.createArticle(payload);

    	request$
    		.pipe(
    			finalize(() => this.isSubmitting.set(false)),
    			takeUntilDestroyed(this.destroyRef),
    		)
    		.subscribe({
    			next: () => this.router.navigateByUrl(RouteBuilder.ARTICLES()),
    			error: (err) => console.error('Ошибка при сохранении статьи', err),
    		});
    }

} </file>

<file path="src/features/mark-lesson-watched/ui/mark-lesson-watched.component.html">
<app-checkbox [checked]="isCompleted()" (checkedChange)="onToggle()"> Просмотрено </app-checkbox>
</file>

<file path="src/features/mark-lesson-watched/ui/mark-lesson-watched.component.ts">
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CheckboxComponent } from '@shared/ui/checkbox';

@Component({ selector: 'app-mark-lesson-watched', standalone: true, imports: [CheckboxComponent],
changeDetection: ChangeDetectionStrategy.OnPush, templateUrl:
'./mark-lesson-watched.component.html', }) export class MarkLessonWatchedComponent { readonly
lessonId = input.required<string>(); readonly isCompleted = input<boolean>(false); readonly
toggleComplete = output<string>();

    protected onToggle(): void {
    	this.toggleComplete.emit(this.lessonId());
    }

} </file>

<file path="src/pages/articles-editor-page/article-editor-page.component.html">
<div class="article-editor-page">
	@if (!id()) {
		<app-article-navigation-management />
	}
	<app-manage-article [articleId]="id() ?? null" />
</div>
</file>

<file path="src/pages/articles-editor-page/article-editor-page.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArticleNavigationManagementComponent } from '@widgets/article-navigation-management';

import { ManageArticleComponent } from '@features/manage-article';

@Component({ selector: 'app-article-editor-page', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './article-editor-page.component.html', styleUrl:
'./article-editor-page.component.scss', imports: [ArticleNavigationManagementComponent,
ManageArticleComponent], }) export class ArticleEditorPageComponent { readonly id = input<string |
undefined>(); } </file>

<file path="src/pages/course-page/lib/guards/course.guard.ts">
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const courseSlugGuard: CanActivateFn = (route) => { const slug = route.paramMap.get('slug');

    if (slug) {
    	return true;
    }

    return inject(Router).createUrlTree(['/']);

}; </file>

<file path="src/pages/course-page/model/course-page.store.ts">
import { Injectable, computed, inject, signal } from '@angular/core';

import { finalize } from 'rxjs/operators';

import { CourseApiService } from '@entities/course'; import { CourseProgress, CourseSkeleton,
CourseSkeletonLesson, CourseSkeletonSection, LessonDetail, } from '@entities/course'; import {
LessonApiService } from '@entities/lesson';

@Injectable() export class CoursePageStore { private readonly courseApi = inject(CourseApiService);
private readonly lessonApi = inject(LessonApiService);

    private readonly courseState = signal<CourseSkeleton | null>(null);
    private readonly activeLessonIdState = signal<string | null>(null);
    private readonly activeLessonDetailState = signal<LessonDetail | null>(null);
    private readonly loadingState = signal<boolean>(false);
    private readonly errorState = signal<string | null>(null);

    private loadedSlug: string | null = null;

    readonly course = this.courseState.asReadonly();
    readonly activeLessonId = this.activeLessonIdState.asReadonly();
    readonly activeLessonDetail = this.activeLessonDetailState.asReadonly();
    readonly loading = this.loadingState.asReadonly();
    readonly error = this.errorState.asReadonly();

    readonly sections = computed<CourseSkeletonSection[]>(() => this.courseState()?.sections ?? []);

    readonly lessons = computed<CourseSkeletonLesson[]>(() =>
    	this.sections().flatMap((section) => section.lessons),
    );

    readonly progress = computed<CourseProgress>(() => {
    	const lessons = this.lessons();
    	const totalLessons = lessons.length;
    	const completedLessons = lessons.filter((lesson) => lesson.isCompleted).length;
    	const percentage =
    		totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    	return { totalLessons, completedLessons, percentage };
    });

    readonly activeLesson = computed<CourseSkeletonLesson | null>(() => {
    	const id = this.activeLessonIdState();
    	return this.lessons().find((lesson) => lesson.id === id) ?? null;
    });

    readonly nextLesson = computed<CourseSkeletonLesson | null>(() => {
    	const lessons = this.lessons();
    	const index = lessons.findIndex((lesson) => lesson.id === this.activeLessonIdState());
    	return index === -1 ? null : (lessons[index + 1] ?? null);
    });

    load(slug: string): void {
    	if (this.loadedSlug === slug && this.courseState()) {
    		return;
    	}

    	this.loadingState.set(true);
    	this.errorState.set(null);

    	this.courseApi
    		.getCourseSkeleton(slug)
    		.pipe(finalize(() => this.loadingState.set(false)))
    		.subscribe({
    			next: (course) => {
    				this.loadedSlug = slug;
    				this.courseState.set(course);
    				this.selectInitialLesson(course);
    			},
    			error: () => {
    				this.loadedSlug = null;
    				this.errorState.set('Не удалось загрузить курс');
    			},
    		});
    }

    selectLesson(id: string): void {
    	const lesson = this.lessons().find((item) => item.id === id);
    	if (!lesson || (!lesson.isFree && !lesson.isCompleted)) {
    		return;
    	}

    	this.activeLessonIdState.set(id);
    	this.activeLessonDetailState.set(null);

    	this.lessonApi.getLessonDetail(id).subscribe({
    		next: (detail) => this.activeLessonDetailState.set(detail),
    		error: () => this.activeLessonDetailState.set(null),
    	});
    }

    toggleLessonCompleted(lessonId: string): void {
    	this.lessonApi.toggleLessonProgress(lessonId).subscribe({
    		next: (response) => this.setLessonCompletion(lessonId, response.completed),
    	});
    }

    private setLessonCompletion(lessonId: string, isCompleted: boolean): void {
    	this.courseState.update((course) =>
    		course
    			? {
    					...course,
    					sections: course.sections.map((section) => ({
    						...section,
    						lessons: section.lessons.map((lesson) =>
    							lesson.id === lessonId ? { ...lesson, isCompleted } : lesson,
    						),
    					})),
    				}
    			: course,
    	);

    	this.activeLessonDetailState.update((detail) =>
    		detail && detail.id === lessonId ? { ...detail, isCompleted } : detail,
    	);
    }

    private selectInitialLesson(course: CourseSkeleton): void {
    	const lessons = course.sections.flatMap((section) => section.lessons);
    	const firstToWatch = lessons.find((lesson) => !lesson.isCompleted) ?? lessons[0];

    	if (firstToWatch) {
    		this.selectLesson(firstToWatch.id);
    	}
    }

} </file>

<file path="src/pages/home-page/ui/home-page.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.hero-page { position: relative; display: flex; flex-direction: column; align-items: center; width:
100%; min-height: 100dvh; padding: var(--unit-8); background-color: var(--bg-main); text-align:
center;

    @include m.media-above('md') {
    	padding: var(--unit-4);
    }

    &__header {
    	position: absolute;
    	top: 0;
    	left: 0;
    	z-index: var(--z-elevate);
    	width: 100%;
    	background-color: transparent;
    }

    &__header-container {
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	width: 100%;
    	max-width: var(--container-xxl);
    	height: var(--unit-16);
    	margin: 0 auto;
    	padding: 0 var(--unit-8);

    	@include m.media-below('lg') {
    		padding: 0 var(--unit-4);
    	}
    }

    &__content {
    	display: flex;
    	flex-direction: column;
    	align-items: center;
    	width: 100%;
    	max-width: var(--container-xl);
    	margin-top: 25dvh;
    	margin-bottom: auto;
    	padding: 0 var(--unit-4);
    	animation: hero-fade-up var(--transition-slow) forwards;

    	@include m.media-above('md') {
    		margin: auto;
    		padding: 0;
    	}
    }

    &__title {
    	margin-bottom: var(--unit-6);
    	font-size: var(--font-size-lg);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-tight);
    	color: var(--text-primary);
    	letter-spacing: -0.02em;

    	@include m.media-above('sm') {
    		font-size: var(--font-size-xxl);
    	}

    	@include m.media-above('md') {
    		font-size: calc(var(--font-size-xxxl) * 1.5);
    	}
    }

    &__nowrap {
    	white-space: nowrap;
    }

    &__br {
    	display: none;

    	@include m.media-above('md') {
    		display: inline;
    	}
    }

    &__accent {
    	color: var(--brand-primary);
    }

    &__subtitle {
    	max-width: var(--container-md);
    	margin-bottom: var(--unit-8);
    	font-size: var(--font-size-xs);
    	line-height: var(--line-height-relaxed);
    	color: var(--text-secondary);

    	@include m.media-above('sm') {
    		font-size: var(--font-size-sm);
    	}

    	@include m.media-above('md') {
    		margin-bottom: var(--unit-10);
    		font-size: var(--font-size-lg);
    	}
    }

    &__actions {
    	display: flex;
    	justify-content: center;
    	width: 100%;
    }

    &__start-btn {
    	transition:
    		transform var(--transition-fast),
    		box-shadow var(--transition-fast),
    		background-color var(--transition-fast);

    	@include m.media-below('sm') {
    		width: 100%;
    	}

    	&:hover {
    		box-shadow: 0 10px 20px -10px rgb(99 102 241 / 40%);
    		transform: translateY(-2px);
    	}

    	&:active {
    		transform: translateY(0);
    	}
    }

}

@keyframes hero-fade-up { from { opacity: 0; transform: translateY(24px); }

    to {
    	opacity: 1;
    	transform: translateY(0);
    }

} </file>

<file path="src/shared/api/api.interceptor.ts">
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { ENVIRONMENT } from '../config/environment.config';

/**

- Единая точка настройки запросов к собственному API:
- подставляет baseUrl из окружения и включает отправку cookie. */ export const apiInterceptor:
  HttpInterceptorFn = (req, next) => { const env = inject(ENVIRONMENT, { optional: true }); const
  baseUrl = env?.apiUrl; const isAbsolute = /^https?:\/\//i.test(req.url);

    if (!baseUrl || isAbsolute) { return next(req); }

    const apiReq = req.clone({ url: `${baseUrl.replace(/\/$/, '')}/${req.url.replace(/^\//, '')}`,
    withCredentials: true, });

    return next(apiReq); };
  </file>

<file path="src/shared/api/base-api.service.ts">
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

export type ApiQueryParams = Record< string, string | number | boolean | null | undefined |
unknown[] | object

> ;

export abstract class BaseApiService { protected readonly http = inject(HttpClient);

    /**
     * GET запрос
     * @template T Тип возвращаемого ответа бэкенда
     * @template P Тип Query-параметров (DTO)
     */
    protected get<T, P extends ApiQueryParams = ApiQueryParams>(
    	endpoint: string,
    	params?: P,
    ): Observable<T> {
    	return this.http
    		.get<T>(endpoint, { params: this.buildParams(params) })
    		.pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
    }

    /**
     * POST запрос
     * @template T Тип возвращаемого ответа бэкенда
     * @template R Тип тела запроса (Request DTO)
     */
    protected post<T, R = unknown>(endpoint: string, body?: R): Observable<T> {
    	return this.http
    		.post<T>(endpoint, body)
    		.pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
    }

    /**
     * PATCH запрос
     * @template T Тип возвращаемого ответа бэкенда
     * @template R Тип тела запроса (Request DTO)
     */
    protected patch<T, R = unknown>(endpoint: string, body?: R): Observable<T> {
    	return this.http
    		.patch<T>(endpoint, body)
    		.pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
    }

    /**
     * DELETE запрос
     * @template T Тип возвращаемого ответа бэкенда
     */
    protected delete<T>(endpoint: string): Observable<T> {
    	return this.http
    		.delete<T>(endpoint, { responseType: 'text' as 'json' })
    		.pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
    }

    /**
     * Преобразует объект параметров в иммутабельный HttpParams для Angular
     */
    private buildParams(params?: ApiQueryParams): HttpParams {
    	let httpParams = new HttpParams();
    	if (!params) return httpParams;

    	Object.entries(params).forEach(([key, value]) => {
    		if (value === null || value === undefined) return;

    		if (Array.isArray(value)) {
    			value.forEach((item: unknown) => {
    				const itemValue =
    					typeof item === 'object' && item !== null
    						? JSON.stringify(item)
    						: String(item);
    				httpParams = httpParams.append(key, itemValue);
    			});
    		} else if (typeof value === 'object') {
    			httpParams = httpParams.set(key, JSON.stringify(value));
    		} else {
    			httpParams = httpParams.set(key, String(value));
    		}
    	});

    	return httpParams;
    }

    /**
     * Централизованный обработчик ошибок HTTP-запросов
     */
    protected handleError(error: HttpErrorResponse): Observable<never> {
    	console.error('API Error произошла по адресу:', error.url, error);
    	return throwError(() => error);
    }

} </file>

<file path="src/shared/ui/app-link/app-link.component.scss">
:host {
	display: inline-flex;
	align-items: center;
	border-radius: var(--radius-sm);
	font-size: inherit;
	font-weight: var(--font-weight-medium);
	color: inherit;
	transition:
		color var(--transition-fast),
		opacity var(--transition-fast);
	text-decoration: none;

    &.app-link--primary {
    	color: var(--text-primary);

    	&:hover {
    		opacity: var(--opacity-hover);
    	}
    }

    &.app-link--secondary {
    	color: var(--text-muted);

    	&:hover {
    		color: var(--text-primary);
    	}
    }

    &.app-link--underline {
    	color: var(--text-primary);
    	text-decoration: underline;
    	text-decoration-skip-ink: auto;
    	text-underline-offset: 0.2em;

    	&:hover {
    		text-decoration: none;
    	}
    }

    &.app-link--active {
    	font-weight: var(--font-weight-medium);
    	color: var(--brand-primary);

    	&:hover {
    		color: var(--brand-primary);
    	}
    }

    &:focus-visible {
    	outline: var(--focus-ring-width) solid var(--border-focus);
    	outline-offset: var(--focus-ring-offset);
    }

} </file>

<file path="src/shared/ui/app-link/app-link.component.ts">
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type LinkVariant = 'primary' | 'secondary' | 'underline'; export type LinkTarget = '_blank' |
'_self' | '_parent' | '_top';

@Component({ selector: 'a[app-link]', standalone: true, template: '<ng-content />', styleUrl:
'./app-link.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, host: { '[class]':
'hostClass()', '[attr.target]': 'target()', '[attr.rel]': 'relValue()', }, }) export class
AppLinkComponent { readonly variant = input<LinkVariant>('primary'); readonly target =
input<LinkTarget>('_self'); readonly rel = input<string | null>(null); readonly isActive =
input<boolean>(false);

    protected readonly hostClass = computed(
    	() => `app-link app-link--${this.variant()}${this.isActive() ? ' app-link--active' : ''}`,
    );

    protected readonly relValue = computed(() => {
    	if (this.target() === '_blank') {
    		return this.rel() ?? 'noopener noreferrer';
    	}
    	return this.rel();
    });

} </file>

<file path="src/shared/ui/button/button.component.ts">
import {
	ChangeDetectionStrategy,
	Component,
	booleanAttribute,
	computed,
	input,
} from '@angular/core';

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'fab'; export type ButtonColor =
'default' | 'primary' | 'error' | 'success'; export type ButtonSize = 's' | 'm' | 'l' | 'xl';

@Component({ selector: 'button[app-button], a[app-button]', standalone: true, templateUrl:
'./button.component.html', styleUrl: './button.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, host: { class: 'app-button', '[class.app-button--variant-clear]':
'variant() === "clear"', '[class.app-button--variant-outline]': 'variant() === "outline"',
'[class.app-button--variant-filled]': 'variant() === "filled"', '[class.app-button--variant-fab]':
'variant() === "fab"', '[class.app-button--color-default]': 'color() === "default"',
'[class.app-button--color-primary]': 'color() === "primary"', '[class.app-button--color-error]':
'color() === "error"', '[class.app-button--color-success]': 'color() === "success"',
'[class.app-button--size-s]': 'size() === "s"', '[class.app-button--size-m]': 'size() === "m"',
'[class.app-button--size-l]': 'size() === "l"', '[class.app-button--size-xl]': 'size() === "xl"',
'[class.app-button--full-width]': 'fullWidth()', '[class.app-button--disabled]': 'isDisabled()',
'[class.app-button--loading]': 'loading()', '[attr.disabled]': 'isDisabled() ? true : null',
'[attr.aria-busy]': 'loading() ? "true" : null', }, }) export class ButtonComponent { readonly
variant = input<ButtonVariant>('filled'); readonly color = input<ButtonColor>('default'); readonly
size = input<ButtonSize>('m');

    readonly loading = input(false, { transform: booleanAttribute });
    readonly disabled = input(false, { transform: booleanAttribute });
    readonly fullWidth = input(false, { transform: booleanAttribute });

    readonly isDisabled = computed(() => this.disabled() || this.loading());

} </file>

<file path="src/shared/ui/drawer/drawer.component.html">
@if (isOpen()) {
	<div class="drawer-backdrop" (click)="close()" aria-hidden="true"></div>
}

<aside class="drawer-panel" [class.drawer-panel--open]="isOpen()" [attr.aria-hidden]="!isOpen()" role="dialog">
	@if (showCloseBtn()) {
		<button
			app-button
			type="button"
			variant="clear"
			color="default"
			size="s"
			(click)="close()"
			class="drawer-panel__close"
			[class.drawer-panel__close--left]="closeBtnPosition() === 'left'"
			[class.drawer-panel__close--right]="closeBtnPosition() === 'right'"
			aria-label="Закрыть панель"
		>
			<app-icon [name]="'xmark'" size="l" />
		</button>
	}

    <header class="drawer-panel__header">
    	<ng-content select="[drawer-header]"></ng-content>
    </header>

    <main class="drawer-panel__content">
    	<ng-content></ng-content>
    </main>

</aside>
</file>

<file path="src/shared/ui/drawer/drawer.component.ts">
import { ChangeDetectionStrategy, Component, HostListener, input, model } from '@angular/core';

import { ButtonComponent } from '../button'; import { IconComponent } from '../icon';

export type DrawerCloseBtnPosition = 'left' | 'right';

@Component({ selector: 'app-drawer', standalone: true, imports: [ButtonComponent, IconComponent],
templateUrl: './drawer.component.html', styleUrl: './drawer.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class DrawerComponent { readonly isOpen =
model<boolean>(false);

    readonly closeBtnPosition = input<DrawerCloseBtnPosition>('right');
    readonly showCloseBtn = input<boolean>(true);

    protected close(): void {
    	this.isOpen.set(false);
    }

    @HostListener('window:keydown.escape')
    protected onEscapePressed(): void {
    	if (this.isOpen()) {
    		this.close();
    	}
    }

} </file>

<file path="src/shared/ui/input/input.component.ts">
/* eslint-disable @typescript-eslint/no-empty-function */
import {
	ChangeDetectionStrategy,
	Component,
	booleanAttribute,
	computed,
	inject,
	input,
	signal,
} from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

import { uniqueId } from '../../lib/utils/unique-id'; import { IconComponent } from '../icon';

@Component({ selector: 'app-input', standalone: true, templateUrl: './input.component.html',
styleUrls: ['./input.component.scss'], changeDetection: ChangeDetectionStrategy.OnPush, imports:
[IconComponent], }) export class InputComponent implements ControlValueAccessor { public readonly
ngControl = inject(NgControl, { self: true, optional: true });

    constructor() {
    	if (this.ngControl) {
    		this.ngControl.valueAccessor = this;
    	}
    }

    readonly type = input<'text' | 'password' | 'email' | 'number'>('text');
    readonly label = input<string>('');
    readonly placeholder = input<string>('');
    readonly errorMessage = input<string>('');
    readonly readonly = input(false, { transform: booleanAttribute });
    readonly id = input<string>(uniqueId('input'));

    readonly value = signal<string>('');
    readonly isDisabled = signal<boolean>(false);
    readonly isPasswordVisible = signal<boolean>(false);

    readonly inputType = computed(() =>
    	this.type() === 'password' && this.isPasswordVisible() ? 'text' : this.type(),
    );

    get isRequired(): boolean {
    	const control = this.ngControl?.control;
    	return control ? control.hasValidator(Validators.required) : false;
    }

    get hasError(): boolean {
    	return !!this.ngControl?.invalid && !!this.ngControl?.touched;
    }

    get errorText(): string {
    	if (this.errorMessage()) return this.errorMessage();
    	if (!this.hasError || !this.ngControl?.errors) return '';

    	const errors = this.ngControl.errors;

    	if (errors['required']) return 'Поле обязательно для заполнения';
    	if (errors['email']) return 'Некорректный формат email';
    	if (errors['minlength'])
    		return `Минимальная длина — ${errors['minlength'].requiredLength} символов`;
    	if (errors['maxlength'])
    		return `Максимальная длина — ${errors['maxlength'].requiredLength} символов`;

    	return 'Недопустимое значение';
    }

    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};

    writeValue(val: string | null): void {
    	this.value.set(val ?? '');
    }

    registerOnChange(fn: (value: string) => void): void {
    	this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
    	this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    	this.isDisabled.set(isDisabled);
    }

    protected onInput(event: Event): void {
    	const newValue = (event.target as HTMLInputElement).value;
    	this.value.set(newValue);
    	this.onChange(newValue);
    }

    protected onBlur(): void {
    	this.onTouched();
    }

    protected togglePasswordVisibility(event: MouseEvent): void {
    	event.stopPropagation();
    	if (!this.isDisabled()) {
    		this.isPasswordVisible.update((v) => !v);
    	}
    }

} </file>

<file path="src/shared/ui/modal/modal.component.html">
@if (isOpen()) {
	<div
		class="modal-backdrop"
		role="button"
		tabindex="-1"
		(click)="close()"
		(keydown.enter)="close()"
		aria-hidden="true"
	></div>

    <div class="modal-wrapper" role="dialog" aria-modal="true" tabindex="-1">
    	<div
    		class="modal-panel"
    		[class]="'modal-panel--size-' + size()"
    		(click)="$event.stopPropagation()"
    		(keydown)="$event.stopPropagation()"
    		role="document"
    	>
    		<button
    			app-button
    			type="button"
    			variant="clear"
    			color="default"
    			size="s"
    			(click)="close()"
    			class="modal-panel__close"
    			aria-label="Закрыть модальное окно"
    		>
    			<app-icon name="xmark" size="l" />
    		</button>

    		<div class="modal-panel__content">
    			<ng-content></ng-content>
    		</div>
    	</div>
    </div>

} </file>

<file path="src/shared/ui/modal/modal.component.scss">
@use 'media' as m;

.modal-backdrop { position: fixed; top: 0; left: 0; z-index: var(--z-modal-backdrop); width: 100vw;
height: 100vh; background-color: rgb(0 0 0 / 40%); animation: modal-fade-in var(--transition-fast)
forwards; backdrop-filter: blur(4px); }

.modal-wrapper { position: fixed; top: 0; left: 0; z-index: var(--z-modal); display: flex;
justify-content: center; align-items: center; width: 100vw; height: 100vh; padding: var(--unit-4);
pointer-events: none; }

.modal-panel { position: relative; display: flex; flex-direction: column; width: 100%;
background-color: var(--bg-card); border: 1px solid var(--border-light); border-radius:
var(--radius-md); box-shadow: var(--shadow-md); animation: modal-scale-up var(--transition-base)
cubic-bezier(0.34, 1.56, 0.64, 1) forwards; pointer-events: auto; overflow: hidden;

    &--size-m {
    	max-width: 24rem;

    	.modal-panel__content {
    		padding: var(--unit-8) var(--unit-6);

    		@include m.media-below('sm') {
    			padding: var(--unit-8) var(--unit-4);
    		}
    	}
    }

    &--size-s {
    	max-width: 20rem;

    	.modal-panel__content {
    		padding: var(--unit-8) var(--unit-5);

    		@include m.media-below('sm') {
    			padding: var(--unit-8) var(--unit-4);
    		}
    	}
    }

    &__close {
    	position: absolute;
    	top: var(--unit-3);
    	right: var(--unit-3);
    	z-index: var(--z-elevate);
    	color: var(--text-muted);

    	&:hover {
    		color: var(--text-primary);
    	}
    }

}

@keyframes modal-fade-in { from { opacity: 0; }

    to {
    	opacity: 1;
    }

}

@keyframes modal-scale-up { from { opacity: 0; transform: scale(0.95) translateY(10px); }

    to {
    	opacity: 1;
    	transform: scale(1) translateY(0);
    }

} </file>

<file path="src/shared/ui/modal/modal.component.ts">
import { ChangeDetectionStrategy, Component, HostListener, input, model } from '@angular/core';

import { IconComponent } from '../icon';

export type ModalSize = 's' | 'm';

@Component({ selector: 'app-modal', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './modal.component.html', styleUrl:
'./modal.component.scss', imports: [IconComponent], }) export class ModalComponent { readonly isOpen
= model<boolean>(false);

    readonly size = input<ModalSize>('m');

    protected close(): void {
    	this.isOpen.set(false);
    }
