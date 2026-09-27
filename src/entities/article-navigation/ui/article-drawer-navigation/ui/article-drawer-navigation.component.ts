import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { AccordionComponent } from '@shared/ui/accordion/accordion.component';
import { AppLinkComponent } from '@shared/ui/app-link';
import { BadgeComponent } from '@shared/ui/badge';

import { ArticleNavigationApiService } from '../../../api/article-navigation-api.service';

@Component({
	selector: 'app-article-drawer-navigation',
	standalone: true,
	imports: [AppLinkComponent, BadgeComponent, AccordionComponent],
	templateUrl: './article-drawer-navigation.component.html',
	styleUrl: './article-drawer-navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDrawerNavigationComponent {
	private readonly navigationApi = inject(ArticleNavigationApiService);

	readonly navigationTree = toSignal(this.navigationApi.getNavigationTree());
	readonly selectedId = input<string | null>(null);
	readonly articleSelected = output<string | number>();

	public onArticleClick(id: string | number): void {
		this.articleSelected.emit(id);
	}
}
