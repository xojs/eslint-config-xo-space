# eslint-config-xo-space

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [XO](https://github.com/xojs/xo) with 2-space indent

> [!IMPORTANT]
> This config has been merged into [`eslint-config-xo`](https://github.com/xojs/eslint-config-xo).

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
