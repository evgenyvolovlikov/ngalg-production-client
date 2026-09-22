import { Routes } from '@angular/router';

import { courseSlugGuard } from '@pages/course-page';

import { RouteSegments } from '@shared/config/routes.config';

export const APP_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('../layouts/main-layout/main-layout.component').then(
				(m) => m.MainLayoutComponent,
			),
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'frontend',
			},
			{
				path: ':slug',
				canActivate: [courseSlugGuard],
				loadComponent: () =>
					import('@pages/course-page').then((c) => c.CoursePageComponent),
			},
		],
	},
	{
		path: RouteSegments.WILDCARD,
		redirectTo: 'frontend',
	},
];
