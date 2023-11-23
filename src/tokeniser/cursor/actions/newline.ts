import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleNewline: Cursor.Action<Token> = (cursor) => {
  const token =
    cursor.isStartOfLine() ||
    cursor.isInCollection() ||
    cursor.isInCommentType('leading') ||
    (!cursor.isStartOfLogicalLine() &&
      (cursor.peekBack(2) === TOKENS.WHITESPACE || cursor.peekBack(2) === TOKENS.TAB)) ||
    cursor.peekBack(2) === TOKENS.NEWLINE
      ? createToken('NL', 'NL', TOKENS.NEWLINE, cursor.startPos(), cursor.endPos())
      : createToken('NEWLINE', 'NEWLINE', TOKENS.NEWLINE, cursor.startPos(), cursor.endPos());

  cursor.exitComment();
  cursor.newLine();
  return token;
};
