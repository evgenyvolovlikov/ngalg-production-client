import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { map } from 'rxjs';

import { UserStore } from '@entities/user';

export const authGuard: CanActivateFn = () => {
	const store = inject(UserStore);
	const router = inject(Router);

	if (store.isLoaded()) {
		return store.isAuthenticated() ? true : router.createUrlTree(['/courses/frontend']);
	}

	return store
		.load()
		.pipe(
			map(() =>
				store.isAuthenticated() ? true : router.createUrlTree(['/courses/frontend']),
			),
		);
};
