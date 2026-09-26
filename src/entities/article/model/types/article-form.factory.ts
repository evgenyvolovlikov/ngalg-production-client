import { FormArray, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { createBlockGroup } from './article-blocks-form.factory';
import { ArticleFormModel, BlockFormGroup } from './article-form.types';
import { ArticleContentBlock, ArticleLevel, ArticleStatus, NavigationTag } from './article.types';

export function createInitialArticleForm(fb: NonNullableFormBuilder): FormGroup<ArticleFormModel> {
	return fb.group({
		problemId: fb.control<string | null>(null),
		readingTimeMinutes: fb.control(1, [Validators.min(1)]),

		title: fb.control('', [Validators.required]),
		slug: fb.control('', [Validators.required]),
		categoryId: fb.control('', [Validators.required]),

		status: fb.control<ArticleStatus>('PUBLISHED', [Validators.required]),
		level: fb.control<ArticleLevel>('BEGINNER', [Validators.required]),

		leadText: fb.control('', [Validators.required]),
		description: fb.control('', [Validators.required]),

		coverImage: fb.group({
			url: fb.control('', [Validators.required]),
			alt: fb.control('', [Validators.required]),
			caption: fb.control<string | null>(null),
		}),

		tags: fb.control<NavigationTag[]>([]),

		seo: fb.group({
			description: fb.control<string | null>(null),
			keywords: fb.control<string[]>([]),
		}),

		blocks: fb.array<FormGroup<BlockFormGroup>>([]),
	});
}

export function populateArticleBlocks(
	fb: NonNullableFormBuilder,
	blocksFormArray: FormArray,
	blocksData: ArticleContentBlock[],
): void {
	blocksFormArray.clear();

	if (!blocksData || !Array.isArray(blocksData)) return;

	blocksData.forEach((block) => {
		const blockGroup = createBlockGroup(fb, block.type, block.data);
		blocksFormArray.push(blockGroup);
	});
}
