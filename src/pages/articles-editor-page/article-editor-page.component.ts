import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArticleNavigationManagmentComponent } from '@widgets/article-navigation-managment';

import { ManageArticleComponent } from '@features/manage-article';

@Component({
	selector: 'app-article-editor-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './article-editor-page.component.html',
	styleUrl: './article-editor-page.component.scss',
	imports: [ArticleNavigationManagmentComponent, ManageArticleComponent],
})
export class ArticleEditorPageComponent {
	readonly id = input<string | undefined>();
}
