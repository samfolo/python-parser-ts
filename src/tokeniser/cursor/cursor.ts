import {TOKENS} from '../tokens';
import {Token} from '../types';

import {Cursor} from './types';

export const createCursor = (input: string): Cursor => {
  let currentPosition = 0;
  let readPosition = 1;

  let startLine = 1;
  let startColumn = 0;

  let endLine = 1;
  let endColumn = 1;

  let prevScope = 0;
  let collectionScope = 0;

  console.log(input);

  const current = (): Token.Value => input[currentPosition];
  const push = () => {
    readPosition++;
    endColumn++;
  };
  const newLine = () => {
    endLine++;
    endColumn = 0;
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
  const enterCollection = () => collectionScope++;
  const exitCollection = () => (collectionScope = collectionScope > 0 ? collectionScope - 1 : 0);
  const isInCollection = () => collectionScope > 0;
  const cacheWhitespace = (whitespace: number) => (prevScope = whitespace);
  const compareCachedWhitespaceWith = (whitespace: number): Cursor.CurrentScope => {
    if (prevScope > whitespace) {
      return 'dedented';
    }

    if (prevScope < whitespace) {
      return 'indented';
    }

    return 'stable';
  };

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
    cacheWhitespace,
    compareCachedWhitespaceWith,
    newLine,
    enterCollection,
    exitCollection,
    isInCollection,
    act<Return = void>(cb: Cursor.Action<Return>) {
      return cb({...this, act: this.act});
    },
  };
};
