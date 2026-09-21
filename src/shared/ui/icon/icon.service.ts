import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { IconName } from './icon.types';

@Injectable({ providedIn: 'root' })
export class IconService {
	private readonly httpBackend = inject(HttpBackend);

	private readonly http = new HttpClient(this.httpBackend);

	private readonly sanitizer = inject(DomSanitizer);
	private readonly cache = new Map<string, Observable<SafeHtml>>();

	getIcon(name: IconName): Observable<SafeHtml> {
		if (!this.cache.has(name)) {
			const request = this.http.get(`/assets/${name}.svg`, { responseType: 'text' }).pipe(
				map((svg) => this.sanitizer.bypassSecurityTrustHtml(svg)),
				shareReplay(1),
			);
			this.cache.set(name, request);
		}
		return this.cache.get(name)!;
	}
}
