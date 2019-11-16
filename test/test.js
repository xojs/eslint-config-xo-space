import test from 'ava';
import isPlainObj from 'is-plain-obj';
import eslint from 'eslint';
import path from 'path';

const fixture = `'use strict';\nconst x = true;\n\nif (x) {\n  console.log();\n}\n`;

function runEslint(str, conf) {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: path.join(__dirname, conf)
	});

	return linter.executeOnText(str).results[0].messages;
}

test('main', t => {
	const conf = require('../');
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));
	t.is(runEslint(fixture, '../index.js').length, 0);
});

test('browser', t => {
	const conf = require('../browser');
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));
	t.is(runEslint(fixture, '../browser.js').length, 0);
});

test('esnext', t => {
	const conf = require('../esnext');
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));

	const errors = runEslint('class Foo {}\n', '../esnext.js');
	t.is(errors[0].ruleId, 'no-unused-vars');
});
