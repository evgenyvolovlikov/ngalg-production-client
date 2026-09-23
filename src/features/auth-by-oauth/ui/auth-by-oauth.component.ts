import { ChangeDetectionStrategy, Component, model } from '@angular/core';

import { ModalComponent } from '@shared/ui/modal';

import { GithubOauthButtonComponent } from './github-button/github-button.component';
import { GoogleOauthButtonComponent } from './google-button/google-button.component';

@Component({
	selector: 'app-auth-by-oauth',
	standalone: true,
	imports: [ModalComponent, GoogleOauthButtonComponent, GithubOauthButtonComponent],
	templateUrl: './auth-by-oauth.component.html',
	styleUrl: './auth-by-oauth.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthByOauthComponent {
	readonly isOpen = model<boolean>(false);

	protected loginWithGitHub(): void {
		// Бизнес-логика OAuth для GitHub
		return;
	}

	protected loginWithGoogle(): void {
		// Бизнес-логика OAuth для Google
		return;
	}
}
