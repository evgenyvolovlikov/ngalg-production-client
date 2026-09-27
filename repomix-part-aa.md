This file is a merged representation of the entire codebase, combined into a single document by
Repomix.

<file_summary> This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format> The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:

- File path as an attribute
- Full contents of the file </file_format>

<usage_guidelines>

- This file should be treated as read-only. Any changes should be made to the original repository
  files, not this packed version.
- When processing this file, use the file path to distinguish between different files in the
  repository.
- Be aware that this file may contain sensitive information. Handle it with the same level of
  security as you would the original repository. </usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure> .github/ workflows/ ci.yml .husky/ commit-msg pre-commit leetcode/ search/
binary-search.ts linary-search.ts structures/ linked-list.ts

1. Two Sum.ts
2. Container With Most Water.ts
3. Valid Palindrome.ts
4. Contains Duplicate.ts
5. Longest Substring Without Repeating Characters.ts
6. Trapping Rainwater.ts
7. Valid Palindrome II.ts
8. Backspace Compare.ts big-o.ts public/ assets/ arrow-right.svg bars.svg book-open.svg check.svg
   circle-info-fill.svg circle-xmark-fill.svg clock.svg credit-card.svg envelope.svg eye-closed.svg
   eye-opened.svg floppy-disk.svg lock.svg logo-github.svg logo-google.svg logo.svg moon.svg
   pencil-to-square.svg person.svg sun.svg triangle-exclamation-fill.svg triangle-exclamation.svg
   xmark.svg fonts/ geist-mono/ .gitkeep geist-sans/ .gitkeep README.md src/ app/ layouts/
   account-layout/ account-layout.component.html account-layout.component.scss
   account-layout.component.ts main-layout/ main-layout.component.html main-layout.component.scss
   main-layout.component.ts providers/ app.config.ts routes/ app.routes.ts ui/ app.component.ts
   entities/ article/ api/ article-api.service.ts model/ types/ article.types.ts ui/
   article-detalization/ article-blocks/ article-block-code/ article-block-code.component.html
   article-block-code.component.scss article-block-code.component.ts article-block-complexity/
   article-block-complexity.component.html article-block-complexity.component.scss
   article-block-complexity.component.ts article-block-features/
   article-block-features.component.html article-block-features.component.scss
   article-block-features.component.ts article-block-image/ article-block-image.component.html
   article-block-image.component.scss article-block-image.component.ts article-block-note/
   article-block-note.component.html article-block-note.component.scss
   article-block-note.component.ts article-block-text/ article-block-text.component.html
   article-block-text.component.scss article-block-text.component.ts article-block-registry.ts
   article-block-renderer.component.ts article-content/ article.component.html
   article.component.scss article.component.ts article-header/ article-header.component.html
   article-header.component.scss article-header.component.ts article-view/
   article-view.component.scss article-view.component.ts index.ts article-navigation/ api/
   article-navigation-api.service.ts model/ article-navigation.types.ts navigation-overview.types.ts
   ui/ article-drawer-navigation/ ui/ article-drawer-navigation.component.html
   article-drawer-navigation.component.scss article-drawer-navigation.component.ts index.ts index.ts
   course/ api/ course-api.service.ts model/ course.types.ts ui/ course-progress/
   course-progress.component.html course-progress.component.scss course-progress.component.ts
   index.ts lesson/ api/ lesson-api.service.ts ui/ lesson-card/ lesson-card.component.html
   lesson-card.component.scss lesson-card.component.ts lesson-header/ lesson-header.component.html
   lesson-header.component.scss lesson-header.component.ts index.ts user/ api/ user-api.service.ts
   model/ user.types.ts ui/ user-profile-hero/ user-profile-hero.component.html
   user-profile-hero.component.scss user-profile-hero.component.ts index.ts environments/
   environment.development.ts environment.ts features/ auth-by-oauth/ ui/ github-button/
   github-button.component.html github-button.component.scss github-button.component.ts
   google-button/ google-button.component.html google-button.component.scss
   google-button.component.ts auth-by-oauth.component.html auth-by-oauth.component.scss
   auth-by-oauth.component.ts index.ts create-category/ ui/ create-category.component.scss
   create-category.component.ts index.ts create-section/ ui/ create-section.component.scss
   create-section.component.ts index.ts lesson-navigation/ ui/
   lesson-navigation-controls.component.html lesson-navigation-controls.component.scss
   lesson-navigation-controls.component.ts index.ts manage-article/ model/
   article-blocks-form.factory.ts article-form.factory.ts article-form.types.ts ui/
   article-creation/ article-block-form-renderer/ article-block-form-renderer.component.ts
   article-code-block-form/ article-code-block-form.component.scss
   article-code-block-form.component.ts article-complexity-block-form/
   article-complexity-block-form.component.scss article-complexity-block-form.component.ts
   article-features-block-form/ article-features-block-form.component.scss
   article-features-block-form.component.ts article-image-block/
   article-image-block-form.component.scss article-image-block-form.component.ts
   article-note-block-form/ article-note-block-form.component.ts article-text-block-form/
   article-text-block-form.component.ts article-form.component.html article-form.component.scss
   article-form.component.ts article-form.registry.ts manage-article.component.ts index.ts
   mark-lesson-watched/ ui/ mark-lesson-watched.component.html mark-lesson-watched.component.ts
   index.ts pages/ account-overview-page/ account-overview-page.component.ts
   account-transactions-page/ account-transactions-page.component.ts articles-editor-page/
   article-editor-page.component.html article-editor-page.component.scss
   article-editor-page.component.ts index.ts course-page/ lib/ guards/ course.guard.ts model/
   course-page.store.ts ui/ course-page.component.html course-page.component.scss
   course-page.component.ts index.ts home-page/ ui/ home-page.component.html
   home-page.component.scss home-page.component.ts index.ts shared/ api/ api-paths.ts
   api.interceptor.ts base-api.service.ts config/ environment.config.ts routes.config.ts layouts/
   sidebar-layout/ index.ts sidebar-layout.component.html sidebar-layout.component.scss
   sidebar-layout.component.ts lib/ utils/ unique-id.ts ui/ accordion/ accordion.component.scss
   accordion.component.ts index.ts app-link/ app-link.component.scss app-link.component.ts index.ts
   app-logo/ app-logo.component.html app-logo.component.scss app-logo.component.ts index.ts badge/
   badge.component.scss badge.component.ts badge.types.ts index.ts button/ button.component.html
   button.component.scss button.component.ts index.ts checkbox/ checkbox.component.html
   checkbox.component.scss checkbox.component.ts index.ts circular-progress/
   circular-progress.component.html circular-progress.component.scss circular-progress.component.ts
   index.ts cover-image/ cover-image.component.html cover-image.component.scss
   cover-image.component.ts index.ts drawer/ drawer.component.html drawer.component.scss
   drawer.component.ts index.ts icon/ icon.component.scss icon.component.ts icon.service.ts
   icon.types.ts index.ts input/ index.ts input.component.html input.component.scss
   input.component.ts markdown-renderer/ index.ts markdown-renderer.component.html
   markdown-renderer.component.scss markdown-renderer.component.ts modal/ index.ts
   modal.component.html modal.component.scss modal.component.ts select/ index.ts
   select.component.html select.component.scss select.component.ts tags-input/ index.ts
   tags-input.component.html tags-input.component.scss tags-input.component.ts textarea/ index.ts
   textarea.component.html textarea.component.scss textarea.component.ts video-player/ index.ts
   video-player.component.html video-player.component.scss video-player.component.ts styles/
   _font-faces.scss _media.scss _reset.scss _tokens.scss widgets/ account-navigation/ ui/
   account-navigation.component.scss account-navigation.component.ts index.ts
   article-navigation-management/ ui/ article-navigation-management.component.html
   article-navigation-management.component.scss article-navigation-management.component.ts index.ts
   articles-drawer-sidebar/ ui/ articles-drawer-sidebar.component.html
   articles-drawer-sidebar.component.scss articles-drawer-sidebar.component.ts index.ts
   course-sidebar/ ui/ course-sidebar.component.html course-sidebar.component.scss
   course-sidebar.component.ts index.ts header/ ui/ header.component.html header.component.scss
   header.component.ts index.ts lesson-content/ ui/ lesson-content.component.html
   lesson-content.component.scss lesson-content.component.ts index.ts index.html index.scss index.ts
   .commitlintrc.json .editorconfig .gitignore .lintstagedrc.json .prettierrc .stylelintrc.json
   angular.json CHANGES.md eslint.config.ts package.json pnpm-workspace.yaml README-REFACTOR.md
   tsconfig.app.json tsconfig.json vercel.json </directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="leetcode/search/binary-search.ts">
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

// Время: O(log n) // Память: O(1) </file>

<file path="leetcode/search/linary-search.ts">
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

// Время: O(n) // Память: O(1) </file>

<file path="leetcode/structures/linked-list.ts">
class NodeInstance<T> {
	element: T;
	next: NodeInstance<T> | null;

    constructor(element: T) {
    	this.element = element;
    	this.next = null;
    }

}

class LinkedList<T = string> { head: NodeInstance<T | string>;

    constructor() {
    	this.head = new NodeInstance<T | string>('head');
    }

    find(item: T | string): NodeInstance<T | string> | null {
    	let currentNode: NodeInstance<T | string> | null = this.head;

    	while (currentNode !== null && currentNode.element !== item) {
    		currentNode = currentNode.next;
    	}

    	return currentNode;
    }

    insert(newElement: T, item: T | string): void {
    	const currentNode = this.find(item);

    	if (!currentNode) {
    		return;
    	}

    	const newNode = new NodeInstance<T | string>(newElement);
    	newNode.next = currentNode.next;
    	currentNode.next = newNode;
    }

    display(): void {
    	let currentNode: NodeInstance<T | string> | null = this.head;

    	while (currentNode && currentNode.next) {
    		console.log(currentNode.next.element);
    		currentNode = currentNode.next;
    	}
    }

}

const list = new LinkedList(); list.insert('1', 'head'); list.insert('2', '1'); list.insert('3',
'2'); list.display(); </file>

<file path="leetcode/1. Two Sum.ts">
// O(1) — константное время, не зависит от размера данных
// O(log n) — логарифмическая сложность, типична для бинарного поиска
// O(n) — линейная сложность, один проход по данным
// O(n log n) — типична для эффективных сортировок
// O(n^2) — вложенные циклы по одним и тем же данным

// https://leetcode.com/problems/two-sum/description

// Решение 1: const twoSum = (array: number[], target: number): number[] => { for (let p1 = 0; p1 <
array.length; ++p1) { for (let p2 = p1 + 1; p1 < array.length; ++p2) { if (array[p1] + array[p2] ===
target) { return [p1, p2]; } } }

    return [];

};

twoSum([1, 2, 3, 4, 5], 9);

// Время: O(n^2) // Память: O(1)

// Решение 2: const twoSum_2 = (array: number[], target: number): number[] => { const numsObj:
Record<number, number> = {};

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

// Время: O(n) // Память: O(n)

// Решение 3: const twoSum_3 = (array: number[], target: number): number[] => { const mapObj = new
Map();

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

// Время: O(n) // Память: O(n) </file>

<file path="leetcode/11. Container With Most Water.ts">
// https://leetcode.com/problems/container-with-most-water

// 1. Инициализировать необходимые переменные: maxArea // 2. Пройтись по массиву 1 итерация // 3.
Создать вложенный цикл проходиться по слудующим элементам + 1 // 4. Внутри вложенного цикла
вычислить высоту (currentHeight) чтобы вычилить минимальную высоту для того чтобы вода не была выше
границы через Max.min, ширину (width), и площадь (currentArea), формулу площади: S = H * W // 5.
Внутри вложенного цикла сравнить переменную через Math.max(maxArea, area)

// Решение 1: function maxArea(heights: number[]): number { let maxArea = 0; for (let p1 = 0; p1 <
heights.length; ++p1) { for (let p2 = p1 + 1; p2 < heights.length; ++p2) { const currentHeight =
Math.min(heights[p1], heights[p2]); const width = p2 - p1; const currentArea = currentHeight *
width;

    		maxArea = Math.max(maxArea, currentArea);
    	}
    }

    return maxArea;

}

// Время: O(n^2) // Память: O(1)

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];

maxArea(input);

// Решение 2:

// 1. Создать переменные maxArea, left, right // 2. создать цикл while пока right > left // 3.
Инициализировать прееменные currentHeight (высчитать минимальное значение двух текущих // элементов
высоты), и переменную width (высчитать right - left) // и переменную area (currentHeight * width)
// 4. Проверить текущую переменную maxArea: Math.max(maxArea, area) // 5. Поставить учловие чтобы
обновлять счётчики left и right (right > left) left++... // else right-- // 6. Возвратить переменную
maxArea

function maxArea_2(heights: number[]): number { let maxArea = 0; let left = 0; let right =
heights.length - 1;

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

// Время: O(n) // Память: O(1)

const input_2 = [1, 8, 6, 2, 5, 4, 8, 3, 7];

maxArea_2(input_2); </file>

<file path="leetcode/125. Valid Palindrome.ts">
function isPalindrome(s: string): boolean {
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let start = 0;
    let end = s.length - 1;

    while (start < end) {
    	if (s[start] !== s[end]) {
    		return false;
    	}

    	++start;
    	--end;
    }

    return true;

}

isPalindrome('abccba');

// Время: O(n) // Память: O(n) </file>

<file path="leetcode/217. Contains Duplicate.ts">
// 217. https://leetcode.com/problems/contains-duplicate/description/

// Решение 1: function containsDuplicate(nums: number[]): boolean { const duplicatesSet = new Set();

    for (const elem of nums) {
    	if (duplicatesSet.has(elem)) {
    		return true;
    	}
    	duplicatesSet.add(elem);
    }

    return false;

}

containsDuplicate([1, 2, 3, 4, 5, 5]);

// Время: O(n) // Память: O(n) </file>

<file path="leetcode/3. Longest Substring Without Repeating Characters.ts">
// Input: s = 'abcabcbb';
// Output: 3;

// Input: s = 'bbbbb'; // Output: 1;

// Решение 1: function longestSubstring(s: string): number { let maxLength = 0; for (let p1 = 0; p1
< s.length; ++p1) { const obj: Record<string, boolean> = {}; let longestLength = 0; for (let p2 =
p1; p2 < s.length; ++p2) { if (!obj[s[p2]]) { obj[s[p2]] = true; longestLength++;

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

// Время: O(n^2) // Память: O(m)

// Решение 2: // 1. Создание переменных макс длины, хранилище Set, левый указатель left // 2.
Инициализация цикла, внутри цикла - текущее значение в Set // 3. Вложенный цикл while где рекурсивно
проверяется текущего элемента цикла // (currentSymbol) // 4. После удаления текущего символа
элемента в цикле, добавляем его в конец // 5. Длина текущего окна рассчитывается как: right - left +
1

// Input: s = 'abcabcbb'; function longestSubstring_2(s: string): number { let longestLength = 0;
const seen = new Set(); let left = 0;

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

// Время: O(n) // Память: O(m)

const input_2 = 'abcab';

longestSubstring_2(input_2); </file>

<file path="leetcode/42. Trapping Rainwater.ts">
// https://leetcode.com/problems/trapping-rain-water

// Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // Output: 6;

// Решение 1: function trap(heights: number[]): number { let totalWater = 0;

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

// Время: O(n^2) // Память: O(1)

const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

trap(input);

// Решение 2: function trap_2(heights: number[]): number { let total = 0, left = 0, right =
heights.length - 1, maxLeft = 0, maxRight = 0;

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

// Время: O(n) // Память: O(1)

const input_2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

trap_2(input_2);

export {}; </file>

<file path="leetcode/680. Valid Palindrome II.ts">
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

const isAlmostPalindrom = function (s: string): boolean { let left = 0; let right = s.length - 1;

    while (left < right) {
    	if (s[left] !== s[right]) {
    		return validSubPal(s, left + 1, right) || validSubPal(s, left, right - 1);
    	}

    	++left;
    	--right;
    }

    return true;

};

isAlmostPalindrom('abccdba'); </file>

<file path="leetcode/844. Backspace Compare.ts">
// https://leetcode.com/problems/backspace-string-compare

// Input: s = "ab#c", t = "ad#c" // Output: true

// Input: s = "ab##", t = "c#d#" // Output: true

// Решение 1: function buildString(s: string): string[] { const array: string[] = [];

    for (const elem of s) {
    	if (elem !== '#') {
    		array.push(elem);
    	} else {
    		array.pop();
    	}
    }

    return array;

}

function backspaceCompare(s: string, t: string): boolean { const finalS: string[] = buildString(s);
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

// Время: O(n + m) // Память: O(n + m)

// Решение 2:

function backspaceCompare_2(s: string, t: string): boolean { let p1 = s.length - 1; let p2 =
t.length - 1;

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

// Время: O(n + m) // Память: O(1) </file>

<file path="leetcode/big-o.ts">
// O(1) — константное время, не зависит от размера данных
// O(log n) — логарифмическая сложность, типична для бинарного поиска
// O(n) — линейная сложность, один проход по данным
// O(n log n) — типична для эффективных сортировок
// O(n^2) — вложенные циклы по одним и тем же данным
</file>

<file path="public/fonts/geist-mono/.gitkeep">

</file>

<file path="public/fonts/geist-sans/.gitkeep">

</file>

<file path="public/fonts/README.md">
# Шрифты

Бинарные файлы `.woff2` не входят в дамп репозитория. Положите сюда:

- `public/fonts/geist-sans/Geist-Regular.woff2`
- `public/fonts/geist-sans/Geist-Medium.woff2`
- `public/fonts/geist-sans/Geist-Bold.woff2`
- `public/fonts/geist-mono/GeistMono-Regular.woff2`
- `public/fonts/geist-mono/GeistMono-Medium.woff2`

Подключение — в `src/styles/_font-faces.scss`. Без файлов приложение собирается и запускается, но в
консоли будут 404 на шрифтах. </file>

<file path="src/app/layouts/account-layout/account-layout.component.scss">
@use 'media' as m;

:host { display: flex; flex-direction: column; width: 100%; min-height: 100dvh; }

.account-layout { display: flex; flex-direction: column; flex-grow: 1; background-color:
var(--bg-main); color: var(--text-primary); transition: background-color var(--transition-base),
color var(--transition-base);

    &__header {
    	flex-shrink: 0;
    	width: 100%;
    	background-color: transparent;
    	border-bottom: none;
    }

    &__hero-container {
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	width: 100%;
    	max-width: var(--container-xxl);
    	margin: 0 auto;
    	padding: 0 var(--unit-8);

    	@include m.media-below('md') {
    		padding: 0 var(--unit-4);
    	}
    }

    &__main {
    	display: flex;
    	flex-direction: column;
    	flex-grow: 1;
    	padding-top: var(--unit-6);
    	padding-bottom: var(--unit-8);

    	@include m.media-below('md') {
    		padding-top: var(--unit-4);
    		padding-bottom: var(--unit-4);
    	}
    }

    &__container {
    	display: grid;
    	flex-grow: 1;
    	grid-template-columns: 18rem 1fr;
    	gap: var(--unit-8);
    	align-items: start;
    	width: 100%;
    	max-width: var(--container-xl);
    	margin: 0 auto;
    	padding-right: var(--unit-8);
    	padding-left: var(--unit-8);

    	@include m.media-below('md') {
    		display: flex;
    		flex-direction: column;
    		gap: 0;
    		align-items: stretch;
    		width: 100%;
    		padding-right: 0;
    		padding-left: 0;
    	}
    }

    &__sidebar {
    	position: sticky;
    	top: var(--unit-4);
    	z-index: var(--z-sticky);
    	height: calc(100dvh - var(--unit-8));
    	padding: 0;

    	@include m.media-below('md') {
    		position: static;
    		width: 100%;
    		height: auto;
    	}
    }

    &__content {
    	display: flex;
    	flex-direction: column;
    	flex-grow: 1;
    	min-width: 0;

    	@include m.media-below('md') {
    		align-items: stretch;
    		padding-right: var(--unit-4);
    		padding-left: var(--unit-4);
    	}
    }

} </file>

<file path="src/app/layouts/main-layout/main-layout.component.html">
<div class="app-layout">
	<div class="app-layout__header">
		<app-header />
	</div>

    <main class="app-layout__main">
    	<div class="app-layout__container">
    		<router-outlet />
    	</div>
    </main>

</div>
</file>

<file path="src/app/layouts/main-layout/main-layout.component.ts">
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '@widgets/header';

@Component({ selector: 'app-main-layout', standalone: true, templateUrl:
'./main-layout.component.html', styleUrl: './main-layout.component.scss', changeDetection:
ChangeDetectionStrategy.OnPush, imports: [HeaderComponent, RouterOutlet], }) export class
MainLayoutComponent {} </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-code/article-block-code.component.html">
<div class="code-snippet">
	<div class="code-snippet__header">
		<span class="code-snippet__filename">
			{{ data().filename || (data().language | lowercase) }}
		</span>
	</div>
	<pre
		class="code-snippet__body"
	><code [class]="'code-snippet__code language-' + data().language">{{ data().code }}</code></pre>
</div>
</file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-code/article-block-code.component.scss">
:host {
	display: block;
	width: 100%;
}

.code-snippet { background-color: var(--bg-code); border: 1px solid var(--border-light);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm); overflow: hidden;

    &__header {
    	display: flex;
    	align-items: center;
    	padding: var(--unit-2) var(--unit-4);
    	background-color: rgb(255 255 255 / 3%);
    	border-bottom: 1px solid rgb(226 232 240 / 10%);
    }

    &__filename {
    	font-family: var(--font-family-mono, monospace);
    	font-size: var(--font-size-xs);
    	font-weight: var(--font-weight-medium);
    	color: var(--text-muted);
    }

    &__body {
    	margin: 0;
    	padding: var(--unit-4);
    	background-color: transparent;
    	overflow-x: auto;
    }

    &__code {
    	font-family: var(--font-family-mono, monospace);
    	font-size: var(--font-size-sm);
    	line-height: var(--line-height-base);
    	color: var(--text-on-dark);
    }

} </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-code/article-block-code.component.ts">
import { LowerCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CodeBlockData } from '../../../../model/types/article.types';

@Component({ selector: 'app-article-block-code', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, imports: [LowerCasePipe], templateUrl:
'./article-block-code.component.html', styleUrl: './article-block-code.component.scss', }) export
class ArticleBlockCodeComponent { readonly data = input.required<CodeBlockData>(); } </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-complexity/article-block-complexity.component.html">
<div class="complexity-widget">
	<dl class="complexity-widget__grid">
		<div class="complexity-card">
			<dt class="complexity-card__label">Временная сложность</dt>
			<dd class="complexity-card__value">{{ data().time }}</dd>
		</div>
		<div class="complexity-card">
			<dt class="complexity-card__label">Пространственная сложность</dt>
			<dd class="complexity-card__value">{{ data().space }}</dd>
		</div>
	</dl>
	@if (data().description) {
		<p class="complexity-widget__description">{{ data().description }}</p>
	}
</div>
</file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-complexity/article-block-complexity.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.complexity-widget { display: flex; flex-direction: column; gap: var(--unit-4); padding:
var(--unit-4); background-color: var(--bg-card); border: 1px solid var(--border-light);
border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);

    @include m.media-above('md') {
    	padding: var(--unit-5);
    }

    &__grid {
    	display: grid;
    	grid-template-columns: 1fr;
    	gap: var(--unit-3);
    	margin: 0;

    	@include m.media-above('sm') {
    		grid-template-columns: repeat(2, 1fr);
    		gap: var(--unit-4);
    	}
    }

    &__description {
    	margin: 0;
    	font-size: var(--font-size-sm);
    	line-height: var(--line-height-base);
    	color: var(--text-secondary);
    }

}

.complexity-card { display: flex; flex-direction: column; gap: var(--unit-1); padding: var(--unit-3)
var(--unit-4); background-color: var(--bg-main); border: 1px solid var(--border-light);
border-radius: var(--radius-md);

    &__label {
    	font-size: var(--font-size-xs);
    	font-weight: var(--font-weight-bold);
    	color: var(--text-muted);
    	letter-spacing: 0.05em;
    	text-transform: uppercase;
    }

    &__value {
    	margin: 0;
    	font-family: var(--font-family-mono, monospace);
    	font-size: var(--font-size-lg);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-none);
    	color: var(--brand-primary);
    }

} </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-complexity/article-block-complexity.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ComplexityBlockData } from '../../../../model/types/article.types';

@Component({ selector: 'app-article-block-complexity', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './article-block-complexity.component.html', styleUrl:
'./article-block-complexity.component.scss', }) export class ArticleBlockComplexityComponent {
readonly data = input.required<ComplexityBlockData>(); } </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-features/article-block-features.component.html">
<div class="features-list">
	@if (data().sectionTitle) {
		<h3 class="features-list__title">{{ data().sectionTitle }}</h3>
	}
	<ul class="features-list__wrapper">
		@for (item of data().items; track item.title) {
			<li class="features-list__item">
				<strong class="keyword">{{ item.title }}</strong>
				<span class="text"> — {{ item.text }}</span>
			</li>
		}
	</ul>
</div>
</file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-features/article-block-features.component.scss">
:host {
	display: block;
	width: 100%;
}

.features-list { &__title { margin: 0 0 var(--unit-3); font-size: var(--font-size-lg); font-weight:
var(--font-weight-bold); color: var(--text-primary); }

    &__wrapper {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-3);
    	margin: 0;
    	padding-left: var(--unit-4);
    }

    &__item {
    	padding-left: var(--unit-1);
    	line-height: var(--line-height-relaxed);
    	list-style-type: '—';
    }

}

.keyword { font-weight: var(--font-weight-bold); color: var(--text-primary); }

.text { color: var(--text-secondary); } </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-features/article-block-features.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FeaturesBlockData } from '../../../../model/types/article.types';

@Component({ selector: 'app-article-block-features', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './article-block-features.component.html', styleUrl:
'./article-block-features.component.scss', }) export class ArticleBlockFeaturesComponent { readonly
data = input.required<FeaturesBlockData>(); } </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-image/article-block-image.component.html">
<figure class="content-figure">
	<app-cover-image [src]="data().url" [alt]="data().alt" [priority]="false" />
	@if (data().caption) {
		<figcaption class="caption">{{ data().caption }}</figcaption>
	}
</figure>
</file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-image/article-block-image.component.scss">
:host {
	display: block;
	width: 100%;
}

.content-figure { display: flex; flex-direction: column; gap: var(--unit-2); margin: 0; }

.caption { font-size: var(--font-size-sm); color: var(--text-secondary); text-align: center; }
</file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-image/article-block-image.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CoverImageComponent } from '@shared/ui/cover-image';

import { ImageBlockData } from '../../../../model/types/article.types';

@Component({ selector: 'app-article-block-image', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, imports: [CoverImageComponent], templateUrl:
'./article-block-image.component.html', styleUrl: './article-block-image.component.scss', }) export
class ArticleBlockImageComponent { readonly data = input.required<ImageBlockData>(); } </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-note/article-block-note.component.html">
<div class="callout-box" [attr.data-variant]="data().noteType">
	<div class="callout-box__icon" aria-hidden="true">
		@switch (data().noteType) {
			@case ("WARNING") {
				<app-icon [name]="'triangle-exclamation-fill'" />
			}
			@case ("ERROR") {
				<app-icon [name]="'circle-xmark-fill'" />
			}
			@default {
				<app-icon [name]="'circle-info-fill'" />
			}
		}
	</div>
	<div class="callout-box__content">{{ data().text }}</div>
</div>
</file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-note/article-block-note.component.scss">
:host {
	display: block;
	width: 100%;
	min-width: 0;
}

.callout-box { display: flex; gap: var(--unit-3); width: 100%; min-width: 0; padding: var(--unit-4);
border-radius: var(--radius-sm) var(--radius-md) var(--radius-md) var(--radius-sm); box-shadow:
var(--shadow-sm); border-left: var(--unit-1) solid var(--border-light);

    &[data-variant='INFO'] {
    	background-color: var(--status-success-bg);
    	color: var(--status-success);
    	border-left-color: var(--status-success);
    }

    &[data-variant='WARNING'] {
    	background-color: var(--status-warning-bg);
    	color: var(--status-warning);
    	border-left-color: var(--status-warning);
    }

    &[data-variant='ERROR'] {
    	background-color: var(--status-error-bg);
    	color: var(--status-error);
    	border-left-color: var(--status-error);
    }

    &__icon {
    	display: flex;
    	flex-shrink: 0;
    	align-items: center;
    	width: var(--font-size-xl);
    	height: var(--font-size-xl);
    }

    &__content {
    	flex-grow: 1;
    	min-width: 0;
    	font-size: var(--font-size-base);
    	line-height: var(--line-height-relaxed);
    	color: var(--text-primary);
    	word-break: word-break;
    	overflow-wrap: anywhere;
    }

} </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-note/article-block-note.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IconComponent } from '@shared/ui/icon';

import { NoteBlockData } from '../../../../model/types/article.types';

@Component({ selector: 'app-article-block-note', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './article-block-note.component.html', styleUrl:
'./article-block-note.component.scss', imports: [IconComponent], }) export class
ArticleBlockNoteComponent { readonly data = input.required<NoteBlockData>(); } </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-text/article-block-text.component.html">
<div class="text-block-content">
	@if (data().format === "MARKDOWN") {
		<app-markdown-renderer [rawMarkdown]="data().content" />
	} @else if (data().format === "HTML") {
		<div [innerHTML]="sanitizedHtml()"></div>
	} @else {
		<p class="error-text">Неизвестный формат текста</p>
	}
</div>
</file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-text/article-block-text.component.scss">
:host {
	display: block;
	width: 100%;
}

.text-block-content { font-size: var(--font-size-base); line-height: var(--line-height-relaxed);
color: var(--text-primary);

    ::ng-deep {
    	p {
    		margin-top: 0;
    		margin-bottom: var(--unit-4);

    		&:last-child {
    			margin-bottom: 0;
    		}
    	}

    	a {
    		color: var(--brand-primary);
    		transition: color var(--transition-fast);

    		&:hover {
    			color: var(--brand-hover);
    		}
    	}
    }

}

.error-text { margin: 0; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);
color: var(--status-error); } </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-text/article-block-text.component.ts">
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import DOMPurify from 'isomorphic-dompurify';

import { MarkdownRendererComponent } from '@shared/ui/markdown-renderer';

import { TextBlockData } from '../../../../model/types/article.types';

@Component({ selector: 'app-article-block-text', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, imports: [MarkdownRendererComponent], templateUrl:
'./article-block-text.component.html', styleUrl: './article-block-text.component.scss', }) export
class ArticleBlockTextComponent { readonly data = input.required<TextBlockData>();

    readonly sanitizedHtml = computed(() => {
    	const blockData = this.data();
    	if (blockData.format === 'HTML' && blockData.content) {
    		return DOMPurify.sanitize(blockData.content);
    	}
    	return '';
    });

} </file>

<file path="src/entities/article/ui/article-detalization/article-blocks/article-block-renderer.component.ts">
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ArticleContentBlock } from '../../../model/types/article.types'; import {
ARTICLE_BLOCK_REGISTRY } from './article-block-registry';

@Component({ selector: 'app-article-block-renderer', changeDetection:
ChangeDetectionStrategy.OnPush, standalone: true, imports: [NgComponentOutlet], styles:
` 		:host { 			display: block; 			width: 100%; 			min-width: 0; 		} 	`, template:
` 		@if (componentType(); as cmp) { 			<ng-container *ngComponentOutlet="cmp; inputs: { data: block().data }" /> 		} 	`,
}) export class ArticleBlockRendererComponent { readonly block =
input.required<ArticleContentBlock>(); readonly componentType = computed(() =>
ARTICLE_BLOCK_REGISTRY[this.block().type] ?? null); } </file>

<file path="src/entities/article/ui/article-detalization/article-content/article.component.html">
<section class="article-content">
	<div class="article-content__hero">
		@if (article().coverImage; as cover) {
			<app-cover-image [src]="cover.url" [alt]="cover.alt" [priority]="true" />
		} @else {
			<app-cover-image [src]="null" alt="Изображение по умолчанию" [priority]="true" />
		}
	</div>

    <article class="article-content__main">
    	<app-article-header [article]="article()" />

    	<hr class="article-content__divider" aria-hidden="true" />

    	<div class="article-content__blocks">
    		@for (block of article().blocks; track $index) {
    			<app-article-block-renderer [block]="block" />
    		}
    	</div>
    </article>

    <footer class="admin-panel"></footer>

</section>
</file>

<file path="src/entities/article/ui/article-detalization/article-content/article.component.scss">
:host {
	display: block;
	width: 100%;
	height: auto;
}

.article-content { display: flex; flex-direction: column; gap: var(--unit-6); width: 100%;

    &__hero {
    	display: flex;
    	flex-direction: column;
    	margin-top: calc(var(--unit-4) * -1);
    }

    &__main {
    	display: flex;
    	flex-direction: column;
    	width: 100%;
    	height: auto;
    }

    &__divider {
    	flex-shrink: 0;
    	height: 1px;
    	margin: var(--unit-8) 0;
    	background-color: var(--border-light);
    	border: none;
    }

    &__blocks {
    	display: flex;
    	flex-direction: column;
    	gap: var(--unit-6);
    	width: 100%;
    	height: auto;
    }

} </file>

<file path="src/entities/article/ui/article-detalization/article-content/article.component.ts">
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CoverImageComponent } from '@shared/ui/cover-image';

import { Article } from '../../../model/types/article.types'; import { ArticleBlockRendererComponent
} from '../article-blocks/article-block-renderer.component'; import { ArticleHeaderComponent } from
'../article-header/article-header.component';

@Component({ selector: 'app-article-content', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './article.component.html', styleUrl:
'./article.component.scss', imports: [CoverImageComponent, ArticleBlockRendererComponent,
ArticleHeaderComponent], }) export class ArticleComponent { readonly article =
input.required<Article>(); } </file>

<file path="src/entities/article/ui/article-detalization/article-header/article-header.component.html">
<header class="article-header">
	<div class="article-header__meta">
		@if (tags().length) {
			<div class="article-header__tags" aria-label="Теги статьи">
				@for (tag of tags(); track tag) {
					<app-badge variant="primary">{{ tag }}</app-badge>
				}
			</div>
		}

    	<div class="article-header__info">
    		<app-badge variant="outline" [attr.data-level]="levelData()">
    			{{ levelData() }}
    		</app-badge>

    		<span class="article-header__reading-time"> ~ {{ article().readingTimeMinutes }} мин </span>
    	</div>
    </div>

    <h1 class="article-header__title">{{ article().title }}</h1>
    <p class="article-header__lead">{{ article().leadText }}</p>

    @if (article().description) {
    	<section class="article-header__summary" aria-labelledby="article-summary-title">
    		<h2 id="article-summary-title" class="article-header__summary-label">Краткое содержание</h2>
    		<p class="article-header__summary-text">{{ article().description }}</p>
    	</section>
    }

</header>
</file>

<file path="src/entities/article/ui/article-detalization/article-header/article-header.component.scss">
@use 'media' as m;

:host { display: block; width: 100%; }

.article-header { display: flex; flex-direction: column;

    &__meta {
    	display: flex;
    	flex-wrap: wrap;
    	gap: var(--unit-4);
    	justify-content: space-between;
    	align-items: center;
    	margin-bottom: var(--unit-6);
    }

    &__tags {
    	display: flex;
    	flex-wrap: wrap;
    	gap: var(--unit-2);
    }

    &__info {
    	display: flex;
    	gap: var(--unit-3);
    	justify-content: space-between;
    	align-items: center;
    	width: 100%;
    }

    &__reading-time {
    	font-size: var(--font-size-sm);
    	color: var(--text-secondary);
    }

    &__title {
    	margin: 0 0 var(--unit-4);
    	font-size: var(--font-size-xxl);
    	font-weight: var(--font-weight-bold);
    	line-height: var(--line-height-tight);
    	color: var(--text-primary);
    	letter-spacing: -0.02em;

    	@include m.media-above('md') {
    		font-size: var(--font-size-xxxl);
    	}
    }

    &__lead {
    	margin: 0 0 var(--unit-6);
    	font-size: var(--font-size-lg);
    	line-height: var(--line-height-relaxed);
    	color: var(--text-secondary);
    }

    &__summary {
    	padding: var(--unit-4);
    	background-color: var(--bg-card);
    	border: 1px solid var(--border-light);
    	border-radius: var(--radius-md);
    	box-shadow: var(--shadow-sm);

    	&-label {
    		margin: 0 0 var(--unit-2);
    		font-size: var(--font-size-xs);
    		font-weight: var(--font-weight-bold);
    		color: var(--text-muted);
    		text-transform: uppercase;
    		letter-spacing: 0.05em;
    	}

    	&-text {
    		margin: 0;
    		font-size: var(--font-size-base);
    		line-height: var(--line-height-base);
    		color: var(--text-primary);
    	}
    }

} </file>

<file path="src/entities/article/ui/article-detalization/article-header/article-header.component.ts">
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { BadgeComponent } from '@shared/ui/badge';

import { Article } from '../../../model/types/article.types';

@Component({ selector: 'app-article-header', standalone: true, changeDetection:
ChangeDetectionStrategy.OnPush, templateUrl: './article-header.component.html', styleUrl:
'./article-header.component.scss', imports: [BadgeComponent], }) export class ArticleHeaderComponent
{ readonly article = input.required<Article>();

    readonly tags = computed(() => this.article().tags);
    readonly levelData = computed(() => this.article().level);

} </file>

<file path="src/entities/article/ui/article-view/article-view.component.scss">
:host {
	display: block;
	width: 100%;
}

.article-view__status { padding: var(--unit-6) 0; font-size: var(--font-size-base); color:
var(--text-secondary); text-align: center;

    &--error {
    	color: var(--status-error);
    }

} </file>

<file path="src/entities/article-navigation/model/article-navigation.types.ts">
export interface CreateSectionDto {
	title: string;
	orderIndex?: number;
}

export interface CreateCategoryDto { title: string; sectionId: string; orderIndex?: number; }
</file>

<file path="src/entities/article-navigation/model/navigation-overview.types.ts">
export type NavigationTag =
	'THEORY' | 'COMPONENT' | 'EXAMPLE' | 'ALGORITHM' | 'STRUCTURE' | 'ARCHITECTURE' | 'PATTERNS';

export interface NavigationArticle { id: string; title: string;
