module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'airbnb',
		'prettier/react',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	parser: 'babel-eslint',
	rules: {
		'react/prefer-stateless-function': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/destructuring-assignment': 0,
		'react/no-array-index-key': 0,
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'camelcase': 0,
		'react/prop-types': 0,
		'react/button-has-type': 0,
		'no-unused-vars': 1,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/interactive-supports-focus': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
		'no-console': 0,
	},
};
