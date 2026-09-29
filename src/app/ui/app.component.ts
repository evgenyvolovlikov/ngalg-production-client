import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastComponent } from '@shared/ui/toast';

@Component({
	selector: 'app-root',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<router-outlet /> <app-toast />`,
	imports: [RouterOutlet, ToastComponent],
})
export class AppComponent {}
