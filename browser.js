import eslintConfigXoBrowser from 'eslint-config-xo/browser';

export default {
	...eslintConfigXoBrowser,
	rules: {
		...eslintConfigXoBrowser.rules,
		indent: [
			'error',
			2,
			{
				SwitchCase: 1
			}
		]
	},
};
