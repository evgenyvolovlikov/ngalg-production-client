import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
	selector: 'app-accordion',
	standalone: true,
	template: `
		<details class="accordion" [open]="isOpen()" (toggle)="onToggle($event)">
			<summary class="accordion__summary">
				<ng-content select="[accordion-title]"></ng-content>
			</summary>
			<div class="accordion__content">
				<ng-content></ng-content>
			</div>
		</details>
	`,
	styleUrl: './accordion.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
	readonly isOpen = model<boolean>(false);

	protected onToggle(event: Event): void {
		this.isOpen.set((event.target as HTMLDetailsElement).open);
	}
}
