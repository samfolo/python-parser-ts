import {Token} from '../types';

import {Cursor} from './types';

export const createCursor = (input: string): Cursor => {
  let currentPosition = 0;
  let readPosition = 1;

  let startLine = 1;
  let startColumn = 0;

  let endLine = 1;
  let endColumn = 1;

  const current = (): Token.Value => input[currentPosition];
  const push = () => {
    readPosition++;
    endColumn++;
  };
  const peek = (offset: number = 1): Token.Value => input[readPosition + (offset - 1)];
  const peekBack = (offset: number = 1): Token.Value => input[readPosition - offset];
  const consume = () => {
    currentPosition = readPosition;
    startLine = endLine;
    startColumn = endColumn;
    push();
  };
  const value = (): string => input.slice(currentPosition, readPosition);
  const done = () => current() === undefined;
  const isEndOfFile = () => peek() === undefined;
  const startPos = (): Token.Position => ({line: startLine, column: startColumn});
  const endPos = (): Token.Position => ({line: endLine, column: endColumn});

  return {
    current,
    push,
    peek,
    peekBack,
    consume,
    value,
    done,
    isEndOfFile,
    startPos,
    endPos,
    act<Return = void>(cb: Cursor.Action<Return>) {
      return cb({...this, act: this.act});
    },
  };
};
