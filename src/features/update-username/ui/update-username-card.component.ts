import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	OnInit,
	inject,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { UserApiService, UserStore } from '@entities/user';

import { ButtonComponent } from '@shared/ui/button';
import { CardComponent } from '@shared/ui/card';
import { IconComponent } from '@shared/ui/icon';
import { InputComponent } from '@shared/ui/input';
import { ToastStore } from '@shared/ui/toast';

@Component({
	selector: 'app-update-username-card',
	standalone: true,
	imports: [ReactiveFormsModule, ButtonComponent, CardComponent, IconComponent, InputComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './update-username-card.component.html',
	styleUrl: './update-username-card.component.scss',
})
export class UpdateUsernameCardComponent implements OnInit {
	private readonly fb = inject(NonNullableFormBuilder);
	private readonly userApiService = inject(UserApiService);
	private readonly userStore = inject(UserStore);
	private readonly destroyRef = inject(DestroyRef);
	private readonly toastStore = inject(ToastStore);

	protected readonly isEditing = signal(false);
	protected readonly isSaving = signal(false);
	protected readonly errorMessage = signal<string | null>(null);

	protected readonly form = this.fb.group({
		username: ['', [Validators.required, Validators.minLength(2)]],
	});

	ngOnInit(): void {
		this.resetForm();
	}

	protected onEdit(): void {
		this.isEditing.set(true);
		this.resetForm();
	}

	protected onCancel(): void {
		this.isEditing.set(false);
		this.errorMessage.set(null);
	}

	protected onSave(): void {
		if (this.form.invalid) return;

		this.isSaving.set(true);
		this.errorMessage.set(null);

		const newUsername = this.form.controls.username.value;

		this.userApiService
			.updateUsername(newUsername)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: () => {
					this.toastStore.success('Псевдоним успешно обновлён');
					this.isSaving.set(false);
					this.isEditing.set(false);
				},
				error: (err) => {
					this.toastStore.error(err?.message ?? 'Ошибка при обновлении username');
					this.errorMessage.set(err?.message ?? 'Не удалось обновить username');
					this.isSaving.set(false);
				},
			});
	}

	private resetForm(): void {
		this.form.setValue({
			username: this.userStore.profile()?.username ?? '',
		});
	}
}
