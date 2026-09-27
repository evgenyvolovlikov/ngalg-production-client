import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArticleNavigationManagementComponent } from '@widgets/article-navigation-management';

import { ManageArticleComponent } from '@features/manage-article';

@Component({
	selector: 'app-article-editor-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './article-editor-page.component.html',
	styleUrl: './article-editor-page.component.scss',
	imports: [ArticleNavigationManagementComponent, ManageArticleComponent],
})
export class ArticleEditorPageComponent {
	readonly id = input<string | undefined>();
}
