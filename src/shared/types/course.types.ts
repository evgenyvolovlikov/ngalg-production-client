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

export interface CourseSkeletonLesson {
	id: string;
	sectionId: string | null;
	sequenceOrder: number;
	title: string;
	description: string | null;
	durationSeconds: number;
	isFree: boolean;
	hasCodeEditor: boolean;
	isCompleted: boolean;
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

export interface LessonEntity extends BaseEntity {
	courseId: string;
	sectionId: string | null;
	sequenceOrder: number;
	title: string;
	description: string | null;
	videoUrl: string | null;
	durationSeconds: number;
	isFree: boolean;
	hasCodeEditor: boolean;
}

export type LessonDetail = Omit<LessonEntity, 'createdAt' | 'updatedAt'> & {
	isCompleted: boolean;
};

export interface ToggleLessonProgressResponse {
	completed: boolean;
}

export interface CourseProgress {
	totalLessons: number;
	completedLessons: number;
	percentage: number;
}

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

export interface CreateLessonDto {
	sectionId: string;
	sequenceOrder: number;
	title: string;
	description?: string;
	videoUrl?: string;
	durationSeconds?: number;
	isFree?: boolean;
	hasCodeEditor?: boolean;
}

export type UpdateLessonDto = Partial<CreateLessonDto>;
