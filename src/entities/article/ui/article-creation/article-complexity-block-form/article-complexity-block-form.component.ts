import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '@shared/ui/input';
import { TextareaComponent } from '@shared/ui/textarea';

@Component({
	selector: 'app-complexity-block-form',
	standalone: true,
	imports: [ReactiveFormsModule, InputComponent, TextareaComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div [formGroup]="form()">
			<div class="form-row form-row--2-cols">
				<app-input formControlName="time" label="Сложность по времени" />
				<app-input formControlName="space" label="Сложность по памяти" />
			</div>

			<app-textarea
				formControlName="description"
				label="Пояснение (необязательно)"
				[rows]="2"
			></app-textarea>
		</div>
	`,
	styleUrl: './article-complexity-block-form.component.scss',
})
export class ArticleComplexityBlockFormComponent {
	readonly form = input.required<FormGroup>();
}
