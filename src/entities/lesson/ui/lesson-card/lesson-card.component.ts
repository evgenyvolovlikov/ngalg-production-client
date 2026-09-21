import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IconComponent } from '@shared/ui/icon';

export interface CourseSkeletonLesson {
	id: string;
	title: string;
	sequenceOrder: number;
	isFree: boolean;
	isCompleted: boolean;
}

@Component({
	selector: 'app-lesson-card',
	standalone: true,
	imports: [NgClass, IconComponent],
	templateUrl: './lesson-card.component.html',
	styleUrl: './lesson-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonCardComponent {
	readonly lesson = input.required<CourseSkeletonLesson>();
	readonly isActive = input<boolean>(false);
}
