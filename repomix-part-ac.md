    	&:focus-visible + .checkbox__box {
    		box-shadow: var(--focus-ring, 0 0 0 4px rgb(99 102 241 / 15%));
    		border-color: var(--border-focus);
    	}

    	&:checked + .checkbox__box {
    		background-color: var(--brand-primary);
    		border-color: var(--brand-primary);

    		.checkbox__icon {
    			stroke-dashoffset: 0;

    			path {
    				stroke: var(--text-on-dark);
    			}
    		}
    	}
    }

    &__box {
    	display: flex;
    	flex-shrink: 0;
    	justify-content: center;
    	align-items: center;
    	width: var(--unit-5);
    	height: var(--unit-5);
    	background-color: var(--bg-card);
    	border: 2px solid var(--border-light);
    	border-radius: var(--radius-sm);
    	transition:
    		background-color var(--transition-fast),
    		border-color var(--transition-fast);
    }

    &__icon {
    	width: var(--font-size-sm);
    	height: var(--font-size-sm);
    	transition: stroke-dashoffset var(--transition-base);
    	stroke: var(--text-on-dark);
    	stroke-dasharray: 24;
    	stroke-dashoffset: 24;
    }

    &__label {
    	line-height: var(--line-height-tight);

    	&:empty {
    		display: none;
    	}
    }

} </file>

<file path="src/shared/ui/checkbox/checkbox.component.ts">
import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

let nextUniqueId = 0;

@Component({ selector: 'app-checkbox', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './checkbox.component.html', styleUrl:
'./checkbox.component.scss', }) export class CheckboxComponent { readonly checked =
model<boolean>(false); readonly disabled = input<boolean>(false); readonly inputId =
input<string>(`app-checkbox-${++nextUniqueId}`);

    protected onChange(event: Event): void {
    	const inputElement = event.target as HTMLInputElement;
    	this.checked.set(inputElement.checked);
    }

} </file>

<file path="src/shared/ui/checkbox/index.ts">
export * from './checkbox.component';
</file>

<file path="src/shared/ui/circular-progress/circular-progress.component.html">
<div class="circular-progress" [style.width.px]="size()" [style.height.px]="size()">
	<svg [attr.viewBox]="viewBox()" class="progress-svg">
		<circle
			class="progress-track"
			[attr.cx]="center()"
			[attr.cy]="center()"
			[attr.r]="radius()"
			[attr.stroke-width]="strokeWidth()"
		/>
		<circle
			class="progress-indicator"
			[attr.cx]="center()"
			[attr.cy]="center()"
			[attr.r]="radius()"
			[attr.stroke-width]="strokeWidth()"
			[attr.stroke-dasharray]="circumference()"
			[attr.stroke-dashoffset]="strokeDashoffset()"
		/>
	</svg>

    @if (showLabel()) {
    	<div class="progress-label">
    		<span class="value">{{ normalizedValue() }}%</span>
    		<ng-content />
    	</div>
    }

</div>
</file>

<file path="src/shared/ui/circular-progress/circular-progress.component.scss">
:host {
	display: inline-block;
}

.circular-progress { position: relative; display: flex; justify-content: center; align-items:
center; }

.progress-svg { width: 100%; height: 100%; transform: rotate(-90deg); }

.progress-track { fill: none; stroke: var(--border-light); }

.progress-indicator { transition: stroke-dashoffset var(--transition-base); fill: none; stroke:
var(--brand-primary); stroke-linecap: round; }

.progress-label { position: absolute; display: flex; flex-direction: column; justify-content:
center; align-items: center; text-align: center;

    .value {
    	font-size: var(--font-size-xxxl);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-none);
    	color: var(--text-primary);
    }

} </file>

<file path="src/shared/ui/circular-progress/circular-progress.component.ts">
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({ selector: 'app-circular-progress', standalone: true, imports: [], templateUrl:
'./circular-progress.component.html', styleUrl: './circular-progress.component.scss',
changeDetection: ChangeDetectionStrategy.OnPush, }) export class CircularProgressComponent { /**
Значение прогресса от 0 до 100 */ readonly value = input<number>(0);

    /** Размер SVG в пикселях (ширина и высота) */
    readonly size = input<number>(180);

    /** Толщина линии прогресса */
    readonly strokeWidth = input<number>(12);

    /** Флаг отображения текстового значения по центру */
    readonly showLabel = input<boolean>(true);

    readonly normalizedValue = computed(() => Math.min(100, Math.max(0, this.value())));
    readonly radius = computed(() => (this.size() - this.strokeWidth()) / 2);
    readonly circumference = computed(() => 2 * Math.PI * this.radius());
    readonly strokeDashoffset = computed(() => {
    	const progress = this.normalizedValue() / 100;
    	return this.circumference() * (1 - progress);
    });
    readonly viewBox = computed(() => `0 0 ${this.size()} ${this.size()}`);
    readonly center = computed(() => this.size() / 2);

} </file>

<file path="src/shared/ui/circular-progress/index.ts">
export * from './circular-progress.component';
</file>

<file path="src/shared/ui/cover-image/cover-image.component.html">
<div class="cover-image" [class.is-loading]="isLoading()">
	@if (isLoading() && src() && !hasError()) {
		<div aria-hidden="true" class="cover-image__skeleton"></div>
	}

    @if (!src() || hasError()) {
    	<div class="cover-image__fallback" aria-hidden="true">
    		<img [src]="fallbackImage" alt="" class="cover-image__fallback-img" />
    	</div>
    } @else {
    	<img
    		[ngSrc]="src()!"
    		[alt]="alt()"
    		[priority]="priority()"
    		[sizes]="sizes()"
    		fill
    		(load)="onLoad()"
    		(error)="onError()"
    		class="cover-image__img"
    		[class.cover-image__img--loaded]="!isLoading()"
    	/>
    }

</div>
</file>

<file path="src/shared/ui/cover-image/cover-image.component.scss">
:host {
	display: block;
	width: 100%;
}

.cover-image { position: relative; width: 100%; background-color: var(--bg-card); border: 1px solid
var(--border-light); border-radius: var(--radius-lg); aspect-ratio: 16 / 9; overflow: hidden;

    &__skeleton {
    	position: absolute;
    	z-index: var(--z-elevate);
    	background: linear-gradient(
    		90deg,
    		var(--bg-card) 25%,
    		var(--bg-main) 50%,
    		var(--bg-card) 75%
    	);
    	animation: shimmer 1.5s infinite linear;
    	inset: 0;
    	background-size: 200% 100%;
    }

    &__fallback {
    	position: absolute;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	padding: var(--unit-4);
    	background: linear-gradient(135deg, var(--bg-card), var(--bg-main));
    	inset: 0;

    	&-img {
    		width: var(--unit-12);
    		height: var(--unit-12);
    		opacity: var(--opacity-disabled);
    		object-fit: contain;
    	}
    }

    &__img {
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    	opacity: 0;
    	transition: opacity var(--transition-base);
    	object-fit: contain;

    	&--loaded {
    		opacity: 1;
    	}
    }

}

@keyframes shimmer { 0% { background-position: 200% 0; }

    100% {
    	background-position: -200% 0;
    }

} </file>

<file path="src/shared/ui/cover-image/cover-image.component.ts">
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';

const FALLBACK_IMAGE = 'assets/icons/logo.svg';

@Component({ selector: 'app-cover-image', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './cover-image.component.html', styleUrl:
'./cover-image.component.scss', imports: [NgOptimizedImage], }) export class CoverImageComponent {
readonly src = input<string | null>(null); readonly alt = input.required<string>(); readonly
priority = input<boolean>(false); readonly sizes = input<string>('(max-width: 768px) 100vw, 50vw');

    protected readonly fallbackImage = FALLBACK_IMAGE;

    readonly isLoading = signal<boolean>(true);
    readonly hasError = signal<boolean>(false);

    constructor() {
    	effect(() => {
    		this.src();
    		this.isLoading.set(true);
    		this.hasError.set(false);
    	});
    }

    onLoad(): void {
    	this.isLoading.set(false);
    }

    onError(): void {
    	this.hasError.set(true);
    	this.isLoading.set(false);
    }

} </file>

<file path="src/shared/ui/cover-image/index.ts">
export * from './cover-image.component';
</file>

<file path="src/shared/ui/drawer/index.ts">
export * from './drawer.component';
</file>

<file path="src/shared/ui/icon/icon.component.scss">
:host {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: inherit;
	vertical-align: middle;
}

.icon-wrapper { display: inline-flex; justify-content: center; align-items: center;

    ::ng-deep svg {
    	width: 100%;
    	height: 100%;
    	pointer-events: none;
    	fill: currentcolor;
    }

    &.icon--size-s {
    	width: var(--unit-4);
    	height: var(--unit-4);
    }

    &.icon--size-m {
    	width: var(--unit-5);
    	height: var(--unit-5);
    }

    &.icon--size-l {
    	width: var(--unit-6);
    	height: var(--unit-6);
    }

    &.icon--size-xl {
    	width: var(--unit-8);
    	height: var(--unit-8);
    }

    &.icon--size-xxl {
    	width: var(--unit-10);
    	height: var(--unit-10);
    }

} </file>

<file path="src/shared/ui/icon/icon.component.ts">
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { switchMap } from 'rxjs/operators';

import { IconService } from './icon.service'; import { IconName } from './icon.types';

export type IconSize = 's' | 'm' | 'l' | 'xl' | 'xxl';

@Component({ selector: 'app-icon', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, styleUrl: './icon.component.scss', template:
` 		@if (svgContent(); as content) { 			<span 				class="icon-wrapper" 				[class]="sizeClass()" 				[innerHTML]="content" 				[attr.aria-label]="description() || null" 				[attr.aria-hidden]="!description()" 				[attr.role]="description() ? 'img' : null" 			></span> 		} 	`,
}) export class IconComponent { private readonly iconService = inject(IconService);

    readonly name = input.required<IconName>();

    readonly description = input<string>();

    readonly size = input<IconSize>('m');

    readonly svgContent = toSignal(
    	toObservable(this.name).pipe(switchMap((name) => this.iconService.getIcon(name))),
    );

    readonly sizeClass = computed(() => `icon--size-${this.size()}`);

} </file>

<file path="src/shared/ui/icon/icon.service.ts">
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Observable } from 'rxjs'; import { map, shareReplay } from 'rxjs/operators';

import { IconName } from './icon.types';

@Injectable({ providedIn: 'root' }) export class IconService { private readonly httpBackend =
inject(HttpBackend);

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

} </file>

<file path="src/shared/ui/icon/index.ts">
export * from './icon.component';
export * from './icon.types';
</file>

<file path="src/shared/ui/input/index.ts">
export * from './input.component';
</file>

<file path="src/shared/ui/input/input.component.html">
<div class="app-input" [class.app-input--disabled]="isDisabled()" [class.app-input--error]="hasError || errorMessage()">
	@if (label()) {
		<label class="app-input__label" [for]="id()">
			{{ label() }}
			@if (isRequired) {
				<span class="app-input__required-mark" aria-hidden="true">*</span>
			}
		</label>
	}

    <div class="app-input__wrapper">
    	<input
    		[id]="id()"
    		class="app-input__field"
    		[type]="inputType()"
    		[value]="value()"
    		[placeholder]="placeholder()"
    		[disabled]="isDisabled()"
    		[readOnly]="readonly()"
    		[attr.aria-required]="isRequired"
    		[attr.aria-invalid]="hasError || !!errorMessage()"
    		[attr.aria-describedby]="errorText ? id() + '-error' : null"
    		(input)="onInput($event)"
    		(blur)="onBlur()"
    	/>

    	@if (type() === "password") {
    		<button
    			type="button"
    			class="app-input__toggle-password"
    			(click)="togglePasswordVisibility($event)"
    			[disabled]="isDisabled()"
    			[attr.aria-label]="isPasswordVisible() ? 'Скрыть пароль' : 'Показать пароль'"
    		>
    			<span class="icon">
    				@if (isPasswordVisible()) {
    					<app-icon [name]="'eye-opened'" [description]="'eye-opened'" size="m"> </app-icon>
    				} @else {
    					<app-icon [name]="'eye-closed'" [description]="'eye-closed'" size="m"> </app-icon>
    				}
    			</span>
    		</button>
    	}
    </div>

    @if (errorText) {
    	<span class="app-input__error" [id]="id() + '-error'">
    		{{ errorText }}
    	</span>
    }

</div>
</file>

<file path="src/shared/ui/input/input.component.scss">
:host {
	display: block;
	width: 100%;
}

.app-input { display: flex; flex-direction: column; gap: var(--unit-1); width: 100%;

    &__label {
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-medium);
    	color: var(--text-secondary);
    	cursor: pointer;
    }

    &__required-mark {
    	margin-left: var(--unit-1);
    	color: var(--status-error);
    }

    &__wrapper {
    	position: relative;
    	display: flex;
    	align-items: center;
    	width: 100%;
    }

    &__field {
    	width: 100%;
    	height: var(--unit-10);
    	padding: 0 var(--unit-3);
    	background-color: var(--bg-card);
    	border: 1px solid var(--border-light);
    	border-radius: var(--radius-md);
    	font-family: inherit;
    	font-size: var(--font-size-sm);
    	color: var(--text-primary);
    	transition:
    		border-color var(--transition-fast),
    		background-color var(--transition-fast);

    	&::placeholder {
    		color: var(--text-muted);
    	}

    	&:focus {
    		outline: none;
    	}

    	&:focus-visible {
    		border-color: transparent;
    		outline: 2px solid var(--border-focus);
    		outline-offset: -1px;
    	}
    }

    &__toggle-password {
    	position: absolute;
    	right: var(--unit-3);
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	padding: 0;
    	background: transparent;
    	border: none;
    	color: var(--text-muted);
    	cursor: pointer;

    	&:hover {
    		color: var(--text-primary);
    	}
    }

    &__error {
    	font-size: var(--font-size-xs);
    	font-weight: var(--font-weight-medium);
    	color: var(--status-error);
    }

    &--sm {
    	.app-input__label {
    		font-size: var(--font-size-xs);
    	}

    	.app-input__field {
    		height: var(--unit-8);
    		padding: 0 var(--unit-2);
    		font-size: var(--font-size-xs);
    	}
    }

    &--lg {
    	.app-input__label {
    		font-size: var(--font-size-base);
    	}

    	.app-input__field {
    		height: var(--unit-12);
    		padding: 0 var(--unit-4);
    		font-size: var(--font-size-base);
    	}
    }

    &--error {
    	.app-input__field {
    		border-color: var(--status-error);

    		&:focus-visible {
    			outline-color: var(--status-error);
    		}
    	}
    }

    &--disabled {
    	opacity: var(--opacity-disabled);
    	cursor: not-allowed;
    	pointer-events: none;

    	.app-input__label,
    	.app-input__field,
    	.app-input__toggle-password {
    		cursor: not-allowed;
    	}

    	.app-input__field {
    		background-color: var(--bg-main);
    	}
    }

    .icon {
    	display: flex;
    }

} </file>

<file path="src/shared/ui/markdown-renderer/index.ts">
export * from './markdown-renderer.component';
</file>

<file path="src/shared/ui/markdown-renderer/markdown-renderer.component.html">
<div class="markdown-body" [innerHTML]="parsedContent()"></div>
</file>

<file path="src/shared/ui/markdown-renderer/markdown-renderer.component.scss">
:host {
	display: block;
	width: 100%;
}

.markdown-body { font-size: var(--font-size-base); line-height: var(--line-height-relaxed); color:
var(--text-primary); // 👈 Использование твоего токена #1e293b

    ::ng-deep {
    	h1,
    	h2,
    	h3,
    	h4,
    	h5,
    	h6 {
    		margin-top: var(--unit-8);
    		margin-bottom: var(--unit-4);
    		font-weight: var(--font-weight-bold);
    		line-height: var(--line-height-tight);
    		color: var(--text-primary);

    		&:first-child {
    			margin-top: 0;
    		}
    	}

    	h1 {
    		font-size: var(--font-size-xxxl);
    	}

    	h2 {
    		padding-bottom: var(--unit-2);
    		font-size: var(--font-size-xxl);
    		border-bottom: 1px solid var(--border-light); // 👈 Заменено на твой токен границ #e2e8f0
    	}

    	h3 {
    		font-size: var(--font-size-xl);
    	}

    	h4 {
    		font-size: var(--font-size-lg);
    	}

    	p,
    	ul,
    	ol {
    		margin-top: 0;
    		margin-bottom: var(--unit-4);
    	}

    	ul,
    	ol {
    		padding-left: var(--unit-6);

    		li {
    			margin-bottom: var(--unit-2);
    		}
    	}

    	a {
    		color: var(--brand-primary); // 👈 Подсветка ссылок брендовым индиго
    		transition: opacity var(--transition-fast);
    		text-decoration: underline;
    		text-underline-offset: 2px;

    		&:hover {
    			opacity: var(--opacity-hover);
    		}
    	}

    	// Инлайновые фрагменты кода в тексте (например, `this.user()`)
    	code {
    		padding: 0.2em 0.4em;
    		background-color: var(--bg-main); // Мягкая серая подложка для встроенного кода
    		border-radius: var(--radius-sm);
    		font-family: var(--font-family-mono, monospace);
    		font-size: var(--font-size-sm);
    		color: var(--brand-primary); // Выделяем инлайн-код фиолетовым оттенком
    	}

    	// Полноценные многострочные блоки кода (без использования app-article-block-code)
    	pre {
    		margin-top: 0;
    		margin-bottom: var(--unit-4);
    		padding: var(--unit-4);
    		background-color: var(--bg-code); // 👈 Твой токен для блоков кода #0f172a
    		border: 1px solid var(--border-light);
    		border-radius: var(--radius-md);
    		overflow-x: auto;

    		code {
    			padding: 0;
    			background-color: transparent;
    			border-radius: 0;
    			color: var(--text-on-dark); // Светлый контрастный текст на темном фоне кода
    		}
    	}

    	blockquote {
    		margin: 0 0 var(--unit-4) 0;
    		padding: var(--unit-3) var(--unit-4);
    		background-color: var(--brand-light); // Мягкий индиго-фон для цитат
    		border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    		color: var(--text-secondary);
    		border-left: var(--unit-1) solid var(--brand-primary); // 👈 Акцентная фиолетовая черта слева

    		p:last-child {
    			margin-bottom: 0;
    		}
    	}

    	table {
    		width: 100%;
    		margin-bottom: var(--unit-4);
    		border-collapse: collapse;

    		th,
    		td {
    			padding: var(--unit-3);
    			border: 1px solid var(--border-light);
    			text-align: left;
    		}

    		th {
    			background-color: var(--bg-main);
    			font-weight: var(--font-weight-bold);
    			color: var(--text-primary);
    		}

    		td {
    			color: var(--text-secondary);
    		}
    	}

    	hr {
    		height: 1px;
    		margin: var(--unit-8) 0;
    		background-color: var(--border-light);
    		border: none;
    	}
    }

} </file>

<file path="src/shared/ui/markdown-renderer/markdown-renderer.component.ts">
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import DOMPurify from 'isomorphic-dompurify'; import { marked } from 'marked';

@Component({ selector: 'app-markdown-renderer', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './markdown-renderer.component.html', styleUrl:
'./markdown-renderer.component.scss', }) export class MarkdownRendererComponent { readonly
rawMarkdown = input.required<string>(); private readonly sanitizer = inject(DomSanitizer);

    readonly parsedContent = computed<SafeHtml>(() => {
    	const rawText = this.rawMarkdown();

    	if (!rawText) {
    		return '';
    	}

    	const rawHtml = marked.parse(rawText) as string;
    	const cleanHtml = DOMPurify.sanitize(rawHtml);

    	return this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
    });

} </file>

<file path="src/shared/ui/modal/index.ts">
export * from './modal.component';
</file>

<file path="src/shared/ui/select/index.ts">
export * from './select.component';
</file>

<file path="src/shared/ui/select/select.component.html">
<div class="app-select" [class.app-select--error]="hasError || errorMessage()">
	@if (label()) {
		<label [for]="id()" class="app-select__label">
			{{ label() }}
			@if (isRequired) {
				<span class="app-select__required-mark" aria-hidden="true">*</span>
			}
		</label>
	}

    <div class="app-select__wrapper">
    	<select
    		[id]="id()"
    		class="app-select__field"
    		[value]="value()"
    		[disabled]="isDisabled()"
    		[attr.aria-required]="isRequired"
    		[attr.aria-invalid]="hasError || !!errorMessage()"
    		[attr.aria-describedby]="errorText ? id() + '-error' : null"
    		(change)="onSelectChange($event)"
    		(blur)="onBlur()"
    	>
    		<ng-content></ng-content>
    	</select>
    </div>

    @if (errorText) {
    	<span class="app-select__error" [id]="id() + '-error'">
    		{{ errorText }}
    	</span>
    }

</div>
</file>

<file path="src/shared/ui/select/select.component.scss">
:host {
	display: block;
	width: 100%;
}

.app-select { display: flex; flex-direction: column; gap: var(--unit-1);

    &__label {
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-medium);
    	color: var(--text-secondary);
    }

    &__required-mark {
    	margin-left: var(--unit-1);
    	color: var(--status-error);
    }

    &__error {
    	font-size: var(--font-size-xs);
    	font-weight: var(--font-weight-medium);
    	color: var(--status-error);
    }

    &--error {
    	.app-select__field {
    		border-color: var(--status-error);

    		&:focus {
    			border-color: var(--status-error);
    		}
    	}
    }

    &__wrapper {
    	position: relative;
    	display: flex;
    	align-items: center;
    	width: 100%;

    	&::after {
    		position: absolute;
    		right: var(--unit-3);
    		width: var(--unit-4);
    		height: var(--unit-4);
    		background-color: var(--text-muted);
    		transition: background-color var(--transition-fast);
    		content: '';
    		mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    		mask-repeat: no-repeat;
    		mask-position: center;
    		mask-size: contain;
    		pointer-events: none;
    	}

    	&:hover::after {
    		background-color: var(--text-primary);
    	}

    	&:has(.app-select__field:disabled)::after {
    		opacity: var(--opacity-disabled);
    	}
    }

    &__field {
    	width: 100%;
    	padding: var(--unit-2) var(--unit-8) var(--unit-2) var(--unit-3);
    	background-color: var(--bg-card);
    	border: 1px solid var(--border-light);
    	border-radius: var(--radius-md);
    	font-family: inherit;
    	font-size: var(--font-size-base);
    	line-height: var(--line-height-normal);
    	color: var(--text-primary);
    	transition:
    		border-color var(--transition-fast),
    		box-shadow var(--transition-fast);
    	cursor: pointer;
    	appearance: none;

    	&:focus {
    		box-shadow: 0 0 0 3px var(--brand-light);
    		outline: none;
    		border-color: var(--border-focus);
    	}

    	&:disabled {
    		background-color: var(--bg-main);
    		opacity: var(--opacity-disabled);
    		cursor: not-allowed;
    	}
    }

} </file>

<file path="src/shared/ui/tags-input/index.ts">
export * from './tags-input.component';
</file>

<file path="src/shared/ui/tags-input/tags-input.component.html">
<!-- eslint-disable @angular-eslint/template/label-has-associated-control -->
<div class="app-tags-input">
	@if (label()) {
		<label /* [for]="id()"  */ class="app-tags-input__label">{{ label() }}</label>
	}
	<div class="app-tags-input__container" [class.app-tags-input__container--disabled]="isDisabled()">
		@for (tag of tags(); track tag) {
			<span class="app-tags-input__tag">
				<span class="app-tags-input__tag-text">{{ tag }}</span>
				<button
					type="button"
					class="app-tags-input__remove"
					[disabled]="isDisabled()"
					(click)="removeTag($index)"
					aria-label="Удалить тег"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			</span>
		}
		<input
			/* [id]="id()" */
			type="text"
			class="app-tags-input__field"
			[placeholder]="tags().length === 0 ? placeholder() : ''"
			[disabled]="isDisabled()"
			(keydown.enter)="addTag($event)"
			(blur)="onBlur($event)"
		/>
	</div>
</div>
</file>

<file path="src/shared/ui/tags-input/tags-input.component.scss">
:host {
	display: block;
	width: 100%;
}

.app-tags-input { display: flex; flex-direction: column; gap: var(--unit-1);

    &__label {
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-medium);
    	color: var(--text-secondary);
    }

    &__container {
    	display: flex;
    	flex-wrap: wrap;
    	gap: var(--unit-2);
    	align-items: center;
    	width: 100%;
    	min-height: var(--unit-10);
    	padding: var(--unit-1) var(--unit-2);
    	background-color: var(--bg-card);
    	border: 1px solid var(--border-light);
    	border-radius: var(--radius-md);
    	transition:
    		border-color var(--transition-fast),
    		box-shadow var(--transition-fast);
    	cursor: text;

    	&:focus-within {
    		box-shadow: 0 0 0 3px var(--brand-light);
    		border-color: var(--border-focus);
    	}

    	&--disabled {
    		background-color: var(--bg-main);
    		opacity: var(--opacity-disabled);
    		cursor: not-allowed;
    	}
    }

    &__tag {
    	display: inline-flex;
    	gap: var(--unit-1);
    	align-items: center;
    	padding: var(--unit-1) var(--unit-2);
    	background-color: var(--bg-main);
    	border: 1px solid var(--border-light);
    	border-radius: var(--radius-sm);
    	font-size: var(--font-size-sm);
    	color: var(--text-primary);
    }

    &__remove {
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	width: var(--unit-4);
    	height: var(--unit-4);
    	padding: 0;
    	background: transparent;
    	border: none;
    	color: var(--text-muted);
    	transition: color var(--transition-fast);
    	cursor: pointer;

    	svg {
    		width: 100%;
    		height: 100%;
    	}

    	&:hover {
    		color: var(--status-error);
    	}

    	&:disabled {
    		cursor: not-allowed;
    	}
    }

    &__field {
    	flex: 1 1 var(--unit-10);
    	min-width: var(--unit-10);
    	padding: var(--unit-1) 0;
    	background: transparent;
    	border: none;
    	font-family: inherit;
    	font-size: var(--font-size-base);
    	color: var(--text-primary);
    	outline: none;

    	&::placeholder {
    		color: var(--text-muted);
    	}

    	&:disabled {
    		cursor: not-allowed;
    	}
    }

} </file>

<file path="src/shared/ui/tags-input/tags-input.component.ts">
/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({ selector: 'app-tags-input', standalone: true, templateUrl:
'./tags-input.component.html', styleUrl: './tags-input.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class TagsInputComponent implements ControlValueAccessor {
readonly ngControl = inject(NgControl, { optional: true, self: true });

    readonly label = input<string>('');
    readonly placeholder = input<string>('');

    readonly tags = signal<string[]>([]);
    readonly isDisabled = signal<boolean>(false);

    private onChange: (value: string[]) => void = () => {};
    private onTouched: () => void = () => {};

    constructor() {
    	if (this.ngControl) {
    		this.ngControl.valueAccessor = this;
    	}
    }

    writeValue(value: string[] | null): void {
    	this.tags.set(Array.isArray(value) ? value : []);
    }

    registerOnChange(fn: (value: string[]) => void): void {
    	this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
    	this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    	this.isDisabled.set(isDisabled);
    }

    addTag(event: Event): void {
    	event.preventDefault();
    	const inputElement = event.target as HTMLInputElement;
    	const value = inputElement.value.trim();

    	if (!value || this.tags().includes(value)) {
    		inputElement.value = '';
    		return;
    	}

    	const updated = [...this.tags(), value];
    	this.tags.set(updated);
    	this.onChange(updated);
    	this.onTouched();

    	inputElement.value = '';
    }

    removeTag(index: number): void {
    	const updated = this.tags().filter((_, i) => i !== index);
    	this.tags.set(updated);
    	this.onChange(updated);
    	this.onTouched();
    }

    onBlur(event: Event): void {
    	this.onTouched();

    	const inputElement = event.target as HTMLInputElement;
    	if (inputElement.value.trim()) {
    		this.addTag(event);
    	}
    }

} </file>

<file path="src/shared/ui/textarea/index.ts">
export * from './textarea.component';
</file>

<file path="src/shared/ui/textarea/textarea.component.html">
<div class="app-textarea" [class.app-textarea--error]="hasError || errorMessage()">
	@if (label()) {
		<label [for]="id()" class="app-textarea__label">
			{{ label() }}
			@if (isRequired) {
				<span class="app-textarea__required-mark" aria-hidden="true">*</span>
			}
		</label>
	}

    <textarea
    	[id]="id()"
    	class="app-textarea__field"
    	[class.app-textarea__field--monospace]="monospace()"
    	[value]="value()"
    	[placeholder]="placeholder()"
    	[rows]="rows()"
    	[disabled]="isDisabled()"
    	[attr.aria-required]="isRequired"
    	[attr.aria-invalid]="hasError || !!errorMessage()"
    	[attr.aria-describedby]="errorText ? id() + '-error' : null"
    	(input)="onInput($event)"
    	(blur)="onBlur()"
    ></textarea>

    @if (errorText) {
    	<span class="app-textarea__error" [id]="id() + '-error'">
    		{{ errorText }}
    	</span>
    }

</div>
</file>

<file path="src/shared/ui/textarea/textarea.component.scss">
:host {
	display: block;
	width: 100%;
}

.app-textarea { display: flex; flex-direction: column; gap: var(--unit-1); padding: var(--unit-2) 0;

    &__label {
    	font-size: var(--font-size-sm);
    	font-weight: var(--font-weight-medium);
    	color: var(--text-secondary);
    	cursor: pointer;
    }

    &__required-mark {
    	margin-left: var(--unit-1);
    	color: var(--status-error);
    }

    &__error {
    	font-size: var(--font-size-xs);
    	font-weight: var(--font-weight-medium);
    	color: var(--status-error);
    }

    &--error {
    	.app-textarea__field {
    		border-color: var(--status-error);

    		&:focus,
    		&--monospace,
    		&--monospace:focus {
    			border-color: var(--status-error);
    		}
    	}
    }

    &__field {
    	width: 100%;
    	min-height: calc(var(--unit-10) * 2);
    	padding: var(--unit-2) var(--unit-3);
    	background-color: var(--bg-card);
    	border: 1px solid var(--border-light);
    	border-radius: var(--radius-md);
    	font-family: inherit;
    	font-size: var(--font-size-base);
    	line-height: var(--line-height-normal);
    	color: var(--text-primary);
    	transition:
    		border-color var(--transition-fast),
    		box-shadow var(--transition-fast);
    	resize: vertical;

    	&::placeholder {
    		color: var(--text-muted);
    	}

    	&:focus {
    		box-shadow: 0 0 0 3px var(--brand-light);
    		outline: none;
    		border-color: var(--border-focus);
    	}

    	&:disabled {
    		background-color: var(--bg-main);
    		opacity: var(--opacity-disabled);
    		cursor: not-allowed;
    	}

    	&--monospace {
    		background-color: var(--bg-main);
    		font-family: var(
    			--font-family-mono,
    			ui-monospace,
    			'SFMono-Regular',
    			Menlo,
    			Consolas,
    			monospace
    		);
    		font-size: var(--font-size-sm);
    		color: var(--text-primary);
    		border-color: transparent;

    		&:focus {
    			border-color: var(--border-focus);
    		}
    	}
    }

} </file>

<file path="src/shared/ui/video-player/index.ts">
export * from './video-player.component';
</file>

<file path="src/shared/ui/video-player/video-player.component.html">
<div class="video-container">
	@if (src(); as videoSrc) {
		<video
			[src]="videoSrc"
			[poster]="poster() ?? ''"
			[controls]="controls()"
			class="video-element"
			preload="metadata"
		>
			Ваш браузер не поддерживает воспроизведение видео.
		</video>
	} @else {
		<div class="video-placeholder">
			<span>Источник видео не указан</span>
		</div>
	}
</div>
</file>

<file path="src/shared/ui/video-player/video-player.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({ selector: 'app-video-player', standalone: true, imports: [], templateUrl:
'./video-player.component.html', styleUrl: './video-player.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class VideoPlayerComponent { /** Прямая ссылка на видео
(mp4, webm) или embed URL */ readonly src = input<string | null>(null);

    /** Постер для видео */
    readonly poster = input<string | null>(null);

    /** Показывать ли стандартные контролы управления */
    readonly controls = input<boolean>(true);

} </file>

<file path="src/styles/_font-faces.scss">
// FONT FACES
@font-face {
	font-family: 'Geist Sans';
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	src: url('/fonts/geist-sans/Geist-Regular.woff2') format('woff2');
}

@font-face { font-family: 'Geist Sans'; font-weight: 500; font-style: normal; font-display: swap;
src: url('/fonts/geist-sans/Geist-Medium.woff2') format('woff2'); }

@font-face { font-family: 'Geist Sans'; font-weight: 700; font-style: normal; font-display: swap;
src: url('/fonts/geist-sans/Geist-Bold.woff2') format('woff2'); }

@font-face { font-family: 'Geist Mono'; font-weight: 400; font-style: normal; font-display: swap;
src: url('/fonts/geist-mono/GeistMono-Regular.woff2') format('woff2'); }

@font-face { font-family: 'Geist Mono'; font-weight: 500; font-style: normal; font-display: swap;
src: url('/fonts/geist-mono/GeistMono-Medium.woff2') format('woff2'); }

:root { --font-family-sans: 'Geist Sans', -apple-system, blinkmacsystemfont, 'Segoe UI', roboto,
helvetica, arial, sans-serif; --font-family-mono: 'Geist Mono', ui-monospace, sfmono-regular,
'Roboto Mono', menlo, monaco, consolas, monospace; } </file>

<file path="src/styles/_media.scss">
@use 'sass:map';
@use 'sass:math';
@use 'sass:meta';

$screen-xs: 320px !default; $screen-sm: 576px !default; $screen-md: 768px !default; $screen-lg:
1024px !default; $screen-xl: 1280px !default; $screen-xxl: 1440px !default; $screen-xxxl: 1920px
!default; $breakpoints: ( 'xs': $screen-xs, 'sm': $screen-sm, 'md': $screen-md, 'lg': $screen-lg,
'xl': $screen-xl, 'xxl': $screen-xxl, 'xxxl': $screen-xxxl, ) !default;

@function -get-breakpoint-value($key) { @if map.has-key($breakpoints, $key) { @return
map.get($breakpoints, $key); } @else if meta.type-of($key) == 'number' { @return $key; } @else {
@error "НЕДОПУСТИМОЕ ЗНАЧЕНИЕ: '#{$key}'. Допустимы ключи: #{map.keys($breakpoints)} или числа (px,
rem, em)."; } }

@function -decrement-width($value) { $unit: math.unit($value);

    @if $unit == 'px' {
    	@return $value - 0.02px;
    } @else if $unit == 'rem' {
    	@return $value - 0.001rem;
    } @else if $unit == 'em' {
    	@return $value - 0.001em;
    }

    @return $value - 0.02;

}

@mixin respond-to($breakpoint, $direction: 'min', $next-breakpoint: null) { $width:
-get-breakpoint-value($breakpoint);

    @if $direction == 'min' or $direction == 'above' {
    	@media (min-width: $width) {
    		@content;
    	}
    } @else if $direction == 'max' or $direction == 'below' {
    	$max-width: -decrement-width($width);

    	@media (max-width: $max-width) {
    		@content;
    	}
    } @else if $direction == 'between' {
    	@if $next-breakpoint == null {
    		@error "ОШИБКА: Для стратегии 'between' требуется передать аргумент $next-breakpoint.";
    	}

    	$max-width: -decrement-width(-get-breakpoint-value($next-breakpoint));

    	@media (min-width: $width) and (max-width: $max-width) {
    		@content;
    	}
    } @else {
    	@error "НЕИЗВЕСТНОЕ НАПРАВЛЕНИЕ: '#{$direction}'. Допустимы: 'min', 'max', 'above', 'below', 'between'.";
    }

}

@mixin media-above($breakpoint) { @include respond-to($breakpoint, 'min') { @content; } }

@mixin media-below($breakpoint) { @include respond-to($breakpoint, 'max') { @content; } }

@mixin media-between($from, $to) { @include respond-to($from, 'between', $to) { @content; } }
</file>

<file path="src/widgets/account-navigation/ui/account-navigation.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.account-nav { display: flex; gap: var(--unit-1); width: 100%; flex-flow: row nowrap;

    @include m.media-above('md') {
    	flex-direction: column;
    	gap: var(--unit-2);
    }

    @include m.media-below('md') {
    	width: 100%;
    	padding-right: var(--unit-4);
    	padding-bottom: var(--unit-4);
    	padding-left: var(--unit-4);
    }

    &__link {
    	display: flex;
    	flex-direction: column;
    	flex-grow: 1;
    	flex-basis: 0;
    	gap: var(--unit-1);
    	justify-content: center;
    	align-items: center;
    	padding: var(--unit-2) var(--unit-1);
    	border-radius: var(--radius-md);
    	color: var(--text-primary);
    	transition:
    		background-color var(--transition-fast),
    		color var(--transition-fast);
    	text-decoration: none;

    	@include m.media-above('md') {
    		flex-direction: row;
    		flex-grow: 0;
    		flex-basis: auto;
    		gap: var(--unit-3);
    		justify-content: flex-start;
    		align-items: center;
    		padding: var(--unit-2) var(--unit-3);
    	}

    	&:hover {
    		background-color: var(--border-light);
    		font-weight: var(--font-weight-medium);
    		color: var(--brand-hover);

    		.account-nav__icon {
    			color: var(--brand-hover);
    		}
    	}

    	&.is-active {
    		background-color: var(--brand-light);
    		font-weight: var(--font-weight-medium);
    		color: var(--brand-primary);

    		.account-nav__icon {
    			color: var(--brand-primary);
    		}
    	}
    }

    &__icon {
    	display: flex;
    	flex-shrink: 0;
    	justify-content: center;
    	align-items: center;
    	width: var(--font-size-xl);
    	height: var(--font-size-xl);
    	color: var(--text-muted);
    	transition: color var(--transition-fast);
    }

    &__label {
    	font-size: var(--font-size-xs);
    	white-space: nowrap;

    	@include m.media-above('md') {
    		font-size: var(--font-size-base);
    	}
    }

} </file>

<file path="src/widgets/account-navigation/ui/account-navigation.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ACCOUNT_SIDEBAR_ITEMS } from '@shared/config/routes.config'; import { IconComponent } from
'@shared/ui/icon';

@Component({ selector: 'app-account-navigation', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, imports: [RouterLink, RouterLinkActive, IconComponent], template:
` 		<nav class="account-nav"> 			@for (item of accountNavigationElements; track item.path) { 				<a [routerLink]="item.path" routerLinkActive="is-active" class="account-nav__link"> 					@if (item.icon) { 						<app-icon [name]="item.icon" class="account-nav__icon" /> 					} 					<span class="account-nav__label">{{ item.label }}</span> 				</a> 			} 		</nav> 	`,
styleUrl: './account-navigation.component.scss', }) export class AccountNavigationComponent {
protected readonly accountNavigationElements = ACCOUNT_SIDEBAR_ITEMS; } </file>

<file path="src/widgets/account-navigation/index.ts">
export * from './ui/account-navigation.component';
</file>

<file path="src/widgets/article-navigation-management/ui/article-navigation-management.component.html">
<section class="navigation-management">
	<header class="navigation-management__header">
		<h2 class="navigation-management__title">Управление навигацией</h2>
		<p class="navigation-management__subtitle">
			Добавляйте новые разделы и подкатегории для структурирования материалов
		</p>
	</header>

    <div class="navigation-management__grid">
    	<div class="navigation-management__card">
    		<app-create-section />
    	</div>

    	<div class="navigation-management__card">
    		<app-create-category />
    	</div>
    </div>

</section>
</file>

<file path="src/widgets/article-navigation-management/ui/article-navigation-management.component.scss">
.navigation-management {
	display: flex;
	flex-direction: column;
	gap: var(--unit-6);

    &__header {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-1);
    }

    &__title {
    	margin: 0;
    	font-size: var(--font-size-xxl);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-tight);
    	color: var(--text-primary);
    }

    &__subtitle {
    	margin: 0;
    	font-size: var(--font-size-sm);
    	line-height: var(--line-height-base);
    	color: var(--text-secondary);
    }

    &__grid {
    	display: grid;
    	grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    	gap: var(--unit-6);
    }

    &__card {
    	padding: var(--unit-6);
    	background-color: var(--bg-card);
    	border: 1px solid var(--border-light);
    	border-radius: var(--radius-lg);
    }

} </file>

<file path="src/widgets/article-navigation-management/ui/article-navigation-management.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CreateCategoryComponent } from '@features/create-category'; import { CreateSectionComponent
} from '@features/create-section';

@Component({ selector: 'app-article-navigation-management', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: 'article-navigation-management.component.html',
styleUrl: 'article-navigation-management.component.scss', imports: [CreateSectionComponent,
CreateCategoryComponent], }) export class ArticleNavigationManagementComponent {} </file>

<file path="src/widgets/article-navigation-management/index.ts">
export { ArticleNavigationManagementComponent } from './ui/article-navigation-management.component';
</file>

<file path="src/widgets/articles-drawer-sidebar/index.ts">
export * from './ui/articles-drawer-sidebar.component';
</file>

<file path="src/widgets/course-sidebar/index.ts">
export * from './ui/course-sidebar.component';
</file>

<file path="src/widgets/header/index.ts">
export * from './ui/header.component';
</file>

<file path="src/widgets/lesson-content/index.ts">
export * from './ui/lesson-content.component';
</file>

<file path="src/index.scss">
@use './styles/tokens';
@use './styles/font-faces';
@use './styles/reset';
</file>

<file path="src/index.ts">
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/providers/app.config'; import { AppComponent } from
'./app/ui/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err)); </file>

<file path="CHANGES.md">
# Исправления: страница редактора статьи и связанные модули

## Критические

1. **Не было маршрутов `edit` и `details`.** В `RouteSegments` добавлены `ARTICLE_DETAILS: ':id'` и
   `ARTICLE_EDIT: ':id/edit'`; в `ARTICLE_ROUTES` подключены `create`, `:id/edit`, `:id` (порядок:
   статический → с параметром). Раньше после сохранения роутер не находил `/articles/{id}` и
   выбрасывал на главную.
2. **Не существовала страница просмотра статьи.** Добавлена `src/pages/article-details-page`
   (`getArticleById` + рендер `app-article-content` со состояниями загрузки/ошибки).
3. **Захардкоженный `authorId`** в `manage-article` (`62bb502e-…`) заменён на реальный профиль из
   `UserApiService.getMyProfile()` (с фолбэком, если профиль не отдался, — тогда `authorId` не
   отправляется).
4. **`tags-input`: плейсхолдер не показывался никогда.** Было
   `[placeholder]="tags.length === 0 ? … : ''"`, где `tags` — сигнал. Исправлено на `tags().length`.

## Значимые

5. **Мёртвые CSS-классы** в `article-form.component.html` (`h2`, `mt-4`, `mt-3`, `fw-bold`,
   `.empty-state`, `.error-text`) — не были определены нигде. Лишние удалены из шаблона;
   `.empty-state` добавлен в SCSS формы; `.error-text` перенесён в `styles` рендерера.
6. **Невалидная разметка `fieldset`**: `<legend>` был вложен в `<div>`. Теперь `legend` — первый
   ребёнок `fieldset`.
7. **Кнопка «Сохранить» блокировалась `form().invalid`**, из-за чего `markAllAsTouched()` в
   `onSubmit` был недостижим. Оставлена блокировка только по `isSubmitting()`.
8. **`patchValue(article)` заливал в форму весь объект статьи**, включая `blocks`, до пересборки
   через `populateArticleBlocks`. Теперь патчатся только скалярные поля и вложенные группы, а
   `blocks` собираются отдельно.
9. **`ArticleNavigationApiService`** переведён на `BaseApiService`, удалён неиспользуемый
   `getNavigationTree()`. Пути: чтение — `articles/navigation`, создание — `navigation/sections` и
   `navigation/categories` (подтверждены бэкендом).

## Мелкие

10. `entities/article/index.ts` — убраны дублирующиеся `export *`, добавлены недостающие публичные
    экспорты.
11. `create-category` — добавлен `ChangeDetectionStrategy.OnPush` (как в `create-section`).
12. `getArticleById`/`updateArticle`/`deleteArticle` — `encodeURIComponent` для идентификатора (слаг
    с пробелами/кириллицей ломал URL).
13. `article-editor-page.component.scss` — локальная `--max-width: 1440px` заменена на токен
    `--container-xxl`.
14. Файл `articles.editor-page.component.ts` переименован в `article-editor-page.component.ts`;
    добавлен `index.ts` для страницы.
15. `manage-article` — навигация через `RouteBuilder`, добавлен `markAllAsTouched()`,
    `readingTimeMinutes` приводится к числу при сборке payload.

## Что нужно доложить вручную

- Шрифты Geist (`.woff2`) — см. `public/fonts/README.md`.
</file>

<file path="README-REFACTOR.md">
# Ngalg — рефакторинг (итог)

Архив содержит ПОЛНОЕ дерево проекта (293 файла) с применёнными правками. Распаковывать поверх корня
репозитория.

## Что изменено

### Стили

- `_reset.scss`: удалён дубль `body.lock-scroll` (было 2 блока -> 1).
- `_tokens.scss`: добавлен токен `--focus-ring` (использовался в `_reset.scss`, но не был объявлен).

### Утилиты

- Новый `src/shared/lib/utils/unique-id.ts` (детерминированные id).
- `input` / `textarea` / `select`: `Math.random()` для id заменён на `uniqueId(...)`.

### Типы (перенос из shared в entities)

- `shared/types/course.types.ts` -> `entities/course/model/course.types.ts` (+ экспорт из
  `@entities/course`).
- `shared/types/navigation-overview.types.ts` ->
  `entities/article-navigation/model/navigation-overview.types.ts` (+ экспорт из
  `@entities/article-navigation`).
- Обновлены все импорты в 11 файлах. Папка `src/shared/types/` удалена.

### API: пути бэкенда отделены от роутера

- Новый `src/shared/api/api-paths.ts` (`ApiPaths`).
- `course-api`, `lesson-api`, `user-api`, `article-api`, `article-navigation-api` переведены с
  `RouteSegments`/`RouteBuilder`/хардкода на `ApiPaths`.
- `routes.config.ts`: удалены неиспользуемые сегменты (`COURSE_CREATE`, `COURSE_EDIT`, `LESSONS`,
  `SECTIONS`, `PROFILES`).

### Обвязка

- `app.config.ts`: добавлены `provideZonelessChangeDetection()`,
  `provideBrowserGlobalErrorListeners()`, `withFetch()`, `withInMemoryScrolling(...)`. (Angular 22,
  zone.js в зависимостях отсутствует и в `angular.json` нет polyfills.)

### Формы статьи: entities -> features

- `entities/article/ui/article-creation/**` -> `features/manage-article/ui/article-creation/**`.
- `entities/article/model/types/{article-form.types,article-form.factory,article-blocks-form.factory}.ts`
  -> `features/manage-article/model/`.
- `entities/article/index.ts` очищен от экспорта форм; `manage-article` импортирует формы локально.

### Исправленные опечатки

- `aritcle-text-block-form` -> `article-text-block-form`
- `widgets/article-navigation-managment` -> `article-navigation-management` (папка, файлы, класс,
  селектор, templateUrl/styleUrl, импорты в `articles-editor-page`)
- `article-block-complexity.ts` -> `article-block-complexity.component.ts`

## Проверки, выполненные при сборке

- Импорты/шаблоны: 0 битых (377 импортов + все templateUrl/styleUrl разрешаются).
- grep по дереву: `aritcle`=0, `managment`=0, `@shared/types`=0, `Math.random` в `shared/ui`=0.

## Что нужно сделать у себя

```
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```

## Честные оговорки

- Сборку (`ng build`) я НЕ прогоняла: в моём окружении нет Node/ng и сети. Проверена разрешимость
  импортов и путей, но НЕ типы и НЕ компиляция.
- Страница `article-details-page` и роут `ARTICLE_DETAILS` СОЗНАТЕЛЬНО оставлены: она реализована и
  рендерит `ArticleComponent`; удаление сломало бы просмотр статей.
- `articles-drawer-sidebar` НЕ трогала: блокировку скролла там делает сам виджет (`DrawerComponent`
  класса `lock-scroll` не ставит), поэтому `effect` нужен.
- `strictTemplates`, `noUnusedLocals`, `exactOptionalPropertyTypes` включены — если после распаковки
что-то всплывёт, это почти всегда неиспользуемый импорт.
</file>

<file path="vercel.json">
{
	"rewrites": [
		{
			"source": "/(.*)",
			"destination": "/index.html"
		}
	]
}
</file>

<file path=".github/workflows/ci.yml">
name: CI

on: push: branches: [main, master] pull_request: branches: [main, master]

concurrency: group: ${{ github.workflow }}-${{ github.ref }} cancel-in-progress: true

jobs: validate-and-build: runs-on: ubuntu-latest

        steps:
            - name: Checkout repository
              uses: actions/checkout@v4

            - name: Install pnpm
              uses: pnpm/action-setup@v4

            - name: Setup Node.js
              uses: actions/setup-node@v4
              with:
                  node-version: 22
                  cache: 'pnpm'

            - name: Install dependencies
              run: pnpm install --frozen-lockfile

            - name: Strict Typecheck
              run: pnpm typecheck

            - name: Check formatting (Prettier)
              run: pnpm -w format:check
