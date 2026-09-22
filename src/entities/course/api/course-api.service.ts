import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api/base-api.service';
import { CourseSkeleton } from '@shared/types/course.types';

@Injectable({ providedIn: 'root' })
export class CourseApiService extends BaseApiService {
	private readonly coursesPath = 'courses';

	getCourseSkeleton(slug: string): Observable<CourseSkeleton> {
		return this.http.get<CourseSkeleton>(`/${this.coursesPath}/${slug}`);
	}
}
