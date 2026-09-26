import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CourseProgressComponent } from '@entities/course';
import { LessonCardComponent } from '@entities/lesson';

import { CourseProgress, CourseSkeletonSection } from '@shared/types/course.types';

@Component({
	selector: 'app-course-sidebar',
	standalone: true,
	imports: [CourseProgressComponent, LessonCardComponent],
	templateUrl: './course-sidebar.component.html',
	styleUrl: './course-sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSidebarComponent {
	readonly progress = input.required<CourseProgress>();
	readonly sections = input.required<CourseSkeletonSection[]>();
	readonly activeLessonId = input<string | null>(null);

	readonly selectLesson = output<string>();
}
