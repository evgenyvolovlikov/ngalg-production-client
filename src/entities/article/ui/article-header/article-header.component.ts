import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { BadgeComponent } from '@shared/ui/badge';

import { Article } from '../../model/types/article.types';

@Component({
	selector: 'app-article-header',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './article-header.component.html',
	styleUrl: './article-header.component.scss',
	imports: [BadgeComponent],
})
export class ArticleHeaderComponent {
	readonly article = input.required<Article>();

	readonly tags = computed(() => this.article().tags);
	readonly levelData = computed(() => this.article().level);
}
