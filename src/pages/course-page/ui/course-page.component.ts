import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CourseSidebarComponent } from '@widgets/course-sidebar';
import { LessonContentComponent } from '@widgets/lesson-content';

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { MOCK_COURSE_PROGRESS, MOCK_LESSON, MOCK_LESSONS, MOCK_NEXT_LESSON } from '../mock';

@Component({
	selector: 'app-course-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './course-page.component.html',
	styleUrl: './course-page.component.scss',
	imports: [SidebarLayoutComponent, CourseSidebarComponent, LessonContentComponent],
})
export class CoursePageComponent {
	progress = MOCK_COURSE_PROGRESS;
	lessons = MOCK_LESSONS;
	lesson = MOCK_LESSON;
	nextLesson = MOCK_NEXT_LESSON;
}
