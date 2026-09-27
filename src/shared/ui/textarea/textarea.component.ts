/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

import { uniqueId } from '../../lib/utils/unique-id';

@Component({
	selector: 'app-textarea',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './textarea.component.scss',
	templateUrl: './textarea.component.html',
})
export class TextareaComponent implements ControlValueAccessor {
	public readonly ngControl = inject(NgControl, { self: true, optional: true });

	constructor() {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

	readonly label = input<string>();
	readonly placeholder = input<string>('');
	readonly rows = input<number>(4);
	readonly monospace = input<boolean>(false);

	readonly errorMessage = input<string>('');
	readonly id = input<string>(uniqueId('textarea'));

	readonly value = signal<string>('');
	readonly isDisabled = signal<boolean>(false);

	get isRequired(): boolean {
		const control = this.ngControl?.control;
		return control ? control.hasValidator(Validators.required) : false;
	}

	get hasError(): boolean {
		return !!this.ngControl?.invalid && !!this.ngControl?.touched;
	}

	get errorText(): string {
		if (this.errorMessage()) return this.errorMessage();
		if (!this.hasError || !this.ngControl?.errors) return '';

		const errors = this.ngControl.errors;
		if (errors['required']) return 'Поле обязательно для заполнения';
		if (errors['minlength'])
			return `Минимальная длина — ${errors['minlength'].requiredLength} символов`;
		if (errors['maxlength'])
			return `Максимальная длина — ${errors['maxlength'].requiredLength} символов`;

		return 'Недопустимое значение';
	}

	private onChange: (value: string) => void = () => {};
	private onTouched: () => void = () => {};

	protected onInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement;
		this.value.set(target.value);
		this.onChange(this.value());
	}

	protected onBlur(): void {
		this.onTouched();
	}

	writeValue(value: string | null): void {
		this.value.set(value ?? '');
	}

	registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled.set(isDisabled);
	}
}
