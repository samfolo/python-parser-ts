import {createToken, TOKENS} from '../../../tokens';
import {Token} from '../../../types';

import {Cursor} from '../../types';
import {isDigit} from '../../utils';

import {COMPLEX_SUFFIX, EXPONENT} from './const';

export const handleDecimalNumber: Cursor.Action<Token> = (cursor) => {
  let errorToken: Token | null;

  // Integer part:
  errorToken = cursor.act(handleDecimalPart);
  if (errorToken) return errorToken;

  // Int exponent, if exists:
  errorToken = cursor.act(handleDecimalExponent);
  if (errorToken) return errorToken;

  if (cursor.peek() === TOKENS.DOT) {
    // Guard against numbers beginning with fractional part, e.g. `.5`
    if (cursor.current() === TOKENS.DOT) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }

    cursor.push();

    // Omitted fractional part exponent, e.g. `1.e4`, if exists:
    errorToken = cursor.act(handleDecimalExponent);
    if (errorToken) return errorToken;

    // Fractional part, if exists:
    errorToken = cursor.act(handleDecimalPart);
    if (errorToken) return errorToken;

    // Fractional part exponent, e.g. `1.2e4`, if exists:
    errorToken = cursor.act(handleDecimalExponent);
    if (errorToken) return errorToken;
  }

  // Complex suffix, e.g. `15j`, if exists:
  const complexToken = cursor.act(handleComplex);
  if (complexToken) return complexToken;

  return createToken('NUMBER', 'NUMBER', cursor.value(), cursor.startPos(), cursor.endPos());
};

const handleDecimalUnderscore: Cursor.Action<Token | null> = (cursor) => {
  if (cursor.peek() === TOKENS.UNDERSCORE) {
    cursor.push();

    if (!isDigit(cursor.peek())) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  return null;
};

export const handleDecimalPart: Cursor.Action<Token | null> = (cursor) => {
  const errorToken = cursor.act(handleDecimalUnderscore);
  if (errorToken) return errorToken;

  while (isDigit(cursor.peek())) {
    cursor.push();
    const errorToken = cursor.act(handleDecimalUnderscore);
    if (errorToken) return errorToken;
  }

  return null;
};

const handleDecimalExponent: Cursor.Action<Token | null> = (cursor) => {
  if (cursor.peek()?.toLowerCase() === EXPONENT) {
    cursor.push();

    // Sign, e.g. `e+1, e-12`, if exists:
    if (cursor.peek() === TOKENS.PLUS || cursor.peek() === TOKENS.MINUS) {
      cursor.push();
    }

    if (!isDigit(cursor.peek())) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }

    const errorToken = cursor.act(handleDecimalPart);
    if (errorToken) return errorToken;

    if (cursor.peek() === TOKENS.DOT) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  return null;
};

const handleComplex: Cursor.Action<Token | null> = (cursor) => {
  if (cursor.peek()?.toLowerCase() === COMPLEX_SUFFIX) {
    cursor.push();
    return createToken('NUMBER', 'NUMBER', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  return null;
};
