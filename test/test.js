import test from 'ava';
import isPlainObj from 'is-plain-obj';
import {ESLint} from 'eslint';

const hasRule = (errors, ruleId) => errors.some(error => error.ruleId === ruleId);

const fixture = `"use strict";\nconst x = true;\n\nif (x) {\n  console.log();\n}\n`;

async function runEslint(string, config) {
	const eslint = new ESLint({
		useEslintrc: false,
		overrideConfig: config,
	});

	const [firstResult] = await eslint.lintText(string);

	return firstResult.messages;
}

test('main', async t => {
	const config = require('../index.js');

	t.true(isPlainObj(config));
	t.true(isPlainObj(config.rules));

	const errors = await runEslint(fixture, config);
	t.true(hasRule(errors, 'quotes'), JSON.stringify(errors));
});

test('browser', async t => {
	const config = require('../browser.js');

	t.true(isPlainObj(config));
	t.true(isPlainObj(config.rules));

	const errors = await runEslint(fixture, config);
	t.true(hasRule(errors, 'quotes'), JSON.stringify(errors));
});
