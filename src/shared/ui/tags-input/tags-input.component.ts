/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
	selector: 'app-tags-input',
	standalone: true,
	templateUrl: './tags-input.component.html',
	styleUrl: './tags-input.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsInputComponent implements ControlValueAccessor {
	readonly ngControl = inject(NgControl, { optional: true, self: true });

	readonly label = input<string>('');
	readonly placeholder = input<string>('');

	readonly tags = signal<string[]>([]);
	readonly isDisabled = signal<boolean>(false);

	private onChange: (value: string[]) => void = () => {};
	private onTouched: () => void = () => {};

	constructor() {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

	writeValue(value: string[] | null): void {
		this.tags.set(Array.isArray(value) ? value : []);
	}

	registerOnChange(fn: (value: string[]) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled.set(isDisabled);
	}

	addTag(event: Event): void {
		event.preventDefault();
		const inputElement = event.target as HTMLInputElement;
		const value = inputElement.value.trim();

		if (!value || this.tags().includes(value)) {
			inputElement.value = '';
			return;
		}

		const updated = [...this.tags(), value];
		this.tags.set(updated);
		this.onChange(updated);
		this.onTouched();

		inputElement.value = '';
	}

	removeTag(index: number): void {
		const updated = this.tags().filter((_, i) => i !== index);
		this.tags.set(updated);
		this.onChange(updated);
		this.onTouched();
	}

	onBlur(event: Event): void {
		this.onTouched();

		const inputElement = event.target as HTMLInputElement;
		if (inputElement.value.trim()) {
			this.addTag(event);
		}
	}
}
