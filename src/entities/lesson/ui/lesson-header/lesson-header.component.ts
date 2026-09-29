import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { IconComponent } from '@shared/ui/icon';

import { CourseSkeletonLesson } from '../../model/lesson.types';

@Component({
	selector: 'app-lesson-header',
	standalone: true,
	imports: [IconComponent],
	templateUrl: './lesson-header.component.html',
	styleUrl: './lesson-header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonHeaderComponent {
	readonly lesson = input.required<CourseSkeletonLesson>();

	readonly durationMinutes = computed(() => Math.round(this.lesson().durationSeconds / 60));
}
