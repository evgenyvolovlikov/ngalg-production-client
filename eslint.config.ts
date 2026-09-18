import fsdPlugin from '@conarti/eslint-plugin-feature-sliced';
import eslint from '@eslint/js';
import angular from 'angular-eslint';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		files: ['**/*.ts'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
		],
		processor: angular.processInlineTemplates as any,
		rules: {
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'app',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: ['element', 'attribute'],
					prefix: 'app',
					style: 'kebab-case',
				},
			],
			'@angular-eslint/prefer-standalone': 'error',
			'@angular-eslint/component-class-suffix': 'error',
			'@angular-eslint/directive-class-suffix': 'error',
			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
					allowHigherOrderFunctions: true,
					allowDirectConstAssertionInArrowFunctions: true,
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
		},
	},
	// Интегрируем FSD-плагин как отдельный Flat Config объект.
	// Вызов функции без параметров инициализирует встроенную Flat-конфигурацию плагина.
	{
		files: ['**/*.ts'],
		...fsdPlugin(),
		rules: {
			// Переопределяем префиксы правил, так как плагин сам регистрирует свое имя
			'@conarti/feature-sliced/layers-slices': ['error', { allowTypeImports: true }],
			'@conarti/feature-sliced/absolute-relative': 'error',
			'@conarti/feature-sliced/public-api': 'error',
		},
	},
	{
		files: ['**/*.html'],
		extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
		rules: {
			'@angular-eslint/template/no-negated-async': 'error',
			'@angular-eslint/template/prefer-control-flow': 'error',
		},
	},
);
