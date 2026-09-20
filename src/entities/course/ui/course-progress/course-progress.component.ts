import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CircularProgressComponent } from '@shared/ui/circular-progress';

import { CourseProgress } from '../../model/types/course-progress.types';

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
