/* eslint-disable @typescript-eslint/no-empty-function */
import {
	ChangeDetectionStrategy,
	Component,
	booleanAttribute,
	computed,
	inject,
	input,
	signal,
} from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

import { uniqueId } from '../../lib/utils/unique-id';
import { IconComponent } from '../icon';

@Component({
	selector: 'app-input',
	standalone: true,
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [IconComponent],
})
export class InputComponent implements ControlValueAccessor {
	public readonly ngControl = inject(NgControl, { self: true, optional: true });

	constructor() {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

	readonly type = input<'text' | 'password' | 'email' | 'number'>('text');
	readonly label = input<string>('');
	readonly placeholder = input<string>('');
	readonly errorMessage = input<string>('');
	readonly readonly = input(false, { transform: booleanAttribute });
	readonly id = input<string>(uniqueId('input'));

	readonly value = signal<string>('');
	readonly isDisabled = signal<boolean>(false);
	readonly isPasswordVisible = signal<boolean>(false);

	readonly inputType = computed(() =>
		this.type() === 'password' && this.isPasswordVisible() ? 'text' : this.type(),
	);

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
		if (errors['email']) return 'Некорректный формат email';
		if (errors['minlength'])
			return `Минимальная длина — ${errors['minlength'].requiredLength} символов`;
		if (errors['maxlength'])
			return `Максимальная длина — ${errors['maxlength'].requiredLength} символов`;

		return 'Недопустимое значение';
	}

	private onChange: (value: string) => void = () => {};
	private onTouched: () => void = () => {};

	writeValue(val: string | null): void {
		this.value.set(val ?? '');
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

	protected onInput(event: Event): void {
		const newValue = (event.target as HTMLInputElement).value;
		this.value.set(newValue);
		this.onChange(newValue);
	}

	protected onBlur(): void {
		this.onTouched();
	}

	protected togglePasswordVisibility(event: MouseEvent): void {
		event.stopPropagation();
		if (!this.isDisabled()) {
			this.isPasswordVisible.update((v) => !v);
		}
	}
}
