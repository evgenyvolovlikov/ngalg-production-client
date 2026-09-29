import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DeleteAccountComponent } from '@features/delete-account';

@Component({
	selector: 'app-account-settings-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<app-delete-account />`,
	imports: [DeleteAccountComponent],
})
export class AccountSettingsPageComponent {}
