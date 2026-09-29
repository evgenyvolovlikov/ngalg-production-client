import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths';
import { BaseApiService } from '@shared/api/base-api.service';

import { UserProfile } from '../model/user.types';

@Injectable({ providedIn: 'root' })
export class UserApiService extends BaseApiService {
	private readonly profilePath = ApiPaths.PROFILES;
	private readonly profileMePath = ApiPaths.ME;

	/**
	 * Запрос на получение профиля текущего пользователя
	 */
	getMyProfile(): Observable<UserProfile> {
		return this.get<UserProfile>(`${this.profilePath}/${this.profileMePath}`);
	}

	/**
	 * Обновление поля username текущего профиля
	 */
	public updateUsername(username: string): Observable<UserProfile> {
		return this.patch<UserProfile, { username: string }>(
			`${this.profilePath}/${this.profileMePath}`,
			{ username },
		);
	}
}
