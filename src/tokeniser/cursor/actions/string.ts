import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

import {handleDocString} from './docstring';

export const handleString: Cursor.Action<Token> = (cursor) => {
  if (
    (cursor.current() === TOKENS.SINGLE_QUOTE || cursor.current() === TOKENS.DOUBLE_QUOTE) &&
    cursor.current() === cursor.peek()
  ) {
    if (cursor.peek() === cursor.peek(2)) {
      return cursor.act(handleDocString);
    }

    cursor.push();
    return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  while (
    cursor.peek() !== cursor.current() ||
    (cursor.peekBack() === TOKENS.BACKSLASH && cursor.peekBack(2) !== TOKENS.BACKSLASH)
  ) {
    cursor.push();

    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  cursor.push();

  return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
};
