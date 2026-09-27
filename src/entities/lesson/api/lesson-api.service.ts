/* eslint-disable @conarti/feature-sliced/layers-slices */
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
	CreateLessonDto,
	LessonDetail,
	LessonEntity,
	ToggleLessonProgressResponse,
	UpdateLessonDto,
} from '@entities/course';

import { ApiPaths } from '@shared/api/api-paths';
import { BaseApiService } from '@shared/api/base-api.service';

@Injectable({ providedIn: 'root' })
export class LessonApiService extends BaseApiService {
	private readonly coursesPath = ApiPaths.COURSES;
	private readonly lessonsPath = ApiPaths.LESSONS;

	getLessonDetail(id: string): Observable<LessonDetail> {
		return this.get<LessonDetail>(`/${this.coursesPath}/${this.lessonsPath}/${id}`);
	}

	toggleLessonProgress(id: string): Observable<ToggleLessonProgressResponse> {
		return this.patch<ToggleLessonProgressResponse, Record<string, never>>(
			`/${this.coursesPath}/${this.lessonsPath}/${id}/progress`,
			{},
		);
	}

	createLesson(courseId: string, dto: CreateLessonDto): Observable<LessonEntity> {
		return this.post<LessonEntity, CreateLessonDto>(
			`/${this.coursesPath}/${courseId}/${this.lessonsPath}`,
			dto,
		);
	}

	updateLesson(id: string, dto: UpdateLessonDto): Observable<LessonEntity> {
		return this.patch<LessonEntity, UpdateLessonDto>(
			`/${this.coursesPath}/${this.lessonsPath}/${id}`,
			dto,
		);
	}

	deleteLesson(id: string): Observable<void> {
		return this.delete<void>(`/${this.coursesPath}/${this.lessonsPath}/${id}`);
	}
}
