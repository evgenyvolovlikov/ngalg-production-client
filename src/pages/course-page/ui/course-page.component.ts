import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

import { ArticlesDrawerSidebarComponent } from '@widgets/articles-drawer-sidebar';
import { CourseSidebarComponent } from '@widgets/course-sidebar';
import { LessonContentComponent } from '@widgets/lesson-content';

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout';
import { CourseSkeletonLesson } from '@shared/types/course.types';
import { ButtonComponent } from '@shared/ui/button';
import { DrawerComponent } from '@shared/ui/drawer';
import { IconComponent } from '@shared/ui/icon';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { MOCK_LESSONS } from '../mock';

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
		ArticlesDrawerSidebarComponent,
		DrawerComponent,
		IconComponent,
		ButtonComponent,
	],
})
export class CoursePageComponent {
	readonly isMobileMenuOpen = signal<boolean>(false);

	readonly lessons = signal<any[]>(MOCK_LESSONS);

	readonly activeLessonId = signal<string>(MOCK_LESSONS[0]?.id ?? '');

	readonly progress = computed(() => {
		const allLessons = this.lessons();
		const totalLessons = allLessons.length;
		const completedLessons = allLessons.filter((l) => l.isCompleted).length;
		const percentage =
			totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

		return { totalLessons, completedLessons, percentage };
	});

	readonly currentLesson = computed(() => {
		const id = this.activeLessonId();
		const found = this.lessons().find((l) => l.id === id);

		return {
			id: found?.id ?? '',
			sequenceOrder: found?.sequenceOrder ?? 1,
			title: found?.title ?? 'Урок не найден',
			description: found?.description ?? '',
			videoUrl: found?.videoUrl,
			durationSeconds: found?.durationSeconds ?? 0,
			isFree: found?.isFree ?? false,
			isCompleted: found?.isCompleted ?? false,
			hasCodeEditor: found?.hasCodeEditor ?? false,
			courseId: 'mock-course-id',
		};
	});

	readonly nextLesson = computed<CourseSkeletonLesson | null>(() => {
		const current = this.lessons().find((l) => l.id === this.activeLessonId());
		if (!current) return null;

		return this.lessons().find((l) => l.sequenceOrder === current.sequenceOrder + 1) ?? null;
	});

	constructor() {
		effect(() => {
			if (this.isMobileMenuOpen()) {
				document.body.classList.add('lock-scroll');
			} else {
				document.body.classList.remove('lock-scroll');
			}
		});
	}

	protected toggleMobileMenu(): void {
		this.isMobileMenuOpen.update((state) => !state);
	}

	protected onSelectLesson(lessonId: string): void {
		const lesson = this.lessons().find((l) => l.id === lessonId);
		if (!lesson || (!lesson.isFree && !lesson.isCompleted)) return;

		this.isMobileMenuOpen.set(false);
		this.activeLessonId.set(lessonId);
	}

	protected onToggleComplete(event: { id: string; completed: boolean }): void {
		this.lessons.update((list) =>
			list.map((l) => (l.id === event.id ? { ...l, isCompleted: event.completed } : l)),
		);
	}
}
