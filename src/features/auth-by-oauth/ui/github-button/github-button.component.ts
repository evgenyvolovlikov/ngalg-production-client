import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-github-oauth-button',
	standalone: true,
	imports: [ButtonComponent, IconComponent],
	templateUrl: './github-button.component.html',
	styleUrl: './github-button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubOauthButtonComponent {
	readonly clickButton = output<void>();
}
