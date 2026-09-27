    @HostListener('window:keydown.escape')
    protected onEscapePressed(): void {
    	if (this.isOpen()) {
    		this.close();
    	}
    }

} </file>

<file path="src/shared/ui/select/select.component.ts">
/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

import { uniqueId } from '../../lib/utils/unique-id';

@Component({ selector: 'app-select', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, styleUrl: './select.component.scss', templateUrl:
'./select.component.html', }) export class SelectComponent implements ControlValueAccessor { public
readonly ngControl = inject(NgControl, { self: true, optional: true });

    constructor() {
    	if (this.ngControl) {
    		this.ngControl.valueAccessor = this;
    	}
    }

    readonly label = input<string>();
    readonly errorMessage = input<string>('');
    readonly id = input<string>(uniqueId('select'));

    readonly value = signal<string>('');
    readonly isDisabled = signal<boolean>(false);

    // --- АВТОМАТИЗАЦИЯ ВАЛИДАЦИИ ---

    get isRequired(): boolean {
    	const control = this.ngControl?.control;
    	return control ? control.hasValidator(Validators.required) : false;
    }

    get hasError(): boolean {
    	return !!this.ngControl?.invalid && !!this.ngControl?.touched;
    }

    get errorText(): string {
    	if (this.errorMessage()) return this.errorMessage();
    	if (!this.hasError || !this.ngControl?.errors) return '';

    	const errors = this.ngControl.errors;
    	if (errors['required']) return 'Поле обязательно для выбора';

    	return 'Недопустимое значение';
    }

    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};

    protected onSelectChange(event: Event): void {
    	const target = event.target as HTMLSelectElement;
    	this.value.set(target.value);
    	this.onChange(this.value());
    }

    protected onBlur(): void {
    	this.onTouched();
    }

    writeValue(value: string | null): void {
    	this.value.set(value ?? '');
    }

    registerOnChange(fn: (value: string) => void): void {
    	this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
    	this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    	this.isDisabled.set(isDisabled);
    }

} </file>

<file path="src/shared/ui/textarea/textarea.component.ts">
/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

import { uniqueId } from '../../lib/utils/unique-id';

@Component({ selector: 'app-textarea', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, styleUrl: './textarea.component.scss', templateUrl:
'./textarea.component.html', }) export class TextareaComponent implements ControlValueAccessor {
public readonly ngControl = inject(NgControl, { self: true, optional: true });

    constructor() {
    	if (this.ngControl) {
    		this.ngControl.valueAccessor = this;
    	}
    }

    readonly label = input<string>();
    readonly placeholder = input<string>('');
    readonly rows = input<number>(4);
    readonly monospace = input<boolean>(false);

    readonly errorMessage = input<string>('');
    readonly id = input<string>(uniqueId('textarea'));

    readonly value = signal<string>('');
    readonly isDisabled = signal<boolean>(false);

    get isRequired(): boolean {
    	const control = this.ngControl?.control;
    	return control ? control.hasValidator(Validators.required) : false;
    }

    get hasError(): boolean {
    	return !!this.ngControl?.invalid && !!this.ngControl?.touched;
    }

    get errorText(): string {
    	if (this.errorMessage()) return this.errorMessage();
    	if (!this.hasError || !this.ngControl?.errors) return '';

    	const errors = this.ngControl.errors;
    	if (errors['required']) return 'Поле обязательно для заполнения';
    	if (errors['minlength'])
    		return `Минимальная длина — ${errors['minlength'].requiredLength} символов`;
    	if (errors['maxlength'])
    		return `Максимальная длина — ${errors['maxlength'].requiredLength} символов`;

    	return 'Недопустимое значение';
    }

    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};

    protected onInput(event: Event): void {
    	const target = event.target as HTMLTextAreaElement;
    	this.value.set(target.value);
    	this.onChange(this.value());
    }

    protected onBlur(): void {
    	this.onTouched();
    }

    writeValue(value: string | null): void {
    	this.value.set(value ?? '');
    }

    registerOnChange(fn: (value: string) => void): void {
    	this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
    	this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    	this.isDisabled.set(isDisabled);
    }

} </file>

<file path="src/shared/ui/video-player/video-player.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.video-container { position: relative; width: 100%; background-color: var(--bg-code); border: 1px
solid var(--border-light); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
aspect-ratio: 16 / 9; overflow: hidden;

    @include m.media-below('lg') {
    	min-height: 200px;
    }

    @include m.media-below('sm') {
    	min-height: 180px;
    }

}

.video-element { display: block; width: 100%; height: 100%; object-fit: contain; }

.video-placeholder { display: flex; justify-content: center; align-items: center; height: 100%;
font-size: var(--font-size-sm); color: var(--text-muted); } </file>

<file path="src/widgets/lesson-content/ui/lesson-content.component.html">
<div class="lesson-box">
	<div class="lesson-content">
		<app-lesson-header [lesson]="lesson()" />
		<app-video-player [src]="videoUrl()" />

    	<div class="lesson-content__actions">
    		<app-mark-lesson-watched
    			[lessonId]="lesson().id"
    			[isCompleted]="lesson().isCompleted"
    			(toggleComplete)="toggleComplete.emit($event)"
    		/>
    	</div>
    </div>

    <div class="lesson-button-next">
    	<app-lesson-navigation-controls [nextLesson]="nextLesson()" (nextLessonSelect)="selectLesson.emit($event)" />
    </div>

</div>
</file>

<file path=".commitlintrc.json">
{
	"extends": ["@commitlint/config-conventional"],
	"rules": {
		"type-enum": [
			2,
			"always",
			[
				"build",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
				"chore"
			]
		],
		"subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
		"subject-empty": [2, "never"],
		"type-empty": [2, "never"]
	}
}
</file>

<file path=".gitignore">
# --- Сборка, кэш и компиляция ---
/dist/
/tmp/
/out-tsc/
/.angular/
.tsbuildinfo
.sass-cache/

# --- Зависимости ---

node_modules/ .pnpm-store/

# --- Логи и отчеты тестов ---

_.log npm-debug.log_ yarn-debug.log* pnpm-debug.log* /coverage/

# --- Переменные окружения и секреты ---

.env .env.local .env.*.local !.env.example

# --- IDE (JetBrains / Visual Studio) ---

.idea/ *.suo *.sln *.sw?

# --- VS Code (Только командные конфиги, без персонального мусора) ---

.vscode/* !.vscode/settings.json !.vscode/tasks.json !.vscode/launch.json !.vscode/extensions.json
.history/

# --- Системные файлы ---

.DS_Store .DS_Store? Thumbs.db ehthumbs.db Desktop.ini </file>

<file path=".lintstagedrc.json">
{
	"*.ts": ["eslint --fix", "prettier --write"],
	"*.html": ["eslint --fix", "prettier --write"],
	"*.{scss,css}": ["stylelint --fix", "prettier --write"],
	"*.{json,md,yml,yaml}": ["prettier --write"]
}
</file>

<file path="pnpm-workspace.yaml">
allowBuilds:
    '@parcel/watcher': true
    esbuild: true
    lmdb: true
    msgpackr-extract: true
    unrs-resolver: true
</file>

<file path="tsconfig.json">
{
	"$schema": "https://json.schemastore.org/tsconfig",
	"compileOnSave": false,
	"compilerOptions": {
		"target": "es2022",
		"module": "preserve",
		"moduleResolution": "bundler",
		"lib": ["es2022", "dom", "dom.iterable"],

    	/* Строгость типов */
    	"strict": true,
    	"noImplicitAny": true,
    	"strictNullChecks": true,
    	"noImplicitOverride": true,
    	"noPropertyAccessFromIndexSignature": true,
    	"noImplicitReturns": true,
    	"noFallthroughCasesInSwitch": true,
    	"noUnusedLocals": true,
    	"noUnusedParameters": true,
    	"exactOptionalPropertyTypes": true,
    	"noUncheckedIndexedAccess": true,

    	/* Совместимость и безопасность */
    	"esModuleInterop": true,
    	"allowSyntheticDefaultImports": true,
    	"forceConsistentCasingInFileNames": true,
    	"skipLibCheck": true,
    	"isolatedModules": true,
    	"useDefineForClassFields": true,

    	/* Декораторы Angular */
    	"experimentalDecorators": true,
    	"importHelpers": true,

    	/* Path Aliases (FSD Архитектура) */
    	"rootDir": ".",
    	"paths": {
    		"@app/*": ["./src/app/*"],
    		"@pages/*": ["./src/pages/*"],
    		"@widgets/*": ["./src/widgets/*"],
    		"@features/*": ["./src/features/*"],
    		"@entities/*": ["./src/entities/*"],
    		"@shared/*": ["./src/shared/*"]
    	}
    },

    "angularCompilerOptions": {
    	"strictTemplates": true,
    	"enableI18nLegacyMessageIdFormat": false,
    	"strictInjectionParameters": true,
    	"strictInputAccessModifiers": true,
    	"strictAttributeTypes": true,
    	"strictOutputEventTypes": true,
    	"strictNullInputTypes": true,
    	"extendedDiagnostics": {
    		"defaultCategory": "error"
    	}
    },

    "files": [],
    "references": [
    	{
    		"path": "./tsconfig.app.json"
    	}
    ]

} </file>

<file path=".husky/commit-msg">
pnpm exec commitlint --edit "$1"
</file>

<file path="public/assets/arrow-right.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/bars.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75m0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8M2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/book-open.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.345 2.634q.136.069.268.145L8 3l.387-.221q.133-.076.268-.145a6.7 6.7 0 0 1 6.052-.03c.486.242.793.74.793 1.283v8.938c0 .65-.526 1.175-1.175 1.175h-.04c-.187 0-.37-.05-.529-.146a4.8 4.8 0 0 0-4.61-.177l-.199.1A2.1 2.1 0 0 1 8 14h-.117a1.6 1.6 0 0 1-.726-.171l-.233-.117a4.94 4.94 0 0 0-4.748.183.74.74 0 0 1-.381.105h-.12A1.175 1.175 0 0 1 .5 12.825V3.887c0-.543.307-1.04.793-1.284a6.7 6.7 0 0 1 6.052.03m1.405 9.572V4.3l.382-.218A5.2 5.2 0 0 1 14 3.927v8.357a6.3 6.3 0 0 0-5.25-.078m-1.5.005V4.299l-.382-.218A5.2 5.2 0 0 0 2 3.927v8.365a6.44 6.44 0 0 1 5.25-.082" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/check.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/circle-info-fill.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 7.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V8.5A.75.75 0 0 1 8 7.75" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/circle-xmark-fill.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.53 5.47a.75.75 0 0 0-1.06 1.06L6.94 8 5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/clock.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/credit-card.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M12.5 4h-9A1.5 1.5 0 0 0 2 5.5h12A1.5 1.5 0 0 0 12.5 4M2 10.5V7h12v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 10.5m1.5-8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3zM4.25 9a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/envelope.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.5 4h9c.25 0 .485.06.692.169L8.75 7.5a1.25 1.25 0 0 1-1.5 0L2.808 4.169C3.015 4.06 3.251 4 3.5 4M2.001 5.438 2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5l-.001-.062L9.65 8.7a2.75 2.75 0 0 1-3.3 0zM.5 5.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/floppy-disk.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3 11.5A1.5 1.5 0 0 0 4.5 13v-2.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V13a1.5 1.5 0 0 0 1.5-1.5V6.036a1 1 0 0 0-.293-.708l-2.035-2.035A1 1 0 0 0 9.964 3H6v1a.5.5 0 0 0 .5.5h3a.75.75 0 0 1 0 1.5h-3a2 2 0 0 1-2-2V3A1.5 1.5 0 0 0 3 4.5zm-1.5 0a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V6.036a2.5 2.5 0 0 0-.732-1.768l-2.036-2.036A2.5 2.5 0 0 0 9.964 1.5H4.5a3 3 0 0 0-3 3zm8.5-1V13H6v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/lock.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.5 6V5a2.5 2.5 0 0 0-5 0v1zM4 5v1a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3V5a4 4 0 0 0-8 0m6.5 2.5H12A1.5 1.5 0 0 1 13.5 9v3a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V9A1.5 1.5 0 0 1 4 7.5zm-1.75 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/moon.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 0 0 2.263-10.514 5.5 5.5 0 0 1-7.278 7.278A5.5 5.5 0 0 0 8 13.5M1.045 8.795a7.001 7.001 0 1 0 7.75-7.75l-.028-.003A7 7 0 0 0 8 1c-.527 0-.59.842-.185 1.18a4 4 0 0 1 .342.322A4 4 0 1 1 2.18 7.814C1.842 7.41 1 7.474 1 8a7 7 0 0 0 .045.794" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/pencil-to-square.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.169 6.331a3 3 0 0 0-.833 1.6l-.338 1.912a1 1 0 0 0 1.159 1.159l1.912-.338a3 3 0 0 0 1.6-.833l3.07-3.07 2-2A.9.9 0 0 0 15 4.13 3.13 3.13 0 0 0 11.87 1a.9.9 0 0 0-.632.262l-2 2zm3.936-1.814L7.229 7.392a1.5 1.5 0 0 0-.416.8L6.6 9.4l1.208-.213.057-.01a1.5 1.5 0 0 0 .743-.406l2.875-2.876a1.63 1.63 0 0 0-1.378-1.378m2.558.199a3.14 3.14 0 0 0-1.379-1.38l.82-.82a1.63 1.63 0 0 1 1.38 1.38zM8 2.25a.75.75 0 0 0-.75-.75H4.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V8.75a.75.75 0 0 0-1.5 0v2.75a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h2.75A.75.75 0 0 0 8 2.25" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/person.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M8 8.5c3.85 0 7 2.5 7 4.5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2c0-2 3.15-4.5 7-4.5M8 10c-1.61 0-3.064.526-4.092 1.234C2.798 12.001 2.5 12.733 2.5 13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5c0-.267-.297-1-1.408-1.766C11.064 10.526 9.609 10 8 10m0-9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
</file>

<file path="public/assets/sun.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 3a.75.75 0 0 1-.75-.75V.75a.75.75 0 0 1 1.5 0v1.5A.75.75 0 0 1 8 3m0 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-.75 3.25a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM13 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 13 8M.75 7.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm10.786-2.786a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0m-9.193 8.132a.75.75 0 0 0 1.06 1.06l1.062-1.06a.75.75 0 0 0-1.061-1.06zm9.193-1.06a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06M3.404 2.343a.75.75 0 0 0-1.06 1.06l1.06 1.061a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/triangle-exclamation-fill.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M5.835 2.244c.963-1.665 3.367-1.665 4.33 0l4.916 8.505c.964 1.666-.24 3.751-2.164 3.751H3.083c-1.925 0-3.128-2.085-2.165-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/triangle-exclamation.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.134 2.994 2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>
</file>

<file path="public/assets/xmark.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>
</file>

<file path="src/app/layouts/main-layout/main-layout.component.scss">
@use 'media' as m;

:host { display: flex; flex-direction: column; width: 100%; min-height: 100dvh; }

.app-layout { display: flex; flex-direction: column; flex-grow: 1; background-color: var(--bg-main);
color: var(--text-primary); transition: background-color var(--transition-base), color
var(--transition-base);

    &__main {
    	display: flex;
    	flex-direction: column;
    	flex-grow: 1;
    	padding-top: var(--unit-6);
    	padding-bottom: var(--unit-8);

    	@include m.media-below('lg') {
    		padding-top: var(--unit-4);
    		padding-bottom: var(--unit-4);
    	}
    }

    &__container {
    	display: flex;
    	flex-direction: column;
    	flex-grow: 1;
    	width: 100%;
    	max-width: var(--container-xxl);
    	margin: 0 auto;
    	padding-right: var(--unit-8);
    	padding-left: var(--unit-8);

    	@include m.media-below('lg') {
    		padding-right: var(--unit-4);
    		padding-left: var(--unit-4);
    	}
    }

    &__header {
    	flex-shrink: 0;
    	width: 100%;
    }

} </file>

<file path="src/entities/article/model/types/article.types.ts">
export type ArticleStatus = 'DRAFT' | 'ARCHIVED' | 'PUBLISHED';
export type ArticleLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type NoteType = 'INFO' | 'WARNING' | 'ERROR';
export type TextFormat = 'HTML' | 'MARKDOWN';

export interface TextBlockData { format: string; content: string; }

export interface NoteBlockData { text: string; noteType: NoteType; }

export interface CodeBlockData { code: string; language: string; filename?: string; }

export interface ImageBlockData { url: string; alt: string; caption?: string; }

export interface ComplexityBlockData { time: string; space: string; description: string; }

export interface FeatureItem { title: string; text: string; }

export interface FeaturesBlockData { sectionTitle: string; items: FeatureItem[]; }

export interface TextBlock { type: 'TEXT'; data: TextBlockData; } export interface NoteBlock { type:
'NOTE'; data: NoteBlockData; } export interface CodeBlock { type: 'CODE'; data: CodeBlockData; }
export interface ImageBlock { type: 'IMAGE'; data: ImageBlockData; } export interface
ComplexityBlock { type: 'COMPLEXITY'; data: ComplexityBlockData; } export interface FeaturesBlock {
type: 'FEATURES'; data: FeaturesBlockData; }

export type ArticleContentBlock = TextBlock | NoteBlock | CodeBlock | ImageBlock | ComplexityBlock |
FeaturesBlock;

export type ArticleBlockType = ArticleContentBlock['type'];

export interface ArticleImage { url: string; alt: string; caption?: string; }

export interface SeoMetadata { description?: string; keywords?: string[]; }

export type ProblemId = string; export type AuthorId = string; export type ArticleId = string;
export type CategoryId = string;

export type NavigationTag = 'THEORY' | 'COMPONENT' | 'EXAMPLE' | 'ALGORITHM' | 'STRUCTURE' |
'ARCHITECTURE' | 'PATTERNS';

export interface Article { id: ArticleId; slug: string; title: string; leadText: string;
description: string; problemId?: ProblemId; authorId?: AuthorId; categoryId: CategoryId; tags:
NavigationTag[]; status: ArticleStatus; level: ArticleLevel; coverImage?: ArticleImage;
readingTimeMinutes: number; seo: SeoMetadata; blocks: ArticleContentBlock[]; createdAt: string;
updatedAt: string; }

export interface GetArticlesQueryDto { status?: ArticleStatus; categoryId?: string; }

export type CreateArticleDto = Omit<Article, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateArticleDto = Partial<CreateArticleDto>; </file>

<file path="src/entities/article-navigation/index.ts">
export * from './api/article-navigation-api.service';
export * from './model/article-navigation.types';
export * from './model/navigation-overview.types';
export * from './ui/article-drawer-navigation';
</file>

<file path="src/entities/course/ui/course-progress/course-progress.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.course-progress-card { display: flex; flex-direction: column; gap: var(--unit-6); padding:
var(--unit-6) var(--unit-6) var(--unit-4) var(--unit-6); background-color: var(--bg-card); border:
1px solid var(--border-light); border-radius: var(--radius-md);

    @include m.media-below('lg') {
    	padding: var(--unit-4);
    	background-color: unset;
    	border: unset;
    	border-radius: unset;
    }

}

.title { display: flex; margin: 0; font-size: var(--font-size-lg); font-weight:
var(--font-weight-bold); color: var(--text-primary); }

.chart-container { display: flex; justify-content: center; width: 100%; }

.stats { display: flex; justify-content: space-between; align-items: center; padding-top:
var(--unit-4); font-size: var(--font-size-sm); color: var(--text-secondary); border-top: 1px solid
var(--border-light);

    .stats-value {
    	font-weight: var(--font-weight-bold);
    	color: var(--text-primary);
    }

} </file>

<file path="src/entities/course/ui/course-progress/course-progress.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CircularProgressComponent } from '@shared/ui/circular-progress';

import { CourseProgress } from '../../model/course.types';

@Component({ selector: 'app-course-progress', standalone: true, imports:
[CircularProgressComponent], templateUrl: './course-progress.component.html', styleUrl:
'./course-progress.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, }) export class
CourseProgressComponent { readonly progress = input.required<CourseProgress>(); } </file>

<file path="src/entities/lesson/api/lesson-api.service.ts">
/* eslint-disable @conarti/feature-sliced/layers-slices */
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CreateLessonDto, LessonDetail, LessonEntity, ToggleLessonProgressResponse, UpdateLessonDto,
} from '@entities/course';

import { ApiPaths } from '@shared/api/api-paths'; import { BaseApiService } from
'@shared/api/base-api.service';

@Injectable({ providedIn: 'root' }) export class LessonApiService extends BaseApiService { private
readonly coursesPath = ApiPaths.COURSES; private readonly lessonsPath = ApiPaths.LESSONS;

    getLessonDetail(id: string): Observable<LessonDetail> {
    	return this.get<LessonDetail>(`/${this.coursesPath}/${this.lessonsPath}/${id}`);
    }

    toggleLessonProgress(id: string): Observable<ToggleLessonProgressResponse> {
    	return this.patch<ToggleLessonProgressResponse, Record<string, never>>(
    		`/${this.coursesPath}/${this.lessonsPath}/${id}/progress`,
    		{},
    	);
    }

    createLesson(courseId: string, dto: CreateLessonDto): Observable<LessonEntity> {
    	return this.post<LessonEntity, CreateLessonDto>(
    		`/${this.coursesPath}/${courseId}/${this.lessonsPath}`,
    		dto,
    	);
    }

    updateLesson(id: string, dto: UpdateLessonDto): Observable<LessonEntity> {
    	return this.patch<LessonEntity, UpdateLessonDto>(
    		`/${this.coursesPath}/${this.lessonsPath}/${id}`,
    		dto,
    	);
    }

    deleteLesson(id: string): Observable<void> {
    	return this.delete<void>(`/${this.coursesPath}/${this.lessonsPath}/${id}`);
    }

} </file>

<file path="src/entities/lesson/ui/lesson-header/lesson-header.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.header-top { display: flex; gap: var(--unit-4); justify-content: space-between; align-items:
center; padding-bottom: var(--unit-4);

    @include m.media-below('lg') {
    	gap: var(--unit-2);
    	padding-bottom: var(--unit-2);
    }

}

.title { margin: 0; font-size: var(--font-size-xxl); font-weight: var(--font-weight-medium); color:
var(--text-primary);

    @include m.media-below('lg') {
    	font-size: var(--font-size-lg);
    }

}

.duration { display: flex; flex-shrink: 0; gap: var(--unit-2); align-items: center; font-size:
var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--status-success);
white-space: nowrap;

    @include m.media-below('lg') {
    	font-size: var(--font-size-xs);
    }

}

.description { margin: 0; font-size: var(--font-size-sm); line-height: var(--line-height-relaxed);
color: var(--text-muted);

    @include m.media-below('lg') {
    	font-size: var(--font-size-xs);
    }

} </file>

<file path="src/entities/lesson/ui/lesson-header/lesson-header.component.ts">
/* eslint-disable @conarti/feature-sliced/layers-slices */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { CourseSkeletonLesson } from '@entities/course';

import { IconComponent } from '@shared/ui/icon';

@Component({ selector: 'app-lesson-header', standalone: true, imports: [IconComponent], templateUrl:
'./lesson-header.component.html', styleUrl: './lesson-header.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class LessonHeaderComponent { readonly lesson =
input.required<CourseSkeletonLesson>();

    readonly durationMinutes = computed(() => Math.round(this.lesson().durationSeconds / 60));

} </file>

<file path="src/features/lesson-navigation/ui/lesson-navigation-controls.component.ts">
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CourseSkeletonLesson } from '@entities/course';

import { ButtonComponent } from '@shared/ui/button'; import { IconComponent } from
'@shared/ui/icon';

@Component({ selector: 'app-lesson-navigation-controls', standalone: true, imports:
[ButtonComponent, IconComponent], changeDetection: ChangeDetectionStrategy.OnPush,

    templateUrl: './lesson-navigation-controls.component.html',
    styleUrl: './lesson-navigation-controls.component.scss',

}) export class LessonNavigationControlsComponent { readonly nextLesson = input<CourseSkeletonLesson
| null>(null); readonly nextLessonSelect = output<string>(); } </file>

<file path="src/features/mark-lesson-watched/index.ts">
export * from './ui/mark-lesson-watched.component';
</file>

<file path="src/pages/course-page/ui/course-page.component.scss">
@use 'media' as m;

:host { display: flex; flex-direction: column; flex-grow: 1; width: 100%; }

.course-page { &__sidebar { display: flex; flex-direction: column; align-items: center; height:
100%; padding: 0; }

    &__mobile-action {
    	display: none;
    	justify-content: flex-end;
    	width: 100%;

    	@include m.media-below('lg') {
    		display: flex;
    		margin-bottom: var(--unit-4);
    		padding: 0 var(--unit-1);
    	}
    }

} </file>

<file path="src/pages/home-page/ui/home-page.component.html">
<div class="hero-page">
	<header class="hero-page__header">
		<div class="hero-page__header-container">
			<app-logo />
		</div>
	</header>

    <div class="hero-page__content">
    	<h1 class="hero-page__title">
    		Фундаментальный курс <br class="hero-page__br" />
    		по <span class="hero-page__accent">Angular</span> разработке
    		<span class="hero-page__nowrap">от А до Я</span>
    	</h1>
    	<p class="hero-page__subtitle">
    		Cистемный подход, позволяющий освоить сложные концепты и закрепить их на реальных задачах.
    	</p>
    	<div class="hero-page__actions">
    		<a app-button [routerLink]="frontendRoute" size="xl" color="primary" class="hero-page__start-btn">
    			Начать обучение
    		</a>
    	</div>
    </div>

</div>
</file>

<file path="src/pages/home-page/ui/home-page.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RouteSegments } from '@shared/config/routes.config'; import { AppLogoComponent } from
'@shared/ui/app-logo'; import { ButtonComponent } from '@shared/ui/button';

@Component({ selector: 'app-home-page', standalone: true, imports: [RouterLink, ButtonComponent,
AppLogoComponent], templateUrl: './home-page.component.html', styleUrl:
'./home-page.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, }) export class
HomePageComponent { protected readonly frontendRoute =
`/${RouteSegments.COURSES}/${RouteSegments.FRONTEND}`; } </file>

<file path="src/shared/ui/button/button.component.scss">
:host {
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: 1px solid transparent;
	font-family:
		system-ui,
		-apple-system,
		sans-serif;
	font-weight: var(--font-weight-medium);
	transition:
		background-color var(--transition-fast),
		color var(--transition-fast),
		border-color var(--transition-fast),
		opacity var(--transition-fast),
		transform var(--transition-fast),
		box-shadow var(--transition-fast);
	cursor: pointer;
	box-sizing: border-box;
	outline: none;
	text-decoration: none;

    &:focus-visible {
    	box-shadow: 0 0 0 4px rgb(99 102 241 / 15%);
    	border-color: var(--border-focus);
    }

    &:active:not(:disabled, .app-button--disabled, .app-button--variant-fab) {
    	transform: scale(0.98);
    }

}

:host(.app-button--disabled) { opacity: var(--opacity-disabled); cursor: not-allowed;
pointer-events: none; }

:host(.app-button--full-width) { width: 100%; }

/* --- РАЗМЕРЫ (Паддинги по умолчанию) --- */
:host(.app-button--size-s:not(.app-button--variant-fab)) { padding: var(--unit-1) var(--unit-3);
border-radius: var(--radius-xs); font-size: var(--font-size-xs); }

:host(.app-button--size-m:not(.app-button--variant-fab)) { padding: var(--unit-2) var(--unit-4);
border-radius: var(--radius-sm); font-size: var(--font-size-sm); }

:host(.app-button--size-l:not(.app-button--variant-fab)) { padding: var(--unit-3) var(--unit-6);
border-radius: var(--radius-md); font-size: var(--font-size-base); }

:host(.app-button--size-xl:not(.app-button--variant-fab)) { padding: var(--unit-4) var(--unit-8);
border-radius: var(--radius-md); font-size: var(--font-size-lg); }

:host(.app-button--variant-fab) { display: inline-flex; justify-content: center; align-items:
center; width: 3.75rem; height: 3.75rem; padding: 0; border-radius: var(--radius-full); }

/* --- ВАРИАНТЫ СТИЛЕЙ --- */ :host(.app-button--variant-filled.app-button--color-default),
:host(.app-button--variant-fab.app-button--color-default) { background-color: var(--bg-main); color:
var(--text-primary); border-color: var(--border-light);

    &:hover:not(.app-button--disabled) {
    	background-color: var(--border-light);
    }

}

:host(.app-button--variant-filled.app-button--color-primary),
:host(.app-button--variant-fab.app-button--color-primary) { background-color: var(--brand-primary);
color: var(--text-on-dark); border-color: var(--brand-primary);

    &:hover:not(.app-button--disabled) {
    	background-color: var(--brand-hover);
    	border-color: var(--brand-hover);
    }

}

:host(.app-button--variant-filled.app-button--color-error),
:host(.app-button--variant-fab.app-button--color-error) { background-color: var(--status-error);
color: var(--text-on-dark); border-color: var(--status-error); }

:host(.app-button--variant-filled.app-button--color-success),
:host(.app-button--variant-fab.app-button--color-success) { background-color: var(--status-success);
color: var(--text-on-dark); border-color: var(--status-success); }

:host(.app-button--variant-outline.app-button--color-default) { background-color: transparent;
color: var(--text-primary); border-color: var(--border-light);

    &:hover:not(.app-button--disabled) {
    	background-color: var(--bg-main);
    }

}

:host(.app-button--variant-outline.app-button--color-primary) { background-color: transparent;
color: var(--brand-primary); border-color: var(--brand-primary);

    &:hover:not(.app-button--disabled) {
    	background-color: var(--brand-light);
    }

}

:host(.app-button--variant-clear.app-button--color-default) { padding: 0; background-color:
transparent; color: var(--text-muted); border-color: transparent;

    &:hover:not(.app-button--disabled) {
    	background-color: transparent;
    	color: var(--text-primary);
    }

}

:host(.app-button--variant-clear.app-button--color-primary) { padding: 0; background-color:
transparent; color: var(--brand-primary); border-color: transparent;

    &:hover:not(.app-button--disabled) {
    	background-color: transparent;
    	color: var(--brand-hover);
    }

}

.app-button__loader { position: absolute; top: 50%; left: 50%; width: var(--unit-4); height:
var(--unit-4); border: 2px solid currentcolor; border-radius: var(--radius-full); animation: spin
0.75s linear infinite; transform: translate(-50%, -50%); border-right-color: transparent; }

@keyframes spin { from { transform: translate(-50%, -50%) rotate(0deg); }

    to {
    	transform: translate(-50%, -50%) rotate(360deg);
    }

} </file>

<file path="src/widgets/articles-drawer-sidebar/ui/articles-drawer-sidebar.component.html">
<div class="draw-sidebar" [class.draw-sidebar--hidden]="isArticlesOpen()">
	<button
		app-button
		type="button"
		variant="fab"
		color="primary"
		(click)="toggleArticlesOpen()"
		aria-label="Открыть глоссарий"
	>
		<span class="draw-sidebar__content">
			<app-icon name="book-open" size="m" />
			<span>A-Z</span>
		</span>
	</button>
</div>

<app-drawer [(isOpen)]="isArticlesOpen"> <div drawer-header>Header</div>

    <div class="drawer-inner-content">
    	<div
    		class="drawer-inner-content__panel drawer-inner-content__panel--nav"
    		[class.drawer-inner-content__panel--shifted]="!!selectedArticleId()"
    	>
    		<app-article-drawer-navigation
    			[selectedId]="selectedArticleId()"
    			(articleSelected)="onArticleSelected($event)"
    		/>
    	</div>

    	<div
    		class="drawer-inner-content__panel drawer-inner-content__panel--article"
    		[class.drawer-inner-content__panel--active]="!!selectedArticleId()"
    	>
    		@if (selectedArticleId(); as id) {
    			<button
    				app-button
    				type="button"
    				variant="clear"
    				size="m"
    				class="drawer-inner-content__back"
    				(click)="backToNavigation()"
    			>
    				<span class="drawer-inner-content__back">← Назад к списку</span>
    			</button>
    			<app-article-view [articleId]="id" />
    		}
    	</div>
    </div>

</app-drawer>
</file>

<file path="src/widgets/articles-drawer-sidebar/ui/articles-drawer-sidebar.component.scss">
:host {
	display: block;
}

.draw-sidebar { position: fixed; right: var(--unit-4); bottom: var(--unit-4); z-index:
var(--z-fixed); display: block; border-radius: var(--radius-full); box-shadow: var(--shadow-md);
transition: transform var(--transition-base), opacity var(--transition-fast);

    &:active {
    	transform: scale(0.95);
    }

    &--hidden {
    	opacity: 0;
    	pointer-events: none;
    	transform: scale(0.8) translateY(24px);
    }

    &__content {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-1);
    	justify-content: center;
    	align-items: center;
    	font-size: 0.65rem;
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-none);
    	letter-spacing: 0.5px;
    }

}

.drawer-inner-content { position: relative; display: flex; width: 100%; height: 100%; overflow:
hidden;

    &__panel {
    	flex: 0 0 100%;
    	width: 100%;
    	height: 100%;
    	transition: transform var(--transition-base);
    	overflow-y: auto;

    	&--nav.drawer-inner-content__panel--shifted {
    		transform: translateX(-100%);
    	}

    	&--article {
    		transform: translateX(100%);

    		&.drawer-inner-content__panel--active {
    			transform: translateX(0);
    		}
    	}
    }

    &__back {
    	display: inline-flex;
    	align-items: center;
    	margin-bottom: var(--unit-4);
    	font-size: var(--font-size-sm);
    	color: var(--text-secondary);

    	&:hover {
    		color: var(--text-primary);
    	}
    }

} </file>

<file path="src/index.html">
<!doctype html>
<html lang="ru">
	<head>
		<meta charset="utf-8" />
		<title>Ngalg — интерактивные курсы по программированию</title>
		<base href="/" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta
			name="description"
			content="Фундаментальный курс по Angular-разработке: от основ до продвинутых паттернов реактивности."
		/>
		<link rel="icon" type="image/x-icon" href="favicon.ico" />
	</head>
	<body>
		<app-root></app-root>
	</body>
</html>
</file>

<file path=".editorconfig">
# https://editorconfig.org
root = true

# --- ГЛОБАЛЬНЫЕ НАСТРОЙКИ ---

[*] charset = utf-8 end_of_line = lf insert_final_newline = true trim_trailing_whitespace = true
indent_style = tab tab_width = 4

# --- МАРКДАУН ---

[*.md] trim_trailing_whitespace = false

# --- СКРИПТЫ И СИСТЕМНЫЕ ФАЙЛЫ ---

[*.sh] end_of_line = lf

# --- МАКЕФАЙЛЫ ---

[{Makefile,*.mk}] </file>

<file path=".prettierrc">
{
	"$schema": "https://json.schemastore.org/prettierrc",
	"printWidth": 100,
	"tabWidth": 4,
	"useTabs": true,
	"semi": true,
	"singleQuote": true,
	"quoteProps": "as-needed",
	"trailingComma": "all",
	"bracketSpacing": true,
	"bracketSameLine": false,
	"arrowParens": "always",
	"endOfLine": "lf",
	"htmlWhitespaceSensitivity": "css",
	"singleAttributePerLine": false,
	"plugins": ["@trivago/prettier-plugin-sort-imports"],

    "importOrder": [
    	"^@angular/(.*)$",
    	"^@nestjs/(.*)$",
    	"<THIRD_PARTY_MODULES>",
    	"^@app/(.*)$",
    	"^@pages/(.*)$",
    	"^@widgets/(.*)$",
    	"^@features/(.*)$",
    	"^@entities/(.*)$",
    	"^@shared/(.*)$",
    	"^[./]"
    ],

    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
    "importOrderParserPlugins": ["typescript", "decorators-legacy"],
    "overrides": [
    	{
    		"files": "*.html",
    		"options": {
    			"parser": "angular",
    			"printWidth": 120,
    			"singleQuote": false
    		}
    	},
    	{
    		"files": ["*.json", "*.jsonc"],
    		"options": {
    			"parser": "json"
    		}
    	},
    	{
    		"files": ["*.yaml", "*.yml"],
    		"options": {
    			"parser": "yaml"
    		}
    	},
    	{
    		"files": "*.md",
    		"options": {
    			"parser": "markdown",
    			"proseWrap": "always"
    		}
    	}
    ]

} </file>

<file path=".stylelintrc.json">
{
	"extends": ["stylelint-config-standard-scss"],
	"plugins": ["stylelint-order"],
	"rules": {
		"order/properties-order": [
			[
				"position",
				"top",
				"right",
				"bottom",
				"left",
				"z-index",

    			"display",
    			"flex",
    			"flex-direction",
    			"flex-wrap",
    			"flex-grow",
    			"flex-shrink",
    			"flex-basis",
    			"grid",
    			"grid-template-columns",
    			"grid-template-rows",
    			"grid-template-areas",
    			"grid-column",
    			"grid-row",
    			"gap",
    			"row-gap",
    			"column-gap",
    			"justify-content",
    			"justify-items",
    			"justify-self",
    			"align-items",
    			"align-content",
    			"align-self",

    			"width",
    			"min-width",
    			"max-width",
    			"height",
    			"min-height",
    			"max-height",

    			"margin",
    			"margin-top",
    			"margin-right",
    			"margin-bottom",
    			"margin-left",
    			"padding",
    			"padding-top",
    			"padding-right",
    			"padding-bottom",
    			"padding-left",

    			"background",
    			"background-color",
    			"background-image",
    			"border",
    			"border-radius",
    			"box-shadow",
    			"opacity",

    			"font-family",
    			"font-size",
    			"font-weight",
    			"line-height",
    			"color",
    			"text-align",

    			"transition",
    			"animation",
    			"cursor"
    		],
    		{
    			"unspecified": "bottom",
    			"emptyLineBeforeUnspecified": "never"
    		}
    	],

    	"selector-pseudo-class-no-unknown": [
    		true,
    		{
    			"ignorePseudoClasses": ["host", "host-context"]
    		}
    	],
    	"selector-pseudo-element-no-unknown": [
    		true,
    		{
    			"ignorePseudoElements": ["ng-deep"]
    		}
    	],

    	"declaration-no-important": true,
    	"max-nesting-depth": 4,
    	"color-named": "never",
    	"declaration-block-no-redundant-longhand-properties": true,
    	"no-empty-source": null,

    	"declaration-property-unit-allowed-list": [
    		{
    			"font-size": ["px", "rem", "em"],
    			"margin": ["px", "rem", "em", "%", "vh", "vw", "dvh"],
    			"padding": ["px", "rem", "em", "%", "vh", "vw", "dvh"],
    			"width": ["px", "rem", "%", "vw", "vh", "dvh", "em", "fr"],
    			"height": ["px", "rem", "%", "vh", "vw", "dvh", "em", "fr"]
    		},
    		{
    			"ignore": ["inside-function"]
    		}
    	],

    	"selector-class-pattern": "^[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",
    	"scss/selector-no-redundant-nesting-selector": null,
    	"scss/at-mixin-pattern": null,
    	"scss/at-if-no-null": null
    }

} </file>

<file path="eslint.config.ts">
import fsdPlugin from '@conarti/eslint-plugin-feature-sliced';
import eslint from '@eslint/js';
import angular from 'angular-eslint';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([ { files: ['**/\*.ts'], extends: [ eslint.configs.recommended,
...tseslint.configs.recommended, ...tseslint.configs.stylistic, ...angular.configs.tsRecommended, ],
processor: angular.processInlineTemplates as any, rules: { '@angular-eslint/directive-selector': [
'error', { type: 'attribute', prefix: 'app', style: 'camelCase', }, ],
'@angular-eslint/component-selector': [ 'error', { type: ['element', 'attribute'], prefix: 'app',
style: 'kebab-case', }, ], '@angular-eslint/prefer-standalone': 'error',
'@angular-eslint/component-class-suffix': 'error', '@angular-eslint/directive-class-suffix':
'error', '@typescript-eslint/explicit-function-return-type': [ 'error', { allowExpressions: true,
allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true,
allowDirectConstAssertionInArrowFunctions: true, }, ], '@typescript-eslint/no-explicit-any': 'warn',
}, }, { files: ['**/_.ts'], ...fsdPlugin(), rules: { '@conarti/feature-sliced/layers-slices':
['error', { allowTypeImports: true }], '@conarti/feature-sliced/absolute-relative': 'error',
'@conarti/feature-sliced/public-api': 'error', }, }, { files: ['\**/_.html'], extends:
[...angular.configs.templateRecommended, ...angular.configs.templateAccessibility], rules: {
'@angular-eslint/template/no-negated-async': 'error',
'@angular-eslint/template/prefer-control-flow': 'error', }, }, ]); </file>

<file path="tsconfig.app.json">
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"outDir": "./out-tsc/app",
		"types": []
	},
	"files": ["src/index.ts"],
	"include": ["src/**/*.d.ts", "src/**/*.ts", "eslint.config.ts"],
	"exclude": ["node_modules", "dist"]
}
</file>

<file path="src/app/providers/app.config.ts">
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { apiInterceptor } from '@shared/api/api.interceptor'; import { ENVIRONMENT } from
'@shared/config/environment.config';

import { environment } from '../../environments/environment'; import { APP_ROUTES } from
'../routes/app.routes';

export const appConfig: ApplicationConfig = { providers: [ provideBrowserGlobalErrorListeners(),
provideZonelessChangeDetection(), provideRouter( APP_ROUTES, withComponentInputBinding(),
withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', }), ),
provideHttpClient(withFetch(), withInterceptors([apiInterceptor])), { provide: ENVIRONMENT,
useValue: environment }, ], }; </file>

<file path="src/entities/article/index.ts">
export * from './api/article-api.service';

export * from './model/types/article.types';

export * from './ui/article-detalization/article-content/article.component'; export * from
'./ui/article-detalization/article-header/article-header.component'; export * from
'./ui/article-detalization/article-blocks/article-block-renderer.component'; export * from
'./ui/article-view/article-view.component'; </file>

<file path="src/entities/course/api/course-api.service.ts">
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiPaths } from '@shared/api/api-paths'; import { BaseApiService } from
'@shared/api/base-api.service';

import { CourseEntity, CourseSectionEntity, CourseSkeleton, CreateCourseDto, CreateCourseSectionDto,
UpdateCourseDto, UpdateCourseSectionDto, } from '../model/course.types';

@Injectable({ providedIn: 'root' }) export class CourseApiService extends BaseApiService { private
readonly coursesPath = ApiPaths.COURSES; private readonly sectionsPath = ApiPaths.SECTIONS;

    getCourseSkeleton(slug: string): Observable<CourseSkeleton> {
    	return this.get<CourseSkeleton>(`/${this.coursesPath}/${slug}`);
    }

    createCourse(dto: CreateCourseDto): Observable<CourseEntity> {
    	return this.post<CourseEntity, CreateCourseDto>(`/${this.coursesPath}`, dto);
    }

    updateCourse(id: string, dto: UpdateCourseDto): Observable<CourseEntity> {
    	return this.patch<CourseEntity, UpdateCourseDto>(`/${this.coursesPath}/${id}`, dto);
    }

    deleteCourse(id: string): Observable<void> {
    	return this.delete<void>(`/${this.coursesPath}/${id}`);
    }

    createSection(courseId: string, dto: CreateCourseSectionDto): Observable<CourseSectionEntity> {
    	return this.post<CourseSectionEntity, CreateCourseSectionDto>(
    		`/${this.coursesPath}/${courseId}/${this.sectionsPath}`,
    		dto,
    	);
    }

    updateSection(id: string, dto: UpdateCourseSectionDto): Observable<CourseSectionEntity> {
    	return this.patch<CourseSectionEntity, UpdateCourseSectionDto>(
    		`/${this.coursesPath}/${this.sectionsPath}/${id}`,
    		dto,
    	);
    }

    deleteSection(id: string): Observable<void> {
    	return this.delete<void>(`/${this.coursesPath}/${this.sectionsPath}/${id}`);
    }

} </file>

<file path="src/entities/lesson/ui/lesson-card/lesson-card.component.ts">
/* eslint-disable @conarti/feature-sliced/layers-slices */
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { CourseSkeletonLesson } from '@entities/course';

import { IconComponent } from '@shared/ui/icon';

@Component({ selector: 'app-lesson-card', standalone: true, imports: [IconComponent], templateUrl:
'./lesson-card.component.html', styleUrl: './lesson-card.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, }) export class LessonCardComponent { readonly lesson =
input.required<CourseSkeletonLesson>(); readonly isActive = input<boolean>(false); readonly
selectLesson = output<string>();

    readonly isLocked = computed(() => !this.lesson().isFree && !this.lesson().isCompleted);

    protected onSelect(): void {
    	if (this.isLocked()) {
    		return;
    	}
    	this.selectLesson.emit(this.lesson().id);
    }

} </file>

<file path="src/entities/lesson/index.ts">
export * from './api/lesson-api.service';
export * from './ui/lesson-card/lesson-card.component';
export * from './ui/lesson-header/lesson-header.component';
</file>

<file path="src/pages/course-page/index.ts">
export * from './ui/course-page.component';
export * from './lib/guards/course.guard';
export * from './model/course-page.store';
</file>

<file path="src/widgets/articles-drawer-sidebar/ui/articles-drawer-sidebar.component.ts">
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

import { ArticleViewComponent } from '@entities/article'; import { ArticleDrawerNavigationComponent
} from '@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button'; import { DrawerComponent } from
'@shared/ui/drawer'; import { IconComponent } from '@shared/ui/icon';

@Component({ selector: 'app-articles-drawer-sidebar', standalone: true, templateUrl:
'./articles-drawer-sidebar.component.html', styleUrl: './articles-drawer-sidebar.component.scss',
changeDetection: ChangeDetectionStrategy.OnPush, imports: [ IconComponent, DrawerComponent,
ButtonComponent, ArticleDrawerNavigationComponent, ArticleViewComponent, ], }) export class
ArticlesDrawerSidebarComponent { readonly isArticlesOpen = signal<boolean>(false); protected
readonly selectedArticleId = signal<string | null>(null);

    constructor() {
    	effect(() => {
    		document.body.classList.toggle('lock-scroll', this.isArticlesOpen());
    	});
    }

    protected toggleArticlesOpen(): void {
    	this.isArticlesOpen.update((state) => !state);
    }

    protected onArticleSelected(id: string | number): void {
    	this.selectedArticleId.set(String(id));
    }

    protected backToNavigation(): void {
    	this.selectedArticleId.set(null);
    }

} </file>

<file path="src/widgets/course-sidebar/ui/course-sidebar.component.html">
<aside class="sidebar">
	<app-course-progress [progress]="progress()" />

    <div class="lessons-container">
    	@for (section of sections(); track section.id) {
    		<h4 class="section-title">{{ section.title }}</h4>
    		<div class="lessons-list">
    			@for (lesson of section.lessons; track lesson.id) {
    				<app-lesson-card
    					[lesson]="lesson"
    					[isActive]="lesson.id === activeLessonId()"
    					(selectLesson)="selectLesson.emit($event)"
    				/>
    			}
    		</div>
    	} @empty {
    		<p class="empty-state">Уроки скоро появятся</p>
    	}
    </div>

</aside>
</file>

<file path="src/widgets/header/ui/header.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.header { position: relative; z-index: var(--z-elevate); width: 100%; background-color: transparent;

    &__container {
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	max-width: var(--container-xxl);
    	height: var(--unit-16);
    	margin: 0 auto;
    	padding: 0 var(--unit-8);

    	@include m.media-below('lg') {
    		padding: 0 var(--unit-4);
    	}
    }

} </file>

<file path="src/widgets/lesson-content/ui/lesson-content.component.ts">
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { LessonNavigationControlsComponent } from '@features/lesson-navigation'; import {
MarkLessonWatchedComponent } from '@features/mark-lesson-watched';

import { CourseSkeletonLesson } from '@entities/course'; import { LessonHeaderComponent } from
'@entities/lesson';

import { VideoPlayerComponent } from '@shared/ui/video-player';

@Component({ selector: 'app-lesson-content', standalone: true, imports: [ VideoPlayerComponent,
LessonHeaderComponent, MarkLessonWatchedComponent, LessonNavigationControlsComponent, ],
templateUrl: './lesson-content.component.html', styleUrl: './lesson-content.component.scss',
changeDetection: ChangeDetectionStrategy.OnPush, }) export class LessonContentComponent { readonly
lesson = input.required<CourseSkeletonLesson>(); readonly videoUrl = input<string | null>(null);
readonly nextLesson = input<CourseSkeletonLesson | null>(null);

    readonly toggleComplete = output<string>();
    readonly selectLesson = output<string>();

} </file>

<file path="src/entities/course/index.ts">
export * from './api/course-api.service';
export * from './model/course.types';
export * from './ui/course-progress/course-progress.component';
</file>

<file path="src/shared/layouts/sidebar-layout/sidebar-layout.component.scss">
@use 'media' as m;

:host { --sidebar-width: 18rem;

    display: block;
    flex-grow: 1;
    width: 100%;
    background-color: var(--bg-main);

}

.sidebar-layout { display: grid; flex-grow: 1; grid-template-columns: var(--sidebar-width) 1fr; gap:
var(--unit-8); align-items: start; width: 100%;

    @include m.media-below('lg') {
    	grid-template-columns: 1fr;
    	gap: var(--unit-4);
    }

    &__sidebar {
    	position: sticky;
    	top: var(--unit-4);
    	z-index: var(--z-sticky);
    	height: calc(100dvh - var(--unit-8));
    	padding: 0;
    	background-color: transparent;
    	border: none;
    	border-radius: 0;

    	@include m.media-below('lg') {
    		display: none;
    	}
    }

    &__sidebar-content {
    	height: 100%;
    	overflow: visible;
    	scrollbar-width: none;
    	scrollbar-color: var(--text-muted) transparent;

    	&::-webkit-scrollbar {
    		display: none;
    	}

    	&::-webkit-scrollbar-thumb {
    		background-color: var(--text-muted);
    		border-radius: var(--radius-full);

    		&:hover {
    			background-color: var(--text-secondary);
    		}
    	}
    }

    &__content {
    	display: flex;
    	flex-direction: column;
    	flex-grow: 1;
    	min-width: 0;
    }

} </file>

<file path="src/shared/ui/drawer/drawer.component.scss">
@use 'media' as m;

:host { display: block; }

.drawer-backdrop { position: fixed; top: 0; left: 0; z-index: var(--z-modal-backdrop); width: 100vw;
height: 100vh; background-color: rgb(0 0 0 / 20%); animation: drawer-fade-in var(--transition-fast)
forwards; backdrop-filter: blur(2px); }

.drawer-panel { position: fixed; top: 0; right: 0; z-index: var(--z-modal); display: flex;
