import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '@shared/ui/input';
import { TextareaComponent } from '@shared/ui/textarea';

@Component({
	selector: 'app-code-block-form',
	standalone: true,
	imports: [ReactiveFormsModule, InputComponent, TextareaComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div [formGroup]="form()">
			<div class="form-row form-row--2-cols">
				<app-input formControlName="language" label="Язык" />
				<app-input formControlName="filename" label="Имя файла (необязательно)" />
			</div>

			<app-textarea formControlName="code" label="Код" [rows]="6"></app-textarea>
		</div>
	`,
	styleUrl: './article-code-block-form.component.scss',
})
export class ArticleCodeBlockFormComponent {
	readonly form = input.required<FormGroup>();
}
