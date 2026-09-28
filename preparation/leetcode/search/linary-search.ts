const linarySearch = (array: number[], target: number): number => {
	// Вариант 1:
	for (let p1 = 0; p1 < array.length; ++p1) {
		if (array[p1] === target) {
			return p1;
		}
	}

	// Вариант 2:
	for (const [index, elem] of array.entries()) {
		if (elem === target) {
			return index;
		}
	}

	return -1;
};

linarySearch([1, 2, 3, 4, 5], 4);

// Время: O(n)
// Память: O(1)
