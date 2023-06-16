module.exports = {
	//prettier-ignore
	extends: [
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['react-hooks', 'react'],
	parserOptions: {ecmaFeatures: {jsx: true}},
	settings: {react: {version: 'detect'}},
	rules: {
		// REACT HOOKS
		// causes false positives. for example, component in reader
		// comment to check
		// 'react-hooks/rules-of-hooks': 'off',
		// Verify the list of the dependencies for Hooks like useEffect and similar
		// https://github.com/facebook/react/blob/1204c789776cb01fbaf3e9f032e7e2ba85a44137/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
		'react-hooks/exhaustive-deps': [
			'error',
			{additionalHooks: '(useSink|useLiveData|useObservable|useSideEffect)'},
		],
		// REACT
		// we use React.Fragment
		'react/jsx-fragments': ['warn', 'element'],
		// we always wrap prop value in {}
		'react/jsx-curly-brace-presence': ['warn', {props: 'always', children: 'ignore'}],
		// We don't need prop-type, because we use typescript
		'react/prop-types': 'off',
		// Prevent missing displayName in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
		'react/display-name': ['off', {ignoreTranspilerName: false}],
		// Specify whether double or single quotes should be used in JSX attributes
		// https://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['error', 'prefer-single'],
		// Enforce boolean attributes notation in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': ['error', 'never', {always: []}],
		// Validate closing bracket location in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		'react/jsx-closing-bracket-location': 'off',
		// eslint-plugin-react team finds 'hard' to check the type of what .map() is called on. as a result we have false positive reaction to option.map
		// https://github.com/yannickcr/eslint-plugin-react/issues/2487
		'react/jsx-key': 'off',
		'react/no-unescaped-entities': 'off',
		// false positive for function createElement
		'react/no-children-prop': 'off',
		// react v17 or higher does not need it
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',

		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'react',
						importNames: [
							'useState',
							'useReducer',
							'useRef',
							'useMemo',
							'useCallback',
							'useContext',
							'useEffect',
							'useLayoutEffect',
							'useImperativeHandle',
						],
						message: 'Please use hook from React namespace',
					},
				],
				patterns: [
					{group: ['@emotion/css', '@emotion/core'], message: 'Use @emotion/react instead'},
					{group: ['fp-ts/lib*'], message: 'Use fp-ts directly'},
				],
			},
		],
	},
};
