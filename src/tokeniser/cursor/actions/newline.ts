import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleNewline: Cursor.Action<Token> = (cursor) => {
  const token = cursor.isInCollection()
    ? createToken('NL', 'NL', TOKENS.NEWLINE, cursor.startPos(), cursor.endPos())
    : createToken('NEWLINE', 'NEWLINE', cursor.isEndOfFile() ? '' : TOKENS.NEWLINE, cursor.startPos(), cursor.endPos());

  cursor.newLine();
  return token;
};
