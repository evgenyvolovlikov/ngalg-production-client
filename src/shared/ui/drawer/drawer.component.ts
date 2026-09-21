import { ChangeDetectionStrategy, Component, HostListener, input, model } from '@angular/core';

import { ButtonComponent } from '../button';
import { IconComponent } from '../icon';

export type DrawerCloseBtnPosition = 'left' | 'right';

@Component({
	selector: 'app-drawer',
	standalone: true,
	imports: [ButtonComponent, IconComponent],
	templateUrl: './drawer.component.html',
	styleUrl: './drawer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
	readonly isOpen = model<boolean>(false);

	readonly closeBtnPosition = input<DrawerCloseBtnPosition>('right');
	readonly showCloseBtn = input<boolean>(true);

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
