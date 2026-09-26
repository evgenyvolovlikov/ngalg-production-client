import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	input,
	signal,
	untracked,
} from '@angular/core';

import { ArticlesDrawerSidebarComponent } from '@widgets/articles-drawer-sidebar';
import { CourseSidebarComponent } from '@widgets/course-sidebar';
import { LessonContentComponent } from '@widgets/lesson-content';

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout';
import { ButtonComponent } from '@shared/ui/button';
import { DrawerComponent } from '@shared/ui/drawer';
import { IconComponent } from '@shared/ui/icon';

import { CoursePageStore } from '../model/course-page.store';

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
	providers: [CoursePageStore],
})
export class CoursePageComponent {
	readonly slug = input.required<string>();

	private readonly store = inject(CoursePageStore);

	readonly sections = this.store.sections;
	readonly progress = this.store.progress;
	readonly activeLesson = this.store.activeLesson;
	readonly activeLessonId = this.store.activeLessonId;
	readonly activeLessonDetail = this.store.activeLessonDetail;
	readonly nextLesson = this.store.nextLesson;
	readonly loading = this.store.loading;
	readonly error = this.store.error;

	readonly isMobileMenuOpen = signal(false);

	constructor() {
		effect(() => {
			const slug = this.slug();
			untracked(() => this.store.load(slug));
		});

		effect(() => {
			document.body.classList.toggle('lock-scroll', this.isMobileMenuOpen());
		});
	}

	selectLesson(id: string): void {
		this.store.selectLesson(id);
	}

	toggleLessonCompleted(id: string): void {
		this.store.toggleLessonCompleted(id);
	}

	protected toggleMobileMenu(): void {
		this.isMobileMenuOpen.update((state) => !state);
	}
}
