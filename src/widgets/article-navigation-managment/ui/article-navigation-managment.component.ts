import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CreateCategoryComponent } from '@features/create-category';
import { CreateSectionComponent } from '@features/create-section';

@Component({
	selector: 'app-article-navigation-managment',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'article-navigation-managment.component.html',
	styleUrl: 'article-navigation-managment.component.scss',
	imports: [CreateSectionComponent, CreateCategoryComponent],
})
export class ArticleNavigationManagmentComponent {}
