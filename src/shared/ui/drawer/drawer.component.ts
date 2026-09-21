import { ChangeDetectionStrategy, Component, HostListener, model } from '@angular/core';

import { ButtonComponent } from '../button';
import { IconComponent } from '../icon';

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
