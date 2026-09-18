import { ApplicationConfig, ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
	providers: [],
};

@Component({
	selector: 'app-root',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div>Hello World</div>`,
	imports: [],
})
export class AppComponent {}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
