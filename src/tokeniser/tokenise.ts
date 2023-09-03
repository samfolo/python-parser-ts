import {createCursor, handleLiteral, handleOperator, handleString} from './cursor';
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
      case TOKENS.FALSE: // compound token
      case TOKENS.NONE: // compound token
      case TOKENS.TRUE: // compound token
      case TOKENS.AND: // compound token
      case TOKENS.AS: // compound token
      case TOKENS.ASSERT: // compound token
      case TOKENS.BREAK: // compound token
      case TOKENS.CLASS: // compound token
      case TOKENS.CONTINUE: // compound token
      case TOKENS.DEF: // compound token
      case TOKENS.DEL: // compound token
      case TOKENS.ELIF: // compound token
      case TOKENS.ELSE: // compound token
      case TOKENS.EXCEPT: // compound token
      case TOKENS.FINALLY: // compound token
      case TOKENS.FOR: // compound token
      case TOKENS.FROM: // compound token
      case TOKENS.GLOBAL: // compound token
      case TOKENS.IF: // compound token
      case TOKENS.IMPORT: // compound token
      case TOKENS.IN: // compound token
      case TOKENS.IS: // compound token
      case TOKENS.LAMBDA: // compound token
      case TOKENS.NONLOCAL: // compound token
      case TOKENS.NOT: // compound token
      case TOKENS.OR: // compound token
      case TOKENS.PASS: // compound token
      case TOKENS.RAISE: // compound token
      case TOKENS.RETURN: // compound token
      case TOKENS.TRY: // compound token
      case TOKENS.WHILE: // compound token
      case TOKENS.WITH: // compound token
      case TOKENS.YIELD: // compound token
      case TOKENS.ASYNC: // compound token
      case TOKENS.AWAIT: // compound token
        break;
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
      case TOKENS.LEFTSHIFT: // compound token
      case TOKENS.RIGHTSHIFT: // compound token
      case TOKENS.DOUBLESTAR: // compound token
      case TOKENS.EQEQUAL: // compound token
      case TOKENS.NOTEQUAL: // compound token
      case TOKENS.LEGACY_NOTEQUAL: // compound token
      case TOKENS.LESS:
      case TOKENS.LESSEQUAL: // compound token
      case TOKENS.GREATER:
      case TOKENS.GREATEREQUAL: // compound token
      case TOKENS.LPAR:
      case TOKENS.RPAR:
      case TOKENS.LSQB:
      case TOKENS.RSQB:
      case TOKENS.LBRACE:
      case TOKENS.RBRACE:
      case TOKENS.COMMA:
      case TOKENS.COLON:
      case TOKENS.DOT:
      case TOKENS.SEMI:
      case TOKENS.SINGLE_QUOTE:
      case TOKENS.DOUBLE_QUOTE:
        tokens.push(cursor.act(handleString));
        break;
      case TOKENS.EQUAL:
      case TOKENS.PLUSEQUAL: // compound token
      case TOKENS.MINEQUAL: // compound token
      case TOKENS.STAREQUAL: // compound token
      case TOKENS.SLASHEQUAL: // compound token
      case TOKENS.PERCENTEQUAL: // compound token
      case TOKENS.AMPEREQUAL: // compound token
      case TOKENS.VBAREQUAL: // compound token
      case TOKENS.CIRCUMFLEXEQUAL: // compound token
      case TOKENS.LEFTSHIFTEQUAL: // compound token
      case TOKENS.RIGHTSHIFTEQUAL: // compound token
      case TOKENS.DOUBLESTAREQUAL: // compound token
      case TOKENS.DOUBLESLASHEQUAL: // compound token
      case TOKENS.ELLIPSIS: // compound token
      case TOKENS.RARROW: // compound token
      case TOKENS.NEWLINE:
      case TOKENS.WHITESPACE:
        const token = cursor.act(handleWhitespace);
        if (token) {
          tokens.push(token);
        }
        break;
      case TOKENS.ENDMARKER:
      case TOKENS.ERRORTOKEN:
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
