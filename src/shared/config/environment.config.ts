import { InjectionToken } from '@angular/core';

export interface EnvironmentToken {
	production: boolean;
	apiUrl: string;
}

export const ENVIRONMENT = new InjectionToken<EnvironmentToken>('ENVIRONMENT');
