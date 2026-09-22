import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const ALLOWED_SLUGS = ['frontend', 'backend'];

export const courseSlugGuard: CanActivateFn = (route) => {
	const router = inject(Router);
	const slug = route.paramMap.get('slug');

	if (slug && ALLOWED_SLUGS.includes(slug)) {
		return true;
	}

	return router.createUrlTree(['/frontend']);
};
