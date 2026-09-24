import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api/base-api.service';
import { RouteSegments } from '@shared/config/routes.config';
import {
	CourseEntity,
	CourseSkeleton,
	CreateCourseDto,
	UpdateCourseDto,
} from '@shared/types/course.types';

@Injectable({ providedIn: 'root' })
export class CourseApiService extends BaseApiService {
	private readonly coursesPath = RouteSegments.COURSES;

	getCourseSkeleton(slug: string): Observable<CourseSkeleton> {
		return this.http.get<CourseSkeleton>(`/${this.coursesPath}/${slug}`, {
			withCredentials: true,
		});
	}

	createCourse(dto: CreateCourseDto): Observable<CourseEntity> {
		return this.http.post<CourseEntity>(`/${this.coursesPath}`, dto, {
			withCredentials: true,
		});
	}

	updateCourse(id: string, dto: UpdateCourseDto): Observable<CourseEntity> {
		return this.http.patch<CourseEntity>(`/${this.coursesPath}/${id}`, dto, {
			withCredentials: true,
		});
	}

	deleteCourse(id: string): Observable<void> {
		return this.http.delete<void>(`/${this.coursesPath}/${id}`, {
			withCredentials: true,
			responseType: 'text' as 'json',
		});
	}
}
