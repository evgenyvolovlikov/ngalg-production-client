import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CourseSkeletonLesson } from '@shared/types/course.types';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-lesson-header',
	standalone: true,
	imports: [DecimalPipe, IconComponent],
	templateUrl: './lesson-header.component.html',
	styleUrl: './lesson-header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonHeaderComponent {
	readonly lesson = input.required<CourseSkeletonLesson>();
}
