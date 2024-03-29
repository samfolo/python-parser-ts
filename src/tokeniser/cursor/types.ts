import {Token} from '../types';

export namespace Cursor {
  export type CurrentScope = 'indented' | 'dedented' | 'stable';
  export type CommentType = 'leading' | 'trailing' | 'undefined';
  export type Action<Return = void> = (cursor: Cursor) => Return;
  export type CompareIndentationResult = {scope: CurrentScope; depth: number};
}

export interface Cursor {
  current: () => Token.Value;
  push: () => void;
  peek: (offset?: number) => Token.Value;
  peekBack: (offset?: number) => Token.Value;
  consume: () => void;
  value: () => string;
  done: () => boolean;
  isStartOfFile: () => boolean;
  isEndOfFile: () => boolean;
  startPos: () => Token.Position;
  endPos: () => Token.Position;
  isStartOfLine: () => boolean;
  resetStartColumn: () => void;
  resetEndColumn: () => void;
  act: <Return = void>(action: Cursor.Action<Return>) => Return;
  pushIndentation: (nextIndentation: number) => void;
  compareLastIndentationWith: (nextIndentation: number) => Cursor.CompareIndentationResult;
  pushWithNewLine: () => void;
  newLine: () => void;
  enterCollection: () => void;
  exitCollection: () => void;
  isInCollection: () => boolean;
  isIndented: () => boolean;
  stageIndentation: () => void;
  unstageIndentation: () => void;
  isIndentationStaged: () => boolean;
  indent: () => void;
  dedent: () => void;
  markStartOfLogicalLine: () => void;
  unmarkStartOfLogicalLine: () => void;
  isStartOfLogicalLine: () => boolean;
  isOnBlankLine: () => boolean;
  markBlankLine: () => void;
  unmarkBlankLine: () => void;
  isInLineContinuation: () => boolean;
  markLineContinuation: () => void;
  unmarkLineContinuation: () => void;
  isInCommentType: (type: Cursor.CommentType) => boolean;
  enterComment: (type: Cursor.CommentType) => void;
  exitComment: () => void;
}
