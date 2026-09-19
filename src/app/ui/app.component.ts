import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-root',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div>Hello World</div>`,
	imports: [],
})
export class AppComponent {}
