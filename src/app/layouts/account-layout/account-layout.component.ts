import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AccountNavigationComponent } from '@widgets/account-navigation';

import { UserApiService, UserProfile, UserProfileHeroComponent } from '@entities/user';

@Component({
	selector: 'app-account-layout',
	standalone: true,
	imports: [RouterOutlet, AccountNavigationComponent, UserProfileHeroComponent],
	templateUrl: './account-layout.component.html',
	styleUrl: './account-layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLayoutComponent {
	private readonly userApi = inject(UserApiService);

	readonly profile = signal<UserProfile | null>(null);

	constructor() {
		this.userApi.getMyProfile().subscribe({
			next: (profile) => this.profile.set(profile),
			error: () => this.profile.set(null),
		});
	}
}
