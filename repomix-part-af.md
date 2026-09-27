    flex-direction: column;
    width: 100%;
    max-width: 36rem;
    height: 100vh;
    background-color: var(--bg-card);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-base);
    border-left: 1px solid var(--border-light);
    transform: translateX(100%);

    &--open {
    	transform: translateX(0);
    }

    &__close {
    	position: absolute;
    	top: var(--unit-4);
    	z-index: var(--z-elevate);
    	font-size: var(--font-size-base);
    	color: var(--text-secondary);

    	&--left {
    		right: auto;
    		left: var(--unit-4);
    	}

    	&--right {
    		right: var(--unit-4);
    		left: auto;
    	}
    }

    &__header {
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	align-items: center;
    	padding: var(--unit-6);

    	@include m.media-below('lg') {
    		padding: var(--unit-4) var(--unit-4) var(--unit-2) var(--unit-4); // 👈 Добавляем аккуратный отступ для мобильной шапки
    	}
    }

    &__content {
    	flex-grow: 1;
    	padding: var(--unit-6);
    	overflow-y: auto; // 👈 Включает вертикальную прокрутку статьи
    	scrollbar-width: thin;
    	scrollbar-color: var(--text-muted) transparent;

    	@include m.media-below('lg') {
    		padding: var(--unit-4) var(--unit-4) var(--unit-10) var(--unit-4); // 👈 Заменяем var(--unit-0) на var(--unit-4) по бокам и var(--unit-10) снизу, чтобы текст не обрезался
    	}

    	&::-webkit-scrollbar {
    		width: var(--unit-1);
    	}

    	&::-webkit-scrollbar-thumb {
    		background-color: var(--text-muted);
    		border-radius: var(--radius-full);

    		&:hover {
    			background-color: var(--text-secondary);
    		}
    	}
    }

}

@keyframes drawer-fade-in { from { opacity: 0; }

    to {
    	opacity: 1;
    }

} </file>

<file path="src/styles/_reset.scss">
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html { height: 100%; scroll-behavior: smooth; scrollbar-gutter: stable; text-size-adjust: 100%;
tab-size: 4; }

body { min-height: 100%; background-color: var(--bg-main); font-family: var(--font-family-sans);
font-size: var(--font-size-base); font-weight: var(--font-weight-regular); line-height:
var(--line-height-base); color: var(--text-primary); transition: background-color
var(--transition-base), color var(--transition-base); font-synthesis: none; text-rendering:
optimizelegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
overflow-x: clip; }

body.lock-scroll { overflow: hidden; }

ul[class], ol[class] { list-style: none; }

a { color: inherit; transition: color var(--transition-fast), opacity var(--transition-fast);
cursor: pointer; text-decoration: none; }

a:not([class]) { text-decoration: underline; text-decoration-skip-ink: auto; text-underline-offset:
3px; }

a:not([class]):hover { text-decoration: none; }

img, picture, video, canvas { display: block; max-width: 100%; height: auto; }

svg { display: inline-block; max-width: 100%; height: auto; vertical-align: middle; fill:
currentcolor; }

input, button, textarea, select { background: transparent; border: none; color: inherit; font:
inherit; appearance: none; }

textarea { resize: vertical; }

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { margin: 0; appearance: none; }

input[type='number'] { appearance: textfield; }

button, [role='button'] { cursor: pointer; user-select: none; touch-action: manipulation; }

button:disabled, input:disabled, select:disabled, textarea:disabled { opacity:
var(--opacity-disabled); cursor: not-allowed; }

:focus { outline: none; }

:focus-visible { border-radius: inherit; box-shadow: var(--focus-ring, 0 0 0 4px rgb(99 102 241 /
15%)); outline: none; }

@media (prefers-reduced-motion: reduce) { html:focus-within { scroll-behavior: auto; }

    *,
    *::before,
    *::after {
    	/* stylelint-disable-next-line declaration-no-important */
    	animation-duration: 0.01ms !important;
    	/* stylelint-disable-next-line declaration-no-important */
    	animation-iteration-count: 1 !important;
    	/* stylelint-disable-next-line declaration-no-important */
    	transition-duration: 0.01ms !important;
    	/* stylelint-disable-next-line declaration-no-important */
    	scroll-behavior: auto !important;
    }

} </file>

<file path="src/widgets/course-sidebar/ui/course-sidebar.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; height: calc(100dvh - var(--unit-8));

    @include m.media-below('lg') {
    	height: calc(100dvh - var(--unit-4));
    }

}

.sidebar { display: flex; flex-direction: column; gap: var(--unit-4); height: 100%;

    @include m.media-below('lg') {
    	gap: var(--unit-2);
    }

}

app-course-progress { flex-shrink: 0; }

.lessons-container { display: flex; flex-direction: column; flex-grow: 1; gap: var(--unit-4);
min-height: 0; padding: var(--unit-5) 0; background-color: var(--bg-card); border: 1px solid
var(--border-light); border-radius: var(--radius-md); overflow-y: auto; scrollbar-width: thin;
scrollbar-color: var(--text-muted) transparent;

    @include m.media-below('lg') {
    	background-color: unset;
    	border: unset;
    	border-radius: unset;
    }

    &::-webkit-scrollbar {
    	width: var(--unit-1);
    }

    &::-webkit-scrollbar-thumb {
    	background-color: var(--text-muted);
    	border-radius: var(--radius-full);

    	&:hover {
    		background-color: var(--text-secondary);
    	}
    }

}

.section-title { flex-shrink: 0; margin: 0; padding: 0 var(--unit-4); font-size:
var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--text-primary); }

.lessons-list { display: flex; flex-direction: column; gap: var(--unit-1); width: 100%; padding: 0
var(--unit-4); }

.empty-state { margin: 0; padding: 0 var(--unit-4); font-size: var(--font-size-sm); color:
var(--text-muted); } </file>

<file path="src/widgets/header/ui/header.component.html">
<header class="header">
	<div class="header__container">
		<app-logo />

    	<div style="display: flex; gap: var(--unit-2)">
    		<button app-button type="button" variant="filled" color="default" size="m" (click)="openProfile()">
    			Профиль
    		</button>

    		<button app-button type="button" variant="filled" color="default" size="m" (click)="openAuth()">
    			Войти
    		</button>
    	</div>
    </div>

</header>

<app-auth-by-oauth [(isOpen)]="isAuthOpen" /> </file>

<file path="src/widgets/lesson-content/ui/lesson-content.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.lesson-box { display: flex; flex-direction: column; gap: var(--unit-8);

    @include m.media-below('lg') {
    	gap: var(--unit-4);
    }

}

.lesson-content { display: flex; flex-direction: column; gap: var(--unit-6); padding: var(--unit-8);
background-color: var(--bg-card); border: 1px solid var(--border-light); border-radius:
var(--radius-md); font-family: var(--font-family-sans);

    @include m.media-below('lg') {
    	gap: var(--unit-4);
    	padding: var(--unit-4);
    }

    &__actions {
    	display: flex;
    	flex-wrap: wrap;
    	gap: var(--unit-4);
    	justify-content: flex-end;
    	align-items: center;
    	margin-top: var(--unit-2);
    	padding-top: var(--unit-6);
    	border-top: 1px solid var(--border-light);
    }

}

.lesson-button-next { display: flex; justify-content: end; } </file>

<file path="angular.json">
{
	"$schema": "./node_modules/@angular/cli/lib/config/schema.json",
	"version": 1,
	"cli": {
		"packageManager": "pnpm",
		"analytics": false
	},
	"newProjectRoot": "projects",
	"projects": {
		"ngalg": {
			"projectType": "application",
			"schematics": {
				"@schematics/angular:component": {
					"style": "scss",
					"changeDetection": "OnPush",
					"displayBlock": true,
					"skipTests": false
				}
			},
			"root": "",
			"sourceRoot": "src",
			"prefix": "app",
			"architect": {
				"build": {
					"builder": "@angular/build:application",
					"options": {
						"outputPath": "dist/ngalg",
						"index": "src/index.html",
						"browser": "src/index.ts",
						"tsConfig": "tsconfig.app.json",
						"inlineStyleLanguage": "scss",
						"styles": ["src/index.scss"],
						"stylePreprocessorOptions": {
							"includePaths": ["src/styles"]
						},
						"assets": [
							{
								"glob": "**/*",
								"input": "public"
							}
						]
					},
					"configurations": {
						"production": {
							"budgets": [
								{
									"type": "initial",
									"maximumWarning": "500kB",
									"maximumError": "1MB"
								},
								{
									"type": "anyComponentStyle",
									"maximumWarning": "4kB",
									"maximumError": "8kB"
								}
							],
							"outputHashing": "all",
							"optimization": true,
							"sourceMap": false,
							"namedChunks": false
						},
						"development": {
							"optimization": false,
							"extractLicenses": false,
							"sourceMap": {
								"scripts": true,
								"styles": true
							},
							"namedChunks": true,
							"fileReplacements": [
								{
									"replace": "src/environments/environment.ts",
									"with": "src/environments/environment.development.ts"
								}
							]
						}
					},
					"defaultConfiguration": "production"
				},
				"serve": {
					"builder": "@angular/build:dev-server",
					"configurations": {
						"production": {
							"buildTarget": "ngalg:build:production"
						},
						"development": {
							"buildTarget": "ngalg:build:development"
						}
					},
					"defaultConfiguration": "development"
				},
				"lint": {
					"builder": "@angular-eslint/builder:lint",
					"options": {
						"lintFilePatterns": ["src/**/*.ts", "src/**/*.html"]
					}
				}
			}
		}
	}
}
</file>

<file path="src/widgets/course-sidebar/ui/course-sidebar.component.ts">
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CourseProgressComponent } from '@entities/course'; import { CourseProgress,
CourseSkeletonSection } from '@entities/course'; import { LessonCardComponent } from
'@entities/lesson';

@Component({ selector: 'app-course-sidebar', standalone: true, imports: [CourseProgressComponent,
LessonCardComponent], templateUrl: './course-sidebar.component.html', styleUrl:
'./course-sidebar.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, }) export class
CourseSidebarComponent { readonly progress = input.required<CourseProgress>(); readonly sections =
input.required<CourseSkeletonSection[]>(); readonly activeLessonId = input<string | null>(null);

    readonly selectLesson = output<string>();

} </file>

<file path="src/widgets/header/ui/header.component.ts">
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AuthByOauthComponent } from '@features/auth-by-oauth';

import { AppLogoComponent } from '@shared/ui/app-logo'; import { ButtonComponent } from
'@shared/ui/button';

@Component({ selector: 'app-header', standalone: true, imports: [AuthByOauthComponent,
ButtonComponent, AppLogoComponent], templateUrl: './header.component.html', styleUrl:
'./header.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, }) export class
HeaderComponent { readonly router = inject(Router); readonly isAuthOpen = signal<boolean>(false);

    protected openAuth(): void {
    	this.isAuthOpen.set(true);
    }

    protected openProfile(): void {
    	this.router.navigate(['/', 'account', 'overview']);
    }

} </file>

<file path="package.json">
{
	"name": "ngalg",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"keywords": [],
	"author": "",
	"license": "ISC",
	"packageManager": "pnpm@11.7.0",
	"scripts": {
		"ng": "ng",
		"start:dev": "ng serve",
		"build:prod": "ng build",
		"watch:dev": "ng build --watch --configuration development",
		"lint": "pnpm lint:ts && pnpm lint:styles",
		"lint:ts": "ng lint",
		"lint:ts:fix": "ng lint --fix",
		"lint:styles": "stylelint \"src/**/*.{css,scss}\"",
		"lint:styles:fix": "stylelint \"src/**/*.{css,scss}\" --fix",
		"format:check": "prettier --check .",
		"format:write": "prettier --write .",
		"prepare": "husky",
		"typecheck": "tsc --noEmit -p tsconfig.app.json",
		"repomix": "npx repomix"
	},
	"dependencies": {
		"@angular/common": "^22.1.7",
		"@angular/compiler": "^22.1.7",
		"@angular/core": "^22.1.7",
		"@angular/forms": "^22.1.7",
		"@angular/platform-browser": "^22.1.7",
		"@angular/router": "^22.1.7",
		"isomorphic-dompurify": "^4.3.0",
		"marked": "^18.0.14",
		"rxjs": "^7.8.2",
		"tslib": "^2.8.1"
	},
	"devDependencies": {
		"@angular-eslint/builder": "^22.5.0",
		"@angular/build": "^22.1.8",
		"@angular/cli": "^22.1.8",
		"@angular/compiler-cli": "^22.1.7",
		"@commitlint/cli": "^21.2.2",
		"@commitlint/config-conventional": "^21.2.2",
		"@conarti/eslint-plugin-feature-sliced": "^2.0.0",
		"@eslint/compat": "^2.1.1",
		"@eslint/js": "^10.0.1",
		"@trivago/prettier-plugin-sort-imports": "^6.0.2",
		"angular-eslint": "^22.5.0",
		"eslint": "^10.10.0",
		"husky": "^9.1.7",
		"jiti": "^2.7.0",
		"lint-staged": "^17.5.1",
		"prettier": "^3.9.7",
		"repomix": "^1.18.0",
		"stylelint": "^17.15.0",
		"stylelint-config-standard-scss": "^17.0.0",
		"stylelint-order": "^8.1.1",
		"typescript": "~6.0.2",
		"typescript-eslint": "^8.70.0"
	}
}
</file>

<file path="src/shared/config/routes.config.ts">
import { IconName } from '../ui/icon';

export interface NavItem { path: string; label: string; icon?: IconName; }

export const RouteSegments = { ROOT: '',

    COURSES: 'courses',
    COURSE_DETAILS: ':slug',

    ARTICLES: 'articles',
    ARTICLES_CREATE: 'create',
    ARTICLE_EDIT: ':id/edit',

    FRONTEND: 'frontend',

    ACCOUNT: 'account',
    OVERVIEW: 'overview',
    TRANSACTIONS: 'transactions',

    WILDCARD: '**',

} as const;

export const RouteBuilder = { HOME: () => '/',

    ARTICLES: () => `/${RouteSegments.ARTICLES}`,
    ARTICLE_CREATE: () => `/${RouteSegments.ARTICLES}/${RouteSegments.ARTICLES_CREATE}`,
    ARTICLE_DETAILS: (id: string) => `/${RouteSegments.ARTICLES}/${id}`,
    ARTICLE_EDIT: (id: string) => `/${RouteSegments.ARTICLES}/${id}/edit`,

    ACCOUNT_OVERVIEW: () => `/${RouteSegments.ACCOUNT}/${RouteSegments.OVERVIEW}`,
    ACCOUNT_TRANSACTIONS: () => `/${RouteSegments.ACCOUNT}/${RouteSegments.TRANSACTIONS}`,

    COURSE_DETAILS: (slug: string) => `/${RouteSegments.COURSES}/${slug}`,

} as const;

export const ACCOUNT_SIDEBAR_ITEMS: NavItem[] = [ { path: RouteBuilder.ACCOUNT_OVERVIEW(), label:
'Профиль', icon: 'person' }, { path: RouteBuilder.ACCOUNT_TRANSACTIONS(), label: 'Подписки', icon:
'credit-card' }, ]; </file>

<file path="src/shared/ui/icon/icon.types.ts">
export type IconName =
	| 'sun'
	| 'moon'
	| 'logo'
	| 'eye-opened'
	| 'eye-closed'
	| 'person'
	| 'credit-card'
	| 'pencil-to-square'
	| 'floppy-disk'
	| 'check'
	| 'lock'
	| 'clock'
	| 'envelope'
	| 'arrow-right'
	| 'book-open'
	| 'xmark'
	| 'bars'
	| 'logo-github'
	| 'logo-google'
	| 'triangle-exclamation'
	| 'triangle-exclamation-fill'
	| 'circle-xmark-fill'
	| 'circle-info-fill';
</file>

<file path="src/styles/_tokens.scss">
:root {
	/* --- БАЗОВЫЕ ЦВЕТА И ФОНЫ --- */
	--bg-main: #f6f9fc;
	--bg-card: #fff;
	--bg-code: #0f172a;

    /* --- ТЕКСТ --- */
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --text-muted: #94a3b8;
    --text-on-dark: #f8fafc;

    /* --- БРЕНД И АКЦЕНТЫ --- */
    --brand-primary: #6366f1;
    --brand-hover: #4f46e5;
    --brand-light: #eef2ff;
    --social-github: #24292e;
    --social-github-hover: #1b1f23;
    --social-google: #4285f4;
    --social-google-hover: #357ae8;

    /* --- СТАТУСЫ И ТЕСТЫ --- */
    --status-success: #10b981;
    --status-success-bg: #ecfdf5;
    --status-error: #ef4444;
    --status-error-bg: #fef2f2;
    --status-warning: #f59e0b;
    --status-warning-bg: #fffbeb;

    /* --- ГРАНИЦЫ И РАЗДЕЛИТЕЛИ --- */
    --border-light: #e2e8f0;
    --border-focus: #a5b4fc;

    /* --- ЭФФЕКТЫ ОБЪЕМА --- */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 5%);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 5%), 0 2px 4px -1px rgb(0 0 0 / 3%);

    /* --- РАЗМЕР ШРИФТОВ --- */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-xxl: 1.5rem;
    --font-size-xxxl: 2rem;

    /* --- ВЫСОТА СТРОКИ --- */
    --line-height-none: 1;
    --line-height-tight: 1.25;
    --line-height-normal: 1.4;
    --line-height-base: 1.5;
    --line-height-relaxed: 1.6;
    --line-height-loose: 1.75;

    /* --- НАЧЕРТАНИЕ ШРИФТОВ --- */
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* --- ЮНИТЫ (Отступы) --- */
    --unit-1: 0.25rem;
    --unit-2: 0.5rem;
    --unit-3: 0.75rem;
    --unit-4: 1rem;
    --unit-5: 1.25rem;
    --unit-6: 1.5rem;
    --unit-8: 2rem;
    --unit-10: 2.5rem;
    --unit-12: 3rem;
    --unit-16: 4rem;

    /* --- СКРУГЛЕНИЯ --- */
    --radius-xs: 2px;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;

    /* --- СЛОИ --- */
    --z-negative: -1;
    --z-elevate: 1;
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
    --z-toast: 1080;

    /* --- АНИМАЦИЯ --- */
    --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    /* --- ПРОЗРАЧНОСТЬ --- */
    --opacity-disabled: 0.5;
    --opacity-hover: 0.8;

    /* --- СЕТКА И БРЕЙКПОИНТЫ  --- */
    --breakpoint-xs: 320px;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    --breakpoint-xxl: 1440px;
    --breakpoint-xxxl: 1920px;

    /* Ограничители ширины для контейнеров */
    --container-md: 720px;
    --container-lg: 960px;
    --container-xl: 1200px;
    --container-xxl: 1400px;

    /* Новые токены */
    --focus-ring: 0 0 0 4px rgb(99 102 241 / 15%);
    --focus-ring-width: 2px;
    --focus-ring-offset: 2px;

} </file>

<file path="src/pages/course-page/ui/course-page.component.html">
<div class="course-page__mobile-action">
	<button app-button type="button" (click)="toggleMobileMenu()" aria-label="Открыть меню курса">
		<app-icon name="bars" size="m" />
	</button>
</div>

<app-sidebar-layout class="course-page">
	<div sidebar class="course-page__sidebar">
		<app-course-sidebar
			[progress]="progress()"
			[sections]="sections()"
			[activeLessonId]="activeLessonId()"
			(selectLesson)="selectLesson($event)"
		/>
	</div>

    @if (activeLesson(); as lesson) {
    	<app-lesson-content
    		[lesson]="lesson"
    		[nextLesson]="nextLesson()"
    		[videoUrl]="activeLessonDetail()?.videoUrl ?? null"
    		(toggleComplete)="toggleLessonCompleted($event)"
    		(selectLesson)="selectLesson($event)"
    	/>
    } @else if (loading()) {
    	<div class="loading-state">Загрузка курса...</div>
    } @else if (error()) {
    	<div class="loading-state">{{ error() }}</div>
    } @else {
    	<div class="loading-state">В курсе пока нет уроков</div>
    }

    <app-articles-drawer-sidebar />

</app-sidebar-layout>

<app-drawer [(isOpen)]="isMobileMenuOpen" [showCloseBtn]="true">
<div class="mobile-sidebar-container"> <app-course-sidebar [sections]="sections()"
[progress]="progress()" [activeLessonId]="activeLessonId()" (selectLesson)="selectLesson($event)" />
</div> </app-drawer> </file>

<file path="src/app/routes/app.routes.ts">
import { Routes } from '@angular/router';

import { courseSlugGuard } from '@pages/course-page';

import { RouteSegments } from '@shared/config/routes.config';

import { AccountLayoutComponent } from '../layouts/account-layout/account-layout.component'; import
{ MainLayoutComponent } from '../layouts/main-layout/main-layout.component';

export const COURSE_ROUTES: Routes = [ { path: ':slug', canActivate: [courseSlugGuard], children: [
{ path: RouteSegments.ROOT, loadComponent: () => import('@pages/course-page').then((c) =>
c.CoursePageComponent), title: 'Course', }, { path: RouteSegments.WILDCARD, redirectTo: '', }, ], },
];

export const ARTICLE_ROUTES: Routes = [ { path: RouteSegments.ARTICLES_CREATE, loadComponent: () =>
import('@pages/articles-editor-page').then((c) => c.ArticleEditorPageComponent), title: 'Create
Article', }, { path: RouteSegments.ARTICLE_EDIT, loadComponent: () =>
import('@pages/articles-editor-page').then((c) => c.ArticleEditorPageComponent), title: 'Edit
Article', }, ];

export const ACCOUNT_ROUTES: Routes = [ { path: RouteSegments.ROOT, redirectTo:
RouteSegments.OVERVIEW, pathMatch: 'full', }, { path: RouteSegments.OVERVIEW, loadComponent: () =>
import('@pages/account-overview-page/account-overview-page.component').then( (c) =>
c.AccountOverviewPageComponent, ), title: 'Account Overview', }, { path: RouteSegments.TRANSACTIONS,
loadComponent: () =>
import('@pages/account-transactions-page/account-transactions-page.component').then( (c) =>
c.AccountTransactionsPageComponent, ), title: 'Account Transactions', }, ];

export const APP_ROUTES: Routes = [ { path: RouteSegments.ROOT, pathMatch: 'full', loadComponent: ()
=> import('@pages/home-page').then((m) => m.HomePageComponent), }, { path: RouteSegments.COURSES,
component: MainLayoutComponent, children: COURSE_ROUTES, },

    {
    	path: RouteSegments.ARTICLES,
    	component: MainLayoutComponent,
    	children: ARTICLE_ROUTES,
    },

    {
    	path: RouteSegments.ACCOUNT,
    	component: AccountLayoutComponent,
    	children: ACCOUNT_ROUTES,
    },
    {
    	path: RouteSegments.WILDCARD,
    	redirectTo: RouteSegments.ROOT,
    },

]; </file>

<file path="src/pages/course-page/ui/course-page.component.ts">
import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	input,
	signal,
	untracked,
} from '@angular/core';

import { ArticlesDrawerSidebarComponent } from '@widgets/articles-drawer-sidebar'; import {
CourseSidebarComponent } from '@widgets/course-sidebar'; import { LessonContentComponent } from
'@widgets/lesson-content';

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout'; import { ButtonComponent }
from '@shared/ui/button'; import { DrawerComponent } from '@shared/ui/drawer'; import {
IconComponent } from '@shared/ui/icon';

import { CoursePageStore } from '../model/course-page.store';

@Component({ selector: 'app-course-page', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './course-page.component.html', styleUrl:
'./course-page.component.scss', imports: [ SidebarLayoutComponent, CourseSidebarComponent,
LessonContentComponent, ArticlesDrawerSidebarComponent, DrawerComponent, IconComponent,
ButtonComponent, ], providers: [CoursePageStore], }) export class CoursePageComponent { readonly
slug = input.required<string>();

    private readonly store = inject(CoursePageStore);

    readonly sections = this.store.sections;
    readonly progress = this.store.progress;
    readonly activeLesson = this.store.activeLesson;
    readonly activeLessonId = this.store.activeLessonId;
    readonly activeLessonDetail = this.store.activeLessonDetail;
    readonly nextLesson = this.store.nextLesson;
    readonly loading = this.store.loading;
    readonly error = this.store.error;

    readonly isMobileMenuOpen = signal(false);

    constructor() {
    	effect(() => {
    		const slug = this.slug();
    		untracked(() => this.store.load(slug));
    	});

    	effect(() => {
    		document.body.classList.toggle('lock-scroll', this.isMobileMenuOpen());
    	});
    }

    selectLesson(id: string): void {
    	this.store.selectLesson(id);
    }

    toggleLessonCompleted(id: string): void {
    	this.store.toggleLessonCompleted(id);
    }

    protected toggleMobileMenu(): void {
    	this.isMobileMenuOpen.update((state) => !state);
    }

} </file>

</files>
