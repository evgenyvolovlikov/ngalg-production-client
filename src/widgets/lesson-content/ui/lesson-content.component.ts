import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { LessonNavigationControlsComponent } from '@features/lesson-navigation';
import { MarkLessonWatchedComponent } from '@features/mark-lesson-watched';

import { LessonHeaderComponent } from '@entities/lesson';

import { CourseSkeletonLesson } from '@shared/types/course.types';
import { VideoPlayerComponent } from '@shared/ui/video-player';

@Component({
	selector: 'app-lesson-content',
	standalone: true,
	imports: [
		VideoPlayerComponent,
		LessonHeaderComponent,
		MarkLessonWatchedComponent,
		LessonNavigationControlsComponent,
	],
	templateUrl: './lesson-content.component.html',
	styleUrl: './lesson-content.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonContentComponent {
	readonly lesson = input.required<CourseSkeletonLesson>();
	readonly videoUrl = input<string | null>(null);
	readonly nextLesson = input<CourseSkeletonLesson | null>(null);

	readonly toggleComplete = output<string>();
	readonly selectLesson = output<string>();
}
