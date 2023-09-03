import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isDigit, isLetter, isMaybeTaggedString} from '../utils';
import {handleName} from './name';
import {handleNumber} from './number';
import {handleTaggedString} from './taggedString';

export const handleLiteral: Cursor.Action<Token> = (cursor) => {
  if (isLetter(cursor.current())) {
    if (isMaybeTaggedString(cursor.current())) {
      if (cursor.peek() === TOKENS.SINGLE_QUOTE || cursor.peek() === TOKENS.DOUBLE_QUOTE) {
        return cursor.act(handleTaggedString);
      }
    }

    return cursor.act(handleName);
  }

  if (isDigit(cursor.current())) {
    return cursor.act(handleNumber);
  }

  return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
};
