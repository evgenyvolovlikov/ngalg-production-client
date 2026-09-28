// https://leetcode.com/problems/trapping-rain-water

// Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Output: 6;

// Решение 1:
function trap(heights: number[]): number {
	let totalWater = 0;

	for (let p = 0; p < heights.length; ++p) {
		let leftP = p;
		let rightP = p;

		let maxLeft = 0;
		let maxRight = 0;

		while (leftP >= 0) {
			maxLeft = Math.max(maxLeft, heights[leftP]);
			--leftP;
		}

		while (rightP < heights.length) {
			maxRight = Math.max(maxRight, heights[rightP]);
			++rightP;
		}

		const currentWater = Math.min(maxLeft, maxRight) - heights[p];
		if (currentWater >= 0) {
			totalWater += currentWater;
		}
	}

	return totalWater;
}

// Время: O(n^2)
// Память: O(1)

const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

trap(input);

// Решение 2:
function trap_2(heights: number[]): number {
	let total = 0,
		left = 0,
		right = heights.length - 1,
		maxLeft = 0,
		maxRight = 0;

	// for (let p = 0; p < heights.length; ++p) {}
	while (left < right) {
		if (heights[left] < heights[right]) {
			if (heights[left] > maxLeft) {
				maxLeft = heights[left];
			} else {
				total += maxLeft - heights[left];
			}
			left++;
		} else {
			if (heights[right] > maxRight) {
				maxRight = heights[right];
			} else {
				total += maxRight - heights[right];
			}
			right--;
		}
	}

	return total;
}

// Время: O(n)
// Память: O(1)

const input_2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

trap_2(input_2);

export {};
