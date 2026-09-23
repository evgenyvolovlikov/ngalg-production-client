import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CoverImageComponent } from '@shared/ui/cover-image';

import { ImageBlockData } from '../../../model/types/article.types';

@Component({
	selector: 'app-article-block-image',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CoverImageComponent],
	templateUrl: './article-block-image.component.html',
	styleUrl: './article-block-image.component.scss',
})
export class ArticleBlockImageComponent {
	readonly data = input.required<ImageBlockData>();
}
