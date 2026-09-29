import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';
import { CardComponent } from '@shared/ui/card';
import { IconComponent } from '@shared/ui/icon';
import { ModalComponent } from '@shared/ui/modal';

@Component({
	selector: 'app-delete-account',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CardComponent, ButtonComponent, IconComponent, ModalComponent],
	templateUrl: './delete-account.component.html',
	styleUrl: './delete-account.component.scss',
})
export class DeleteAccountComponent {
	protected isDeleting = signal<boolean>(false);
	protected isProcessing = signal<boolean>(false);

	onDeleteAccount(): void {
		this.isDeleting.set(true);
	}

	handleModalOpen(): void {
		this.isDeleting.update((value) => !value);
		if (this.isProcessing()) {
			this.isProcessing.set(false);
		}
	}

	confirmDeletion(): void {
		if (this.isProcessing()) return;
		this.isProcessing.set(true);
	}
}
