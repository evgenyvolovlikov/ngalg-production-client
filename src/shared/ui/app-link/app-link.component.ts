import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	computed,
	inject,
	input,
} from '@angular/core';

export type LinkVariant = 'primary' | 'secondary' | 'underline';
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

@Component({
	selector: 'a[app-link], button[app-link]',
	standalone: true,
	template: '<ng-content />',
	styleUrl: './app-link.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class]': 'hostClass()',
		'[attr.type]': 'isButton ? "button" : null',
		'[attr.target]': 'isButton ? null : target()',
		'[attr.rel]': 'isButton ? null : relValue()',
	},
})
export class AppLinkComponent {
	readonly variant = input<LinkVariant>('primary');
	readonly target = input<LinkTarget>('_self');
	readonly rel = input<string | null>(null);
	readonly isActive = input<boolean>(false);

	private readonly el = inject(ElementRef<HTMLElement>);
	protected readonly isButton = this.el.nativeElement.tagName === 'BUTTON';

	protected readonly hostClass = computed(
		() => `app-link app-link--${this.variant()}${this.isActive() ? ' app-link--active' : ''}`,
	);

	protected readonly relValue = computed(() => {
		if (this.target() === '_blank') {
			return this.rel() ?? 'noopener noreferrer';
		}
		return this.rel();
	});
}
