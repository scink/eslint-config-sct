module.exports = {
	plugins: ['prettier'],
	extends: ['plugin:prettier/recommended', 'prettier'],
	rules: {
		'arrow-body-style': ['warn', 'as-needed'],
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				bracketSpacing: false,
				tabWidth: 4,
				useTabs: true,
				trailingComma: 'all',
				arrowParens: 'avoid',
				printWidth: 120,
			},
		],
		'no-irregular-whitespace': 'off',
		'no-duplicate-imports': ['error', {includeExports: true}],
		'no-restricted-globals': ['error', 'name', 'toString', 'pending', 'Promise'],
		'prefer-template': 'error',
		// covered by typescript.ts
		'no-unused-vars': 'off',
		'object-curly-spacing': ['error', 'never'],
		'object-shorthand': 'warn',
		quotes: ['warn', 'single', {avoidEscape: true}],
		'prefer-arrow-callback': 'error',
		// automatic imports sort doesn't work
		// 'sort-imports': 'error',
	},
};
