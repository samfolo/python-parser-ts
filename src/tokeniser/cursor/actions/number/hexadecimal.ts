import {createToken, TOKENS} from '../../../tokens';
import {Token} from '../../../types';

import {Cursor} from '../../types';
import {isDigit, isHexadecimalDigit} from '../../utils';

import {HEXADECIMAL_POWER, HEXADECIMAL_PREFIX, NON_DECIMAL_PREFIX} from './const';
import {handleDecimalPart} from './decimal';

export const isHexadecimalNumber: Cursor.Action<boolean> = (cursor) =>
  cursor.value() === NON_DECIMAL_PREFIX && cursor.peek()?.toLowerCase() === HEXADECIMAL_PREFIX;

export const handleHexadecimalNumber: Cursor.Action<Token> = (cursor) => {
  cursor.push();

  if (cursor.peek() === TOKENS.UNDERSCORE) {
    return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  const errorToken = cursor.act(handleHexadecimalPart);
  if (errorToken) return errorToken;

  if (cursor.peek() === TOKENS.DOT) {
    cursor.push();

    if (!isHexadecimalDigit(cursor.peek())) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }

    const errorToken = cursor.act(handleHexadecimalPart);
    if (errorToken) return errorToken;

    if (cursor.peek()?.toLowerCase() === HEXADECIMAL_POWER) {
      const errorToken = cursor.act(handleHexadecimalPower);
      if (errorToken) return errorToken;
    }
  }

  return createToken('NUMBER', 'NUMBER', cursor.value(), cursor.startPos(), cursor.endPos());
};

const handleHexadecimalPart: Cursor.Action<Token | null> = (cursor) => {
  while (isHexadecimalDigit(cursor.peek())) {
    cursor.push();

    if (cursor.peek() === TOKENS.UNDERSCORE) {
      cursor.push();

      if (!isHexadecimalDigit(cursor.peek())) {
        return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
      }
    }
  }

  return null;
};

const handleHexadecimalPower: Cursor.Action<Token | null> = (cursor) => {
  cursor.push();

  if (cursor.peek() === TOKENS.PLUS || cursor.peek() === TOKENS.MINUS) {
    cursor.push();
  }

  if (!isDigit(cursor.peek())) {
    return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
  }

  const errorToken = cursor.act(handleDecimalPart);
  if (errorToken) return errorToken;

  return null;
};
