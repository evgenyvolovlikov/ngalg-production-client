// https://leetcode.com/problems/backspace-string-compare

// Input: s = "ab#c", t = "ad#c"
// Output: true

// Input: s = "ab##", t = "c#d#"
// Output: true

// Решение 1:
function buildString(s: string): string[] {
	const array: string[] = [];

	for (const elem of s) {
		if (elem !== '#') {
			array.push(elem);
		} else {
			array.pop();
		}
	}

	return array;
}

function backspaceCompare(s: string, t: string): boolean {
	const finalS: string[] = buildString(s);
	const finalT: string[] = buildString(t);

	if (finalS.length !== finalT.length) return false;

	for (let p = 0; p < finalS.length; ++p) {
		if (finalS[p] !== finalT[p]) {
			return false;
		}
	}

	return true;
}

backspaceCompare('ab#c', 'ad#c');

// Время: O(n + m)
// Память: O(n + m)

// Решение 2:

function backspaceCompare_2(s: string, t: string): boolean {
	let p1 = s.length - 1;
	let p2 = t.length - 1;

	while (p1 >= 0 || p2 >= 0) {
		if (s[p1] === '#' || t[p2] === '#') {
			if (s[p1] === '#') {
				let backCount = 2;
				while (backCount > 0) {
					p1--;
					backCount--;

					if (s[p1] === '#') {
						backCount = backCount + 2;
					}
				}
			}

			if (t[p2] === '#') {
				let backCount = 2;
				while (backCount > 0) {
					p2--;
					backCount--;

					if (t[p2] === '#') {
						backCount = backCount + 2;
					}
				}
			}
		} else {
			if (s[p1] !== t[p2]) {
				return false;
			} else {
				p1--;
				p2--;
			}
		}
	}

	return true;
}

backspaceCompare_2('ab#c', 'ad#c');

// Время: O(n + m)
// Память: O(1)
