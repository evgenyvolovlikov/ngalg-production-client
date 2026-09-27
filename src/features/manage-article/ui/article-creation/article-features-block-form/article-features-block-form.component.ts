import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { FormArray, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';
import { TextareaComponent } from '@shared/ui/textarea';

import { createFeatureItemForm } from '../../../model/article-blocks-form.factory';
import { FeatureItemForm } from '../../../model/article-form.types';

@Component({
	selector: 'app-features-block-form',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	styleUrl: './article-features-block-form.component.scss',
	imports: [ReactiveFormsModule, InputComponent, TextareaComponent, ButtonComponent],
	template: `
		<div class="features-list">
			<div class="features-list__title">Элементы списка</div>
			<div formArrayName="items">
				@for (item of items.controls; track item; let i = $index) {
					<div class="feature-item-card" [formGroupName]="i">
						<app-input formControlName="title" label="Заголовок фичи" />
						<app-textarea formControlName="text" label="Текст фичи" [rows]="2" />
						<button
							app-button
							type="button"
							variant="clear"
							size="m"
							(click)="removeItem(i)"
						>
							Удалить фичу
						</button>
					</div>
				}
			</div>
			<button app-button type="button" variant="outline" size="m" (click)="addItem()">
				+ Добавить фичу
			</button>
		</div>
	`,
})
export class ArticleFeaturesBlockFormComponent {
	readonly form = input.required<FormGroup>();
	private readonly fb = inject(NonNullableFormBuilder);

	get items(): FormArray<FormGroup<FeatureItemForm>> {
		return this.form().get('items') as FormArray<FormGroup<FeatureItemForm>>;
	}

	addItem(): void {
		this.items.push(createFeatureItemForm(this.fb));
	}

	removeItem(index: number): void {
		this.items.removeAt(index);
	}
}
