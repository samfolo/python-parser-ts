import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

// Assumes tag is already covered; cursor.peek is set to first quote:
export const handleTaggedDocString: Cursor.Action<Token> = (cursor) => {
  const quoteType = cursor.peek();
  cursor.push();
  cursor.push();

  if (cursor.peek() === cursor.peek(2) && cursor.peek(2) === cursor.peek(3)) {
    cursor.push();
    cursor.push();
    cursor.push();

    return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  while (
    cursor.peek() !== quoteType ||
    cursor.peek(2) !== quoteType ||
    cursor.peek(3) !== quoteType ||
    (cursor.peekBack() === TOKENS.BACKSLASH && cursor.peekBack(2) !== TOKENS.BACKSLASH)
  ) {
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
