import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';

import { ENVIRONMENT } from '@shared/config/environment.config';
import { ModalComponent } from '@shared/ui/modal';

import { GithubOauthButtonComponent } from './github-button/github-button.component';
import { GoogleOauthButtonComponent } from './google-button/google-button.component';

type OAuthProvider = 'github' | 'google';

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

	private readonly environment = inject(ENVIRONMENT);

	protected loginWithGitHub(): void {
		this.redirectToProvider('github');
	}

	protected loginWithGoogle(): void {
		this.redirectToProvider('google');
	}

	private redirectToProvider(provider: OAuthProvider): void {
		sessionStorage.setItem('authReturnUrl', window.location.pathname + window.location.search);
		window.location.href = `${this.environment.apiUrl}/auth/${provider}`;
	}
}
