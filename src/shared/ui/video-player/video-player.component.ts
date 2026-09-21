import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'app-video-player',
	standalone: true,
	imports: [],
	templateUrl: './video-player.component.html',
	styleUrl: './video-player.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent {
	/** Прямая ссылка на видео (mp4, webm) или embed URL */
	readonly src = input<string | null>(null);

	/** Постер для видео */
	readonly poster = input<string | null>(null);

	/** Показывать ли стандартные контролы управления */
	readonly controls = input<boolean>(true);
}
