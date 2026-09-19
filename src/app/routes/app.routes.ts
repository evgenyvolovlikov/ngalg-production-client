import { Routes } from '@angular/router';

import { RouteSegments } from '@shared/config';

export const APP_ROUTES: Routes = [
	{
		path: RouteSegments.COURSE,
		loadComponent: () => import('@pages/course-page').then((c) => c.CoursePageComponent),
	},

	{
		path: RouteSegments.WILDCARD,
		redirectTo: RouteSegments.COURSE,
	},
];
