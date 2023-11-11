import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

import {handleTaggedDocString} from './taggedDocstring';

// Assumes tag is already covered; cursor.peek is set to first quote:
export const handleTaggedString: Cursor.Action<Token> = (cursor) => {
  const quoteType = cursor.peek();
  cursor.push();

  if (cursor.peek() === quoteType) {
    if (cursor.peek() === cursor.peek(2)) {
      return cursor.act(handleTaggedDocString);
    }

    cursor.push();
    return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  let escaped = false;
  while (cursor.peek() !== quoteType || escaped) {
    escaped = cursor.peek() === TOKENS.BACKSLASH && !escaped;
    cursor.push();

    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  cursor.push();

  return createToken('STRING', 'STRING', cursor.value(), cursor.startPos(), cursor.endPos());
};
