import { ChangeDetectionStrategy, Component, HostListener, input, model } from '@angular/core';

import { IconComponent } from '../icon';

export type ModalSize = 's' | 'm';

@Component({
	selector: 'app-modal',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss',
	imports: [IconComponent],
})
export class ModalComponent {
	readonly isOpen = model<boolean>(false);

	readonly size = input<ModalSize>('m');

	protected close(): void {
		this.isOpen.set(false);
	}

	@HostListener('window:keydown.escape')
	protected onEscapePressed(): void {
		if (this.isOpen()) {
			this.close();
		}
	}
}
