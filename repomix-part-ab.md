    slug: string;
    tag?: NavigationTag;

}

export interface NavigationCategory { id: string; title: string; children: NavigationArticle[]; }

export interface NavigationSection { id: string; title: string; items: NavigationCategory[]; }
</file>

<file path="src/entities/article-navigation/ui/article-drawer-navigation/index.ts">
export * from './ui/article-drawer-navigation.component';
</file>

<file path="src/entities/course/model/course.types.ts">
export interface BaseEntity {
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface CourseEntity extends BaseEntity { slug: string; title: string; description: string;
isPublished: boolean; }

export interface CourseSectionEntity extends BaseEntity { courseId: string; title: string; slug:
string; orderIndex: number; }

export interface CourseSkeletonLesson { id: string; sectionId: string | null; sequenceOrder: number;
title: string; description: string | null; durationSeconds: number; isFree: boolean; hasCodeEditor:
boolean; isCompleted: boolean; }

export interface CourseSkeletonSection { id: string; title: string; slug: string; orderIndex:
number; lessons: CourseSkeletonLesson[]; }

export interface CourseSkeleton { id: string; slug: string; title: string; description: string;
isPublished: boolean; sections: CourseSkeletonSection[]; }

export interface LessonEntity extends BaseEntity { courseId: string; sectionId: string | null;
sequenceOrder: number; title: string; description: string | null; videoUrl: string | null;
durationSeconds: number; isFree: boolean; hasCodeEditor: boolean; }

export type LessonDetail = Omit<LessonEntity, 'createdAt' | 'updatedAt'> & { isCompleted: boolean;
};

export interface ToggleLessonProgressResponse { completed: boolean; }

export interface CourseProgress { totalLessons: number; completedLessons: number; percentage:
number; }

export interface CreateCourseDto { slug: string; title: string; description: string; isPublished?:
boolean; }

export type UpdateCourseDto = Partial<CreateCourseDto>;

export interface CreateCourseSectionDto { title: string; slug: string; orderIndex?: number; }

export type UpdateCourseSectionDto = Partial<CreateCourseSectionDto>;

export interface CreateLessonDto { sectionId: string; sequenceOrder: number; title: string;
description?: string; videoUrl?: string; durationSeconds?: number; isFree?: boolean; hasCodeEditor?:
boolean; }

export type UpdateLessonDto = Partial<CreateLessonDto>; </file>

<file path="src/entities/course/ui/course-progress/course-progress.component.html">
<div class="course-progress-card">
	<h3 class="title">Статистика курса</h3>

    <div class="chart-container">
    	<app-circular-progress [value]="progress().percentage" [size]="160" [strokeWidth]="12" />
    </div>

    <div class="stats">
    	<span class="stats-label">Просмотрено:</span>
    	<span class="stats-value">{{ progress().completedLessons }} / {{ progress().totalLessons }}</span>
    </div>

</div>
</file>

<file path="src/entities/user/model/user.types.ts">
export type UserRole = 'USER' | 'ADMIN';
export type AuthProvider = 'GOOGLE' | 'GITHUB' | 'LOCAL';

export interface UserProfile { id: string; email: string; username: string; firstName?: string |
null; lastName?: string | null; avatarUrl?: string | null; role: UserRole; provider: AuthProvider; }
</file>

<file path="src/entities/user/ui/user-profile-hero/user-profile-hero.component.html">
<div class="avatar">
	@if (avatarUrl()) {
		<img [src]="avatarUrl()" [alt]="name()" class="avatar__img" />
	} @else {
		{{ initial() }}
	}
</div>

<div class="info">
	<h1 class="name">{{ name() }}</h1>
	<p class="account-type">
		Account type: <span class="account-type__value">{{ accountType() }}</span>
	</p>
</div>
</file>

<file path="src/environments/environment.development.ts">
export const environment = {
	production: false,
	apiUrl: 'http://localhost:3000/api',
};
</file>

<file path="src/features/auth-by-oauth/ui/github-button/github-button.component.html">
<button
	app-button
	type="button"
	variant="filled"
	color="default"
	fullWidth
	(click)="clickButton.emit()"
	class="oauth-btn github-provider"
>
	<div class="provider-layout">
		<div class="provider-layout__icon-box">
			<app-icon name="logo-github" size="l" />
		</div>
		<span class="provider-layout__text">GitHub</span>
	</div>
</button>
</file>

<file path="src/features/auth-by-oauth/ui/github-button/github-button.component.scss">
/* stylelint-disable declaration-no-important */
:host {
	display: block;
	width: 100%;
}

:host ::ng-deep button[app-button].oauth-btn.github-provider { position: relative; display: flex;
justify-content: center; align-items: center; height: 2.875rem; padding: 0 !important;
background-color: var(--social-github); transition: background-color var(--transition-fast),
border-color var(--transition-fast); overflow: hidden; border-color: var(--social-github);

    &:hover {
    	background-color: var(--social-github-hover);
    	border-color: var(--social-github-hover);
    }

    .app-button__content {
    	display: block;
    	width: 100%;
    	height: 100%;
    }

}

.provider-layout { position: relative; width: 100%; height: 100%;

    &__icon-box {
    	position: absolute;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	width: 2.875rem;
    	height: 100%;
    	background-color: transparent;

    	app-icon {
    		color: var(--text-on-dark) !important;
    	}
    }

    &__text {
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	width: 100%;
    	height: 100%;
    	padding-left: 2.875rem;
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-medium);
    	color: var(--text-on-dark);
    }

} </file>

<file path="src/features/auth-by-oauth/ui/github-button/github-button.component.ts">
import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button'; import { IconComponent } from
'@shared/ui/icon';

@Component({ selector: 'app-github-oauth-button', standalone: true, imports: [ButtonComponent,
IconComponent], templateUrl: './github-button.component.html', styleUrl:
'./github-button.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, }) export class
GithubOauthButtonComponent { readonly clickButton = output<void>(); } </file>

<file path="src/features/auth-by-oauth/ui/google-button/google-button.component.html">
<button
	app-button
	type="button"
	variant="filled"
	color="default"
	fullWidth
	(click)="clickButton.emit()"
	class="oauth-btn google-provider"
>
	<div class="provider-layout">
		<div class="provider-layout__icon-box">
			<app-icon name="logo-google" size="l" />
		</div>
		<span class="provider-layout__text">Google</span>
	</div>
</button>
</file>

<file path="src/features/auth-by-oauth/ui/google-button/google-button.component.scss">
/* stylelint-disable declaration-no-important */
:host {
	display: block;
	width: 100%;
}

:host ::ng-deep button[app-button].oauth-btn.google-provider { position: relative; display: flex;
justify-content: center; align-items: center; height: 2.875rem; padding: 0 !important;
background-color: var(--social-google); transition: background-color var(--transition-fast),
border-color var(--transition-fast); overflow: hidden; border-color: var(--social-google);

    &:hover {
    	background-color: var(--social-google-hover);
    	border-color: var(--social-google-hover);
    }

    .app-button__content {
    	display: block;
    	width: 100%;
    	height: 100%;
    }

}

.provider-layout { position: relative; width: 100%; height: 100%;

    &__icon-box {
    	position: absolute;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	width: 2.875rem;
    	height: 100%;
    	background-color: var(--bg-card);
    	border-top-left-radius: var(--radius-sm);
    	border-bottom-left-radius: var(--radius-sm);
    }

    &__text {
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	width: 100%;
    	height: 100%;
    	padding-left: 2.875rem;
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-medium);
    	color: var(--text-on-dark);
    }

} </file>

<file path="src/features/auth-by-oauth/ui/google-button/google-button.component.ts">
import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button'; import { IconComponent } from
'@shared/ui/icon';

@Component({ selector: 'app-google-oauth-button', standalone: true, imports: [ButtonComponent,
IconComponent], templateUrl: './google-button.component.html', styleUrl:
'./google-button.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, }) export class
GoogleOauthButtonComponent { readonly clickButton = output<void>(); } </file>

<file path="src/features/auth-by-oauth/index.ts">
export * from './ui/auth-by-oauth.component';
</file>

<file path="src/features/create-category/ui/create-category.component.scss">
@use 'media' as m;

.form-row { display: grid; grid-template-columns: 1fr; gap: var(--unit-4);

    &--2-cols {
    	@include m.media-above('md') {
    		grid-template-columns: repeat(2, 1fr);
    	}
    }

}

.admin-form-container { display: flex; flex-direction: column; gap: var(--unit-3);

    &__title {
    	margin: 0;
    	font-size: var(--font-size-lg);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-tight);
    	color: var(--text-primary);
    }

} </file>

<file path="src/features/create-category/ui/create-category.component.ts">
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ArticleNavigationApiService } from '@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button'; import { InputComponent } from
'@shared/ui/input'; import { SelectComponent } from '@shared/ui/select';

@Component({ selector: 'app-create-category', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, imports: [ReactiveFormsModule, InputComponent, ButtonComponent,
SelectComponent], template: ` <form [formGroup]="form" (ngSubmit)="submit()"
class="admin-form-container"> <h3 class="admin-form-container__title">Новая категория</h3>

    		<app-select formControlName="sectionId" label="Родительская секция">
    			<option value="" disabled>Выберите секцию</option>
    			@for (section of navigationTree(); track section.id) {
    				<option [value]="section.id">{{ section.title }}</option>
    			}
    		</app-select>

    		<div class="form-row form-row--2-cols">
    			<app-input formControlName="title" label="Название категории"></app-input>
    			<app-input
    				formControlName="orderIndex"
    				type="number"
    				label="Порядок сортировки"
    			></app-input>
    		</div>

    		<button app-button type="submit" [disabled]="form.invalid">Создать категорию</button>
    	</form>
    `,
    styleUrl: './create-category.component.scss',

}) export class CreateCategoryComponent { private readonly fb = inject(NonNullableFormBuilder);
private readonly navigationApi = inject(ArticleNavigationApiService); private readonly destroyRef =
inject(DestroyRef);

    protected readonly navigationTree = toSignal(this.navigationApi.navigationTree$, {
    	initialValue: [],
    });

    protected form = this.fb.group({
    	sectionId: ['', Validators.required],
    	title: ['', [Validators.required, Validators.minLength(2)]],
    	orderIndex: [0],
    });

    submit(): void {
    	if (this.form.invalid) return;

    	this.navigationApi
    		.createCategory(this.form.getRawValue())
    		.pipe(takeUntilDestroyed(this.destroyRef))
    		.subscribe({
    			next: () => this.form.reset(),
    			error: (err) => console.error('Ошибка создания категории', err),
    		});
    }

} </file>

<file path="src/features/create-category/index.ts">
export * from './ui/create-category.component';
</file>

<file path="src/features/create-section/ui/create-section.component.scss">
.admin-form-container {
	display: flex;
	flex-direction: column;
	gap: var(--unit-3);

    &__title {
    	margin: 0;
    	font-size: var(--font-size-lg);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-tight);
    	color: var(--text-primary);
    }

} </file>

<file path="src/features/create-section/ui/create-section.component.ts">
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ArticleNavigationApiService, CreateSectionDto } from '@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button'; import { InputComponent } from
'@shared/ui/input';

@Component({ selector: 'app-create-section', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
template: ` <form [formGroup]="form" (ngSubmit)="submit()" class="admin-form-container">
<h3 class="admin-form-container__title">Новая секция</h3>

    		<app-input formControlName="title" label="Название секции"></app-input>
    		<app-input
    			formControlName="orderIndex"
    			type="number"
    			label="Порядок сортировки"
    		></app-input>

    		<button app-button type="submit" [disabled]="form.invalid">Создать секцию</button>
    	</form>
    `,

    styleUrl: './create-section.component.scss',

}) export class CreateSectionComponent { private readonly fb = inject(NonNullableFormBuilder);
private readonly api = inject(ArticleNavigationApiService); private readonly destroyRef =
inject(DestroyRef);

    protected form = this.fb.group({
    	title: ['', [Validators.required, Validators.minLength(2)]],
    	orderIndex: [0],
    });

    protected submit(): void {
    	if (this.form.invalid) return;

    	const dto: CreateSectionDto = this.form.getRawValue();

    	this.api
    		.createSection(dto)
    		.pipe(takeUntilDestroyed(this.destroyRef))
    		.subscribe({
    			next: () => this.form.reset(),
    			error: (err) => console.error('Ошибка создания секции', err),
    		});
    }

} </file>

<file path="src/features/create-section/index.ts">
export * from './ui/create-section.component';
</file>

<file path="src/features/lesson-navigation/ui/lesson-navigation-controls.component.html">
<div class="navigation-controls">
	@if (nextLesson(); as next) {
		<button
			app-button
			type="button"
			variant="filled"
			[disabled]="!next.isFree && !next.isCompleted"
			(click)="nextLessonSelect.emit(next.id)"
			class="button"
		>
			Следующий урок <app-icon [name]="'arrow-right'" size="s" />
		</button>
	}
</div>
</file>

<file path="src/features/lesson-navigation/ui/lesson-navigation-controls.component.scss">
.navigation-controls {
	display: flex;
	gap: var(--unit-4);
	justify-content: flex-end;
	align-items: center;
}
</file>

<file path="src/features/lesson-navigation/index.ts">
export * from './ui/lesson-navigation-controls.component';
</file>

<file path="src/features/manage-article/model/article-blocks-form.factory.ts">
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { ArticleBlockType, CodeBlockData, ComplexityBlockData, FeaturesBlockData, ImageBlockData,
NoteBlockData, NoteType, TextBlockData, TextFormat, } from '@entities/article';

import { BlockFormGroup, CodeBlockForm, ComplexityBlockForm, FeatureItemForm, FeaturesBlockForm,
ImageBlockForm, NoteBlockForm, TextBlockForm, } from './article-form.types';

export function createFeatureItemForm( fb: NonNullableFormBuilder, initialData?: { title?: string;
text?: string }, ): FormGroup<FeatureItemForm> { return fb.group<FeatureItemForm>({ title:
fb.control(initialData?.title ?? '', [Validators.required]), text: fb.control(initialData?.text ??
'', [Validators.required]), }); }

export function createBlockGroup( fb: NonNullableFormBuilder, type: ArticleBlockType, initialData?:
unknown, ): FormGroup<BlockFormGroup> { let dataGroup: FormGroup;

    switch (type) {
    	case 'TEXT': {
    		const data = (initialData ?? {}) as Partial<TextBlockData>;
    		dataGroup = fb.group<TextBlockForm>({
    			format: fb.control<TextFormat>((data.format as TextFormat) ?? 'MARKDOWN'),
    			content: fb.control(data.content ?? '', [Validators.required]),
    		});
    		break;
    	}

    	case 'CODE': {
    		const data = (initialData ?? {}) as Partial<CodeBlockData>;
    		dataGroup = fb.group<CodeBlockForm>({
    			code: fb.control(data.code ?? '', [Validators.required]),
    			language: fb.control(data.language ?? 'TYPESCRIPT', [Validators.required]),
    			filename: fb.control(data.filename ?? ''),
    		});
    		break;
    	}

    	case 'NOTE': {
    		const data = (initialData ?? {}) as Partial<NoteBlockData>;
    		dataGroup = fb.group<NoteBlockForm>({
    			text: fb.control(data.text ?? '', [Validators.required]),
    			noteType: fb.control<NoteType>((data.noteType as NoteType) ?? 'INFO', [
    				Validators.required,
    			]),
    		});
    		break;
    	}

    	case 'COMPLEXITY': {
    		const data = (initialData ?? {}) as Partial<ComplexityBlockData>;
    		dataGroup = fb.group<ComplexityBlockForm>({
    			time: fb.control(data.time ?? 'O(1)', [Validators.required]),
    			space: fb.control(data.space ?? 'O(N)', [Validators.required]),
    			description: fb.control(data.description ?? ''),
    		});
    		break;
    	}

    	case 'IMAGE': {
    		const data = (initialData ?? {}) as Partial<ImageBlockData>;
    		dataGroup = fb.group<ImageBlockForm>({
    			url: fb.control(data.url ?? '', [Validators.required]),
    			alt: fb.control(data.alt ?? '', [Validators.required]),
    			caption: fb.control<string | null>(data.caption ?? null),
    		});
    		break;
    	}

    	case 'FEATURES': {
    		const data = (initialData ?? {}) as Partial<FeaturesBlockData>;
    		const itemsArray = fb.array<FormGroup<FeatureItemForm>>([]);
    		const items = data.items?.length ? data.items : [{ title: '', text: '' }];

    		items.forEach((item) => {
    			itemsArray.push(createFeatureItemForm(fb, item));
    		});

    		dataGroup = fb.group<FeaturesBlockForm>({
    			sectionTitle: fb.control(data.sectionTitle ?? '', [Validators.required]),
    			items: itemsArray,
    		});
    		break;
    	}

    	default:
    		throw new Error(`Неизвестный тип контентного блока: ${type}`);
    }

    return fb.group<BlockFormGroup>({
    	type: fb.control(type),
    	data: dataGroup,
    });

} </file>

<file path="src/features/manage-article/model/article-form.factory.ts">
import { FormArray, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { ArticleContentBlock, ArticleLevel, ArticleStatus, NavigationTag } from '@entities/article';

import { createBlockGroup } from './article-blocks-form.factory'; import { ArticleFormModel,
BlockFormGroup } from './article-form.types';

export function createInitialArticleForm(fb: NonNullableFormBuilder): FormGroup<ArticleFormModel> {
return fb.group({ problemId: fb.control<string | null>(null), readingTimeMinutes: fb.control(1,
[Validators.min(1)]),

    	title: fb.control('', [Validators.required]),
    	slug: fb.control('', [Validators.required]),
    	categoryId: fb.control('', [Validators.required]),

    	status: fb.control<ArticleStatus>('PUBLISHED', [Validators.required]),
    	level: fb.control<ArticleLevel>('BEGINNER', [Validators.required]),

    	leadText: fb.control('', [Validators.required]),
    	description: fb.control('', [Validators.required]),

    	coverImage: fb.group({
    		url: fb.control('', [Validators.required]),
    		alt: fb.control('', [Validators.required]),
    		caption: fb.control<string | null>(null),
    	}),

    	tags: fb.control<NavigationTag[]>([]),

    	seo: fb.group({
    		description: fb.control<string | null>(null),
    		keywords: fb.control<string[]>([]),
    	}),

    	blocks: fb.array<FormGroup<BlockFormGroup>>([]),
    });

}

export function populateArticleBlocks( fb: NonNullableFormBuilder, blocksFormArray: FormArray,
blocksData: ArticleContentBlock[], ): void { blocksFormArray.clear();

    if (!blocksData || !Array.isArray(blocksData)) return;

    blocksData.forEach((block) => {
    	const blockGroup = createBlockGroup(fb, block.type, block.data);
    	blocksFormArray.push(blockGroup);
    });

} </file>

<file path="src/features/manage-article/model/article-form.types.ts">
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { ArticleBlockType, ArticleLevel, ArticleStatus, NavigationTag, NoteType, TextFormat, } from
'@entities/article';

// --- Формы контентных блоков ---

export interface TextBlockForm { format: FormControl<TextFormat>; content: FormControl<string>; }

export interface NoteBlockForm { text: FormControl<string>; noteType: FormControl<NoteType>; }

export interface CodeBlockForm { code: FormControl<string>; language: FormControl<string>; filename:
FormControl<string>; }

export interface ImageBlockForm { url: FormControl<string>; alt: FormControl<string>; caption:
FormControl<string | null>; }

export interface ComplexityBlockForm { time: FormControl<string>; space: FormControl<string>;
description: FormControl<string>; }

export interface FeatureItemForm { title: FormControl<string>; text: FormControl<string>; }

export interface FeaturesBlockForm { sectionTitle: FormControl<string | null>; items:
FormArray<FormGroup<FeatureItemForm>>; }

export interface BlockFormGroup { type: FormControl<ArticleBlockType>; // eslint-disable-next-line
@typescript-eslint/no-explicit-any data: FormGroup<any>; }

// --- Вспомогательные формы ---

export interface CoverImageForm { url: FormControl<string>; alt: FormControl<string>; caption:
FormControl<string | null>; }

export interface SeoForm { description: FormControl<string | null>; keywords: FormControl<string[]>;
}

// --- Главная форма ---

export interface ArticleFormModel { problemId: FormControl<string | null>; readingTimeMinutes:
FormControl<number>;

    title: FormControl<string>;
    slug: FormControl<string>;
    categoryId: FormControl<string>;

    status: FormControl<ArticleStatus>;
    level: FormControl<ArticleLevel>;

    leadText: FormControl<string>;
    description: FormControl<string>;

    coverImage: FormGroup<CoverImageForm>;

    tags: FormControl<NavigationTag[]>;

    seo: FormGroup<SeoForm>;

    blocks: FormArray<FormGroup<BlockFormGroup>>;

} </file>

<file path="src/features/manage-article/ui/article-creation/article-block-form-renderer/article-block-form-renderer.component.ts">
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ArticleBlockType } from '@entities/article';

import { ARTICLE_BLOCK_FORM_REGISTRY } from '../article-form.registry';

@Component({ selector: 'app-article-block-form-renderer', standalone: true, imports:
[NgComponentOutlet], changeDetection: ChangeDetectionStrategy.OnPush, styles: ` :host { display:
block; width: 100%; }

    	.error-text {
    		font-size: var(--font-size-sm);
    		color: var(--status-error);
    	}
    `,
    template: `
    	@if (componentType(); as cmp) {
    		<ng-container *ngComponentOutlet="cmp; inputs: { form: dataFormGroup() }" />
    	} @else {
    		<div class="error-text">Неизвестный тип блока</div>
    	}
    `,

}) export class ArticleBlockFormRendererComponent { readonly type =
input.required<ArticleBlockType>(); readonly dataFormGroup = input.required<FormGroup>();

    readonly componentType = computed(() => ARTICLE_BLOCK_FORM_REGISTRY[this.type()] ?? null);

} </file>

<file path="src/features/manage-article/ui/article-creation/article-code-block-form/article-code-block-form.component.scss">
@use 'media' as *;

.form-row { display: grid; grid-template-columns: 1fr; gap: var(--unit-4);

    &--2-cols {
    	@include media-above(md) {
    		grid-template-columns: repeat(2, 1fr);
    	}
    }

} </file>

<file path="src/features/manage-article/ui/article-creation/article-code-block-form/article-code-block-form.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '@shared/ui/input'; import { TextareaComponent } from
'@shared/ui/textarea';

@Component({ selector: 'app-code-block-form', standalone: true, imports: [ReactiveFormsModule,
InputComponent, TextareaComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
<div [formGroup]="form()"> <div class="form-row form-row--2-cols">
<app-input formControlName="language" label="Язык" />
<app-input formControlName="filename" label="Имя файла (необязательно)" /> </div>

    		<app-textarea formControlName="code" label="Код" [rows]="6"></app-textarea>
    	</div>
    `,
    styleUrl: './article-code-block-form.component.scss',

}) export class ArticleCodeBlockFormComponent { readonly form = input.required<FormGroup>(); }
</file>

<file path="src/features/manage-article/ui/article-creation/article-complexity-block-form/article-complexity-block-form.component.scss">
@use 'media' as *;

.form-row { display: grid; grid-template-columns: 1fr; gap: var(--unit-4);

    &--2-cols {
    	@include media-above(md) {
    		grid-template-columns: repeat(2, 1fr);
    	}
    }

} </file>

<file path="src/features/manage-article/ui/article-creation/article-complexity-block-form/article-complexity-block-form.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '@shared/ui/input'; import { TextareaComponent } from
'@shared/ui/textarea';

@Component({ selector: 'app-complexity-block-form', standalone: true, imports: [ReactiveFormsModule,
InputComponent, TextareaComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
<div [formGroup]="form()"> <div class="form-row form-row--2-cols">
<app-input formControlName="time" label="Сложность по времени" />
<app-input formControlName="space" label="Сложность по памяти" /> </div>

    		<app-textarea
    			formControlName="description"
    			label="Пояснение (необязательно)"
    			[rows]="2"
    		></app-textarea>
    	</div>
    `,
    styleUrl: './article-complexity-block-form.component.scss',

}) export class ArticleComplexityBlockFormComponent { readonly form = input.required<FormGroup>(); }
</file>

<file path="src/features/manage-article/ui/article-creation/article-features-block-form/article-features-block-form.component.scss">
.features-list {
	display: flex;
	flex-direction: column;
	gap: var(--unit-3);

    &__title {
    	padding-top: var(--unit-2);
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-medium);
    	line-height: var(--line-height-normal);
    	color: var(--text-primary);
    }

}

.feature-item-card { display: flex; flex-direction: column; gap: var(--unit-3); margin-bottom:
var(--unit-4); padding: var(--unit-2); background-color: var(--bg-main); border: 1px dashed
var(--border-light); border-radius: var(--radius-md); } </file>

<file path="src/features/manage-article/ui/article-creation/article-features-block-form/article-features-block-form.component.ts">
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { FormArray, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '@shared/ui/button'; import { InputComponent } from
'@shared/ui/input'; import { TextareaComponent } from '@shared/ui/textarea';

import { createFeatureItemForm } from '../../../model/article-blocks-form.factory'; import {
FeatureItemForm } from '../../../model/article-form.types';

@Component({ selector: 'app-features-block-form', changeDetection: ChangeDetectionStrategy.OnPush,
standalone: true, styleUrl: './article-features-block-form.component.scss', imports:
[ReactiveFormsModule, InputComponent, TextareaComponent, ButtonComponent], template:
` 		<div class="features-list"> 			<div class="features-list__title">Элементы списка</div> 			<div formArrayName="items"> 				@for (item of items.controls; track item; let i = $index) { 					<div class="feature-item-card" [formGroupName]="i"> 						<app-input formControlName="title" label="Заголовок фичи" /> 						<app-textarea formControlName="text" label="Текст фичи" [rows]="2" /> 						<button 							app-button 							type="button" 							variant="clear" 							size="m" 							(click)="removeItem(i)" 						> 							Удалить фичу 						</button> 					</div> 				} 			</div> 			<button app-button type="button" variant="outline" size="m" (click)="addItem()"> 				+ Добавить фичу 			</button> 		</div> 	`,
}) export class ArticleFeaturesBlockFormComponent { readonly form = input.required<FormGroup>();
private readonly fb = inject(NonNullableFormBuilder);

    get items(): FormArray<FormGroup<FeatureItemForm>> {
    	return this.form().get('items') as FormArray<FormGroup<FeatureItemForm>>;
    }

    addItem(): void {
    	this.items.push(createFeatureItemForm(this.fb));
    }

    removeItem(index: number): void {
    	this.items.removeAt(index);
    }

} </file>

<file path="src/features/manage-article/ui/article-creation/article-image-block/article-image-block-form.component.scss">
@use 'media' as *;

.form-row { display: grid; grid-template-columns: 1fr; gap: var(--unit-4);

    &--2-cols {
    	@include media-above(md) {
    		grid-template-columns: repeat(2, 1fr);
    	}
    }

} </file>

<file path="src/features/manage-article/ui/article-creation/article-image-block/article-image-block-form.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '@shared/ui/input';

@Component({ selector: 'app-image-block-form', standalone: true, imports: [ReactiveFormsModule,
InputComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: ` <div
[formGroup]="form()"> <app-input formControlName="url" label="URL изображения" />

    		<div class="form-row form-row--2-cols">
    			<app-input formControlName="alt" label="Alt текст" />
    			<app-input formControlName="caption" label="Подпись под фото" />
    		</div>
    	</div>
    `,
    styleUrl: './article-image-block-form.component.scss',

}) export class ArticleImageBlockFormComponent { readonly form = input.required<FormGroup>(); }
</file>

<file path="src/features/manage-article/ui/article-creation/article-note-block-form/article-note-block-form.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SelectComponent } from '@shared/ui/select'; import { TextareaComponent } from
'@shared/ui/textarea';

@Component({ selector: 'app-note-block-form', standalone: true, imports: [ReactiveFormsModule,
SelectComponent, TextareaComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
<div [formGroup]="form()"> <app-select formControlName="noteType" label="Тип заметки">
<option value="INFO">Инфо</option> <option value="WARNING">Предупреждение</option>
<option value="ERROR">Ошибка</option> </app-select>

    		<app-textarea formControlName="text" label="Текст заметки" [rows]="3"></app-textarea>
    	</div>
    `,

}) export class ArticleNoteBlockFormComponent { readonly form = input.required<FormGroup>(); }
</file>

<file path="src/features/manage-article/ui/article-creation/article-text-block-form/article-text-block-form.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SelectComponent } from '@shared/ui/select'; import { TextareaComponent } from
'@shared/ui/textarea';

@Component({ selector: 'app-text-block-form', standalone: true, imports: [ReactiveFormsModule,
SelectComponent, TextareaComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
<div [formGroup]="form()"> <app-select formControlName="format" label="Формат">
<option value="MARKDOWN">Markdown</option> <option value="HTML">HTML</option> </app-select>

    		<app-textarea formControlName="content" label="Контент" [rows]="6"></app-textarea>
    	</div>
    `,

}) export class ArticleTextBlockFormComponent { readonly form = input.required<FormGroup>(); }
</file>

<file path="src/features/manage-article/ui/article-creation/article-form.component.html">
<form class="article-form" [formGroup]="form()" (ngSubmit)="onSubmit()">
	<header class="article-form__header">
		<h1 class="article-form__title">{{ isEditMode() ? "Редактирование статьи" : "Новая статья" }}</h1>
		<div class="article-form__actions">
			<button app-button type="button" variant="outline" (click)="onCancel()">Отмена</button>
			<button app-button type="submit" variant="filled" [loading]="isSubmitting()" [disabled]="isSubmitting()">
				Сохранить
			</button>
		</div>
	</header>

    <!-- ОСНОВНАЯ ИНФОРМАЦИЯ -->
    <fieldset class="form-section">
    	<legend class="form-section__title">Основная информация</legend>

    	<div class="form-row form-row--2-cols">
    		<app-input formControlName="title" label="Заголовок" />
    		<app-input formControlName="slug" label="Slug (URL)" />
    	</div>

    	<div class="form-row form-row--3-cols">
    		<app-select formControlName="categoryId" label="Категория">
    			<option value="">Выберите категорию</option>

    			@for (section of navigationTree(); track section.id) {
    				<optgroup [label]="section.title">
    					@for (category of section.items; track category.id) {
    						<option [value]="category.id">{{ category.title }}</option>
    					}
    				</optgroup>
    			}
    		</app-select>

    		<app-select formControlName="status" label="Статус">
    			@for (opt of statusOptions; track opt.value) {
    				<option [value]="opt.value">{{ opt.label }}</option>
    			}
    		</app-select>

    		<app-select formControlName="level" label="Уровень">
    			@for (opt of levelOptions; track opt.value) {
    				<option [value]="opt.value">{{ opt.label }}</option>
    			}
    		</app-select>
    	</div>

    	<div class="form-row form-row--2-cols">
    		<app-input formControlName="problemId" label="ID Задачи (Problem ID)" />
    		<app-input type="number" formControlName="readingTimeMinutes" label="Время чтения (мин)" />
    	</div>

    	<div class="form-row">
    		<app-textarea formControlName="leadText" label="Лид-абзац" [rows]="2"></app-textarea>
    	</div>

    	<div class="form-row">
    		<app-textarea formControlName="description" label="Полное описание" [rows]="4"></app-textarea>
    	</div>
    </fieldset>

    <!-- ОБЛОЖКА -->
    <fieldset formGroupName="coverImage" class="form-section">
    	<legend class="form-section__title">Обложка</legend>
    	<div class="form-row">
    		<app-input formControlName="url" label="URL изображения" />
    	</div>
    	<div class="form-row form-row--2-cols">
    		<app-input formControlName="alt" label="Alt текст" />
    		<app-input formControlName="caption" label="Подпись (необязательно)" />
    	</div>
    </fieldset>

    <!-- ТЕГИ И СЕО -->
    <div class="form-row form-row--2-cols">
    	<fieldset class="form-section">
    		<legend class="form-section__title">Теги</legend>
    		<app-tags-input formControlName="tags" placeholder="Введите тег и нажмите Enter"></app-tags-input>
    	</fieldset>

    	<fieldset class="form-section" formGroupName="seo">
    		<legend class="form-section__title">SEO Настройки</legend>
    		<app-textarea formControlName="description" label="SEO Описание" [rows]="2"></app-textarea>

    		<app-tags-input formControlName="keywords" placeholder="Введите ключевое слово"></app-tags-input>
    	</fieldset>
    </div>

    <!-- КОНТЕНТНЫЕ БЛОКИ -->
    <fieldset class="form-section">
    	<legend class="form-section__title">Контентные блоки</legend>

    	<div class="block-toolbar">
    		@for (block of availableBlocks; track block.type) {
    			<button app-button type="button" size="m" variant="outline" (click)="addBlock(block.type)">
    				+ {{ block.label }}
    			</button>
    		}
    	</div>

    	<div formArrayName="blocks" class="blocks-container">
    		@for (block of blocksFormArray.controls; track block; let blockIndex = $index) {
    			<div class="block-card" [formGroupName]="blockIndex">
    				<div class="block-card__header">
    					<span class="block-card__type">{{ block.controls.type.value | uppercase }}</span>
    					<button app-button type="button" variant="clear" size="m" (click)="removeBlock(blockIndex)">
    						Удалить
    					</button>
    				</div>

    				<div formGroupName="data" class="block-card__body">
    					<app-article-block-form-renderer
    						[type]="block.controls.type.value"
    						[dataFormGroup]="block.controls.data"
    					/>
    				</div>
    			</div>
    		}

    		@if (blocksFormArray.length === 0) {
    			<div class="empty-state">Блоков пока нет. Добавьте контент, используя панель выше.</div>
    		}
    	</div>
    </fieldset>

</form>
</file>

<file path="src/features/manage-article/ui/article-creation/article-form.component.scss">
@use 'media' as m;

:host { display: block; padding: var(--unit-6) 0; }

.article-form { display: flex; flex-direction: column; gap: var(--unit-6); max-width:
var(--container-xxl); margin: 0 auto;

    &__header {
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	padding-bottom: var(--unit-4);
    	border-bottom: 1px solid var(--border-light);
    }

    &__title {
    	margin: 0;
    	font-size: var(--font-size-xxl);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-tight);
    	color: var(--text-primary);
    }

    &__actions {
    	display: flex;
    	gap: var(--unit-3);
    }

}

/* --- Секции формы (Fieldsets) --- */ .form-section { display: flex; flex-direction: column; gap:
var(--unit-4); min-width: 0; margin: 0; padding: var(--unit-6); background-color: var(--bg-card);
border: 1px solid var(--border-light); border-radius: var(--radius-lg);

    &__title {
    	width: 100%;
    	margin: 0 0 var(--unit-4);
    	padding: 0;
    	font-size: var(--font-size-lg);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-tight);
    	color: var(--text-primary);
    }

}

/* --- Сетка формы --- */ .form-row { display: grid; grid-template-columns: 1fr; gap: var(--unit-4);

    &--2-cols {
    	@include m.media-above('md') {
    		grid-template-columns: repeat(2, 1fr);
    	}
    }

    &--3-cols {
    	@include m.media-above('md') {
    		grid-template-columns: repeat(3, 1fr);
    	}
    }

}

/* --- Контентные блоки --- */ .block-toolbar { display: flex; flex-wrap: wrap; gap: var(--unit-2);
}

.blocks-container { display: flex; flex-direction: column; gap: var(--unit-4); }

.block-card { background-color: var(--bg-card); border: 1px solid var(--border-light);
border-radius: var(--radius-md); overflow: hidden;

    &__header {
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	padding: var(--unit-3) var(--unit-4);
    	background-color: var(--bg-main);
    	border-bottom: 1px solid var(--border-light);
    }

    &__type {
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-bold);
    	color: var(--text-muted);
    	text-transform: uppercase;
    }

    &__body {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-3);
    	padding: var(--unit-4);
    }

}

.empty-state { padding: var(--unit-6); border: 1px dashed var(--border-light); border-radius:
var(--radius-md); font-size: var(--font-size-sm); color: var(--text-secondary); text-align: center;
} </file>

<file path="src/features/manage-article/ui/article-creation/article-form.component.ts">
/* eslint-disable @angular-eslint/no-output-native */
import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormArray, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ArticleBlockType } from '@entities/article'; import { NavigationSection } from
'@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button'; import { InputComponent } from
'@shared/ui/input'; import { SelectComponent } from '@shared/ui/select'; import { TagsInputComponent
} from '@shared/ui/tags-input'; import { TextareaComponent } from '@shared/ui/textarea';

import { createBlockGroup } from '../../model/article-blocks-form.factory'; import {
ArticleFormModel, BlockFormGroup } from '../../model/article-form.types'; import {
ArticleBlockFormRendererComponent } from
'./article-block-form-renderer/article-block-form-renderer.component';

@Component({ selector: 'app-article-form', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './article-form.component.html', styleUrl:
'./article-form.component.scss', imports: [ ReactiveFormsModule, ButtonComponent, InputComponent,
UpperCasePipe, TextareaComponent, SelectComponent, TagsInputComponent,
ArticleBlockFormRendererComponent, ], }) export class ArticleFormComponent { readonly form =
input.required<FormGroup<ArticleFormModel>>(); readonly isEditMode = input<boolean>(false); readonly
isSubmitting = input<boolean>(false); readonly navigationTree = input<NavigationSection[]>([]);

    readonly save = output<void>();
    readonly cancel = output<void>();

    private readonly fb = inject(NonNullableFormBuilder);

    readonly statusOptions = [
    	{ value: 'DRAFT', label: 'Черновик' },
    	{ value: 'PUBLISHED', label: 'Опубликовано' },
    	{ value: 'ARCHIVED', label: 'В архиве' },
    ];
    readonly levelOptions = [
    	{ value: 'BEGINNER', label: 'Beginner' },
    	{ value: 'INTERMEDIATE', label: 'Intermediate' },
    	{ value: 'ADVANCED', label: 'Advanced' },
    ];
    readonly availableBlocks: { type: ArticleBlockType; label: string }[] = [
    	{ type: 'TEXT', label: 'Текст' },
    	{ type: 'CODE', label: 'Код' },
    	{ type: 'NOTE', label: 'Заметка' },
    	{ type: 'COMPLEXITY', label: 'Сложность' },
    	{ type: 'IMAGE', label: 'Картинка' },
    	{ type: 'FEATURES', label: 'Фичи' },
    ];

    get blocksFormArray(): FormArray<FormGroup<BlockFormGroup>> {
    	return this.form().controls.blocks;
    }

    protected addBlock(type: ArticleBlockType): void {
    	this.blocksFormArray.push(createBlockGroup(this.fb, type));
    }

    protected removeBlock(index: number): void {
    	this.blocksFormArray.removeAt(index);
    }

    protected onSubmit(): void {
    	if (this.form().invalid) {
    		this.form().markAllAsTouched();
    		return;
    	}
    	this.save.emit();
    }

    protected onCancel(): void {
    	this.cancel.emit();
    }

} </file>

<file path="src/features/manage-article/ui/article-creation/article-form.registry.ts">
import { Type } from '@angular/core';

import { ArticleBlockType } from '@entities/article';

import { ArticleCodeBlockFormComponent } from
'./article-code-block-form/article-code-block-form.component'; import {
ArticleComplexityBlockFormComponent } from
'./article-complexity-block-form/article-complexity-block-form.component'; import {
ArticleFeaturesBlockFormComponent } from
'./article-features-block-form/article-features-block-form.component'; import {
ArticleImageBlockFormComponent } from './article-image-block/article-image-block-form.component';
import { ArticleNoteBlockFormComponent } from
'./article-note-block-form/article-note-block-form.component'; import {
ArticleTextBlockFormComponent } from './article-text-block-form/article-text-block-form.component';

export const ARTICLE_BLOCK_FORM_REGISTRY: Record<ArticleBlockType, Type<unknown>> = { TEXT:
ArticleTextBlockFormComponent, CODE: ArticleCodeBlockFormComponent, FEATURES:
ArticleFeaturesBlockFormComponent, NOTE: ArticleNoteBlockFormComponent, COMPLEXITY:
ArticleComplexityBlockFormComponent, IMAGE: ArticleImageBlockFormComponent, }; </file>

<file path="src/features/manage-article/index.ts">
export { ManageArticleComponent } from './ui/manage-article.component';
</file>

<file path="src/pages/account-overview-page/account-overview-page.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'app-account-overview-page', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, template: `<div>Account Overview</div>`, imports: [], }) export
class AccountOverviewPageComponent {} </file>

<file path="src/pages/account-transactions-page/account-transactions-page.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'app-account-transactions-page', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, template: `<div>Account Transactions</div>`, }) export class
AccountTransactionsPageComponent {} </file>

<file path="src/pages/articles-editor-page/article-editor-page.component.scss">
:host {
	display: block;
}

.article-editor-page { max-width: var(--container-xxl); margin: 0 auto; } </file>

<file path="src/pages/articles-editor-page/index.ts">
export { ArticleEditorPageComponent } from './article-editor-page.component';
</file>

<file path="src/pages/home-page/index.ts">
export * from './ui/home-page.component';
</file>

<file path="src/shared/api/api-paths.ts">
/** Пути REST-эндпоинтов. Намеренно отделены от сегментов роутера. */
export const ApiPaths = {
	COURSES: 'courses',
	SECTIONS: 'sections',
	LESSONS: 'lessons',
	PROFILES: 'profiles',
	ARTICLES: 'articles',
	NAVIGATION: 'navigation',
} as const;
</file>

<file path="src/shared/config/environment.config.ts">
import { InjectionToken } from '@angular/core';

export interface EnvironmentToken { production: boolean; apiUrl: string; }

export const ENVIRONMENT = new InjectionToken<EnvironmentToken>('ENVIRONMENT'); </file>

<file path="src/shared/layouts/sidebar-layout/index.ts">
export * from './sidebar-layout.component';
</file>

<file path="src/shared/layouts/sidebar-layout/sidebar-layout.component.html">
<div class="sidebar-layout">
	<aside class="sidebar-layout__sidebar">
		<div class="sidebar-layout__sidebar-content">
			<ng-content select="[sidebar]"></ng-content>
		</div>
	</aside>

    <section class="sidebar-layout__content">
    	<ng-content></ng-content>
    </section>

</div>
</file>

<file path="src/shared/layouts/sidebar-layout/sidebar-layout.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'app-sidebar-layout', standalone: true, templateUrl:
'./sidebar-layout.component.html', styleUrl: './sidebar-layout.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class SidebarLayoutComponent {} </file>

<file path="src/shared/lib/utils/unique-id.ts">
let counter = 0;

/** Детерминированный id для связи label/aria-атрибутов с полем. */ export function uniqueId(prefix:
string): string { counter += 1; return `${prefix}-${counter.toString(36)}`; } </file>

<file path="src/shared/ui/accordion/accordion.component.scss">
:host {
	display: block;
}

.accordion { &__summary { padding: var(--unit-2) 0; font-size: var(--font-size-base); font-weight:
var(--font-weight-medium); color: var(--text-primary); transition: color var(--transition-fast);
cursor: pointer; user-select: none;

    	&:hover {
    		color: var(--brand-primary);
    	}

    	&:focus-visible {
    		outline: var(--focus-ring-width) solid var(--border-focus);
    		outline-offset: var(--focus-ring-offset);
    	}

    	&::marker,
    	&::-webkit-details-marker {
    		color: var(--text-muted);
    	}
    }

    &__content {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-1);
    	margin: 0 0 0 var(--unit-2);
    	padding: var(--unit-2) 0 var(--unit-2) var(--unit-4);
    	border-left: 1px solid var(--border-light);
    }

} </file>

<file path="src/shared/ui/accordion/accordion.component.ts">
import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({ selector: 'app-accordion', standalone: true, template:
` 		<details class="accordion" [open]="isOpen()" (toggle)="onToggle($event)"> 			<summary class="accordion__summary"> 				<ng-content select="[accordion-title]"></ng-content> 			</summary> 			<div class="accordion__content"> 				<ng-content></ng-content> 			</div> 		</details> 	`,
styleUrl: './accordion.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, }) export
class AccordionComponent { readonly isOpen = model<boolean>(false);

    protected onToggle(event: Event): void {
    	this.isOpen.set((event.target as HTMLDetailsElement).open);
    }

} </file>

<file path="src/shared/ui/accordion/index.ts">
export * from './accordion.component';
</file>

<file path="src/shared/ui/app-link/index.ts">
export { AppLinkComponent } from './app-link.component';
</file>

<file path="src/shared/ui/app-logo/app-logo.component.html">
<a routerLink="/" class="app-logo" aria-label="На главную NgAlg">
	<span class="app-logo__accent">Ng</span><span class="app-logo__main">Alg</span>
</a>
</file>

<file path="src/shared/ui/app-logo/app-logo.component.scss">
:host {
	display: inline-block;
}

.app-logo { display: flex; align-items: center; font-family: var(--font-family-sans); font-size:
var(--font-size-lg); font-weight: var(--font-weight-bold); line-height: var(--line-height-none);
transition: opacity var(--transition-fast); letter-spacing: 0.05em; text-transform: uppercase;
text-decoration: none;

    &:hover {
    	opacity: var(--opacity-hover);
    }

    &__accent {
    	color: var(--brand-primary);
    }

    &__main {
    	color: var(--text-primary);
    }

} </file>

<file path="src/shared/ui/app-logo/app-logo.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-logo', standalone: true, imports: [RouterLink], templateUrl:
'./app-logo.component.html', styleUrl: './app-logo.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class AppLogoComponent {} </file>

<file path="src/shared/ui/app-logo/index.ts">
export * from './app-logo.component';
</file>

<file path="src/shared/ui/badge/badge.component.scss">
:host {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: var(--radius-sm);
	font-weight: var(--font-weight-medium);
	line-height: var(--line-height-none);
	white-space: nowrap;

    &.badge--sm {
    	padding: var(--unit-1) var(--unit-2);
    	font-size: var(--font-size-xs);
    }

    &.badge--md {
    	padding: var(--unit-2) var(--unit-3);
    	font-size: var(--font-size-sm);
    }

    &.badge--lg {
    	padding: var(--unit-2) var(--unit-4);
    	font-size: var(--font-size-base);
    }

    &.badge--primary {
    	background-color: var(--brand-light);
    	color: var(--brand-primary);
    }

    &.badge--info {
    	background-color: var(--brand-primary);
    	color: var(--text-on-dark);
    }

    &.badge--success {
    	background-color: var(--status-success-bg);
    	color: var(--status-success);
    }

    &.badge--warning {
    	background-color: var(--status-warning-bg);
    	color: var(--status-warning);
    }

    &.badge--error {
    	background-color: var(--status-error-bg);
    	color: var(--status-error);
    }

    &.badge--outline {
    	background-color: transparent;
    	border: 1px solid var(--border-light);
    	color: var(--text-secondary);
    }

} </file>

<file path="src/shared/ui/badge/badge.component.ts">
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { BadgeSize, BadgeVariant } from './badge.types';

@Component({ selector: 'app-badge', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, template: '<ng-content />', styleUrl: './badge.component.scss',
host: { '[class]': 'hostClasses()', }, }) export class BadgeComponent { readonly variant =
input<BadgeVariant>('primary'); readonly size = input<BadgeSize>('md');

    protected readonly hostClasses = computed(() => {
    	return `badge badge--${this.variant()} badge--${this.size()}`;
    });

} </file>

<file path="src/shared/ui/badge/badge.types.ts">
export type BadgeVariant = 'primary' | 'info' | 'success' | 'warning' | 'error' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';
</file>

<file path="src/shared/ui/badge/index.ts">
export * from './badge.component';
export * from './badge.types';
</file>

<file path="src/shared/ui/button/button.component.html">
@if (loading()) {
	<span class="app-button__loader" aria-hidden="true"></span>
}

<span class="app-button__content" [class.app-button__content--hidden]="loading()">
<ng-content></ng-content> </span> </file>

<file path="src/shared/ui/button/index.ts">
export * from './button.component';
</file>

<file path="src/shared/ui/checkbox/checkbox.component.html">
<label class="checkbox" [class.checkbox--disabled]="disabled()">
	<input
		type="checkbox"
		class="checkbox__input"
		[id]="inputId()"
		[checked]="checked()"
		[disabled]="disabled()"
		(change)="onChange($event)"
	/>

    <span class="checkbox__box" aria-hidden="true">
    	<svg class="checkbox__icon" viewBox="0 0 24 24">
    		<path
    			fill="none"
    			stroke="currentColor"
    			stroke-width="3"
    			stroke-linecap="round"
    			stroke-linejoin="round"
    			d="M5 13l4 4L19 7"
    		/>
    	</svg>
    </span>

    <span class="checkbox__label">
    	<ng-content></ng-content>
    </span>

</label>
</file>

<file path="src/shared/ui/checkbox/checkbox.component.scss">
:host {
	display: inline-flex;
}

.checkbox { display: inline-flex; gap: var(--unit-2); align-items: center; font-family:
var(--font-family-sans); font-size: var(--font-size-base); color: var(--text-primary); transition:
opacity var(--transition-fast); cursor: pointer; user-select: none;

    &--disabled {
    	opacity: var(--opacity-disabled);
    	cursor: not-allowed;

    	.checkbox__box {
    		background-color: var(--bg-main);
    		border-color: var(--border-light);
    	}
    }

    &__input {
    	position: absolute;
    	width: 1px;
    	height: 1px;
    	margin: -1px;
    	padding: 0;
    	border: 0;
    	overflow: hidden;
    	clip-path: inset(100%);
    	white-space: nowrap;
