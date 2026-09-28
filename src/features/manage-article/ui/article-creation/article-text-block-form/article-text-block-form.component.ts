import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SelectComponent } from '@shared/ui/select';
import { TextareaComponent } from '@shared/ui/textarea';

@Component({
	selector: 'app-text-block-form',
	standalone: true,
	imports: [ReactiveFormsModule, SelectComponent, TextareaComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div [formGroup]="form()">
			<app-select formControlName="format" label="Формат">
				<option value="MARKDOWN">Markdown</option>
				<option value="HTML">HTML</option>
			</app-select>

			<app-textarea formControlName="content" label="Контент" [rows]="24"></app-textarea>
		</div>
	`,
})
export class ArticleTextBlockFormComponent {
	readonly form = input.required<FormGroup>();
}
