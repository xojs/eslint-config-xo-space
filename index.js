import eslintConfigXo from 'eslint-config-xo';

export default {
	...eslintConfigXo,
	rules: {
		...eslintConfigXo.rules,
		indent: [
			'error',
			2,
			{
				SwitchCase: 1
			}
		]
	},
};
