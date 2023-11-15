import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleWhitespace: Cursor.Action<Token[]> = (cursor) => {
  const isStartOfLine = cursor.startPos().column === 0;
  let nextIndentation = 1;

  while (cursor.peek() === TOKENS.WHITESPACE) {
    cursor.push();
    nextIndentation++;

    if (cursor.isEndOfFile()) {
      // TODO: whitespace at end of file is valid, check if it should be ignored
      return [createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos())];
    }
  }

  if (isStartOfLine && cursor.isInBlockStatement() && !cursor.isInCollection() && cursor.peek() !== TOKENS.NEWLINE) {
    let tokens: Token[] = [];

    switch (cursor.compareLastIndentationWith(nextIndentation).scope) {
      case 'indented':
        tokens = [createToken('INDENT', 'INDENT', cursor.value(), cursor.startPos(), cursor.endPos())];
        cursor.pushIndentation(nextIndentation);
        break;
      case 'dedented':
        while (cursor.compareLastIndentationWith(nextIndentation).scope === 'dedented') {
          cursor.exitBlockStatement();
          tokens.push(createToken('DEDENT', 'DEDENT', '', cursor.endPos(), cursor.endPos()));
        }
        break;
    }

    return tokens;
  }

  return [];
};
