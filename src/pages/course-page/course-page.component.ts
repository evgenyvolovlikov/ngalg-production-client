import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CourseSidebarComponent } from '@widgets/course-sidebar';

import { CourseProgress } from '@entities/course';

import { SidebarLayoutComponent } from '@shared/ui/sidebar-layout';

@Component({
	selector: 'app-course-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './course-page.component.html',
	styleUrl: './course-page.component.scss',
	imports: [SidebarLayoutComponent, CourseSidebarComponent],
})
export class CoursePageComponent {
	progress: CourseProgress = {
		completedLessons: 0,
		percentage: 0,
		totalLessons: 0,
	};
}
