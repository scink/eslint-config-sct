module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		// type Bar = () => string;
		// const foo = (): Bar => () => '';
		// This causes an error, but it should not. That's why this rule is off
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		// '@typescript-eslint/explicit-module-boundary-types': [
		// 	'error',
		// 	{
		// 		allowDirectConstAssertionInArrowFunctions: true,
		// 		allowHigherOrderFunctions: true,
		// 		allowTypedFunctionExpressions: true,
		// 	},
		// ],
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/array-type': ['error', {default: 'generic'}],
		// false positive for interfaces
		'@typescript-eslint/no-use-before-define': 'off',
		// '@typescript-eslint/no-use-before-define': [
		// 	'error',
		// 	{
		// 		functions: false,
		// 		classes: false,
		// 		typedefs: true,
		// 	},
		// ],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		// fix false positive on unused vars in types
		'@typescript-eslint/no-unused-vars': 'off',
		// '@typescript-eslint/no-unused-vars-experimental': ['warn', {ignoreArgsIfArgsAfterAreUsed: true}],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		// type Bar = () => string;
		// const foo = (): Bar => () => '';
		// This causes an error, but it should not. That's why this rule is off
		'@typescript-eslint/explicit-function-return-type': 'off',
		// '@typescript-eslint/explicit-function-return-type': [
		// 	'error',
		// 	{
		// 		allowHigherOrderFunctions: true,
		// 		allowDirectConstAssertionInArrowFunctions: true,
		// 	},
		// ],

		'no-restricted-syntax': ['error', {selector: 'TSEnumDeclaration', message: "Don't declare enums"}],
		'@typescript-eslint/naming-convention': [
			'warn',
			{selector: 'interface', format: ['PascalCase']},
			{selector: 'typeAlias', format: ['PascalCase']},
		],
	},
};
