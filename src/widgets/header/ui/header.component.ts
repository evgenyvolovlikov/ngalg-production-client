import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AuthByOauthComponent } from '@features/auth-by-oauth';

import { UserStore } from '@entities/user';

import { AppLogoComponent } from '@shared/ui/app-logo';
import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [AuthByOauthComponent, ButtonComponent, AppLogoComponent, IconComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	private readonly router = inject(Router);
	protected readonly userStore = inject(UserStore);
	protected readonly isAuthOpen = signal<boolean>(false);

	protected openAuth(): void {
		this.isAuthOpen.set(true);
	}

	protected openProfile(): void {
		this.router.navigate(['/', 'account', 'overview']);
	}
}
