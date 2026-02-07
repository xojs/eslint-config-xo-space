import test from 'ava';
import {ESLint} from 'eslint';
import eslintConfigXoSpace from '../index.js';

const hasRule = (errors, ruleId) => errors.some(error => error.ruleId === ruleId);

async function runEslint(string, config) {
	const eslint = new ESLint({
		overrideConfigFile: true,
		overrideConfig: config,
	});

	const [firstResult] = await eslint.lintText(string);

	return firstResult.messages;
}

test('main', async t => {
	const config = eslintConfigXoSpace();
	t.true(Array.isArray(config));

	const errors = await runEslint('\'use strict\';\nconsole.log("unicorn")\n', config);
	t.true(hasRule(errors, '@stylistic/quotes'), JSON.stringify(errors));
});

test('browser', async t => {
	const config = eslintConfigXoSpace({browser: true});
	t.true(Array.isArray(config));

	const errors = await runEslint('\'use strict\';\nprocess.exit();\n', config);
	t.true(hasRule(errors, 'no-undef'), JSON.stringify(errors));
});

test('space', async t => {
	const fixture = `
export function foo() {
\treturn true;
}
`.trim();

	for (const config of [eslintConfigXoSpace(), eslintConfigXoSpace({browser: true})]) {
		// eslint-disable-next-line no-await-in-loop
		const errors = await runEslint(fixture, config);
		t.true(hasRule(errors, '@stylistic/indent'), JSON.stringify(errors));
	}
});
