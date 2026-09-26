import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { UserProfile } from '../../model/user.types';

const PROVIDER_LABELS: Record<UserProfile['provider'], string> = {
	GOOGLE: 'Google',
	GITHUB: 'GitHub',
	LOCAL: 'Email',
};

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
	readonly accountType = computed(() => PROVIDER_LABELS[this.profile().provider]);
}
