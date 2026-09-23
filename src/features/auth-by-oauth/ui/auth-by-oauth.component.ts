import { ChangeDetectionStrategy, Component, model } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';
import { ModalComponent } from '@shared/ui/modal';

@Component({
	selector: 'app-auth-by-oauth',
	standalone: true,
	imports: [ModalComponent, ButtonComponent, IconComponent],
	templateUrl: './auth-by-oauth.component.html',
	styleUrl: './auth-by-github.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthByOAuthComponent {
	readonly isOpen = model<boolean>(false);

	protected loginWithGitHub(): void {
		return;
	}

	protected loginWithGoogle(): void {
		return;
	}
}
