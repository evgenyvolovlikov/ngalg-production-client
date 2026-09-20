import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-sidebar-layout',
	standalone: true,
	templateUrl: './sidebar-layout.component.html',
	styleUrl: './sidebar-layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLayoutComponent {}
