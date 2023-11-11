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

  let prevIndentation = 0;
  let collectionScope = 0;
  let shouldEnterBlockStatement = false;
  let blockStatementScope = 0;

  const current = (): Token.Value => input[currentPosition];

  const newLine = () => {
    endLine++;
    endColumn = 0;
  };

  const push = () => {
    readPosition++;
    endColumn++;
  };
  const pushWithNewLine = () => {
    readPosition++;
    newLine();
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

  const stageBlockStatementEntry = () => (shouldEnterBlockStatement = true);
  const isBlockStatementEntryStaged = () => shouldEnterBlockStatement;
  const enterBlockStatement = () => {
    blockStatementScope++;
    shouldEnterBlockStatement = false;
  };
  const exitBlockStatement = () => (blockStatementScope = blockStatementScope > 0 ? blockStatementScope - 1 : 0);
  const isInBlockStatement = () => blockStatementScope > 0;

  const cacheIndentation = (nextIndentation: number) => (prevIndentation = nextIndentation);
  const compareCachedIndentationWith = (nextIndentation: number): Cursor.CurrentScope => {
    if (prevIndentation > nextIndentation) {
      return 'dedented';
    }

    if (prevIndentation < nextIndentation) {
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
    cacheIndentation,
    compareCachedIndentationWith,
    newLine,
    pushWithNewLine,
    enterCollection,
    exitCollection,
    isInCollection,
    stageBlockStatementEntry,
    isBlockStatementEntryStaged,
    enterBlockStatement,
    exitBlockStatement,
    isInBlockStatement,
    act<Return = void>(cb: Cursor.Action<Return>) {
      return cb({...this, act: this.act});
    },
  };
};
