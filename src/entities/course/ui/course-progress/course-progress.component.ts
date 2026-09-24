import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CourseProgress } from '@shared/types/course.types';
import { CircularProgressComponent } from '@shared/ui/circular-progress';

@Component({
	selector: 'app-course-progress',
	standalone: true,
	imports: [CircularProgressComponent],
	templateUrl: './course-progress.component.html',
	styleUrl: './course-progress.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseProgressComponent {
	readonly progress = input.required<CourseProgress>();
}
