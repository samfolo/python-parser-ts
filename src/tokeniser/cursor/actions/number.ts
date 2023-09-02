import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isDigit} from '../utils';

export const handleNumber: Cursor.Action<Token> = (cursor) => {
  while (isDigit(cursor.peek())) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', cursor.value(), cursor.startPos(), cursor.endPos());
    }
    cursor.push();
  }

  if (cursor.peek() === TOKENS.DOT) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', cursor.value(), cursor.startPos(), cursor.endPos());
    }
    cursor.push();

    while (isDigit(cursor.peek())) {
      if (cursor.isEndOfFile()) {
        return createToken('INVALID', cursor.value(), cursor.startPos(), cursor.endPos());
      }
      cursor.push();
    }

    return createToken('FLOAT', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  return createToken('INTEGER', cursor.value(), cursor.startPos(), cursor.endPos());
};
