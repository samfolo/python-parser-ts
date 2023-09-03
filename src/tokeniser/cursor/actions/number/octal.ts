import {createToken, TOKENS} from '../../../tokens';
import {Token} from '../../../types';

import {Cursor} from '../../types';
import {isOctalDigit} from '../../utils';

import {NON_DECIMAL_PREFIX, OCTAL_PREFIX} from './const';

export const isOctalNumber: Cursor.Action<boolean> = (cursor) =>
  cursor.value() === NON_DECIMAL_PREFIX && cursor.peek()?.toLowerCase() === OCTAL_PREFIX;

export const handleOctalNumber: Cursor.Action<Token> = (cursor) => {
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

  return createToken('NUMBER', 'NUMBER', cursor.value(), cursor.startPos(), cursor.endPos());
};
