import { Injectable, computed, inject, signal } from '@angular/core';

import { finalize } from 'rxjs/operators';

import { CourseApiService } from '@entities/course';
import { CourseProgressStats, CourseSkeleton, CourseSkeletonSection } from '@entities/course';
import { CourseSkeletonLesson, LessonApiService, LessonDetail } from '@entities/lesson';

@Injectable()
export class CoursePageStore {
	private readonly courseApi = inject(CourseApiService);
	private readonly lessonApi = inject(LessonApiService);

	private readonly courseState = signal<CourseSkeleton | null>(null);
	private readonly activeLessonIdState = signal<string | null>(null);
	private readonly activeLessonDetailState = signal<LessonDetail | null>(null);
	private readonly progressState = signal<CourseProgressStats | null>(null);
	private readonly loadingState = signal<boolean>(false);
	private readonly errorState = signal<string | null>(null);

	private loadedSlug: string | null = null;

	readonly course = this.courseState.asReadonly();
	readonly activeLessonId = this.activeLessonIdState.asReadonly();
	readonly activeLessonDetail = this.activeLessonDetailState.asReadonly();
	readonly progress = this.progressState.asReadonly();
	readonly loading = this.loadingState.asReadonly();
	readonly error = this.errorState.asReadonly();

	readonly sections = computed<CourseSkeletonSection[]>(() => this.courseState()?.sections ?? []);

	readonly lessons = computed<CourseSkeletonLesson[]>(() =>
		this.sections().flatMap((section) => section.lessons),
	);

	readonly localProgress = computed<CourseProgressStats>(() => {
		const lessons = this.lessons();
		const totalLessons = lessons.length;
		const completedLessons = lessons.filter((lesson) => lesson.isCompleted).length;
		const percentage =
			totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

		return {
			courseId: this.courseState()?.id ?? '',
			courseSlug: this.courseState()?.slug ?? '',
			courseTitle: this.courseState()?.title ?? '',
			totalLessons,
			completedLessons,
			percentage,
		};
	});

	readonly activeLesson = computed<CourseSkeletonLesson | null>(() => {
		const id = this.activeLessonIdState();
		return this.lessons().find((lesson) => lesson.id === id) ?? null;
	});

	readonly nextLesson = computed<CourseSkeletonLesson | null>(() => {
		const lessons = this.lessons();
		const index = lessons.findIndex((lesson) => lesson.id === this.activeLessonIdState());
		return index === -1 ? null : (lessons[index + 1] ?? null);
	});

	load(slug: string): void {
		if (this.loadedSlug !== slug) {
			this.courseState.set(null);
			this.progressState.set(null);
			this.loadedSlug = null;
		}

		if (this.loadedSlug === slug && this.courseState()) {
			return;
		}

		this.loadingState.set(true);
		this.errorState.set(null);

		this.courseApi
			.getCourseSkeleton(slug)
			.pipe(finalize(() => this.loadingState.set(false)))
			.subscribe({
				next: (course) => {
					this.loadedSlug = slug;
					this.courseState.set(course);
					this.selectInitialLesson(course);
					this.loadProgress(slug);
				},
				error: () => {
					this.loadedSlug = null;
					this.errorState.set('Не удалось загрузить курс');
				},
			});
	}

	loadProgress(slug: string): void {
		this.courseApi.getCourseProgress(slug).subscribe({
			next: (progress) => this.progressState.set(progress),
			error: () => this.progressState.set(null),
		});
	}

	selectLesson(id: string): void {
		const lesson = this.lessons().find((item) => item.id === id);
		if (!lesson || (!lesson.isFree && !lesson.isCompleted)) {
			return;
		}

		this.activeLessonIdState.set(id);
		this.activeLessonDetailState.set(null);

		this.lessonApi.getLessonDetail(id).subscribe({
			next: (detail) => this.activeLessonDetailState.set(detail),
			error: () => this.activeLessonDetailState.set(null),
		});
	}

	toggleLessonCompleted(lessonId: string): void {
		this.lessonApi.toggleLessonProgress(lessonId).subscribe({
			next: (response) => this.setLessonCompletion(lessonId, response.completed),
		});
	}

	private setLessonCompletion(lessonId: string, isCompleted: boolean): void {
		this.courseState.update((course) =>
			course
				? {
						...course,
						sections: course.sections.map((section) => ({
							...section,
							lessons: section.lessons.map((lesson) =>
								lesson.id === lessonId ? { ...lesson, isCompleted } : lesson,
							),
						})),
					}
				: course,
		);

		this.activeLessonDetailState.update((detail) =>
			detail && detail.id === lessonId ? { ...detail, isCompleted } : detail,
		);
	}

	private selectInitialLesson(course: CourseSkeleton): void {
		const lessons = course.sections.flatMap((section) => section.lessons);
		const firstAvailable =
			lessons.find((lesson) => lesson.isFree && !lesson.isCompleted) ??
			lessons.find((lesson) => lesson.isFree) ??
			lessons[0];

		if (firstAvailable) {
			this.selectLesson(firstAvailable.id);
		}
	}
}
