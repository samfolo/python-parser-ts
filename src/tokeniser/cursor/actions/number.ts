import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isBinaryDigit, isDigit, isHexadecimalDigit, isOctalDigit} from '../utils';

const COMPLEX_SUFFIX = 'j';
const BINARY_PREFIX = 'b';
const OCTAL_PREFIX = 'o';
const HEXADECIMAL_PREFIX = 'x';

export const handleNumber: Cursor.Action<Token> = (cursor) => {
  if (cursor.act(isBinaryNumber)) {
    return cursor.act(handleBinaryNumber);
  }

  if (cursor.act(isOctalNumber)) {
    return cursor.act(handleOctalNumber);
  }

  if (cursor.act(isHexadecimalNumber)) {
    return cursor.act(handleHexadecimalNumber);
  }

  return cursor.act(handleDecimalNumber);
};

const handleDecimalNumber: Cursor.Action<Token> = (cursor) => {
  if (cursor.peek() === TOKENS.UNDERSCORE) {
    cursor.push();

    if (!isDigit(cursor.peek())) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  while (isDigit(cursor.peek())) {
    cursor.push();

    if (cursor.peek() === TOKENS.UNDERSCORE) {
      cursor.push();

      if (!isDigit(cursor.peek())) {
        return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
      }
    }
  }

  if (cursor.peek() === TOKENS.DOT) {
    cursor.push();

    while (isDigit(cursor.peek())) {
      cursor.push();

      if (cursor.peek() === TOKENS.UNDERSCORE) {
        cursor.push();

        if (!isDigit(cursor.peek())) {
          return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
        }
      }
    }

    const complexToken = cursor.act(handleComplex);
    return complexToken
      ? complexToken
      : createToken('NUMBER', 'FLOAT', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  const complexToken = cursor.act(handleComplex);
  return complexToken
    ? complexToken
    : createToken('NUMBER', 'DECIMAL', cursor.value(), cursor.startPos(), cursor.endPos());
};

const isBinaryNumber: Cursor.Action<boolean> = (cursor) =>
  cursor.value() === '0' && cursor.peek()?.toLowerCase() === BINARY_PREFIX;

const handleBinaryNumber: Cursor.Action<Token> = (cursor) => {
  cursor.push();

  if (cursor.peek() === TOKENS.UNDERSCORE) {
    return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  while (isBinaryDigit(cursor.peek())) {
    cursor.push();

    if (cursor.peek() === TOKENS.UNDERSCORE) {
      cursor.push();

      if (!isBinaryDigit(cursor.peek())) {
        return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
      }
    }
  }

  return createToken('NUMBER', 'BINARY', cursor.value(), cursor.startPos(), cursor.endPos());
};

const isOctalNumber: Cursor.Action<boolean> = (cursor) =>
  cursor.value() === '0' && cursor.peek()?.toLowerCase() === OCTAL_PREFIX;

const handleOctalNumber: Cursor.Action<Token> = (cursor) => {
  cursor.push();

  if (cursor.peek() === TOKENS.UNDERSCORE) {
    return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  while (isOctalDigit(cursor.peek())) {
    cursor.push();

    if (cursor.peek() === TOKENS.UNDERSCORE) {
      cursor.push();

      if (!isOctalDigit(cursor.peek())) {
        return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
      }
    }
  }

  return createToken('NUMBER', 'OCTAL', cursor.value(), cursor.startPos(), cursor.endPos());
};

const isHexadecimalNumber: Cursor.Action<boolean> = (cursor) =>
  cursor.value() === '0' && cursor.peek()?.toLowerCase() === HEXADECIMAL_PREFIX;

const handleHexadecimalNumber: Cursor.Action<Token> = (cursor) => {
  cursor.push();

  if (cursor.peek() === TOKENS.UNDERSCORE) {
    return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  while (isHexadecimalDigit(cursor.peek())) {
    cursor.push();

    if (cursor.peek() === TOKENS.UNDERSCORE) {
      cursor.push();

      if (!isHexadecimalDigit(cursor.peek())) {
        return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
      }
    }
  }

  return createToken('NUMBER', 'HEXADECIMAL', cursor.value(), cursor.startPos(), cursor.endPos());
};

const handleComplex: Cursor.Action<Token | null> = (cursor) => {
  if (cursor.peek()?.toLowerCase() === COMPLEX_SUFFIX) {
    cursor.push();
    return createToken('NUMBER', 'COMPLEX', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  return null;
};
