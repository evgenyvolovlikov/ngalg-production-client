export type NavigationTag =
	'THEORY' | 'COMPONENT' | 'EXAMPLE' | 'ALGORITHM' | 'STRUCTURE' | 'ARCHITECTURE' | 'PATTERNS';

export interface NavigationArticle {
	id: string;
	title: string;
	slug: string;
	tag?: NavigationTag;
}

export interface NavigationCategory {
	id: string;
	title: string;
	children: NavigationArticle[];
}

export interface NavigationSection {
	id: string;
	title: string;
	items: NavigationCategory[];
}
