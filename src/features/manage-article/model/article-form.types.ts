import { FormArray, FormControl, FormGroup } from '@angular/forms';

import type { ArticleBlockType, ArticleLevel, ArticleStatus } from '@entities/article';
import type { NavigationTag } from '@entities/article';

export interface TextBlockForm {
	format: FormControl<string>;
	content: FormControl<string>;
}

export interface NoteBlockForm {
	text: FormControl<string>;
	noteType: FormControl<string>;
}

export interface CodeBlockForm {
	code: FormControl<string>;
	language: FormControl<string>;
	filename: FormControl<string>;
}

export interface ImageBlockForm {
	url: FormControl<string>;
	alt: FormControl<string>;
	caption: FormControl<string | null>;
}

export interface ComplexityBlockForm {
	time: FormControl<string>;
	space: FormControl<string>;
	description: FormControl<string>;
}

export interface FeatureItemForm {
	title: FormControl<string>;
	text: FormControl<string>;
}

export interface FeaturesBlockForm {
	sectionTitle: FormControl<string | null>;
	items: FormArray<FormGroup<FeatureItemForm>>;
}

export interface BlockFormGroup {
	type: FormControl<ArticleBlockType>;
	data: FormGroup;
}

export interface CoverImageForm {
	url: FormControl<string>;
	alt: FormControl<string>;
	caption: FormControl<string | null>;
}

export interface SeoForm {
	description: FormControl<string | null>;
	keywords: FormControl<string[]>;
}

export interface ArticleFormModel {
	problemId: FormControl<string | null>;
	readingTimeMinutes: FormControl<number>;
	title: FormControl<string>;
	slug: FormControl<string>;
	categoryId: FormControl<string>;
	status: FormControl<ArticleStatus>;
	level: FormControl<ArticleLevel>;
	leadText: FormControl<string>;
	description: FormControl<string>;
	coverImage: FormGroup<CoverImageForm>;
	tags: FormControl<NavigationTag[]>;
	seo: FormGroup<SeoForm>; // ← ДОБАВИТЬ
	blocks: FormArray<FormGroup<BlockFormGroup>>;
}
