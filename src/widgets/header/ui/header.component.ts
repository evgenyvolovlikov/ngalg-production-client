import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthByGithubComponent } from '@features/auth-by-github';

import { ButtonComponent } from '@shared/ui/button';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, AuthByGithubComponent, ButtonComponent],
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
