import {
	AfterViewChecked,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	ViewChild,
	model,
} from '@angular/core';

@Component({
	selector: 'app-accordion',
	standalone: true,
	templateUrl: `./accordion.component.html`,
	styleUrl: './accordion.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements AfterViewChecked {
	readonly isOpen = model<boolean>(false);
	@ViewChild('contentRef', { static: false }) contentRef!: ElementRef<HTMLDivElement>;

	toggle(): void {
		this.isOpen.update((state) => !state);
	}

	ngAfterViewChecked(): void {
		if (this.contentRef) {
			const height = this.isOpen()
				? `${this.contentRef.nativeElement.scrollHeight}px`
				: '0px';
			this.contentRef.nativeElement.style.setProperty('--accordion-content-height', height);
		}
	}
}
