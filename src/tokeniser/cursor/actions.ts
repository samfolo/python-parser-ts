import {createToken, TOKENS} from '../tokens';
import {Token} from '../types';

import {Cursor} from './types';
import {isDigit, isLetter} from './utils';

export const handleIdent: Cursor.Action<Token> = (cursor) => {
  while (isLetter(cursor.peek())) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', cursor.value(), cursor.startPos(), cursor.endPos());
    }
    cursor.push();
  }

  return createToken('IDENT', cursor.value(), cursor.startPos(), cursor.endPos());
};

export const handleString: Cursor.Action<Token> = (cursor) => {
  const quoteType = cursor.current();
  const startPos = cursor.startPos();

  if (
    (cursor.current() === TOKENS.SINGLE_QUOTE || cursor.current() === TOKENS.DOUBLE_QUOTE) &&
    cursor.current() === cursor.peek()
  ) {
    if (cursor.peek() === cursor.peek(2)) {
      return cursor.act(handleDocString);
    }

    return createToken('STRING', '', startPos, cursor.startPos());
  }

  cursor.consume();
  if (cursor.current() === TOKENS.ESCAPE) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
  }

  while (cursor.peek() !== quoteType) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
    if (cursor.current() === TOKENS.ESCAPE) {
      if (cursor.isEndOfFile()) {
        return createToken('INVALID', cursor.value(), startPos, cursor.endPos());
      }
      cursor.push();
    }
  }
  const value = cursor.value();
  cursor.consume();

  return createToken('STRING', value, startPos, cursor.endPos());
};

const isStillWithinDocstringValue =
  (quoteType: Token.Value): Cursor.Action<boolean> =>
  (cursor) =>
    (cursor.peekBack() === TOKENS.ESCAPE && cursor.peek() === quoteType) ||
    cursor.peek() !== quoteType ||
    cursor.peek(2) !== quoteType ||
    cursor.peek(3) !== quoteType;

const handleDocString: Cursor.Action<Token> = (cursor) => {
  const quoteType = cursor.current();
  const startPos = cursor.startPos();

  cursor.consume();
  cursor.consume();
  cursor.consume();

  if (cursor.current() === quoteType && cursor.current() === cursor.peek() && cursor.peek() === cursor.peek(2)) {
    cursor.consume();
    cursor.consume();

    return createToken('STRING', '', startPos, cursor.endPos());
  }

  if (cursor.current() === TOKENS.ESCAPE) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
  }

  while (cursor.act(isStillWithinDocstringValue(quoteType))) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', cursor.value(), startPos, cursor.endPos());
    }
    cursor.push();
    if (cursor.peek() === TOKENS.ESCAPE) {
      cursor.push();
      if (cursor.isEndOfFile()) {
        return createToken('INVALID', cursor.value(), startPos, cursor.endPos());
      }

      if (cursor.peek() === quoteType) {
        cursor.push();
        if (cursor.isEndOfFile()) {
          return createToken('INVALID', cursor.value(), startPos, cursor.endPos());
        }
      }
    }
  }

  const value = cursor.value();

  cursor.consume();
  cursor.consume();
  cursor.consume();

  return createToken('STRING', value, startPos, cursor.endPos());
};

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
