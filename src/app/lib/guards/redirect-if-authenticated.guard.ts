import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserStore } from '@entities/user';

import { RouteSegments } from '@shared/config/routes.config';

export const redirectIfAuthenticatedGuard: CanActivateFn = () => {
	const userStore = inject(UserStore);
	const router = inject(Router);

	if (userStore.isAuthenticated()) {
		return router.createUrlTree([RouteSegments.COURSES, RouteSegments.FRONTEND]);
	}

	return true;
};
