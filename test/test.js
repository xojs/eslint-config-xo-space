import test from 'ava';
import isPlainObj from 'is-plain-obj';
import {ESLint} from 'eslint';
import eslintConfigXoSpaceNode from '../index.js';
import eslintConfigXoSpaceBrowser from '../browser.js';

const hasRule = (errors, ruleId) => errors.some(error => error.ruleId === ruleId);

const fixture = `"use strict";\nconst x = true;\n\nif (x) {\n  console.log();\n}\n`;

async function runEslint(string, config) {
	const eslint = new ESLint({
		overrideConfigFile: true,
		overrideConfig: config,
	});

	const [firstResult] = await eslint.lintText(string);

	return firstResult.messages;
}

test('main', async t => {
	t.true(isPlainObj(eslintConfigXoSpaceNode));
	t.true(isPlainObj(eslintConfigXoSpaceNode.rules));

	const errors = await runEslint(fixture, eslintConfigXoSpaceNode);
	t.true(hasRule(errors, 'quotes'), JSON.stringify(errors));
});

test('browser', async t => {
	t.true(isPlainObj(eslintConfigXoSpaceBrowser));
	t.true(isPlainObj(eslintConfigXoSpaceBrowser.rules));

	const errors = await runEslint(fixture, eslintConfigXoSpaceBrowser);
	t.true(hasRule(errors, 'quotes'), JSON.stringify(errors));
});
