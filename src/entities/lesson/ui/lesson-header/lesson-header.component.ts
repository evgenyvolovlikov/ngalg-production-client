import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { CourseSkeletonLesson } from '@shared/types/course.types';
import { IconComponent } from '@shared/ui/icon';

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
