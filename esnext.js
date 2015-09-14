'use strict';
var deepAssign = require('deep-assign');
var conf = require('eslint-config-xo/esnext');
conf = deepAssign({}, conf);
conf.rules.indent = [2, 2, {SwitchCase: 1}];
module.exports = conf;
