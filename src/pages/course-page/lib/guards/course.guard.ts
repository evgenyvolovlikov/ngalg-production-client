import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const courseSlugGuard: CanActivateFn = (route) => {
	const slug = route.paramMap.get('slug');

	if (slug) {
		return true;
	}

	return inject(Router).createUrlTree(['/']);
};
