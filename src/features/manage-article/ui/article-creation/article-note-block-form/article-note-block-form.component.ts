import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SelectComponent } from '@shared/ui/select';
import { TextareaComponent } from '@shared/ui/textarea';

@Component({
	selector: 'app-note-block-form',
	standalone: true,
	imports: [ReactiveFormsModule, SelectComponent, TextareaComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div [formGroup]="form()">
			<app-select formControlName="noteType" label="Тип заметки">
				<option value="INFO">Инфо</option>
				<option value="WARNING">Предупреждение</option>
				<option value="ERROR">Ошибка</option>
			</app-select>

			<app-textarea formControlName="text" label="Текст заметки" [rows]="3"></app-textarea>
		</div>
	`,
})
export class ArticleNoteBlockFormComponent {
	readonly form = input.required<FormGroup>();
}
