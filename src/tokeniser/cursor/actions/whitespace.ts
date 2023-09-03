import {createToken, TOKENS} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleWhitespace: Cursor.Action<Token | null> = (cursor) => {
  if (cursor.startPos().column === 1) {
    let nextScope = 0;

    while (cursor.peek() === TOKENS.WHITESPACE) {
      cursor.push();
      if (cursor.isEndOfFile()) {
        return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
      }
      nextScope++;
    }

    const currentScope = cursor.currentScope(nextScope);
    cursor.cacheScope(nextScope);
    switch (currentScope) {
      case 'dedented':
        return createToken('DEDENT', 'DEDENT', cursor.value(), cursor.startPos(), cursor.endPos());
      case 'indented':
        return createToken('INDENT', 'INDENT', cursor.value(), cursor.startPos(), cursor.endPos());
      case 'stable':
      default:
        return null;
    }
  }

  while (cursor.peek() === TOKENS.WHITESPACE) {
    cursor.push();
    if (cursor.isEndOfFile()) {
      return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
    }
  }

  return null;
};
