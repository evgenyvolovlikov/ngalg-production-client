import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, shareReplay, switchMap, tap } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths';
import { BaseApiService } from '@shared/api/base-api.service';

import { CreateCategoryDto, CreateSectionDto } from '../model/article-navigation.types';
import { NavigationCategory, NavigationSection } from '../model/navigation-overview.types';

@Injectable({ providedIn: 'root' })
export class ArticleNavigationApiService extends BaseApiService {
	private readonly articlesPath = ApiPaths.ARTICLES;
	private readonly navigationPath = ApiPaths.NAVIGATION;

	private readonly refreshTrigger$ = new BehaviorSubject<void>(undefined);

	/** Дерево навигации статей: секции → категории → статьи */
	public readonly navigationTree$: Observable<NavigationSection[]> = this.refreshTrigger$.pipe(
		switchMap(() =>
			this.get<NavigationSection[]>(`/${this.articlesPath}/${this.navigationPath}`),
		),
		shareReplay({ bufferSize: 1, refCount: true }),
	);

	/** Принудительно перезагрузить дерево навигации */
	public refresh(): void {
		this.refreshTrigger$.next();
	}

	public createSection(dto: CreateSectionDto): Observable<NavigationSection> {
		return this.post<NavigationSection, CreateSectionDto>(
			`/${this.navigationPath}/sections`,
			dto,
		).pipe(tap(() => this.refresh()));
	}

	public createCategory(dto: CreateCategoryDto): Observable<NavigationCategory> {
		return this.post<NavigationCategory, CreateCategoryDto>(
			`/${this.navigationPath}/categories`,
			dto,
		).pipe(tap(() => this.refresh()));
	}
}
