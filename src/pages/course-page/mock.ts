import { CourseProgress } from '@entities/course';

import { CourseSkeletonLesson } from '@shared/types/course.types';

export const MOCK_COURSE_PROGRESS: CourseProgress = {
	totalLessons: 10,
	completedLessons: 5,
	percentage: 50,
};

export const MOCK_LESSONS: CourseSkeletonLesson[] = [
	{
		id: '64e4f4c5-ce96-455c-9c78-33d19bb9fdc3',
		sequenceOrder: 2,
		title: 'Введение в RXJS',
		description: 'Разбор нового реактивного примитива и его применения.',
		durationSeconds: 720,
		isFree: true,
		isCompleted: false,
	},
];

export const MOCK_LESSON = {
	id: '64e4f4c5-ce96-455c-9c78-33d19bb9fdc3',
	courseId: 'a2c0efd2-4e76-46a9-9a6f-09031360ca6e',
	sequenceOrder: 2,
	title: 'Введение в RXJS',
	description: 'Разбор нового реактивного примитива и его применения.',
	videoUrl: 'https://example.com/videos/lesson-1.mp4',
	durationSeconds: 720,
	isFree: true,
	hasCodeEditor: true,
	isCompleted: false,
};
