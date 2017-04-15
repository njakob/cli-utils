/* @flow*/

import type { StyleNode } from '@njakob/rainbow';

export type TickHandler = (message?: StyleNode) => void;
export type CompleteHandler = () => void;

export default class Activity {
  onComplete: CompleteHandler;
  onTick: ?TickHandler;

  constructor(onComplete: CompleteHandler, onTick?: TickHandler) {
    this.onTick = onTick;
    this.onComplete = onComplete;
  }

  tick(message?: StyleNode) {
    if (this.onTick) {
      this.onTick(message);
    }
  }

  complete() {
    this.onComplete();
  }
}
