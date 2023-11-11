import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleWhitespace: Cursor.Action<Token | null> = (cursor) => {
  let nextScope = 0;

  while (cursor.peek() === TOKENS.WHITESPACE) {
    cursor.push();
    nextScope++;

    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  cursor.cacheWhitespace(nextScope);

  return null;
};
