import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollLockService {
	private readonly locks = signal(0);

	lock(): void {
		this.locks.update((count) => {
			const next = count + 1;
			document.body.classList.toggle('lock-scroll', next > 0);
			return next;
		});
	}

	unlock(): void {
		this.locks.update((count) => {
			const next = Math.max(0, count - 1);
			document.body.classList.toggle('lock-scroll', next > 0);
			return next;
		});
	}
}
