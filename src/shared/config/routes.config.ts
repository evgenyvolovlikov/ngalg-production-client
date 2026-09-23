import { IconName } from '../ui/icon';

export interface NavItem {
	path: string;
	label: string;
	icon?: IconName;
}

export const RouteSegments = {
	ROOT: '',

	COURSES: 'courses',

	FRONTEND: 'frontend',
	BACKEND: 'backend',

	ACCOUNT: 'account',
	OVERVIEW: 'overview',
	TRANSACTIONS: 'transactions',

	WILDCARD: '**',
} as const;

export const RouteBuilder = {
	HOME: () => '/',

	ACCOUNT_OVERVIEW: () => `/${RouteSegments.ACCOUNT}/${RouteSegments.OVERVIEW}`,
	ACCOUNT_TRANSACTIONS: () => `/${RouteSegments.ACCOUNT}/${RouteSegments.TRANSACTIONS}`,

	COURSE_DETAILS: (slug: string) => `/${RouteSegments.COURSES}/${slug}`,
} as const;

export const ACCOUNT_SIDEBAR_ITEMS: NavItem[] = [
	{ path: RouteBuilder.ACCOUNT_OVERVIEW(), label: 'Профиль', icon: 'person' },
	{ path: RouteBuilder.ACCOUNT_TRANSACTIONS(), label: 'Подписки', icon: 'credit-card' },
];
