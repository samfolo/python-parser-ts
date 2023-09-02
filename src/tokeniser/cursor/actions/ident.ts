import {createToken} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isLetter} from '../utils';

export const handleIdent: Cursor.Action<Token> = (cursor) => {
  while (isLetter(cursor.peek())) {
    if (cursor.isEndOfFile()) {
      return createToken('INVALID', cursor.value(), cursor.startPos(), cursor.endPos());
    }
    cursor.push();
  }

  return createToken('IDENT', cursor.value(), cursor.startPos(), cursor.endPos());
};
