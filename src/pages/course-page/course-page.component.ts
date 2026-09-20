import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidebarLayoutComponent } from '@shared/ui/sidebar-layout';

@Component({
	selector: 'app-course-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './course-page.component.html',
	styleUrl: './course-page.component.scss',
	imports: [SidebarLayoutComponent],
})
export class CoursePageComponent {}
