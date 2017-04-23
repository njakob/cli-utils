
# cli-utils [![NPM version][badge:npm-status]][npm:@njakob/cli-utils] [![Build Status][badge:build-status]][travis] [![ESLint Config][badge:eslint-config]][github:njakob/eslint-config] [![Conventional Commits][badge:conventional-commits]][conventional-commits]

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
reporter.error(reporter.parse`${reporter.styles.red`Error`}: Something went wrong`);
reporter.success(reporter.parse`Something was a success`);
reporter.warning(reporter.parse`Something went not too good`);
reporter.failure(reporter.parse`Something went totally wrong`);
```

## Related Projects

- [`rainbow`][github:njakob/rainbow]: String styling helpers inspired by Chalk.

## Inspired by

- `ConsoleReporter` system used in [`yarn`][github:yarnpkg/yarn]

## Changelog

See [changelog][CHANGELOG].

## Licences

`njakob/cli-utils` is licensed under the [MIT License][licence].

[changelog]: CHANGELOG.md
[licence]: LICENSE
[github:njakob/rainbow]: https://github.com/njakob/rainbow
[github:njakob/eslint-config]: https://github.com/njakob/eslint-config
[github:yarnpkg/yarn]: https://github.com/yarnpkg/yarn
[npm:@njakob/cli-utils]: https://nodei.co/npm/@njakob/cli-utils
[travis]: https://travis-ci.org/njakob/cli-utils
[conventional-commits]: https://conventionalcommits.org
[badge:npm-status]: https://img.shields.io/npm/v/@njakob/cli-utils.svg
[badge:build-status]: https://travis-ci.org/njakob/cli-utils.svg?branch=master
[badge:eslint-config]: https://img.shields.io/badge/eslint_config-njakob-463fd4.svg
[badge:conventional-commits]: https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg
