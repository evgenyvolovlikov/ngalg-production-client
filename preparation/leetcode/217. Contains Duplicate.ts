// 217. https://leetcode.com/problems/contains-duplicate/description/

// Решение 1:
function containsDuplicate(nums: number[]): boolean {
	const duplicatesSet = new Set();

	for (const elem of nums) {
		if (duplicatesSet.has(elem)) {
			return true;
		}
		duplicatesSet.add(elem);
	}

	return false;
}

containsDuplicate([1, 2, 3, 4, 5, 5]);

// Время: O(n)
// Память: O(n)
