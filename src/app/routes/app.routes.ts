import { Routes } from '@angular/router';

import { RouteSegments } from '@shared/config';

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
				redirectTo: RouteSegments.FRONTEND,
			},
			{
				path: RouteSegments.FRONTEND,
				loadComponent: () =>
					import('@pages/course-page').then((c) => c.CoursePageComponent),
				children: [
					{
						path: '',
						redirectTo: 'overview',
						pathMatch: 'full',
					},
				],
			},
		],
	},

	{
		path: RouteSegments.WILDCARD,
		redirectTo: RouteSegments.FRONTEND,
	},
];
