import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { IconComponent } from '../icon/icon.component';
import { IconName } from '../icon/icon.types';
import { ToastStore } from './toast.store';
import { ToastType } from './toast.types';

@Component({
	selector: 'app-toast',
	standalone: true,
	imports: [IconComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './toast.component.html',
	styleUrl: './toast.component.scss',
})
export class ToastComponent {
	protected readonly store = inject(ToastStore);

	private readonly iconMap: Record<ToastType, IconName> = {
		success: 'check',
		error: 'circle-xmark-fill',
		warning: 'triangle-exclamation-fill',
		info: 'circle-info-fill',
	};

	protected iconFor(type: ToastType): IconName {
		return this.iconMap[type];
	}
}
