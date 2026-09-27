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

@Component({
	selector: 'app-manage-article',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule, ArticleFormComponent],
	template: `
		<app-article-form
			[form]="articleForm"
			[isEditMode]="isEditMode()"
			[isSubmitting]="isSubmitting()"
			[navigationTree]="navigationTree()"
			(save)="handleSave()"
			(cancel)="handleCancel()"
		/>
	`,
})
export class ManageArticleComponent implements OnInit {
	readonly articleId = input<string | null>(null);

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
}
