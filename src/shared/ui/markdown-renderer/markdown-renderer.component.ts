import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

@Component({
	selector: 'app-markdown-renderer',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './markdown-renderer.component.html',
	styleUrl: './markdown-renderer.component.scss',
})
export class MarkdownRendererComponent {
	readonly rawMarkdown = input.required<string>();
	private readonly sanitizer = inject(DomSanitizer);

	readonly parsedContent = computed<SafeHtml>(() => {
		const rawText = this.rawMarkdown();

		if (!rawText) {
			return '';
		}

		const rawHtml = marked.parse(rawText) as string;
		const cleanHtml = DOMPurify.sanitize(rawHtml);

		return this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
	});
}
