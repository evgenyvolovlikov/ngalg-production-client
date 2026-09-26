export interface CreateSectionDto {
	title: string;
	orderIndex?: number;
}

export interface CreateCategoryDto {
	title: string;
	sectionId: string;
	orderIndex?: number;
}
