import { Injectable, signal } from '@angular/core';

import { ToastItem, ToastType } from './toast.types';

@Injectable({ providedIn: 'root' })
export class ToastStore {
	private nextId = 0;

	public readonly toasts = signal<ToastItem[]>([]);

	public show(message: string, type: ToastType = 'info', duration = 5000): void {
		const id = this.nextId++;
		const toast: ToastItem = { id, message, type };

		this.toasts.update((list) => [...list, toast]);

		setTimeout(() => this.dismiss(id), duration);
	}

	public success(message: string, duration?: number): void {
		this.show(message, 'success', duration);
	}

	public error(message: string, duration?: number): void {
		this.show(message, 'error', duration);
	}

	public warning(message: string, duration?: number): void {
		this.show(message, 'warning', duration);
	}

	public info(message: string, duration?: number): void {
		this.show(message, 'info', duration);
	}

	public dismiss(id: number): void {
		this.toasts.update((list) => list.filter((t) => t.id !== id));
	}

	public clear(): void {
		this.toasts.set([]);
	}
}
