import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { switchMap } from 'rxjs/operators';

import { IconService } from './icon.service';
import { IconName } from './icon.types';

export type IconSize = 's' | 'm' | 'l' | 'xl' | 'xxl';

@Component({
	selector: 'app-icon',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './icon.component.scss',
	template: `
		@if (svgContent(); as content) {
			<span
				class="icon-wrapper"
				[class]="sizeClass()"
				[innerHTML]="content"
				[attr.aria-label]="description() || null"
				[attr.aria-hidden]="!description()"
				[attr.role]="description() ? 'img' : null"
			></span>
		}
	`,
})
export class IconComponent {
	private readonly iconService = inject(IconService);

	readonly name = input.required<IconName>();

	readonly description = input<string>();

	readonly size = input<IconSize>('m');

	readonly svgContent = toSignal(
		toObservable(this.name).pipe(switchMap((name) => this.iconService.getIcon(name))),
	);

	readonly sizeClass = computed(() => `icon--size-${this.size()}`);
}
