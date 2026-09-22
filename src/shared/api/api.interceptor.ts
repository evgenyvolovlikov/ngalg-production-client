import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { ENVIRONMENT } from '../config/environment.config';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
	const env = inject(ENVIRONMENT, { optional: true });
	const baseUrl = env?.apiUrl;

	if (!baseUrl || req.url.startsWith('http://') || req.url.startsWith('https://')) {
		return next(req);
	}

	const apiReq = req.clone({
		url: `${baseUrl.replace(/\/$/, '')}/${req.url.replace(/^\//, '')}`,
	});

	return next(apiReq);
};
