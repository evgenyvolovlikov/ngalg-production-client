// Input: s = 'abcabcbb';
// Output: 3;

// Input: s = 'bbbbb';
// Output: 1;

// Решение 1:
function longestSubstring(s: string): number {
	let maxLength = 0;
	for (let p1 = 0; p1 < s.length; ++p1) {
		const obj: Record<string, boolean> = {};
		let longestLength = 0;
		for (let p2 = p1; p2 < s.length; ++p2) {
			if (!obj[s[p2]]) {
				obj[s[p2]] = true;
				longestLength++;

				maxLength = Math.max(maxLength, longestLength);
			} else {
				break;
			}
		}
	}

	return maxLength;
}

const input = 'abcabcbb';

longestSubstring(input);

// Время: O(n^2)
// Память: O(m)

// Решение 2:
// 1. Создание переменных макс длины, хранилище Set, левый указатель left
// 2. Инициализация цикла, внутри цикла - текущее значение в Set
// 3. Вложенный цикл while где рекурсивно проверяется текущего элемента цикла
// (currentSymbol)
// 4. После удаления текущего символа элемента в цикле, добавляем его в конец
// 5. Длина текущего окна рассчитывается как: right - left + 1

// Input: s = 'abcabcbb';
function longestSubstring_2(s: string): number {
	let longestLength = 0;
	const seen = new Set();
	let left = 0;

	for (let right = 0; right < s.length; ++right) {
		const currentSymbol = s[right];
		while (seen.has(currentSymbol)) {
			seen.delete(s[left]);
			left++;
		}

		seen.add(currentSymbol);

		longestLength = Math.max(longestLength, right - left + 1);
	}

	return longestLength;
}

// Время: O(n)
// Память: O(m)

const input_2 = 'abcab';

longestSubstring_2(input_2);
