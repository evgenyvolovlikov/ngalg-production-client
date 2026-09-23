import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';
import { DrawerComponent } from '@shared/ui/drawer';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-articles-drawer-sidebar',
	standalone: true,
	templateUrl: './articles-drawer-sidebar.component.html',
	styleUrl: './articles-drawer-sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [IconComponent, DrawerComponent, ButtonComponent],
})
export class ArticlesDrawerSidebarComponent {
	readonly isArticlesOpen = signal<boolean>(false);

	protected toggleArticlesOpen(): void {
		this.isArticlesOpen.update((state) => !state);
	}
}
