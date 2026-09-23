import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';

const FALLBACK_IMAGE = 'assets/icons/logo.svg';

@Component({
	selector: 'app-cover-image',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './cover-image.component.html',
	styleUrl: './cover-image.component.scss',
	imports: [NgOptimizedImage],
})
export class CoverImageComponent {
	readonly src = input<string | null>(null);
	readonly alt = input.required<string>();
	readonly priority = input<boolean>(false);
	readonly sizes = input<string>('(max-width: 768px) 100vw, 50vw');

	protected readonly fallbackImage = FALLBACK_IMAGE;

	readonly isLoading = signal<boolean>(true);
	readonly hasError = signal<boolean>(false);

	constructor() {
		effect(() => {
			this.src();
			this.isLoading.set(true);
			this.hasError.set(false);
		});
	}

	onLoad(): void {
		this.isLoading.set(false);
	}

	onError(): void {
		this.hasError.set(true);
		this.isLoading.set(false);
	}
}
