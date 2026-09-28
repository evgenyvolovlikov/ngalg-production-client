// O(1) — константное время, не зависит от размера данных
// O(log n) — логарифмическая сложность, типична для бинарного поиска
// O(n) — линейная сложность, один проход по данным
// O(n log n) — типична для эффективных сортировок
// O(n^2) — вложенные циклы по одним и тем же данным

// https://leetcode.com/problems/two-sum/description

// Решение 1:
const twoSum = (array: number[], target: number): number[] => {
	for (let p1 = 0; p1 < array.length; ++p1) {
		for (let p2 = p1 + 1; p1 < array.length; ++p2) {
			if (array[p1] + array[p2] === target) {
				return [p1, p2];
			}
		}
	}

	return [];
};

twoSum([1, 2, 3, 4, 5], 9);

// Время: O(n^2)
// Память: O(1)

// Решение 2:
const twoSum_2 = (array: number[], target: number): number[] => {
	const numsObj: Record<number, number> = {};

	for (let p1 = 0; p1 < array.length; ++p1) {
		if (numsObj[array[p1]] >= 0) {
			return [numsObj[array[p1]], p1];
		} else {
			const complement = target - array[p1];
			numsObj[complement] = p1;
		}
	}

	return [];
};

twoSum_2([1, 2, 3, 4, 5], 9);

// Время: O(n)
// Память: O(n)

// Решение 3:
const twoSum_3 = (array: number[], target: number): number[] => {
	const mapObj = new Map();

	for (let p1 = 0; p1 < array.length; ++p1) {
		if (mapObj.has(array[p1])) {
			return [mapObj.get(array[p1]), p1];
		}

		const complement = target - array[p1];
		mapObj.set(complement, p1);
	}

	return [];
};

twoSum_3([1, 2, 3, 4, 5], 9);

// Время: O(n)
// Память: O(n)
