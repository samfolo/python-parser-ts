import {createToken, TOKENS} from '../../../tokens';
import {Token} from '../../../types';

import {Cursor} from '../../types';
import {isBinaryDigit} from '../../utils';

import {BINARY_PREFIX, NON_DECIMAL_PREFIX} from './const';

export const isBinaryNumber: Cursor.Action<boolean> = (cursor) =>
  cursor.value() === NON_DECIMAL_PREFIX && cursor.peek()?.toLowerCase() === BINARY_PREFIX;

export const handleBinaryNumber: Cursor.Action<Token> = (cursor) => {
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

  return createToken('NUMBER', 'NUMBER', cursor.value(), cursor.startPos(), cursor.endPos());
};
