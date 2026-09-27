import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

import { ArticleViewComponent } from '@entities/article';
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
	imports: [
		IconComponent,
		DrawerComponent,
		ButtonComponent,
		ArticleDrawerNavigationComponent,
		ArticleViewComponent,
	],
})
export class ArticlesDrawerSidebarComponent {
	readonly isArticlesOpen = signal<boolean>(false);
	readonly selectedArticleId = signal<string | null>(null);

	constructor() {
		effect(() => {
			document.body.classList.toggle('lock-scroll', this.isArticlesOpen());
		});
	}

	protected onArticleSelected(id: string | number): void {
		this.selectedArticleId.set(String(id));
	}

	protected backToNavigation(): void {
		this.selectedArticleId.set(null);
	}

	protected toggleArticlesOpen(): void {
		this.isArticlesOpen.update((state) => !state);
	}
}
