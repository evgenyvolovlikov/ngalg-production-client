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

import { ArticleApiService } from '../../api/article-api.service';
import { Article } from '../../model/types/article.types';
import { ArticleComponent } from '../article-detalization/article-content/article.component';

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
