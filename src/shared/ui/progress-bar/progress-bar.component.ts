import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-progress-bar',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './progress-bar.component.html',
	styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
	@Input() value = 0;
}
