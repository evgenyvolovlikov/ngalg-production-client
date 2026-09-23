import { Type } from '@angular/core';

import { ArticleBlockType } from '../../model/types/article.types';
import { ArticleBlockCodeComponent } from './article-block-code/article-block-code.component';
import { ArticleBlockComplexityComponent } from './article-block-complexity/article-block-complexity';
import { ArticleBlockFeaturesComponent } from './article-block-features/article-block-features.component';
import { ArticleBlockImageComponent } from './article-block-image/article-block-image.component';
import { ArticleBlockNoteComponent } from './article-block-note/article-block-note.component';
import { ArticleBlockTextComponent } from './article-block-text/article-block-text.component';

export const ARTICLE_BLOCK_REGISTRY: Record<ArticleBlockType, Type<unknown>> = {
	TEXT: ArticleBlockTextComponent,
	CODE: ArticleBlockCodeComponent,
	NOTE: ArticleBlockNoteComponent,
	COMPLEXITY: ArticleBlockComplexityComponent,
	IMAGE: ArticleBlockImageComponent,
	FEATURES: ArticleBlockFeaturesComponent,
};
