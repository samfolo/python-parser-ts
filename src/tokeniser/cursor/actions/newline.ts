import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleNewline: Cursor.Action<Token> = (cursor) => {
  const tokenType: Token.Type =
    cursor.peekBack() === TOKENS.NEWLINE || cursor.peekBack() === TOKENS.BACKSLASH || cursor.isInCollection()
      ? 'NL'
      : 'NEWLINE';

  const tokenValue = tokenType === 'NL' && cursor.isInCollection() ? TOKENS.NEWLINE : '';

  const token: Token = createToken(tokenType, tokenType, tokenValue, cursor.startPos(), cursor.endPos());

  cursor.newLine();
  return token;
};
