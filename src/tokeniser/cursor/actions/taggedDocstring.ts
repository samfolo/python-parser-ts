import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

const isStillWithinDocstringValue =
  (quoteType: Token.Value): Cursor.Action<boolean> =>
  (cursor) =>
    (cursor.peekBack(2) !== TOKENS.ESCAPE && cursor.peekBack() === TOKENS.ESCAPE && cursor.peek() === quoteType) ||
    cursor.peek() !== quoteType ||
    cursor.peek(2) !== quoteType ||
    cursor.peek(3) !== quoteType;

export const handleTaggedDocString: Cursor.Action<Token> = (cursor) => {
  const startPos = cursor.startPos();
  const tag = String(cursor.current());
  cursor.consume();

  const quoteType = String(cursor.current());
  const tripleQuote = quoteType.repeat(3);
  cursor.consume();
  cursor.consume();
  cursor.consume();

  if (cursor.current() === quoteType && cursor.current() === cursor.peek() && cursor.peek() === cursor.peek(2)) {
    cursor.consume();
    cursor.consume();

    return createToken('STRING', tag + tripleQuote + tripleQuote, startPos, cursor.endPos());
  }

  if (cursor.current() === TOKENS.ESCAPE) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', tag + tripleQuote + cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
  }

  while (cursor.act(isStillWithinDocstringValue(quoteType))) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', tag + tripleQuote + cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
    if (cursor.peek() === TOKENS.ESCAPE) {
      cursor.push();
      if (cursor.isEndOfFile()) {
        return createToken('INVALID', tag + tripleQuote + cursor.value(), startPos, cursor.endPos());
      }

      if (cursor.peek() === quoteType) {
        cursor.push();
        if (cursor.isEndOfFile()) {
          return createToken('INVALID', tag + tripleQuote + cursor.value(), startPos, cursor.endPos());
        }
      }
    }
  }

  const value = cursor.value();

  cursor.consume();
  cursor.consume();
  cursor.consume();

  return createToken('STRING', tag + tripleQuote + value + tripleQuote, startPos, cursor.endPos());
};
