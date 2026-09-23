import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CoverImageComponent } from '@shared/ui/cover-image';

import { Article } from '../../model/types/article.types';
import { ArticleBlockRendererComponent } from '../article-blocks/article-block-renderer.component';
import { ArticleHeaderComponent } from '../article-header/article-header.component';

@Component({
	selector: 'app-article-content',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './article.component.html',
	styleUrl: './article.component.scss',
	imports: [CoverImageComponent, ArticleHeaderComponent, ArticleBlockRendererComponent],
})
export class ArticleComponent {
	readonly article = input.required<Article>();
}
