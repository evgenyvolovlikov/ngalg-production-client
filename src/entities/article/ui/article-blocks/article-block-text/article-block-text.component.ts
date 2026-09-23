import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import DOMPurify from 'dompurify';

import { MarkdownRendererComponent } from '@shared/ui/markdown-renderer';

import { TextBlockData } from '../../../model/types/article.types';

@Component({
	selector: 'app-article-block-text',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MarkdownRendererComponent],
	templateUrl: './article-block-text.component.html',
	styleUrl: './article-block-text.component.scss',
})
export class ArticleBlockTextComponent {
	readonly data = input.required<TextBlockData>();

	readonly sanitizedHtml = computed(() => {
		const blockData = this.data();
		if (blockData.format === 'HTML' && blockData.content) {
			return DOMPurify.sanitize(blockData.content);
		}
		return '';
	});
}
