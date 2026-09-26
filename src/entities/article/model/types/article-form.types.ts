import { FormArray, FormControl, FormGroup } from '@angular/forms';

import {
	ArticleBlockType,
	ArticleLevel,
	ArticleStatus,
	NavigationTag,
	NoteType,
	TextFormat,
} from './article.types';

// --- Формы контентных блоков ---

export interface TextBlockForm {
	format: FormControl<TextFormat>;
	content: FormControl<string>;
}

export interface NoteBlockForm {
	text: FormControl<string>;
	noteType: FormControl<NoteType>;
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
	data: FormGroup<any>;
}

// --- Вспомогательные формы ---

export interface CoverImageForm {
	url: FormControl<string>;
	alt: FormControl<string>;
	caption: FormControl<string | null>;
}

export interface SeoForm {
	description: FormControl<string | null>;
	keywords: FormControl<string[]>;
}

// --- Главная форма ---

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

	seo: FormGroup<SeoForm>;

	blocks: FormArray<FormGroup<BlockFormGroup>>;
}
