import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { map } from 'rxjs';

import { UserStore } from '@entities/user';

export const adminGuard: CanActivateFn = () => {
	const store = inject(UserStore);
	const router = inject(Router);

	if (store.isLoaded()) {
		return checkAdmin(store, router);
	}

	return store.load().pipe(map(() => checkAdmin(store, router)));
};

function checkAdmin(store: UserStore, router: Router): true | ReturnType<Router['createUrlTree']> {
	if (store.isAuthenticated() && store.isAdmin()) {
		return true;
	}
	return router.createUrlTree(['/courses/frontend']);
}
