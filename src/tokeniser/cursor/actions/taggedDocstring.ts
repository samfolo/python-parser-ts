import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

// Assumes tag is already covered; cursor.peek is set to first quote:
export const handleTaggedDocString: Cursor.Action<Token> = (cursor) => {
  const quoteType = cursor.peek();
  cursor.push();
  cursor.push();

  if (cursor.peek() === quoteType && cursor.peek(2) === quoteType && cursor.peek(3) === quoteType) {
    cursor.push();
    cursor.push();
    cursor.push();

    return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  let escaped = false;
  while (cursor.peek() !== quoteType || cursor.peek(2) !== quoteType || cursor.peek(3) !== quoteType || escaped) {
    escaped = cursor.peek() === TOKENS.BACKSLASH && !escaped;
    if (cursor.peek() === TOKENS.NEWLINE) {
      cursor.newLine();
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
