import { IconName } from '../ui/icon';

export interface NavItem {
	path: string;
	label: string;
	icon?: IconName;
}

export const RouteSegments = {
	ROOT: '',

	COURSES: 'courses',
	COURSE_DETAILS: ':slug',

	ARTICLES: 'articles',
	ARTICLES_CREATE: 'create',
	ARTICLE_EDIT: ':id/edit',

	FRONTEND: 'frontend',

	ACCOUNT: 'account',
	OVERVIEW: 'overview',
	TRANSACTIONS: 'transactions',

	WILDCARD: '**',
} as const;

export const RouteBuilder = {
	HOME: () => '/',

	ARTICLES: () => `/${RouteSegments.ARTICLES}`,
	ARTICLE_CREATE: () => `/${RouteSegments.ARTICLES}/${RouteSegments.ARTICLES_CREATE}`,
	ARTICLE_EDIT: (id: string) => `/${RouteSegments.ARTICLES}/${id}/edit`,

	ACCOUNT_OVERVIEW: () => `/${RouteSegments.ACCOUNT}/${RouteSegments.OVERVIEW}`,
	ACCOUNT_TRANSACTIONS: () => `/${RouteSegments.ACCOUNT}/${RouteSegments.TRANSACTIONS}`,

	COURSE_DETAILS: (slug: string) => `/${RouteSegments.COURSES}/${slug}`,
} as const;

export const ACCOUNT_SIDEBAR_ITEMS: NavItem[] = [
	{ path: RouteBuilder.ACCOUNT_OVERVIEW(), label: 'Профиль', icon: 'person' },
	{ path: RouteBuilder.ACCOUNT_TRANSACTIONS(), label: 'Подписки', icon: 'credit-card' },
];
