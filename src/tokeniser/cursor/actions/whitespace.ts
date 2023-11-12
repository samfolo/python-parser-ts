import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleWhitespace: Cursor.Action<Token | null> = (cursor) => {
  const isStartOfLine = cursor.startPos().column === 0;
  let nextIndentation = 1;
  while (cursor.peek() === TOKENS.WHITESPACE) {
    cursor.push();
    nextIndentation++;

    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  if (isStartOfLine && cursor.isInBlockStatement() && !cursor.isInCollection()) {
    const indentationJuxtaposition = cursor.compareCachedIndentationWith(nextIndentation);

    switch (indentationJuxtaposition) {
      case 'indented':
        return createToken('INDENT', 'INDENT', cursor.value(), cursor.startPos(), cursor.endPos());
      case 'dedented':
        return createToken('DEDENT', 'DEDENT', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  cursor.cacheIndentation(nextIndentation);

  return null;
};
