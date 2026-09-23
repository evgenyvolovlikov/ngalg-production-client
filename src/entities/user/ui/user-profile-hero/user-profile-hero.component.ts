import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
	selector: 'app-user-profile-hero',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-profile-hero.component.html',
	styleUrl: './user-profile-hero.component.scss',
})
export class UserProfileHeroComponent {
	private readonly mockProfile = signal({
		firstName: 'Евгений',
		lastName: 'Воловликов',
		username: 'evgenyvolovlikov',
		avatarUrl: null as string | null,
	});

	readonly name = computed(() => {
		const p = this.mockProfile();
		if (p.firstName || p.lastName) {
			return `${p.firstName || ''} ${p.lastName || ''}`.trim();
		}
		return p.username;
	});

	readonly initial = computed(() => {
		const userName = this.name();
		return userName.charAt(0).toUpperCase();
	});

	readonly avatarUrl = computed(() => {
		return this.mockProfile().avatarUrl;
	});

	readonly accountType = computed(() => {
		return 'Google';
	});
}
