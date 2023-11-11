import {createToken, getKeywordOperatorKind} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isDigit, isLetter} from '../utils';

export const handleName: Cursor.Action<Token> = (cursor) => {
  while (isLetter(cursor.peek()) || isDigit(cursor.peek())) {
    cursor.push();
  }

  return createToken('NAME', 'NAME', cursor.value(), cursor.startPos(), cursor.endPos());
};
