import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CreateCategoryComponent } from '@features/create-category';
import { CreateSectionComponent } from '@features/create-section';

@Component({
	selector: 'app-article-navigation-management',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'article-navigation-management.component.html',
	styleUrl: 'article-navigation-management.component.scss',
	imports: [CreateSectionComponent, CreateCategoryComponent],
})
export class ArticleNavigationManagementComponent {}
