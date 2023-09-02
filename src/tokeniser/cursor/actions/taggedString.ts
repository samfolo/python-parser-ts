import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

import {handleTaggedDocString} from './taggedDocstring';

export const handleTaggedString: Cursor.Action<Token> = (cursor) => {
  const startPos = cursor.startPos();
  const tag = String(cursor.current());
  const quoteType = String(cursor.peek());

  if (
    (cursor.peek() === TOKENS.SINGLE_QUOTE || cursor.peek() === TOKENS.DOUBLE_QUOTE) &&
    cursor.peek() === cursor.peek(2)
  ) {
    if (cursor.peek(2) === cursor.peek(3)) {
      return cursor.act(handleTaggedDocString);
    }

    const token = createToken('STRING', tag + quoteType + quoteType, startPos, cursor.endPos());
    cursor.consume();
    return token;
  }

  cursor.consume();
  cursor.consume();
  if (cursor.current() === TOKENS.ESCAPE) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', tag + quoteType + cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
  }

  while (cursor.peek() !== quoteType) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', tag + quoteType + cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
    if (cursor.current() === TOKENS.ESCAPE) {
      if (cursor.isEndOfFile()) {
        return createToken('INVALID', tag + quoteType + cursor.value(), startPos, cursor.endPos());
      }
      cursor.push();
    }
  }
  const value = cursor.value();
  cursor.consume();

  return createToken('STRING', tag + quoteType + value + quoteType, startPos, cursor.endPos());
};
