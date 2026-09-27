/* eslint-disable @angular-eslint/no-output-native */
import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormArray, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ArticleBlockType } from '@entities/article';
import { NavigationSection } from '@entities/article-navigation';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';
import { SelectComponent } from '@shared/ui/select';
import { TagsInputComponent } from '@shared/ui/tags-input';
import { TextareaComponent } from '@shared/ui/textarea';

import { createBlockGroup } from '../../model/article-blocks-form.factory';
import { ArticleFormModel, BlockFormGroup } from '../../model/article-form.types';
import { ArticleBlockFormRendererComponent } from './article-block-form-renderer/article-block-form-renderer.component';

@Component({
	selector: 'app-article-form',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './article-form.component.html',
	styleUrl: './article-form.component.scss',
	imports: [
		ReactiveFormsModule,
		ButtonComponent,
		InputComponent,
		UpperCasePipe,
		TextareaComponent,
		SelectComponent,
		TagsInputComponent,
		ArticleBlockFormRendererComponent,
	],
})
export class ArticleFormComponent {
	readonly form = input.required<FormGroup<ArticleFormModel>>();
	readonly isEditMode = input<boolean>(false);
	readonly isSubmitting = input<boolean>(false);
	readonly navigationTree = input<NavigationSection[]>([]);

	readonly save = output<void>();
	readonly cancel = output<void>();

	private readonly fb = inject(NonNullableFormBuilder);

	readonly statusOptions = [
		{ value: 'DRAFT', label: 'Черновик' },
		{ value: 'PUBLISHED', label: 'Опубликовано' },
		{ value: 'ARCHIVED', label: 'В архиве' },
	];
	readonly levelOptions = [
		{ value: 'BEGINNER', label: 'Beginner' },
		{ value: 'INTERMEDIATE', label: 'Intermediate' },
		{ value: 'ADVANCED', label: 'Advanced' },
	];
	readonly availableBlocks: { type: ArticleBlockType; label: string }[] = [
		{ type: 'TEXT', label: 'Текст' },
		{ type: 'CODE', label: 'Код' },
		{ type: 'NOTE', label: 'Заметка' },
		{ type: 'COMPLEXITY', label: 'Сложность' },
		{ type: 'IMAGE', label: 'Картинка' },
		{ type: 'FEATURES', label: 'Фичи' },
	];

	get blocksFormArray(): FormArray<FormGroup<BlockFormGroup>> {
		return this.form().controls.blocks;
	}

	protected addBlock(type: ArticleBlockType): void {
		this.blocksFormArray.push(createBlockGroup(this.fb, type));
	}

	protected removeBlock(index: number): void {
		this.blocksFormArray.removeAt(index);
	}

	protected onSubmit(): void {
		if (this.form().invalid) {
			this.form().markAllAsTouched();
			return;
		}
		this.save.emit();
	}

	protected onCancel(): void {
		this.cancel.emit();
	}
}
