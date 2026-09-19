const binarySearch = (array: number[], target: number): number => {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const middle = Math.floor((start + end) / 2);

		if (array[middle] === target) {
			return middle;
		} else if (array[middle] < target) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return -1;
};

binarySearch([1, 2, 3, 4, 5], 4);

// Время: O(log n)
// Память: O(1)
