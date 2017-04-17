
# cli-utils [![NPM version][npm-status-image]][npm:@njakob/cli-utils] [![Build Status][build-status-image]][travis] [![ESLint Config][eslint-config-image]][github:njakob/eslint-config]

> Collection of utils to build CLI Node based applications.

## Features

- Console reporter

## Installation

With NPM:

```
$ npm install @njakob/cli-utils
```

With Yarn:

```
$ yarn add @njakob/cli-utils
```

## Usage

### Console Reporter

```js
import { ConsoleReporter } from '@njakob/cli-utils';

const reporter = new ConsoleReporter();

reporter.log(reporter.parse`Something to ${reporter.styles.red`log`}`, 2);
reporter.success(reporter.parse`Something was a success`);
reporter.warning(reporter.parse`Something went not too good`);
reporter.error(reporter.parse`Something went totally wrong`);
```

## Related Projects

- [`rainbow`][github:njakob/rainbow]: String styling helpers inspired by Chalk.

## Licences

`njakob/cli-utils` is licensed under the [MIT License][licence].

[licence]: LICENSE
[github:njakob/rainbow]: https://github.com/njakob/rainbow
[github:njakob/eslint-config]: https://github.com/njakob/eslint-config
[npm:@njakob/cli-utils]: https://nodei.co/npm/@njakob/cli-utils
[travis]: https://travis-ci.org/njakob/cli-utils
[npm-status-image]: https://img.shields.io/npm/v/@njakob/cli-utils.svg
[build-status-image]: https://travis-ci.org/njakob/cli-utils.svg?branch=master
[eslint-config-image]: https://img.shields.io/badge/eslint_config-njakob-463fd4.svg
