export type ArticleStatus = 'DRAFT' | 'ARCHIVED' | 'PUBLISHED';
export type ArticleLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type NoteType = 'INFO' | 'WARNING' | 'ERROR';
export type TextFormat = 'HTML' | 'MARKDOWN';

export interface TextBlockData {
	format: string;
	content: string;
}

export interface NoteBlockData {
	text: string;
	noteType: NoteType;
}

export interface CodeBlockData {
	code: string;
	language: string;
	filename?: string;
}

export interface ImageBlockData {
	url: string;
	alt: string;
	caption?: string;
}

export interface ComplexityBlockData {
	time: string;
	space: string;
	description: string;
}

export interface FeatureItem {
	title: string;
	text: string;
}

export interface FeaturesBlockData {
	sectionTitle: string;
	items: FeatureItem[];
}

export interface TextBlock {
	type: 'TEXT';
	data: TextBlockData;
}
export interface NoteBlock {
	type: 'NOTE';
	data: NoteBlockData;
}
export interface CodeBlock {
	type: 'CODE';
	data: CodeBlockData;
}
export interface ImageBlock {
	type: 'IMAGE';
	data: ImageBlockData;
}
export interface ComplexityBlock {
	type: 'COMPLEXITY';
	data: ComplexityBlockData;
}
export interface FeaturesBlock {
	type: 'FEATURES';
	data: FeaturesBlockData;
}

export type ArticleContentBlock =
	TextBlock | NoteBlock | CodeBlock | ImageBlock | ComplexityBlock | FeaturesBlock;

export type ArticleBlockType = ArticleContentBlock['type'];

export interface ArticleImage {
	url: string;
	alt: string;
	caption?: string;
}

export interface SeoMetadata {
	description?: string;
	keywords?: string[];
}

export type ProblemId = string;
export type AuthorId = string;
export type ArticleId = string;
export type CategoryId = string;

export type NavigationTag =
	'THEORY' | 'COMPONENT' | 'EXAMPLE' | 'ALGORITHM' | 'STRUCTURE' | 'ARCHITECTURE' | 'PATTERNS';

export interface Article {
	id: ArticleId;
	slug: string;
	title: string;
	leadText: string;
	description: string;
	problemId?: ProblemId;
	authorId?: AuthorId;
	categoryId: CategoryId;
	tags: NavigationTag[];
	status: ArticleStatus;
	level: ArticleLevel;
	coverImage?: ArticleImage;
	readingTimeMinutes: number;
	seo: SeoMetadata;
	blocks: ArticleContentBlock[];
	createdAt: string;
	updatedAt: string;
}

export interface GetArticlesQueryDto {
	status?: ArticleStatus;
	categoryId?: string;
}
