import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { NoteBlockData } from '../../../model/types/article.types';

@Component({
	selector: 'app-article-block-note',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './article-block-note.component.html',
	styleUrl: './article-block-note.component.scss',
})
export class ArticleBlockNoteComponent {
	readonly data = input.required<NoteBlockData>();
}
