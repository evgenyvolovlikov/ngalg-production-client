const validSubPal = (s: string, l: number, r: number): boolean => {
	while (l < r) {
		if (s[l] !== s[r]) {
			return false;
		}
		++l;
		--r;
	}

	return true;
};

const isAlmostPalindrom = function (s: string): boolean {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) {
			return validSubPal(s, left + 1, right) || validSubPal(s, left, right - 1);
		}

		++left;
		--right;
	}

	return true;
};

isAlmostPalindrom('abccdba');
