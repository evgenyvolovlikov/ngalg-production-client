import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { CourseSidebarComponent } from '@widgets/course-sidebar';
import { DrawerSidebarComponent } from '@widgets/drawer-sidebar';
import { LessonContentComponent } from '@widgets/lesson-content';

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout';
import { CourseSkeletonLesson } from '@shared/types/course.types';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { MOCK_COURSE_PROGRESS, MOCK_LESSON, MOCK_LESSONS, MOCK_NEXT_LESSON } from '../mock';

@Component({
	selector: 'app-course-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './course-page.component.html',
	styleUrl: './course-page.component.scss',
	imports: [
		SidebarLayoutComponent,
		CourseSidebarComponent,
		LessonContentComponent,
		DrawerSidebarComponent,
	],
})
export class CoursePageComponent {
	readonly progress = signal(MOCK_COURSE_PROGRESS);
	readonly lessons = signal<CourseSkeletonLesson[]>(MOCK_LESSONS);
	readonly currentLesson = signal(MOCK_LESSON);
	readonly nextLesson = signal<CourseSkeletonLesson | null>(MOCK_NEXT_LESSON);

	protected onSelectLesson(lessonId: string): void {
		const found = this.lessons().find((l) => l.id === lessonId);
		if (found) {
			this.currentLesson.set({
				...found,
				description: found.description ?? '',
				courseId: this.currentLesson().courseId,
				videoUrl: '',
			});
		}
	}

	protected onToggleComplete(event: { id: string; completed: boolean }): void {
		this.lessons.update((list) =>
			list.map((l) => (l.id === event.id ? { ...l, isCompleted: event.completed } : l)),
		);

		if (this.currentLesson().id === event.id) {
			this.currentLesson.update((l) => ({ ...l, isCompleted: event.completed }));
		}
	}
}
