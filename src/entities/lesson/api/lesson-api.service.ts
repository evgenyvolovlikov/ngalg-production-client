import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api/base-api.service';
import { RouteSegments } from '@shared/config/routes.config';
import {
	CreateLessonDto,
	LessonDetail,
	LessonEntity,
	ToggleLessonProgressResponse,
	UpdateLessonDto,
} from '@shared/types/course.types';

@Injectable({ providedIn: 'root' })
export class LessonApiService extends BaseApiService {
	private readonly coursesPath = RouteSegments.COURSES;
	private readonly lessonsPath = RouteSegments.LESSONS;

	getLessonDetail(id: string): Observable<LessonDetail> {
		return this.http.get<LessonDetail>(`/${this.coursesPath}/${this.lessonsPath}/${id}`, {
			withCredentials: true,
		});
	}

	toggleLessonProgress(id: string): Observable<ToggleLessonProgressResponse> {
		return this.http.patch<ToggleLessonProgressResponse>(
			`/${this.coursesPath}/${this.lessonsPath}/${id}/progress`,
			{},
			{ withCredentials: true },
		);
	}

	createLesson(courseId: string, dto: CreateLessonDto): Observable<LessonEntity> {
		return this.http.post<LessonEntity>(
			`/${this.coursesPath}/${courseId}/${this.lessonsPath}`,
			dto,
			{
				withCredentials: true,
			},
		);
	}

	updateLesson(id: string, dto: UpdateLessonDto): Observable<LessonEntity> {
		return this.http.patch<LessonEntity>(
			`/${this.coursesPath}/${this.lessonsPath}/${id}`,
			dto,
			{
				withCredentials: true,
			},
		);
	}

	deleteLesson(id: string): Observable<void> {
		return this.http.delete<void>(`/${this.coursesPath}/${this.lessonsPath}/${id}`, {
			withCredentials: true,
			responseType: 'text' as 'json',
		});
	}
}
