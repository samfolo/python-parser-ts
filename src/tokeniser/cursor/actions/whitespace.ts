import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleWhitespace: Cursor.Action<Token[]> = (cursor) => {
  const isLineContinuation = cursor.peekBack(2) === TOKENS.NEWLINE && cursor.peekBack(3) === TOKENS.BACKSLASH;

  let nextIndentation = 1;

  while (cursor.peek() === TOKENS.TAB || cursor.peek() === TOKENS.WHITESPACE) {
    cursor.push();
    nextIndentation++;
  }

  if (cursor.isStartOfLine() && (cursor.peek() === TOKENS.NEWLINE || cursor.isEndOfFile())) {
    cursor.markBlankLine();
  } else {
    cursor.unmarkBlankLine();
  }

  if (!isLineContinuation && cursor.isStartOfLine() && !cursor.isInCollection() && cursor.peek() !== TOKENS.NEWLINE) {
    let tokens: Token[] = [];

    switch (cursor.compareLastIndentationWith(nextIndentation).scope) {
      case 'indented':
        cursor.indent();
        tokens = [createToken('INDENT', 'INDENT', cursor.value(), cursor.startPos(), cursor.endPos())];
        cursor.pushIndentation(nextIndentation);
        break;
      case 'dedented':
        if (cursor.isOnBlankLine()) {
          cursor.resetEndColumn();
        }

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
