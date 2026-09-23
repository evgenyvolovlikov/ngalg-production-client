import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-logo',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './app-logo.component.html',
	styleUrl: './app-logo.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLogoComponent {}
