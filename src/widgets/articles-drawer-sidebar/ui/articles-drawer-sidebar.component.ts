import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

import { ArticleDrawerNavigationComponent } from '@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button';
import { DrawerComponent } from '@shared/ui/drawer';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-articles-drawer-sidebar',
	standalone: true,
	templateUrl: './articles-drawer-sidebar.component.html',
	styleUrl: './articles-drawer-sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [IconComponent, DrawerComponent, ButtonComponent, ArticleDrawerNavigationComponent],
})
export class ArticlesDrawerSidebarComponent {
	readonly isArticlesOpen = signal<boolean>(false);

	constructor() {
		effect(() => {
			if (this.isArticlesOpen()) {
				document.body.classList.add('lock-scroll');
			} else {
				document.body.classList.remove('lock-scroll');
			}
		});
	}

	protected toggleArticlesOpen(): void {
		this.isArticlesOpen.update((state) => !state);
	}
}
