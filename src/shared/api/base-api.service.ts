import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

export type ApiQueryParams = Record<
	string,
	string | number | boolean | null | undefined | unknown[] | object
>;

export abstract class BaseApiService {
	protected readonly http = inject(HttpClient);

	/**
	 * GET запрос
	 * @template T Тип возвращаемого ответа бэкенда
	 * @template P Тип Query-параметров (DTO)
	 */
	protected get<T, P extends ApiQueryParams = ApiQueryParams>(
		endpoint: string,
		params?: P,
	): Observable<T> {
		return this.http
			.get<T>(endpoint, { params: this.buildParams(params) })
			.pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
	}

	/**
	 * POST запрос
	 * @template T Тип возвращаемого ответа бэкенда
	 * @template R Тип тела запроса (Request DTO)
	 */
	protected post<T, R = unknown>(endpoint: string, body?: R): Observable<T> {
		return this.http
			.post<T>(endpoint, body)
			.pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
	}

	/**
	 * PATCH запрос
	 * @template T Тип возвращаемого ответа бэкенда
	 * @template R Тип тела запроса (Request DTO)
	 */
	protected patch<T, R = unknown>(endpoint: string, body?: R): Observable<T> {
		return this.http
			.patch<T>(endpoint, body)
			.pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
	}

	/**
	 * DELETE запрос
	 * @template T Тип возвращаемого ответа бэкенда
	 */
	protected delete<T>(endpoint: string): Observable<T> {
		return this.http
			.delete<T>(endpoint)
			.pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
	}

	/**
	 * Преобразует объект параметров в иммутабельный HttpParams для Angular
	 */
	private buildParams(params?: ApiQueryParams): HttpParams {
		let httpParams = new HttpParams();
		if (!params) return httpParams;

		Object.entries(params).forEach(([key, value]) => {
			if (value === null || value === undefined) return;

			if (Array.isArray(value)) {
				value.forEach((item: unknown) => {
					const itemValue =
						typeof item === 'object' && item !== null
							? JSON.stringify(item)
							: String(item);
					httpParams = httpParams.append(key, itemValue);
				});
			} else if (typeof value === 'object') {
				httpParams = httpParams.set(key, JSON.stringify(value));
			} else {
				httpParams = httpParams.set(key, String(value));
			}
		});

		return httpParams;
	}

	/**
	 * Централизованный обработчик ошибок HTTP-запросов
	 */
	protected handleError(error: HttpErrorResponse): Observable<never> {
		console.error('API Error произошла по адресу:', error.url, error);
		return throwError(() => error);
	}
}
