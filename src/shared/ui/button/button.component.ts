import {
	ChangeDetectionStrategy,
	Component,
	booleanAttribute,
	computed,
	input,
} from '@angular/core';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'default' | 'primary' | 'error' | 'success';
export type ButtonSize = 's' | 'm' | 'l' | 'xl';

@Component({
	selector: 'button[app-button], a[app-button]',
	standalone: true,
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'app-button',
		'[class.app-button--variant-clear]': 'variant() === "clear"',
		'[class.app-button--variant-outline]': 'variant() === "outline"',
		'[class.app-button--variant-filled]': 'variant() === "filled"',
		'[class.app-button--color-default]': 'color() === "default"',
		'[class.app-button--color-primary]': 'color() === "primary"',
		'[class.app-button--color-error]': 'color() === "error"',
		'[class.app-button--color-success]': 'color() === "success"',
		'[class.app-button--size-s]': 'size() === "s"',
		'[class.app-button--size-m]': 'size() === "m"',
		'[class.app-button--size-l]': 'size() === "l"',
		'[class.app-button--size-xl]': 'size() === "xl"',
		'[class.app-button--full-width]': 'fullWidth()',
		'[class.app-button--disabled]': 'isDisabled()',
		'[class.app-button--loading]': 'loading()',
		'[attr.disabled]': 'isDisabled() ? true : null',
		'[attr.aria-busy]': 'loading() ? "true" : null',
	},
})
export class ButtonComponent {
	readonly variant = input<ButtonVariant>('filled');
	readonly color = input<ButtonColor>('default');
	readonly size = input<ButtonSize>('m');

	readonly loading = input(false, { transform: booleanAttribute });
	readonly disabled = input(false, { transform: booleanAttribute });
	readonly fullWidth = input(false, { transform: booleanAttribute });

	readonly isDisabled = computed(() => this.disabled() || this.loading());
}
