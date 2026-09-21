import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CourseSidebarComponent } from '@widgets/course-sidebar';

import { CourseProgress } from '@entities/course';
import { CourseSkeletonLesson } from '@entities/lesson';

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout';

export const MOCK_LESSONS: CourseSkeletonLesson[] = [
	{
		id: 'lesson-1',
		title: 'Введение в архитектуру Angular и экосистему',
		sequenceOrder: 1,
		isFree: true,
		isCompleted: true,
	},
	{
		id: 'lesson-2',
		title: 'Основы Standalone компонентов и сигналы (Signals)',
		sequenceOrder: 2,
		isFree: true,
		isCompleted: true,
	},
	{
		id: 'lesson-3',
		title: 'Секреты декларативного роутинга и Lazy Loading',
		sequenceOrder: 3,
		isFree: true,
		isCompleted: false,
	},
	{
		id: 'lesson-4',
		title: 'Продвинутый RxJS: Управление потоками данных на практике',
		sequenceOrder: 4,
		isFree: false,
		isCompleted: true,
	},
	{
		id: 'lesson-5',
		title: 'Кастомные директивы и оптимизация Change Detection',
		sequenceOrder: 5,
		isFree: false,
		isCompleted: false,
	},
	{
		id: 'lesson-6',
		title: 'Эффективное профилирование и SSR/SSG в Angular',
		sequenceOrder: 6,
		isFree: false,
		isCompleted: false,
	},
];

@Component({
	selector: 'app-course-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './course-page.component.html',
	styleUrl: './course-page.component.scss',
	imports: [SidebarLayoutComponent, CourseSidebarComponent],
})
export class CoursePageComponent {
	get progress(): CourseProgress {
		const total = this.lessons.length;
		const completed = this.lessons.filter((l) => l.isCompleted).length;

		return {
			totalLessons: total,
			completedLessons: completed,
			percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
		};
	}

	lessons = MOCK_LESSONS;
}
