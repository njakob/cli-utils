/* @flow */

import type { Writable, Readable } from 'stream';
import type { WriteStream, ReadStream } from 'tty';

export type Stdout = Writable | WriteStream;
export type Stdin = Readable | ReadStream;

export type VerboseLevel = 0 | 1 | 2 | 3;
