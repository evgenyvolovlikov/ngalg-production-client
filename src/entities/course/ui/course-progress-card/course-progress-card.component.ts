import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AppLinkComponent } from '@shared/ui/app-link';
import { CardComponent } from '@shared/ui/card';
import { IconComponent } from '@shared/ui/icon';
import { ProgressBarComponent } from '@shared/ui/progress-bar';

import { CourseProgressStats } from '../../model/course.types';

@Component({
	selector: 'app-course-progress-card',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		CardComponent,
		ProgressBarComponent,
		IconComponent,
		RouterLink,
		AppLinkComponent,
	],
	templateUrl: './course-progress-card.component.html',
	styleUrl: './course-progress-card.component.scss',
})
export class CourseProgressCardComponent {
	public navigateTo = input.required<string | string[]>();
	readonly progress = input.required<CourseProgressStats>();
}
