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

  format(node: StyleNode): string {
    return this.styles.format(node).value;
  }

  header(message: StyleNode) {
    this.log(message, 1);
  }

  footer(message: StyleNode) {
    this.log(this.styles.dim`${message}`, 1);
  }

  log(message: StyleNode, verbose: VerboseLevel = 0) {
    if (this.verbose >= verbose) {
      this.stdout.write(this.format(this.styles.parse`${message}\n`));
    }
  }

  error(message: StyleNode) {
    this.stderr.write(this.format(this.styles.parse`${message} ${this.styles.bold.red`×`}\n`));
  }

  info(message: StyleNode) {
    this.stdout.write(this.format(this.styles.parse`${message}\n`));
  }

  warning(message: StyleNode) {
    this.stdout.write(this.format(this.styles.parse`${message} ${this.styles.bold.yellow`!`}\n`));
  }

  success(message: StyleNode) {
    this.stdout.write(this.format(this.styles.parse`${message} ${this.styles.bold.green`✓`}\n`));
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
