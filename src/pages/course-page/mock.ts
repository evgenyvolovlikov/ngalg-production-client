import { CourseProgress, CourseSkeletonLesson } from '@shared/types/course.types';

/**
 * Исходный массив лекций курса.
 * Задаем последовательные sequenceOrder, чтобы работал computed-сигнал nextLesson.
 */
export const MOCK_LESSONS: any[] = [
	{
		id: 'lesson-1',
		sequenceOrder: 1,
		title: 'Введение в курс и окружение',
		description:
			'Знакомство с планом обучения, разбор структуры проектов и настройка необходимых инструментов для эффективного прохождения курса.',
		durationSeconds: 420, // 7 мин
		isFree: true,
		isCompleted: true, // Первый урок по умолчанию пройден для демонстрации процентов
		hasCodeEditor: false,
		videoUrl: '/videos/sample-5s.mp4',
	},
	{
		id: 'lesson-2',
		sequenceOrder: 2,
		title: 'Что такое Мелкозернистая Реактивность?',
		description:
			'Теоретический разбор парадигмы fine-grained реактивности. Сравнение классического Change Detection дерева и реактивного графа зависимостей.',
		durationSeconds: 780, // 13 мин
		isFree: true,
		isCompleted: false,
		hasCodeEditor: false,
	},
	{
		id: 'lesson-3',
		sequenceOrder: 3,
		title: 'Анатомия Writable Signals',
		description:
			'Глубокое погружение в работу базового примитива реактивности в Angular. Разбор методов set(), update() и работы с иммутабельностью данных.',
		durationSeconds: 960, // 16 мин
		isFree: false, // Платный урок, заблокирован, пока не пройден предыдущий
		isCompleted: false,
		hasCodeEditor: true,
	},
	{
		id: 'lesson-4',
		sequenceOrder: 4,
		title: 'Вычисляемые свойства через Computed Signals',
		description:
			'Изучаем ленивые вычисления (lazy evaluation) и мемоизацию зависимостей графа. Паттерны безопасного использования динамических условий.',
		durationSeconds: 1140, // 19 мин
		isFree: false,
		isCompleted: false,
		hasCodeEditor: true,
	},
	{
		id: 'lesson-5',
		sequenceOrder: 5,
		title: 'Управление сайд-эффектами: Функция effect()',
		description:
			'Разбор правил и ограничений при работе с эффектами. Пишем кастомную синхронизацию состояния с LocalStorage и изучаем функцию очистки ресурсов (cleanup).',
		durationSeconds: 1320, // 22 мин
		isFree: false,
		isCompleted: false,
		hasCodeEditor: true,
	},
];

/**
 * Дефолтный стартовый урок, который подгружается в плеер при первой инициализации
 */
export const MOCK_LESSON = {
	id: 'lesson-1',
	sequenceOrder: 1,
	title: 'Введение в курс и окружение',
	description:
		'Знакомство с планом обучения, разбор структуры проектов и настройка необходимых инструментов для эффективного прохождения курса.',
	videoUrl: '/videos/sample-5s',
	durationSeconds: 420,
	isFree: true,
	hasCodeEditor: false,
	isCompleted: true,
	courseId: 'course-frontend-core',
};

/**
 * Фоллбек-объект прогресса на случай, если computed-свойства будут временно отключены
 */
export const MOCK_COURSE_PROGRESS: CourseProgress = {
	totalLessons: MOCK_LESSONS.length,
	completedLessons: MOCK_LESSONS.filter((l) => l.isCompleted).length,
	percentage: Math.round(
		(MOCK_LESSONS.filter((l) => l.isCompleted).length / MOCK_LESSONS.length) * 100,
	),
};

/**
 * Мок для кнопки перехода на следующий шаг
 */
export const MOCK_NEXT_LESSON: CourseSkeletonLesson = {
	id: 'lesson-2',
	sequenceOrder: 2,
	title: 'Что такое Мелкозернистая Реактивность?',
	description:
		'Теоретический разбор парадигмы fine-grained реактивности. Сравнение классического Change Detection дерева и реактивного графа зависимостей.',
	durationSeconds: 780,
	isFree: true,
	isCompleted: false,
	hasCodeEditor: false,
};
