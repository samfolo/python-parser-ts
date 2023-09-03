import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

import {handleDocString} from './docstring';

export const handleString: Cursor.Action<Token> = (cursor) => {
  const quoteType = String(cursor.current());
  const startPos = cursor.startPos();

  if (
    (cursor.current() === TOKENS.SINGLE_QUOTE || cursor.current() === TOKENS.DOUBLE_QUOTE) &&
    cursor.current() === cursor.peek()
  ) {
    if (cursor.peek() === cursor.peek(2)) {
      return cursor.act(handleDocString);
    }

    cursor.consume();
    return createToken('STRING', 'STRING', quoteType + quoteType, startPos, cursor.endPos());
  }

  cursor.consume();
  if (cursor.current() === TOKENS.ESCAPE) {
    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', quoteType + cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
  }

  while (cursor.peek() !== quoteType) {
    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', quoteType + cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
    if (cursor.current() === TOKENS.ESCAPE) {
      if (cursor.isEndOfFile()) {
        return createToken('ERRORTOKEN', 'ERRORTOKEN', quoteType + cursor.value(), startPos, cursor.endPos());
      }
      cursor.push();
    }
  }
  const value = cursor.value();
  cursor.consume();

  return createToken('STRING', 'STRING', quoteType + value + quoteType, startPos, cursor.endPos());
};
