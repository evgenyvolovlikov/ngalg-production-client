import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	OnInit,
	inject,
	input,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { finalize } from 'rxjs';

import { Article, ArticleApiService, ArticleComponent } from '@entities/article';

@Component({
	selector: 'app-article-details-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ArticleComponent],
	templateUrl: './article-details-page.component.html',
	styleUrl: './article-details-page.component.scss',
})
export class ArticleDetailsPageComponent implements OnInit {
	readonly id = input.required<string>();

	private readonly articleApi = inject(ArticleApiService);
	private readonly destroyRef = inject(DestroyRef);

	protected readonly article = signal<Article | null>(null);
	protected readonly isLoading = signal<boolean>(true);
	protected readonly error = signal<string | null>(null);

	ngOnInit(): void {
		this.articleApi
			.getArticleById(this.id())
			.pipe(
				finalize(() => this.isLoading.set(false)),
				takeUntilDestroyed(this.destroyRef),
			)
			.subscribe({
				next: (article) => this.article.set(article),
				error: (err) => {
					console.error('Не удалось загрузить статью', err);
					this.error.set('Не удалось загрузить статью');
				},
			});
	}
}
