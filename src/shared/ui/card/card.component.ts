import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-card',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="ui-card">
			<ng-content></ng-content>
		</div>
	`,
	styleUrl: './card.component.scss',
})
export class CardComponent {}
