/* @flow */

import * as readline from 'readline';
import type { Stdout } from './types';

export default function clearNthLine(stdout: Stdout, n: number) {
  if (n === 0) {
    readline.clearLine(stdout, 0);
    readline.cursorTo(stdout, 0);
  } else {
    readline.cursorTo(stdout, 0);
    readline.moveCursor(stdout, 0, -n);
    readline.clearLine(stdout, 0);
    readline.moveCursor(stdout, 0, n);
  }
}
