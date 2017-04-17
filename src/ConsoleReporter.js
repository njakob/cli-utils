/* @flow */

import type { StyleNode } from '@njakob/rainbow';
import { Rainbow, ansiStyleFormatter } from '@njakob/rainbow';
import type { VerboseLevel } from './types';
import Activity from './Activity';
import type { ReporterOptions } from './Reporter';
import Reporter from './Reporter';
import Spinner from './Spinner';

export default class ConsoleReporter extends Reporter {
  styles: Rainbow;

  constructor(options?: ReporterOptions) {
    super(options);
    this.styles = new Rainbow(ansiStyleFormatter());
  }

  parse(strings: Array<string>, ...values: Array<mixed>): StyleNode {
    return this.styles.parse(strings, ...values);
  }

  format(node: StyleNode): string {
    return this.styles.format(node).value;
  }

  log(message: StyleNode, verbose: VerboseLevel = 0) {
    if (this.verbose >= verbose) {
      this.stdout.write(this.format(this.parse`${message}\n`));
    }
  }

  error(message: StyleNode, verbose: VerboseLevel = 0) {
    if (this.verbose >= verbose) {
      this.stderr.write(this.format(this.parse`${message}\n`));
    }
  }

  info(message: StyleNode) {
    this.stdout.write(this.format(this.styles.dim`${message}\n`));
  }

  success(message: StyleNode) {
    this.stdout.write(this.format(this.parse`${message} ${this.styles.bold.green`✓`}\n`));
  }

  warning(message: StyleNode) {
    this.stdout.write(this.format(this.styles.bold.yellow`${message} !\n`));
  }

  failure(message: StyleNode) {
    this.stderr.write(this.format(this.styles.bold.red`${message} ×\n`));
  }

  header(message: StyleNode) {
    this.log(message, 1);
  }

  footer(message: StyleNode) {
    this.log(this.styles.dim`${message}`, 1);
  }

  activity(message: StyleNode): Activity {
    const spinner = new Spinner(this.stdout);
    spinner.start();
    spinner.setText(this.format(message));

    return new Activity(
      () => {
        spinner.stop();
      },
      (innerMessage?: StyleNode) => {
        if (innerMessage) {
          spinner.setText(this.format(innerMessage));
        }
      },
    );
  }
}
