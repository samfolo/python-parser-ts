import {Token} from '../types';

import {Cursor} from './types';

export const createCursor = (input: string): Cursor => {
  let currentPosition = 0;
  let readPosition = 1;

  let startLine = 1;
  let startColumn = 0;

  let endLine = 1;
  let endColumn = 1;

  let indented = false;
  let shouldIndent = false;
  const indentationStack: number[] = [];

  let collectionScope = 0;

  let startOfLogicalLine = false;
  let inLineContinuation = false;
  let onBlankLine = false;

  let commentType: Cursor.CommentType = 'undefined';

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
  const isStartOfFile = () => currentPosition === 0;
  const isEndOfFile = () => peek() === undefined;

  const startPos = (): Token.Position => ({line: startLine, column: startColumn});
  const endPos = (): Token.Position => ({line: endLine, column: endColumn});
  const isStartOfLine = () => startColumn === 0;

  const enterCollection = () => collectionScope++;
  const exitCollection = () => (collectionScope = collectionScope > 0 ? collectionScope - 1 : 0);
  const isInCollection = () => collectionScope > 0;

  const stageIndentation = () => (shouldIndent = true);
  const unstageIndentation = () => (shouldIndent = false);
  const isIndentationStaged = () => shouldIndent;

  const isIndented = (targetIndentation: number = 0) => indented && (indentationStack.at(-1) ?? 0) >= targetIndentation;
  const indent = () => {
    indented = true;
    unstageIndentation();
  };
  const dedent = () => {
    indentationStack.pop();
    indented = indentationStack.length > 0;
  };

  const pushIndentation = (nextIndentation: number) => indentationStack.push(nextIndentation);
  const compareLastIndentationWith = (nextIndentation: number): Cursor.CompareIndentationResult => {
    const prevIndentation = indentationStack.at(-1) ?? 0;

    if (prevIndentation > nextIndentation) {
      return {scope: 'dedented', depth: prevIndentation - nextIndentation};
    }

    if (prevIndentation < nextIndentation) {
      return {scope: 'indented', depth: nextIndentation - prevIndentation};
    }

    return {scope: 'stable', depth: 0};
  };

  const isStartOfLogicalLine = () => startOfLogicalLine;
  const markStartOfLogicalLine = () => (startOfLogicalLine = true);
  const unmarkStartOfLogicalLine = () => (startOfLogicalLine = false);

  const isOnBlankLine = () => onBlankLine;
  const markBlankLine = () => (onBlankLine = true);
  const unmarkBlankLine = () => (onBlankLine = false);

  const isInLineContinuation = () => inLineContinuation;
  const markLineContinuation = () => (inLineContinuation = true);
  const unmarkLineContinuation = () => (inLineContinuation = false);

  const isInCommentType = (type: Cursor.CommentType) => commentType === type;
  const enterComment = (type: Cursor.CommentType) => (commentType = type);
  const exitComment = () => (commentType = 'undefined');

  const resetStartColumn = () => (startColumn = 0);
  const resetEndColumn = () => (endColumn = 0);

  return {
    current,
    push,
    peek,
    peekBack,
    consume,
    value,
    done,
    isStartOfFile,
    isEndOfFile,
    startPos,
    endPos,
    isStartOfLine,
    pushIndentation,
    compareLastIndentationWith,
    newLine,
    pushWithNewLine,
    enterCollection,
    exitCollection,
    isInCollection,
    stageIndentation,
    unstageIndentation,
    isIndentationStaged,
    indent,
    dedent,
    isIndented,
    isStartOfLogicalLine,
    markStartOfLogicalLine,
    unmarkStartOfLogicalLine,
    isOnBlankLine,
    markBlankLine,
    unmarkBlankLine,
    isInLineContinuation,
    markLineContinuation,
    unmarkLineContinuation,
    isInCommentType,
    enterComment,
    exitComment,
    resetStartColumn,
    resetEndColumn,
    act<Return = void>(cb: Cursor.Action<Return>) {
      return cb({...this, act: this.act});
    },
  };
};
