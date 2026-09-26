import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ArticleBlockType } from '../../../model/types/article.types';
import { ARTICLE_BLOCK_FORM_REGISTRY } from '../article-form.registry';

@Component({
	selector: 'app-article-block-form-renderer',
	standalone: true,
	imports: [NgComponentOutlet],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: `
		:host {
			display: block;
			width: 100%;
		}

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
})
export class ArticleBlockFormRendererComponent {
	readonly type = input.required<ArticleBlockType>();
	readonly dataFormGroup = input.required<FormGroup>();

	readonly componentType = computed(() => ARTICLE_BLOCK_FORM_REGISTRY[this.type()] ?? null);
}
