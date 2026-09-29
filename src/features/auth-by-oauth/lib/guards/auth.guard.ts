import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserStore } from '@entities/user';

export const authGuard: CanActivateFn = () => {
	const store = inject(UserStore);
	return store.isAuthenticated() ? true : inject(Router).createUrlTree(['/courses/frontend']);
};
