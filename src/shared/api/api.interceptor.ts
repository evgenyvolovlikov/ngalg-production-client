import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { ENVIRONMENT } from '../config/environment.config';

/**
 * Единая точка настройки запросов к собственному API:
 * подставляет baseUrl из окружения и включает отправку cookie.
 */
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
	const env = inject(ENVIRONMENT, { optional: true });
	const baseUrl = env?.apiUrl;
	const isAbsolute = /^https?:\/\//i.test(req.url);

	if (!baseUrl || isAbsolute) {
		return next(req);
	}

	const apiReq = req.clone({
		url: `${baseUrl.replace(/\/$/, '')}/${req.url.replace(/^\//, '')}`,
		withCredentials: true,
	});

	return next(apiReq);
};
