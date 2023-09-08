import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

const isStillWithinDocstringValue: Cursor.Action<boolean> = (cursor) =>
  (cursor.peekBack() === TOKENS.BACKSLASH && cursor.peekBack(2) !== TOKENS.BACKSLASH) ||
  cursor.peek() !== cursor.current() ||
  cursor.peek(2) !== cursor.current() ||
  cursor.peek(3) !== cursor.current();

export const handleDocString: Cursor.Action<Token> = (cursor) => {
  cursor.push();
  cursor.push();

  if (cursor.current() === cursor.peek() && cursor.peek() === cursor.peek(2) && cursor.peek(2) === cursor.peek(3)) {
    cursor.push();
    cursor.push();
    cursor.push();

    return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  while (cursor.act(isStillWithinDocstringValue)) {
    cursor.push();

    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  cursor.push();
  cursor.push();
  cursor.push();

  return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
};
