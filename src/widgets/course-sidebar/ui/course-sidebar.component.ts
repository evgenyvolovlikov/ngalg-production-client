import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CourseProgress, CourseProgressComponent } from '@entities/course';
import { LessonCardComponent } from '@entities/lesson';

import { CourseSkeletonLesson } from '@shared/types/course.types';

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

	readonly lessons = input.required<CourseSkeletonLesson[]>();
	readonly activeLessonId = input<string | null>(null);

	readonly selectLesson = output<string>();
}
