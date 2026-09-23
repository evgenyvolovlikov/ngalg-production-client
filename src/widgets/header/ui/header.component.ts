import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthByOAuthComponent } from '@features/auth-by-oauth';

import { ButtonComponent } from '@shared/ui/button';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, AuthByOAuthComponent, ButtonComponent],
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
