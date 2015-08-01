'use strict';
var conf = require('eslint-config-xo/esnext');
conf.rules.indent = [2, 2, {SwitchCase: 1}];
module.exports = conf;
