import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	effect,
	inject,
	signal,
} from '@angular/core';

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
	private readonly destroyRef = inject(DestroyRef);

	protected readonly isArticlesOpen = signal<boolean>(false);
	protected readonly selectedArticleId = signal<string | null>(null);

	constructor() {
		effect(() => {
			document.body.classList.toggle('lock-scroll', this.isArticlesOpen());
		});

		this.destroyRef.onDestroy(() => {
			document.body.classList.remove('lock-scroll');
		});
	}

	protected toggleArticlesOpen(): void {
		this.isArticlesOpen.update((open) => !open);
	}

	protected onArticleSelected(id: string | number): void {
		this.selectedArticleId.set(String(id));
	}

	protected backToNavigation(): void {
		this.selectedArticleId.set(null);
	}
}
