import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AccountNavigationComponent } from '@widgets/account-navigation';

import { UserProfileHeroComponent } from '@entities/user';

@Component({
	selector: 'app-account-layout',
	standalone: true,
	imports: [RouterOutlet, AccountNavigationComponent, UserProfileHeroComponent],
	templateUrl: './account-layout.component.html',
	styleUrl: './account-layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLayoutComponent {}
