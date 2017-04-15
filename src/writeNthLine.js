/* @flow */

import * as readline from 'readline';
import type { Stdout } from './types';

export default function writeNthLine(stdout: Stdout, n: number, text: string) {
  if (n === 0) {
    readline.cursorTo(stdout, 0);
    stdout.write(text);
    readline.clearLine(stdout, 1);
  } else {
    readline.cursorTo(stdout, 0);
    readline.moveCursor(stdout, 0, -n);
    stdout.write(text);
    readline.clearLine(stdout, 1);
    readline.cursorTo(stdout, 0);
    readline.moveCursor(stdout, 0, n);
  }
}
