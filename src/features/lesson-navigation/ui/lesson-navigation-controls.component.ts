import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CourseSkeletonLesson } from '@shared/types/course.types';
import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';

@Component({
	selector: 'app-lesson-navigation-controls',
	standalone: true,
	imports: [ButtonComponent, IconComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,

	templateUrl: './lesson-navigation-controls.component.html',
	styleUrl: './lesson-navigation-controls.component.scss',
})
export class LessonNavigationControlsComponent {
	readonly nextLesson = input<CourseSkeletonLesson | null>(null);
	readonly nextLessonSelect = output<string>();
}
