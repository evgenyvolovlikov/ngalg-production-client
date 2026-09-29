import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CourseApiService, CourseProgressStats } from '@entities/course';

@Injectable({ providedIn: 'root' })
export class AccountOverviewPageStore {
	private readonly courseApi = inject(CourseApiService);
	private readonly destroyRef = inject(DestroyRef);

	private readonly courseProgressState = signal<CourseProgressStats | null>(null);
	private readonly loadingState = signal<boolean>(false);
	private readonly errorState = signal<string | null>(null);

	readonly courseProgress = this.courseProgressState.asReadonly();
	readonly loading = this.loadingState.asReadonly();
	readonly error = this.errorState.asReadonly();

	load(): void {
		this.loadingState.set(true);
		this.errorState.set(null);

		this.courseApi
			.getCourseProgress('frontend')
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (progress) => {
					this.courseProgressState.set(progress);
					this.loadingState.set(false);
				},
				error: () => {
					this.errorState.set('Не удалось загрузить прогресс');
					this.loadingState.set(false);
				},
			});
	}
}
