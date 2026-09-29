import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { UserProfile } from '../../model/user.types';

type AuthProvider = 'GOOGLE' | 'GITHUB'; // ← ДОБАВИТЬ

@Component({
	selector: 'app-user-profile-hero',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-profile-hero.component.html',
	styleUrl: './user-profile-hero.component.scss',
})
export class UserProfileHeroComponent {
	readonly profile = input.required<UserProfile>();

	readonly name = computed(() => {
		const profile = this.profile();
		const fullName = `${profile.firstName ?? ''} ${profile.lastName ?? ''}`.trim();
		return fullName || profile.username;
	});

	readonly initial = computed(() => this.name().charAt(0).toUpperCase());
	readonly avatarUrl = computed(() => this.profile().avatarUrl ?? null);
	readonly accountType = computed(() => this.profile().accounts);

	readonly providerLabels = computed(
		() =>
			({
				GOOGLE: 'Google',
				GITHUB: 'GitHub',
			}) as Record<AuthProvider, string>,
	);
}
