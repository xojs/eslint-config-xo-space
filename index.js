import eslintConfigXo from 'eslint-config-xo';
import eslintConfigXoBrowser from 'eslint-config-xo/browser';

const spaceIndentRules = {
	'@stylistic/indent': [
		'error',
		2,
		{
			SwitchCase: 1,
		},
	],
};

export default function eslintConfigXoSpace({browser = false} = {}) {
	const [config] = browser ? eslintConfigXoBrowser : eslintConfigXo;

	return [
		{
			...config,
			rules: {
				...config.rules,
				...spaceIndentRules,
			},
		},
	];
}
