import {createToken} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isLetter} from '../utils';

export const handleName: Cursor.Action<Token> = (cursor) => {
  while (isLetter(cursor.peek())) {
    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
    cursor.push();
  }

  return createToken('NAME', 'NAME', cursor.value(), cursor.startPos(), cursor.endPos());
};
