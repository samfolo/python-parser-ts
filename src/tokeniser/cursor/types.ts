import {Token} from '../types';

export namespace Cursor {
  export type CurrentScope = 'indented' | 'dedented' | 'stable';
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
  isEndOfFile: () => boolean;
  startPos: () => Token.Position;
  endPos: () => Token.Position;
  act: <Return = void>(action: Cursor.Action<Return>) => Return;
  pushIndentation: (nextIndentation: number) => void;
  compareLastIndentationWith: (nextIndentation: number) => Cursor.CompareIndentationResult;
  pushWithNewLine: () => void;
  newLine: () => void;
  enterCollection: () => void;
  exitCollection: () => void;
  isInCollection: () => boolean;
  isInBlockStatement: () => boolean;
  stageBlockStatementEntry: () => void;
  isBlockStatementEntryStaged: () => boolean;
  enterBlockStatement: () => void;
  exitBlockStatement: () => void;
}
