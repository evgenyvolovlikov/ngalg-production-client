import { Injectable, computed, inject, signal } from '@angular/core';

import { Observable, catchError, finalize, of, tap } from 'rxjs';

import { UserApiService } from '../api/user-api.service';
import { UserProfile } from './user.types';

@Injectable({
	providedIn: 'root',
})
export class UserStore {
	private readonly userApi = inject(UserApiService);

	private readonly profileState = signal<UserProfile | null>(null);
	private readonly loadingState = signal<boolean>(false);
	private readonly loadedState = signal<boolean>(false);

	readonly profile = this.profileState.asReadonly();
	readonly isLoading = this.loadingState.asReadonly();
	readonly isLoaded = this.loadedState.asReadonly();

	readonly isAuthenticated = computed(() => this.profileState() !== null);

	load(): Observable<UserProfile | null> {
		this.loadingState.set(true);

		return this.userApi.getMyProfile().pipe(
			tap((profile) => this.profileState.set(profile)),
			catchError(() => {
				this.profileState.set(null);
				return of(null);
			}),
			finalize(() => {
				this.loadingState.set(false);
				this.loadedState.set(true);
			}),
		);
	}

	setProfile(profile: UserProfile | null): void {
		this.profileState.set(profile);
	}

	clear(): void {
		this.profileState.set(null);
	}
}
