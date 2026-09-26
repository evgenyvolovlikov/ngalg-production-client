import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api/base-api.service';
import { RouteSegments } from '@shared/config/routes.config';
import {
	CourseEntity,
	CourseSectionEntity,
	CourseSkeleton,
	CreateCourseDto,
	CreateCourseSectionDto,
	UpdateCourseDto,
	UpdateCourseSectionDto,
} from '@shared/types/course.types';

@Injectable({ providedIn: 'root' })
export class CourseApiService extends BaseApiService {
	private readonly coursesPath = RouteSegments.COURSES;
	private readonly sectionsPath = RouteSegments.SECTIONS;

	getCourseSkeleton(slug: string): Observable<CourseSkeleton> {
		return this.get<CourseSkeleton>(`/${this.coursesPath}/${slug}`);
	}

	createCourse(dto: CreateCourseDto): Observable<CourseEntity> {
		return this.post<CourseEntity, CreateCourseDto>(`/${this.coursesPath}`, dto);
	}

	updateCourse(id: string, dto: UpdateCourseDto): Observable<CourseEntity> {
		return this.patch<CourseEntity, UpdateCourseDto>(`/${this.coursesPath}/${id}`, dto);
	}

	deleteCourse(id: string): Observable<void> {
		return this.delete<void>(`/${this.coursesPath}/${id}`);
	}

	createSection(courseId: string, dto: CreateCourseSectionDto): Observable<CourseSectionEntity> {
		return this.post<CourseSectionEntity, CreateCourseSectionDto>(
			`/${this.coursesPath}/${courseId}/${this.sectionsPath}`,
			dto,
		);
	}

	updateSection(id: string, dto: UpdateCourseSectionDto): Observable<CourseSectionEntity> {
		return this.patch<CourseSectionEntity, UpdateCourseSectionDto>(
			`/${this.coursesPath}/${this.sectionsPath}/${id}`,
			dto,
		);
	}

	deleteSection(id: string): Observable<void> {
		return this.delete<void>(`/${this.coursesPath}/${this.sectionsPath}/${id}`);
	}
}
