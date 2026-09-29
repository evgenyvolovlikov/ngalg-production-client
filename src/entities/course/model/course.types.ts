import type { CourseSkeletonLesson } from '@entities/lesson';

export interface BaseEntity {
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface CourseEntity extends BaseEntity {
	slug: string;
	title: string;
	description: string;
	isPublished: boolean;
}

export interface CourseSectionEntity extends BaseEntity {
	courseId: string;
	title: string;
	slug: string;
	orderIndex: number;
}

export interface CourseSkeletonSection {
	id: string;
	title: string;
	slug: string;
	orderIndex: number;
	lessons: CourseSkeletonLesson[];
}

export interface CourseSkeleton {
	id: string;
	slug: string;
	title: string;
	description: string;
	isPublished: boolean;
	sections: CourseSkeletonSection[];
}

export interface CourseProgressStats {
	courseId: string;
	courseSlug: string;
	courseTitle: string;
	totalLessons: number;
	completedLessons: number;
	percentage: number;
}

export type CourseProgress = CourseProgressStats;

export interface CreateCourseDto {
	slug: string;
	title: string;
	description: string;
	isPublished?: boolean;
}

export type UpdateCourseDto = Partial<CreateCourseDto>;

export interface CreateCourseSectionDto {
	title: string;
	slug: string;
	orderIndex?: number;
}

export type UpdateCourseSectionDto = Partial<CreateCourseSectionDto>;

export type {
	CourseSkeletonLesson,
	LessonDetail,
	LessonEntity,
	ToggleLessonProgressResponse,
	CreateLessonDto,
	UpdateLessonDto,
} from '@entities/lesson';
