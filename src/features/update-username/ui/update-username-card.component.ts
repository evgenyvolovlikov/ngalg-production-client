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

@Component({
	selector: 'app-update-username-card',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule, CardComponent, InputComponent, ButtonComponent, IconComponent],
	templateUrl: './update-username-card.component.html',
	styleUrl: './update-username-card.component.scss',
})
export class UpdateUsernameCardComponent implements OnInit {
	private readonly fb = inject(NonNullableFormBuilder);
	protected readonly userStore = inject(UserStore);
	private readonly userApi = inject(UserApiService);
	private readonly destroyRef = inject(DestroyRef);

	protected readonly isSaving = signal(false);
	protected readonly isEditing = signal(false);
	protected readonly errorMessage = signal<string | null>(null);

	protected readonly form = this.fb.group({
		username: ['', [Validators.required, Validators.minLength(3)]],
	});

	ngOnInit(): void {
		this.resetForm();
	}

	protected onEdit(): void {
		this.errorMessage.set(null);
		this.resetForm();
		this.isEditing.set(true);
	}

	protected onCancel(): void {
		this.errorMessage.set(null);
		this.resetForm();
		this.isEditing.set(false);
	}

	protected onSave(): void {
		if (this.form.invalid || this.isSaving()) return;

		const { username } = this.form.getRawValue();
		const currentUsername = this.userStore.profile()?.username;

		if (username === currentUsername) {
			this.isEditing.set(false);
			return;
		}

		this.isSaving.set(true);
		this.errorMessage.set(null);

		this.userApi
			.updateUsername(username)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (updatedProfile) => {
					this.userStore.setProfile(updatedProfile);
					this.form.markAsPristine();
					this.isSaving.set(false);
					this.isEditing.set(false);
				},
				error: (err) => {
					console.error('Ошибка обновления username', err);
					this.errorMessage.set('Не удалось обновить имя пользователя');
					this.isSaving.set(false);
				},
			});
	}

	private resetForm(): void {
		const currentUsername = this.userStore.profile()?.username ?? '';
		this.form.reset({ username: currentUsername });
	}
}
