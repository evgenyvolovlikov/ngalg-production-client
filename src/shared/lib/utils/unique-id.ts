let counter = 0;

/** Детерминированный id для связи label/aria-атрибутов с полем. */
export function uniqueId(prefix: string): string {
	counter += 1;
	return `${prefix}-${counter.toString(36)}`;
}
