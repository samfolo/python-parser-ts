import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleDocString: Cursor.Action<Token> = (cursor) => {
  cursor.push();
  cursor.push();

  if (cursor.current() === cursor.peek() && cursor.peek() === cursor.peek(2) && cursor.peek(2) === cursor.peek(3)) {
    cursor.push();
    cursor.push();
    cursor.push();

    return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  let escaped = false;
  while (
    cursor.peek() !== cursor.current() ||
    cursor.peek(2) !== cursor.current() ||
    cursor.peek(3) !== cursor.current() ||
    escaped
  ) {
    escaped = cursor.peek() === TOKENS.BACKSLASH && !escaped;
    if (cursor.peek() === TOKENS.NEWLINE) {
      cursor.pushWithNewLine();
    } else {
      cursor.push();
    }

    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  cursor.push();
  cursor.push();
  cursor.push();

  return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
};
