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

import { ScrollLockService } from '@shared/lib/services/scroll-lock.service';
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

	private readonly scrollLock = inject(ScrollLockService);
	private lockActive = false;

	constructor() {
		effect(() => {
			const shouldLock = this.isArticlesOpen();
			if (shouldLock === this.lockActive) {
				return;
			}
			this.lockActive = shouldLock;

			if (shouldLock) {
				this.scrollLock.lock();
			} else {
				this.scrollLock.unlock();
			}
		});

		this.destroyRef.onDestroy(() => {
			if (this.lockActive) {
				this.scrollLock.unlock();
			}
		});
	}

	protected toggleArticlesOpen(): void {
		this.isArticlesOpen.update((open) => {
			if (!open) {
				this.selectedArticleId.set(null);
			}
			return !open;
		});
	}

	protected onArticleSelected(id: string | number): void {
		this.selectedArticleId.set(String(id));
	}

	protected backToNavigation(): void {
		this.selectedArticleId.set(null);
	}
}
