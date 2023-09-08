import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleNewline: Cursor.Action<Token> = (cursor) => {
  const tokenType: Token.Type =
    cursor.peekBack() === TOKENS.NEWLINE || cursor.peekBack() === TOKENS.BACKSLASH || cursor.isInCollection()
      ? 'NL'
      : 'NEWLINE';

  const token: Token = createToken(tokenType, tokenType, TOKENS.NEWLINE, cursor.startPos(), cursor.endPos());

  cursor.newLine();

  return token;
};
