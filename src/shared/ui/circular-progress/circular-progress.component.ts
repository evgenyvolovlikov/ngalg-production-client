import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
	selector: 'app-circular-progress',
	standalone: true,
	imports: [],
	templateUrl: './circular-progress.component.html',
	styleUrl: './circular-progress.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularProgressComponent {
	/** Значение прогресса от 0 до 100 */
	readonly value = input<number>(0);

	/** Размер SVG в пикселях (ширина и высота) */
	readonly size = input<number>(180);

	/** Толщина линии прогресса */
	readonly strokeWidth = input<number>(12);

	/** Флаг отображения текстового значения по центру */
	readonly showLabel = input<boolean>(true);

	readonly normalizedValue = computed(() => Math.min(100, Math.max(0, this.value())));
	readonly radius = computed(() => (this.size() - this.strokeWidth()) / 2);
	readonly circumference = computed(() => 2 * Math.PI * this.radius());
	readonly strokeDashoffset = computed(() => {
		const progress = this.normalizedValue() / 100;
		return this.circumference() * (1 - progress);
	});
	readonly viewBox = computed(() => `0 0 ${this.size()} ${this.size()}`);
	readonly center = computed(() => this.size() / 2);
}
