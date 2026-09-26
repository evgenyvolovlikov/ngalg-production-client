/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-select',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './select.component.scss',
	templateUrl: './select.component.html',
})
export class SelectComponent implements ControlValueAccessor {
	public readonly ngControl = inject(NgControl, { self: true, optional: true });

	constructor() {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

	readonly label = input<string>();
	readonly errorMessage = input<string>('');
	readonly id = input<string>(`select-${Math.random().toString(36).substring(2, 9)}`);

	readonly value = signal<string>('');
	readonly isDisabled = signal<boolean>(false);

	// --- АВТОМАТИЗАЦИЯ ВАЛИДАЦИИ ---

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
		if (errors['required']) return 'Поле обязательно для выбора';

		return 'Недопустимое значение';
	}

	private onChange: (value: string) => void = () => {};
	private onTouched: () => void = () => {};

	protected onSelectChange(event: Event): void {
		const target = event.target as HTMLSelectElement;
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
