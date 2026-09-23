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

export interface LessonEntity extends BaseEntity {
	courseId: string;
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

export type CourseSkeletonLesson = Omit<LessonDetail, 'courseId' | 'videoUrl'>;

export type CourseSkeleton = Omit<CourseEntity, 'createdAt' | 'updatedAt'> & {
	lessons: CourseSkeletonLesson[];
};
