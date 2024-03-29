import {createToken, isBlockKeyword} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isDigit, isLetter} from '../utils';

export const handleName: Cursor.Action<Token> = (cursor) => {
  while (isLetter(cursor.peek()) || isDigit(cursor.peek())) {
    cursor.push();
  }

  if (isBlockKeyword(cursor.value()) && !cursor.isInCollection()) {
    cursor.stageIndentation();
  }

  return createToken('NAME', 'NAME', cursor.value(), cursor.startPos(), cursor.endPos());
};
