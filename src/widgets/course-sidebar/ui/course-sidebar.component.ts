import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CourseProgress, CourseProgressComponent } from '@entities/course';

@Component({
	selector: 'app-course-sidebar',
	standalone: true,
	imports: [CourseProgressComponent],
	templateUrl: './course-sidebar.component.html',
	styleUrl: './course-sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSidebarComponent {
	readonly progress = input.required<CourseProgress>();
}
