import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '@shared/ui/input';

@Component({
	selector: 'app-image-block-form',
	standalone: true,
	imports: [ReactiveFormsModule, InputComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div [formGroup]="form()">
			<app-input formControlName="url" label="URL изображения" />

			<div class="form-row form-row--2-cols">
				<app-input formControlName="alt" label="Alt текст" />
				<app-input formControlName="caption" label="Подпись под фото" />
			</div>
		</div>
	`,
	styleUrl: './article-image-block-form.component.scss',
})
export class ArticleImageBlockFormComponent {
	readonly form = input.required<FormGroup>();
}
