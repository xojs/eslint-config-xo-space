# eslint-config-xo-space

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [XO](https://github.com/xojs/xo) with 2-space indent

This is for advanced users. [You probably want to use XO directly.](https://github.com/xojs/eslint-config-xo#use-the-xo-cli-instead)

**Use the [XO issue tracker](https://github.com/xojs/xo/issues) instead of this one.**

## Install

```sh
npm install --save-dev eslint-config-xo-space
```

## Usage

In your `eslint.config.js`:

```js
import eslintConfigXoSpace from 'eslint-config-xo-space';

export default [
	...eslintConfigXoSpace(),
];
```

If you're in the browser:

```js
import eslintConfigXoSpace from 'eslint-config-xo-space';

export default [
	...eslintConfigXoSpace({browser: true}),
];
```

## Related

- [eslint-config-xo](https://github.com/xojs/eslint-config-xo) - ESLint shareable config for XO
- [eslint-config-xo-react](https://github.com/xojs/eslint-config-xo-react) - ESLint shareable config for React to be used with the above
