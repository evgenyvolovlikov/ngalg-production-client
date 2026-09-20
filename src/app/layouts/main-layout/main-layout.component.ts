import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '@widgets/header';

@Component({
	selector: 'app-main-layout',
	standalone: true,
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [HeaderComponent, RouterOutlet],
})
export class MainLayoutComponent {}
