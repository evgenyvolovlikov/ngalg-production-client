import { Routes } from '@angular/router';

import { courseSlugGuard } from '@pages/course-page';

import { RouteSegments } from '@shared/config/routes.config';

import { AccountLayoutComponent } from '../layouts/account-layout/account-layout.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';

export const COURSE_ROUTES: Routes = [
	{
		path: ':slug',
		canActivate: [courseSlugGuard],
		children: [
			{
				path: RouteSegments.ROOT,
				loadComponent: () =>
					import('@pages/course-page').then((c) => c.CoursePageComponent),
				title: 'Course',
			},
			{
				path: RouteSegments.WILDCARD,
				redirectTo: '',
			},
		],
	},
];

export const ACCOUNT_ROUTES: Routes = [
	{
		path: RouteSegments.ROOT,
		redirectTo: RouteSegments.OVERVIEW,
		pathMatch: 'full',
	},
	{
		path: RouteSegments.OVERVIEW,
		loadComponent: () =>
			import('@pages/account-overview-page/account-overview-page.component').then(
				(c) => c.AccountOverviewPageComponent,
			),
		title: 'Account Overview',
	},
	{
		path: RouteSegments.TRANSACTIONS,
		loadComponent: () =>
			import('@pages/account-transactions-page/account-transactions-page.component').then(
				(c) => c.AccountTransactionsPageComponent,
			),
		title: 'Account Transactions',
	},
];

export const APP_ROUTES: Routes = [
	{
		path: RouteSegments.ROOT,
		pathMatch: 'full',
		loadComponent: () => import('@pages/home-page').then((m) => m.HomePageComponent),
	},
	{
		path: RouteSegments.COURSES,
		component: MainLayoutComponent,
		children: COURSE_ROUTES,
	},

	{
		path: RouteSegments.ACCOUNT,
		component: AccountLayoutComponent,
		children: ACCOUNT_ROUTES,
	},
	{
		path: RouteSegments.WILDCARD,
		redirectTo: RouteSegments.ROOT,
	},
];
