module.exports = {
	overrides: [
		{
			files: ['*.json'],
			parser: 'eslint-plugin-json-es',
			extends: 'plugin:eslint-plugin-json-es/recommended',
			rules: {
				'prettier/prettier': [
					'warn',
					{
						singleQuote: false,
						bracketSpacing: false,
						tabWidth: 2,
						useTabs: false,
						trailingComma: 'none',
						printWidth: 120,
					},
				],
			},
		},
	],
};
