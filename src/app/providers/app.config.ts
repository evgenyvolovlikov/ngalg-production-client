import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { apiInterceptor } from '@shared/api/api.interceptor';
import { ENVIRONMENT } from '@shared/config/environment.config';

import { environment } from '../../environments/environment';
import { APP_ROUTES } from '../routes/app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideRouter(
			APP_ROUTES,
			withComponentInputBinding(),
			withInMemoryScrolling({
				scrollPositionRestoration: 'enabled',
				anchorScrolling: 'enabled',
			}),
		),
		provideHttpClient(withFetch(), withInterceptors([apiInterceptor])),
		{ provide: ENVIRONMENT, useValue: environment },
	],
};
