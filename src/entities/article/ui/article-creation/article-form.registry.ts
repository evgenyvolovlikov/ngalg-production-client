import { Type } from '@angular/core';

import { ArticleBlockType } from '../../model/types/article.types';
import { ArticleTextBlockFormComponent } from './aritcle-text-block-form/article-text-block-form.component';
import { ArticleCodeBlockFormComponent } from './article-code-block-form/article-code-block-form.component';
import { ArticleComplexityBlockFormComponent } from './article-complexity-block-form/article-complexity-block-form.component';
import { ArticleFeaturesBlockFormComponent } from './article-features-block-form/article-features-block-form.component';
import { ArticleImageBlockFormComponent } from './article-image-block/article-image-block-form.component';
import { ArticleNoteBlockFormComponent } from './article-note-block-form/article-note-block-form.component';

export const ARTICLE_BLOCK_FORM_REGISTRY: Record<ArticleBlockType, Type<unknown>> = {
	TEXT: ArticleTextBlockFormComponent,
	CODE: ArticleCodeBlockFormComponent,
	FEATURES: ArticleFeaturesBlockFormComponent,
	NOTE: ArticleNoteBlockFormComponent,
	COMPLEXITY: ArticleComplexityBlockFormComponent,
	IMAGE: ArticleImageBlockFormComponent,
};
