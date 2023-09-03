import {createToken, getKeywordOperatorKind} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isLetter} from '../utils';

export const handleName: Cursor.Action<Token> = (cursor) => {
  while (isLetter(cursor.peek())) {
    cursor.push();
  }

  const operatorKind = getKeywordOperatorKind(cursor.value());
  if (operatorKind) {
    return createToken('OP', operatorKind, cursor.value(), cursor.startPos(), cursor.endPos());
  }

  return createToken('NAME', 'NAME', cursor.value(), cursor.startPos(), cursor.endPos());
};
