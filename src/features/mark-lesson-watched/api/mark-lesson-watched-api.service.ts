import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api/base-api.service';
import { RouteSegments } from '@shared/config/routes.config';
import { ToggleLessonProgressResponse } from '@shared/types/course.types';

@Injectable({ providedIn: 'root' })
export class MarkLessonWatchedApiService extends BaseApiService {
	toggleProgress(lessonId: string): Observable<ToggleLessonProgressResponse> {
		return this.http.patch<ToggleLessonProgressResponse>(
			`/${RouteSegments.COURSES}/${RouteSegments.LESSONS}/${lessonId}/progress`,
			{},
			{ withCredentials: true },
		);
	}
}
