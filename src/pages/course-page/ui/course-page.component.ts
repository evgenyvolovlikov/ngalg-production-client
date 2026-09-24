import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	OnInit,
	computed,
	effect,
	inject,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { ArticlesDrawerSidebarComponent } from '@widgets/articles-drawer-sidebar';
import { CourseSidebarComponent } from '@widgets/course-sidebar';
import { LessonContentComponent } from '@widgets/lesson-content';

import { MarkLessonWatchedApiService } from '@features/mark-lesson-watched';

import { CourseApiService } from '@entities/course';
import { LessonApiService } from '@entities/lesson';

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout';
import {
	CourseProgress,
	CourseSkeleton,
	CourseSkeletonLesson,
	LessonDetail,
} from '@shared/types/course.types';
import { ButtonComponent } from '@shared/ui/button';
import { DrawerComponent } from '@shared/ui/drawer';
import { IconComponent } from '@shared/ui/icon';

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
export class CoursePageComponent implements OnInit {
	private readonly route = inject(ActivatedRoute);
	private readonly destroyRef = inject(DestroyRef);

	private readonly courseApi = inject(CourseApiService);
	private readonly lessonApi = inject(LessonApiService);
	private readonly markWatchedApi = inject(MarkLessonWatchedApiService);

	readonly course = signal<CourseSkeleton | null>(null);
	readonly lessons = signal<CourseSkeletonLesson[]>([]);

	readonly activeLessonId = signal<string | null>(null);
	readonly activeLessonDetail = signal<LessonDetail | null>(null);

	readonly progress = computed<CourseProgress>(() => {
		const allLessons = this.lessons();
		const totalLessons = allLessons.length;
		const completedLessons = allLessons.filter((l) => l.isCompleted).length;
		const percentage =
			totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

		return { totalLessons, completedLessons, percentage };
	});

	readonly activeLessonSkeleton = computed(() => {
		const id = this.activeLessonId();
		return this.lessons().find((l) => l.id === id) ?? null;
	});

	readonly nextLesson = computed(() => {
		const current = this.activeLessonSkeleton();
		if (!current) return null;
		return this.lessons().find((l) => l.sequenceOrder === current.sequenceOrder + 1) ?? null;
	});

	ngOnInit(): void {
		this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
			const slug = params.get('slug');
			if (slug) {
				this.loadCourse(slug);
			}
		});
	}

	private loadCourse(slug: string): void {
		this.courseApi
			.getCourseSkeleton(slug)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (courseSkeleton) => {
					this.course.set(courseSkeleton);
					this.lessons.set(courseSkeleton.lessons);

					const firstToWatch =
						courseSkeleton.lessons.find((l) => !l.isCompleted) ??
						courseSkeleton.lessons[0];

					if (firstToWatch) {
						this.selectLesson(firstToWatch.id);
					}
				},
				error: (err) => console.error('Failed to load course:', err),
			});
	}

	selectLesson(id: string): void {
		const lesson = this.lessons().find((l) => l.id === id);
		if (!lesson || (!lesson.isFree && !lesson.isCompleted)) return;

		this.activeLessonId.set(id);
		this.activeLessonDetail.set(null);

		this.lessonApi
			.getLessonDetail(id)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (detail) => this.activeLessonDetail.set(detail),
				error: (err) => console.error('Failed to load lesson detail:', err),
			});
	}

	readonly isMobileMenuOpen = signal<boolean>(false);

	constructor() {
		effect(() => {
			if (this.isMobileMenuOpen()) {
				document.body.classList.add('lock-scroll');
			} else {
				document.body.classList.remove('lock-scroll');
			}
		});
	}

	toggleLessonCompleted(payload: { id: string; completed: boolean }): void {
		this.markWatchedApi
			.toggleProgress(payload.id)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (response) => {
					this.lessons.update((lessons) =>
						lessons.map((lesson) =>
							lesson.id === payload.id
								? { ...lesson, isCompleted: response.completed }
								: lesson,
						),
					);

					if (this.activeLessonDetail()?.id === payload.id) {
						this.activeLessonDetail.update((detail) =>
							detail ? { ...detail, isCompleted: response.completed } : null,
						);
					}
				},
				error: (err) => console.error('Failed to toggle progress:', err),
			});
	}
	protected toggleMobileMenu(): void {
		this.isMobileMenuOpen.update((state) => !state);
	}
}
