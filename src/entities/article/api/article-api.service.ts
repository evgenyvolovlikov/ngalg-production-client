import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths';
import { BaseApiService } from '@shared/api/base-api.service';

import {
	Article,
	CreateArticleDto,
	GetArticlesQueryDto,
	UpdateArticleDto,
} from '../model/types/article.types';

@Injectable({
	providedIn: 'root',
})
export class ArticleApiService extends BaseApiService {
	private readonly basePath = ApiPaths.ARTICLES;

	/**
	 * Создание новой статьи
	 */
	public createArticle(dto: CreateArticleDto): Observable<Article> {
		return this.post<Article>(this.basePath, dto);
	}

	/**
	 * Получение списка статей с фильтрацией
	 */
	public getArticles(query?: GetArticlesQueryDto): Observable<Article[]> {
		return this.get<Article[]>(
			this.basePath,
			query as Record<
				string,
				string | number | boolean | object | unknown[] | null | undefined
			>,
		);
	}

	/**
	 * Получение конкретной статьи.
	 * Бекенд парсит UUID из строки, можно передавать как 'id', так и 'id-slug'
	 */
	public getArticleById(idWithSlug: string): Observable<Article> {
		return this.get<Article>(`${this.basePath}/${encodeURIComponent(idWithSlug)}`);
	}

	/**
	 * Частичное обновление статьи
	 */
	public updateArticle(idWithSlug: string, dto: UpdateArticleDto): Observable<Article> {
		return this.patch<Article>(`${this.basePath}/${encodeURIComponent(idWithSlug)}`, dto);
	}

	/**
	 * Удаление статьи
	 */
	public deleteArticle(idWithSlug: string): Observable<void> {
		return this.delete<void>(`${this.basePath}/${encodeURIComponent(idWithSlug)}`);
	}
}
