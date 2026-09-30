import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	effect,
	inject,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { ArticleApiService, ArticleViewComponent } from '@entities/article';
import {
	ArticleDrawerNavigationComponent,
	ArticleNavigationApiService,
} from '@entities/article-navigation';
import { UserStore } from '@entities/user';

import { RouteBuilder } from '@shared/config/routes.config';
import { ScrollLockService } from '@shared/lib/services/scroll-lock.service';
import { ButtonComponent } from '@shared/ui/button';
import { DrawerComponent } from '@shared/ui/drawer';
import { IconComponent } from '@shared/ui/icon';
import { ModalComponent } from '@shared/ui/modal';
import { ToastStore } from '@shared/ui/toast';

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
		ModalComponent,
	],
})
export class ArticlesDrawerSidebarComponent {
	private readonly destroyRef = inject(DestroyRef);
	private readonly scrollLock = inject(ScrollLockService);
	private readonly router = inject(Router);
	private readonly articleApi = inject(ArticleApiService);
	private readonly navigationApi = inject(ArticleNavigationApiService);
	private readonly userStore = inject(UserStore);
	private readonly toastStore = inject(ToastStore);

	protected readonly isArticlesOpen = signal<boolean>(false);
	protected readonly selectedArticleId = signal<string | null>(null);
	protected readonly deleteTargetId = signal<string | null>(null);
	protected readonly isDeleting = signal<boolean>(false);

	protected readonly isAdmin = this.userStore.isAdmin;

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

	protected onEditArticle(id: string): void {
		this.router.navigateByUrl(RouteBuilder.ARTICLE_EDIT(id));
	}

	protected requestDeleteArticle(id: string): void {
		this.deleteTargetId.set(id);
	}

	protected cancelDelete(): void {
		this.deleteTargetId.set(null);
	}

	protected confirmDelete(): void {
		const id = this.deleteTargetId();
		if (!id) return;

		this.isDeleting.set(true);

		this.articleApi
			.deleteArticle(id)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: () => {
					this.toastStore.success('Статья удалена');
					this.isDeleting.set(false);
					this.deleteTargetId.set(null);

					if (this.selectedArticleId() === id) {
						this.selectedArticleId.set(null);
					}

					this.navigationApi.refresh();
				},
				error: (err) => {
					this.toastStore.error(err?.message ?? 'Ошибка при удалении статьи');
					this.isDeleting.set(false);
					this.deleteTargetId.set(null);
				},
			});
	}
}
