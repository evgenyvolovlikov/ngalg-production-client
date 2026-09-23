import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RouteSegments } from '@shared/config/routes.config';
import { AppLogoComponent } from '@shared/ui/app-logo';
import { ButtonComponent } from '@shared/ui/button';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [RouterLink, ButtonComponent, AppLogoComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
	protected readonly frontendRoute = `/${RouteSegments.FRONTEND}`;
}
