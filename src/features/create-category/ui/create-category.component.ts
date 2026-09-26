import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ArticleNavigationApiService } from '@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';
import { SelectComponent } from '@shared/ui/select';

@Component({
	selector: 'app-create-category',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule, InputComponent, ButtonComponent, SelectComponent],
	template: `
		<form [formGroup]="form" (ngSubmit)="submit()" class="admin-form-container">
			<h3 class="admin-form-container__title">Новая категория</h3>

			<app-select formControlName="sectionId" label="Родительская секция">
				<option value="" disabled>Выберите секцию</option>
				@for (section of navigationTree(); track section.id) {
					<option [value]="section.id">{{ section.title }}</option>
				}
			</app-select>

			<div class="form-row form-row--2-cols">
				<app-input formControlName="title" label="Название категории"></app-input>
				<app-input
					formControlName="orderIndex"
					type="number"
					label="Порядок сортировки"
				></app-input>
			</div>

			<button app-button type="submit" [disabled]="form.invalid">Создать категорию</button>
		</form>
	`,
	styleUrl: './create-category.component.scss',
})
export class CreateCategoryComponent {
	private readonly fb = inject(NonNullableFormBuilder);
	private readonly navigationApi = inject(ArticleNavigationApiService);
	private readonly destroyRef = inject(DestroyRef);

	protected readonly navigationTree = toSignal(this.navigationApi.navigationTree$, {
		initialValue: [],
	});

	protected form = this.fb.group({
		sectionId: ['', Validators.required],
		title: ['', [Validators.required, Validators.minLength(2)]],
		orderIndex: [0],
	});

	submit(): void {
		if (this.form.invalid) return;

		this.navigationApi
			.createCategory(this.form.getRawValue())
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: () => this.form.reset(),
				error: (err) => console.error('Ошибка создания категории', err),
			});
	}
}
