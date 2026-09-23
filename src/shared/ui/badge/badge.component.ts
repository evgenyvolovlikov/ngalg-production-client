import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { BadgeSize, BadgeVariant } from './badge.types';

@Component({
	selector: 'app-badge',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: '<ng-content />',
	styleUrl: './badge.component.scss',
	host: {
		'[class]': 'hostClasses()',
	},
})
export class BadgeComponent {
	readonly variant = input<BadgeVariant>('primary');
	readonly size = input<BadgeSize>('md');

	protected readonly hostClasses = computed(() => {
		return `badge badge--${this.variant()} badge--${this.size()}`;
	});
}
