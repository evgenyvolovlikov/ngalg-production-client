import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FeaturesBlockData } from '../../../model/types/article.types';

@Component({
	selector: 'app-article-block-features',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './article-block-features.component.html',
	styleUrl: './article-block-features.component.scss',
})
export class ArticleBlockFeaturesComponent {
	readonly data = input.required<FeaturesBlockData>();
}
