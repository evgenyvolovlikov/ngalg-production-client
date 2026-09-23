import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-google-oauth-button',
	standalone: true,
	imports: [ButtonComponent, IconComponent],
	templateUrl: './google-button.component.html',
	styleUrl: './google-button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleOauthButtonComponent {
	readonly clickButton = output<void>();
}
