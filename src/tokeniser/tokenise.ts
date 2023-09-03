import {createCursor, handleLiteral, handleNumber, handleOperator, handleString, isDigit} from './cursor';
import {handleWhitespace} from './cursor/actions/whitespace';
import {createToken, TOKENS} from './tokens';
import type {Token} from './types';

export const tokenise = (input: string): Token[] => {
  const tokens: Token[] = [
    {
      type: 'ENCODING',
      kind: 'ENCODING',
      value: 'utf-8',
      startPos: {line: 0, column: 0},
      endPos: {line: 0, column: 0},
      colOffset: 0,
      lineNo: 0,
    },
  ];
  const cursor = createCursor(input);

  while (!cursor.done()) {
    switch (cursor.current()) {
      case TOKENS.PLUS:
      case TOKENS.MINUS:
      case TOKENS.STAR:
      case TOKENS.SLASH:
      case TOKENS.PERCENT:
      case TOKENS.AT:
        tokens.push(cursor.act(handleOperator));
        break;
      case TOKENS.AMPER:
      case TOKENS.VBAR:
      case TOKENS.CIRCUMFLEX:
      case TOKENS.LESS:
      case TOKENS.GREATER:
      case TOKENS.LPAR:
      case TOKENS.RPAR:
      case TOKENS.LSQB:
      case TOKENS.RSQB:
      case TOKENS.LBRACE:
      case TOKENS.RBRACE:
      case TOKENS.COMMA:
      case TOKENS.COLON:
      case TOKENS.TILDE:
      case TOKENS.DOT:
        if (isDigit(cursor.peek())) {
          cursor.push();
          tokens.push(cursor.act(handleNumber));
        }
        break;
      case TOKENS.SEMI:
      case TOKENS.SINGLE_QUOTE:
      case TOKENS.DOUBLE_QUOTE:
        tokens.push(cursor.act(handleString));
        break;
      case TOKENS.EQUAL:
      case TOKENS.NEWLINE:
      case TOKENS.WHITESPACE:
        const token = cursor.act(handleWhitespace);
        if (token) {
          tokens.push(token);
        }
        break;
      default:
        tokens.push(cursor.act(handleLiteral));
        break;
    }

    cursor.consume();
  }

  tokens.push(createToken('ENDMARKER', 'ENDMARKER', TOKENS.ENDMARKER, cursor.startPos(), cursor.startPos()));

  return tokens;
};
