import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { UpdateUsernameCardComponent } from '@features/update-username';

import { CourseProgressCardComponent } from '@entities/course';

import { RouteSegments } from '@shared/config/routes.config';

import { AccountOverviewPageStore } from './model/account-overview.store';

@Component({
	selector: 'app-account-overview-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="account-overview-page">
		<app-update-username-card />
		@if (progressStats(); as progress) {
			<app-course-progress-card [navigateTo]="coursePath" [progress]="progress" />
		} @else if (loading()) {
			<div class="loading-state">Загрузка курса...</div>
		} @else if (error()) {
			<div class="loading-state">{{ error() }}</div>
		} @else {
			<div class="loading-state">Прогресс отсутствует</div>
		}
	</div>`,

	styleUrl: './account-overview-page.component.scss',
	imports: [UpdateUsernameCardComponent, CourseProgressCardComponent],
})
export class AccountOverviewPageComponent implements OnInit {
	protected readonly coursePath = `/${RouteSegments.COURSES}/${RouteSegments.FRONTEND}`;
	private readonly accountStore = inject(AccountOverviewPageStore);

	readonly progressStats = this.accountStore.courseProgress;
	readonly loading = this.accountStore.loading;
	readonly error = this.accountStore.error;

	ngOnInit(): void {
		this.accountStore.load();
	}
}
