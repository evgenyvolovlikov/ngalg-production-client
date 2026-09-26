import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api/base-api.service';
import { RouteSegments } from '@shared/config/routes.config';

import { UserProfile } from '../model/user.types';

@Injectable({ providedIn: 'root' })
export class UserApiService extends BaseApiService {
	private readonly profilePath = RouteSegments.PROFILES;

	getMyProfile(): Observable<UserProfile> {
		return this.get<UserProfile>(`/${this.profilePath}/me`);
	}
}
