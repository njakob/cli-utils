/* @flow */

import type { Stdout } from './types';
import clearNthLine from './clearNthLine';
import writeNthLine from './writeNthLine';

const spinner = '⣾⣽⣻⢿⡿⣟⣯⣷';

export default class Spinner {
  stdout: Stdout;
  current: number;
  delay: number;
  lineNumber: number;
  chars: Array<string>;
  id: ?number;
  text: string;

  constructor(
    stdout: Stdout = process.stderr,
    lineNumber?: number = 0
  ) {
    this.current = 0;
    this.stdout = stdout;
    this.delay = 60;
    this.chars = spinner.split('');
    this.id = null;
    this.lineNumber = lineNumber;
    this.text = '';
  }

  setText(text: string) {
    this.text = text;
  }

  start() {
    this.current = 0;
    this.render();
  }

  getStdoutColumns(): number {
    return typeof this.stdout.columns === 'number'
      ? this.stdout.columns
      : 100;
  }

  stop() {
    if (this.id) {
      clearTimeout(this.id);
      this.id = null;
    }

    clearNthLine(this.stdout, this.lineNumber);
  }

  render() {
    if (this.id) {
      clearTimeout(this.id);
    }

    const value = `${this.chars[this.current]} ${this.text}`.slice(0, this.getStdoutColumns());

    writeNthLine(this.stdout, this.lineNumber, value);

    this.current = (this.current + 1) % this.chars.length;
    this.id = setTimeout(() => this.render(), this.delay);
  }
}
