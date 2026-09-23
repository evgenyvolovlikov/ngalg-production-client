import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ACCOUNT_SIDEBAR_ITEMS } from '@shared/config/routes.config';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-account-navigation',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, RouterLinkActive, IconComponent],
	template: `
		<nav class="account-nav">
			@for (item of accountNavigationElements; track item.path) {
				<a [routerLink]="item.path" routerLinkActive="is-active" class="account-nav__link">
					@if (item.icon) {
						<app-icon [name]="item.icon" class="account-nav__icon" />
					}
					<span class="account-nav__label">{{ item.label }}</span>
				</a>
			}
		</nav>
	`,
	styleUrl: './account-navigation.component.scss',
})
export class AccountNavigationComponent {
	protected readonly accountNavigationElements = ACCOUNT_SIDEBAR_ITEMS;
}
