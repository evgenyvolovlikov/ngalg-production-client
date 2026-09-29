export type ArticleStatus = 'DRAFT' | 'ARCHIVED' | 'PUBLISHED';
export type ArticleLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type NoteType = 'INFO' | 'WARNING' | 'ERROR';
export type TextFormat = 'HTML' | 'MARKDOWN';

export interface TextBlockData {
	format: TextFormat;
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
	caption?: string | null;
}

export interface ComplexityBlockData {
	time: string;
	space: string;
	description?: string;
}

export interface FeatureItem {
	title: string;
	text: string;
}

export interface FeaturesBlockData {
	sectionTitle?: string | null;
	items: FeatureItem[];
}

export type ArticleBlockType = 'TEXT' | 'CODE' | 'NOTE' | 'COMPLEXITY' | 'IMAGE' | 'FEATURES';

export type ArticleBlockData =
	| TextBlockData
	| CodeBlockData
	| NoteBlockData
	| ComplexityBlockData
	| ImageBlockData
	| FeaturesBlockData;

export interface ArticleBlock {
	id: string;
	type: ArticleBlockType;
	data: ArticleBlockData;
}

/** Alias used by article-block-renderer and manage-article */
export type ArticleContentBlock = ArticleBlock;

export interface CoverImage {
	url: string;
	alt: string;
	caption?: string | null;
}

export interface NavigationTag {
	id: string;
	name: string;
	slug: string;
}

export interface SeoMetadata {
	description?: string | null;
	keywords?: string[];
}

export interface Article {
	id: string;
	title: string;
	slug: string;
	leadText: string;
	description: string;
	coverImage: CoverImage;
	status: ArticleStatus;
	level: ArticleLevel;
	tags: NavigationTag[];
	blocks: ArticleBlock[];
	readingTimeMinutes: number;
	authorId: string;
	categoryId: string;
	seo?: SeoMetadata;
	problemId?: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface ArticleListResponse {
	items: Article[];
	total: number;
}

export interface GetArticlesQueryDto {
	status?: ArticleStatus;
	categoryId?: string;
	limit?: number;
	offset?: number;
}

export type CreateArticleDto = Omit<Article, 'id' | 'createdAt' | 'updatedAt' | 'authorId'> & {
	authorId?: string;
};

export type UpdateArticleDto = Partial<CreateArticleDto>;
