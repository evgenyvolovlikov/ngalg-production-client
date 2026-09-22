import { ChangeDetectionStrategy, Component, model } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';
import { ModalComponent } from '@shared/ui/modal';

@Component({
	selector: 'app-auth-by-github',
	standalone: true,
	imports: [ModalComponent, ButtonComponent, IconComponent],
	templateUrl: './auth-by-github.component.html',
	styleUrl: './auth-by-github.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthByGithubComponent {
	readonly isOpen = model<boolean>(false);

	protected loginWithGitHub(): void {
		return;
	}
}
