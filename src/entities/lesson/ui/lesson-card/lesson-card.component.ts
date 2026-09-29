import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { IconComponent } from '@shared/ui/icon';

import { CourseSkeletonLesson } from '../../model/lesson.types';

@Component({
	selector: 'app-lesson-card',
	standalone: true,
	imports: [IconComponent],
	templateUrl: './lesson-card.component.html',
	styleUrl: './lesson-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonCardComponent {
	readonly lesson = input.required<CourseSkeletonLesson>();
	readonly isActive = input<boolean>(false);
	readonly selectLesson = output<string>();

	readonly isLocked = computed(() => !this.lesson().isFree && !this.lesson().isCompleted);

	protected onSelect(): void {
		if (this.isLocked()) {
			return;
		}
		this.selectLesson.emit(this.lesson().id);
	}
}
