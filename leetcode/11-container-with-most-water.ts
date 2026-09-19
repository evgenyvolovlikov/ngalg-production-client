// https://leetcode.com/problems/container-with-most-water

// 1. Инициализировать необходимые переменные: maxArea
// 2. Пройтись по массиву 1 итерация
// 3. Создать вложенный цикл проходиться по слудующим элементам + 1
// 4. Внутри вложенного цикла вычислить высоту (currentHeight) чтобы вычилить минимальную высоту для того чтобы вода не была выше границы через Max.min, ширину (width), и площадь (currentArea), формулу площади: S = H * W
// 5. Внутри вложенного цикла сравнить переменную через Math.max(maxArea, area)

// Решение 1:
function maxArea(heights: number[]): number {
	let maxArea = 0;
	for (let p1 = 0; p1 < heights.length; ++p1) {
		for (let p2 = p1 + 1; p2 < heights.length; ++p2) {
			const currentHeight = Math.min(heights[p1], heights[p2]);
			const width = p2 - p1;
			const currentArea = currentHeight * width;

			maxArea = Math.max(maxArea, currentArea);
		}
	}

	return maxArea;
}

// Время: O(n^2)
// Память: O(1)

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];

maxArea(input);

// Решение 2:

// 1. Создать переменные maxArea, left, right
// 2. создать цикл while пока right > left
// 3. Инициализировать прееменные currentHeight (высчитать минимальное значение двух текущих
// элементов высоты), и переменную width (высчитать right - left)
// и переменную area (currentHeight * width)
// 4. Проверить текущую переменную maxArea: Math.max(maxArea, area)
// 5. Поставить учловие чтобы обновлять счётчики left и right (right > left) left++...
// else right--
// 6. Возвратить переменную maxArea

function maxArea_2(heights: number[]): number {
	let maxArea = 0;
	let left = 0;
	let right = heights.length - 1;

	while (left < right) {
		const currentHeight = Math.min(heights[left], heights[right]);
		const width = right - left;

		const area = currentHeight * width;
		maxArea = Math.max(maxArea, area);

		if (heights[left] < heights[right]) {
			left++;
		} else {
			right--;
		}
	}

	return maxArea;
}

// Время: O(n)
// Память: O(1)

const input_2 = [1, 8, 6, 2, 5, 4, 8, 3, 7];

maxArea_2(input_2);
