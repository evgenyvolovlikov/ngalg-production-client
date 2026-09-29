export interface BaseEntity {
	id: string;
	createdAt: string;
	updatedAt: string;
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
	isCompleted?: boolean;
};

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

export interface ToggleLessonProgressResponse {
	completed: boolean;
}

export interface CreateLessonDto {
	sectionId?: string;
	sequenceOrder: number;
	title: string;
	description?: string;
	videoUrl?: string;
	durationSeconds?: number;
	isFree?: boolean;
	hasCodeEditor?: boolean;
}

export type UpdateLessonDto = Partial<CreateLessonDto>;
