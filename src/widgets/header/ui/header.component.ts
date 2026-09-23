import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { AuthByOauthComponent } from '@features/auth-by-oauth';

import { AppLogoComponent } from '@shared/ui/app-logo';
import { ButtonComponent } from '@shared/ui/button';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [AuthByOauthComponent, ButtonComponent, AppLogoComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	readonly isAuthOpen = signal<boolean>(false);

	protected openAuth(): void {
		this.isAuthOpen.set(true);
	}
}
