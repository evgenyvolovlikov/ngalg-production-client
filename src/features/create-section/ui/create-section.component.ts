import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ArticleNavigationApiService, CreateSectionDto } from '@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';
import { ToastStore } from '@shared/ui/toast';

@Component({
	selector: 'app-create-section',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
	template: `
		<form [formGroup]="form" (ngSubmit)="submit()" class="admin-form-container">
			<h3 class="admin-form-container__title">Новая секция</h3>

			<app-input formControlName="title" label="Название секции"></app-input>
			<app-input
				formControlName="orderIndex"
				type="number"
				label="Порядок сортировки"
			></app-input>

			<button app-button type="submit" [disabled]="form.invalid">Создать секцию</button>
		</form>
	`,

	styleUrl: './create-section.component.scss',
})
export class CreateSectionComponent {
	private readonly fb = inject(NonNullableFormBuilder);
	private readonly api = inject(ArticleNavigationApiService);
	private readonly destroyRef = inject(DestroyRef);
	private readonly toastStore = inject(ToastStore);

	protected form = this.fb.group({
		title: ['', [Validators.required, Validators.minLength(2)]],
		orderIndex: [0],
	});

	protected submit(): void {
		if (this.form.invalid) return;

		const dto: CreateSectionDto = {
			title: this.form.controls.title.value,
		};

		this.api
			.createSection(dto)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: () => {
					this.toastStore.success('Секция успешно создана');
					this.form.reset();
				},
				error: (err) => {
					this.toastStore.error(err?.message ?? 'Ошибка при создании секции');
				},
			});
	}
}
