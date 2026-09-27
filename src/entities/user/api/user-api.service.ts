import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths';
import { BaseApiService } from '@shared/api/base-api.service';

import { UserProfile } from '../model/user.types';

@Injectable({ providedIn: 'root' })
export class UserApiService extends BaseApiService {
	private readonly profilePath = ApiPaths.PROFILES;

	getMyProfile(): Observable<UserProfile> {
		return this.get<UserProfile>(`/${this.profilePath}/me`);
	}
}
