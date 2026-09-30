import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { AccordionComponent } from '@shared/ui/accordion/accordion.component';
import { AppLinkComponent } from '@shared/ui/app-link';
import { BadgeComponent } from '@shared/ui/badge';
import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';

import { ArticleNavigationApiService } from '../../../api/article-navigation-api.service';

@Component({
	selector: 'app-article-drawer-navigation',
	standalone: true,
	imports: [AppLinkComponent, BadgeComponent, AccordionComponent, ButtonComponent, IconComponent],
	templateUrl: './article-drawer-navigation.component.html',
	styleUrl: './article-drawer-navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDrawerNavigationComponent {
	private readonly navigationApi = inject(ArticleNavigationApiService);

	readonly navigationTree = toSignal(this.navigationApi.navigationTree$);
	readonly selectedId = input<string | null>(null);
	readonly isAdmin = input<boolean>(false);

	readonly articleSelected = output<string | number>();
	readonly editArticle = output<string>();
	readonly deleteArticle = output<string>();

	public onArticleClick(id: string | number): void {
		this.articleSelected.emit(id);
	}

	public onEditArticle(id: string, event: Event): void {
		event.stopPropagation();
		this.editArticle.emit(id);
	}

	public onDeleteArticle(id: string, event: Event): void {
		event.stopPropagation();
		this.deleteArticle.emit(id);
	}
}
