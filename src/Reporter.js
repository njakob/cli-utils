/* @flow */

import type { StyleNode } from '@njakob/rainbow';
import type { Stdin, Stdout, VerboseLevel } from './types';
import type Activity from './Activity';

export type ReporterOptions = {
  stdin?: Stdin;
  stderr?: Stdout;
  stdout?: Stdout;
  verbose?: VerboseLevel;
};

export default class Reporter {
  isTTY: boolean;
  stdin: Stdin;
  stdout: Stdout;
  stderr: Stdout;
  verbose: VerboseLevel;
  startTime: number;

  constructor({
    verbose = 0,
    // $FlowFixMe
    stdin = process.stdin,
    // $FlowFixMe
    stderr = process.stderr,
    // $FlowFixMe
    stdout = process.stdout,
  }: ReporterOptions = {}) {
    this.stdin = stdin;
    this.stderr = stderr;
    this.stdout = stdout;
    this.verbose = verbose;

    // $FlowFixMe
    this.isTTY = !!this.stdout.isTTY;

    this.startTime = Date.now();
  }

  // eslint-disable-next-line no-unused-vars
  parse(strings: Array<string>, ...values: Array<mixed>): StyleNode {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line no-unused-vars
  header(message: StyleNode) {}

  // eslint-disable-next-line no-unused-vars
  footer(message: StyleNode) {}

  // eslint-disable-next-line no-unused-vars
  log(message: StyleNode, verbose: VerboseLevel = 0) {}

  // eslint-disable-next-line no-unused-vars
  error(message: StyleNode) {}

  // eslint-disable-next-line no-unused-vars
  info(message: StyleNode) {}

  // eslint-disable-next-line no-unused-vars
  warning(message: StyleNode) {}

  // eslint-disable-next-line no-unused-vars
  success(message: StyleNode) {}

  // eslint-disable-next-line no-unused-vars
  activity(message: StyleNode): Activity {
    throw new Error('Not implemented');
  }
}
