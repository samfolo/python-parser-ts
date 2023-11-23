import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleWhitespace: Cursor.Action<Token[]> = (cursor) => {
  let nextIndentation = 1;

  while (cursor.peek() === TOKENS.TAB || cursor.peek() === TOKENS.WHITESPACE) {
    cursor.push();
    nextIndentation++;
  }

  if (
    cursor.isStartOfLine() &&
    (cursor.peek() === TOKENS.NEWLINE || cursor.peek() === TOKENS.HASH || cursor.isEndOfFile())
  ) {
    cursor.markBlankLine();
  } else {
    cursor.unmarkBlankLine();
  }

  if (
    !cursor.isOnBlankLine() &&
    (cursor.isStartOfFile() || (!cursor.isInLineContinuation() && cursor.isStartOfLine() && !cursor.isInCollection()))
  ) {
    let tokens: Token[] = [];

    switch (cursor.compareLastIndentationWith(nextIndentation).scope) {
      case 'indented':
        if (cursor.isStartOfFile() || cursor.isIndentationStaged()) {
          cursor.indent();
          tokens = [createToken('INDENT', 'INDENT', cursor.value(), cursor.startPos(), cursor.endPos())];
          cursor.pushIndentation(nextIndentation);
        }
        break;
      case 'dedented':
        while (cursor.compareLastIndentationWith(nextIndentation).scope === 'dedented') {
          cursor.dedent();
          tokens.push(createToken('DEDENT', 'DEDENT', '', cursor.endPos(), cursor.endPos()));
        }
        break;
    }

    return tokens;
  }

  return [];
};
