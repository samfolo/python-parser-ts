import {Token} from '../types';

export namespace Cursor {
  export type CurrentScope = 'indented' | 'dedented' | 'stable';
  export type Action<Return = void> = (cursor: Cursor) => Return;
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
  cacheScope: (newScope: number) => void;
  currentScope: (newScope: number) => Cursor.CurrentScope;
}
