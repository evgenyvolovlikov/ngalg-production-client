import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths';
import { BaseApiService } from '@shared/api/base-api.service';

import {
	CourseEntity,
	CourseProgressStats,
	CourseSectionEntity,
	CourseSkeleton,
	CreateCourseDto,
	CreateCourseSectionDto,
	UpdateCourseDto,
	UpdateCourseSectionDto,
} from '../model/course.types';

@Injectable({ providedIn: 'root' })
export class CourseApiService extends BaseApiService {
	private readonly coursesPath = ApiPaths.COURSES;
	private readonly sectionsPath = ApiPaths.SECTIONS;

	getCourseSkeleton(slug: string): Observable<CourseSkeleton> {
		return this.get<CourseSkeleton>(`${this.coursesPath}/${slug}`);
	}

	getCourseProgress(slug: string): Observable<CourseProgressStats> {
		return this.get<CourseProgressStats>(`${this.coursesPath}/${slug}/progress`);
	}

	createCourse(dto: CreateCourseDto): Observable<CourseEntity> {
		return this.post<CourseEntity, CreateCourseDto>(this.coursesPath, dto);
	}

	updateCourse(id: string, dto: UpdateCourseDto): Observable<CourseEntity> {
		return this.patch<CourseEntity, UpdateCourseDto>(`${this.coursesPath}/${id}`, dto);
	}

	deleteCourse(id: string): Observable<void> {
		return this.delete<void>(`${this.coursesPath}/${id}`);
	}

	createSection(courseId: string, dto: CreateCourseSectionDto): Observable<CourseSectionEntity> {
		return this.post<CourseSectionEntity, CreateCourseSectionDto>(
			`${this.coursesPath}/${courseId}/${this.sectionsPath}`,
			dto,
		);
	}

	updateSection(id: string, dto: UpdateCourseSectionDto): Observable<CourseSectionEntity> {
		return this.patch<CourseSectionEntity, UpdateCourseSectionDto>(
			`${this.coursesPath}/${this.sectionsPath}/${id}`,
			dto,
		);
	}

	deleteSection(id: string): Observable<void> {
		return this.delete<void>(`${this.coursesPath}/${this.sectionsPath}/${id}`);
	}
}
