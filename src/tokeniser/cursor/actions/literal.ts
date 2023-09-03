import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';
import {isDigit, isLetter} from '../utils';
import {handleName} from './name';
import {handleNumber} from './number';
import {handleTaggedString} from './taggedString';

const SINGULAR_TAGGED_STRING_PREFIXES = new Set(['f', 'r', 'u', 'b']);
const COMPOUND_TAGGED_STRING_PREFIXES = new Set(['fr', 'rf', 'br', 'rb']);

export const handleLiteral: Cursor.Action<Token> = (cursor) => {
  if (isLetter(cursor.current())) {
    if (SINGULAR_TAGGED_STRING_PREFIXES.has(cursor.current()?.toLowerCase())) {
      if (COMPOUND_TAGGED_STRING_PREFIXES.has((cursor.current() + cursor.peek()).toLowerCase())) {
        if (cursor.peek(2) === TOKENS.SINGLE_QUOTE || cursor.peek(2) === TOKENS.DOUBLE_QUOTE) {
          cursor.push();
          return cursor.act(handleTaggedString);
        }
      }

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
