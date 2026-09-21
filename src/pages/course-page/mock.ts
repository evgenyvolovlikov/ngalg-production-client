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
		sequenceOrder: 1,
		title: 'Введение в RXJS',
		description: 'Разбор нового реактивного примитива и его применения.',
		durationSeconds: 720,
		isFree: true,
		isCompleted: false,
		hasCodeEditor: true,
	},
	{
		id: '64e4f4c5-ce96-455c-9c78-33d19bb9f',
		sequenceOrder: 2,
		title: 'Введение',
		description: 'Разбор нового реактивн',
		durationSeconds: 720,
		isFree: true,
		isCompleted: false,
		hasCodeEditor: true,
	},
];

export const MOCK_LESSON = {
	id: '64e4f4c5-ce96-455c-9c78-33d19bb9fdc3',
	courseId: 'a2c0efd2-4e76-46a9-9a6f-09031360ca6e',
	sequenceOrder: 1,
	title: 'Введение в RXJS',
	description: 'Разбор нового реактивного примитива и его применения.',
	videoUrl: '',
	durationSeconds: 720,
	isFree: true,
	hasCodeEditor: true,
	isCompleted: false,
};

export const MOCK_NEXT_LESSON: CourseSkeletonLesson = {
	id: '75f5a5d6-df12-466d-a890-44e20cc0aed4',
	sequenceOrder: 2,
	title: 'Введение в RXJS',
	description: 'Изучаем новый встроенный механизм реактивности в Angular и его отличия от RxJS.',
	durationSeconds: 900,
	isFree: true,
	hasCodeEditor: true,
	isCompleted: false,
};
