import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths';
import { BaseApiService } from '@shared/api/base-api.service';

import {
	Article,
	ArticleListResponse,
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
		return this.post<Article, CreateArticleDto>(this.basePath, dto);
	}

	/**
	 * Получение списка статей с фильтрацией
	 */
	public getArticles(query?: GetArticlesQueryDto): Observable<ArticleListResponse> {
		return this.get<ArticleListResponse>(
			this.basePath,
			query as Record<
				string,
				string | number | boolean | object | unknown[] | null | undefined
			>,
		);
	}

	/**
	 * Получение статьи по ID
	 */
	public getArticleById(id: string): Observable<Article> {
		return this.get<Article>(`${this.basePath}/${id}`);
	}

	/**
	 * Обновление статьи
	 */
	public updateArticle(id: string, dto: UpdateArticleDto): Observable<Article> {
		return this.patch<Article, UpdateArticleDto>(`${this.basePath}/${id}`, dto);
	}

	/**
	 * Удаление статьи
	 */
	public deleteArticle(id: string): Observable<void> {
		return this.delete<void>(`${this.basePath}/${id}`);
	}
}
