import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

let nextUniqueId = 0;

@Component({
	selector: 'app-checkbox',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
	readonly checked = model<boolean>(false);
	readonly disabled = input<boolean>(false);
	readonly inputId = input<string>(`app-checkbox-${++nextUniqueId}`);

	protected onChange(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		this.checked.set(inputElement.checked);
	}
}
