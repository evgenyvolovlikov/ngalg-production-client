/** Пути REST-эндпоинтов. Намеренно отделены от сегментов роутера. */
export const ApiPaths = {
	AUTH: 'auth',
	COURSES: 'courses',
	SECTIONS: 'sections',
	LESSONS: 'lessons',
	PROFILES: 'profiles',
	ARTICLES: 'articles',
	NAVIGATION: 'navigation',
	ME: 'me',
} as const;
