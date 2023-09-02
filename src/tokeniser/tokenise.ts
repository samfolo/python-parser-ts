import {createCursor, handleLiteral, handleOperator, handleString} from './cursor';
import {handleWhitespace} from './cursor/actions/whitespace';
import {createToken, TOKENS} from './tokens';
import type {Token} from './types';

export const tokenise = (input: string): Token[] => {
  const tokens: Token[] = [];
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
      case TOKENS.SUM:
      case TOKENS.SUB:
      case TOKENS.MUL:
      case TOKENS.DIV:
      case TOKENS.MOD:
      case TOKENS.MATMUL:
        tokens.push(cursor.act(handleOperator));
        break;
      case TOKENS.BIT_AND:
      case TOKENS.BIT_OR:
      case TOKENS.BIT_XOR:
      case TOKENS.LSHIFT: // compound token
      case TOKENS.RSHIFT: // compound token
      case TOKENS.POWER: // compound token
      case TOKENS.EQ: // compound token
      case TOKENS.NOT_EQ: // compound token
      case TOKENS.LEGACY_NOT_EQ: // compound token
      case TOKENS.LT:
      case TOKENS.LTE: // compound token
      case TOKENS.GT:
      case TOKENS.GTE: // compound token
      case TOKENS.LPAREN:
      case TOKENS.RPAREN:
      case TOKENS.LBRACKET:
      case TOKENS.RBRACKET:
      case TOKENS.LBRACE:
      case TOKENS.RBRACE:
      case TOKENS.COMMA:
      case TOKENS.COLON:
      case TOKENS.DOT:
      case TOKENS.SEMICOLON:
      case TOKENS.SINGLE_QUOTE:
      case TOKENS.DOUBLE_QUOTE:
        tokens.push(cursor.act(handleString));
        break;
      case TOKENS.ASSIGN:
      case TOKENS.SUM_ASSIGN: // compound token
      case TOKENS.SUB_ASSIGN: // compound token
      case TOKENS.MUL_ASSIGN: // compound token
      case TOKENS.DIV_ASSIGN: // compound token
      case TOKENS.MOD_ASSIGN: // compound token
      case TOKENS.AND_ASSIGN: // compound token
      case TOKENS.OR_ASSIGN: // compound token
      case TOKENS.XOR_ASSIGN: // compound token
      case TOKENS.LSHIFT_ASSIGN: // compound token
      case TOKENS.RSHIFT_ASSIGN: // compound token
      case TOKENS.POWER_ASSIGN: // compound token
      case TOKENS.FLOOR_DIV_ASSIGN: // compound token
      case TOKENS.ELLIPSIS: // compound token
      case TOKENS.ARROW: // compound token
      case TOKENS.NEWLINE:
      case TOKENS.WHITESPACE:
        const token = cursor.act(handleWhitespace);
        if (token) {
          tokens.push(token);
        }
        break;
      case TOKENS.EOF:
      case TOKENS.INVALID:
        break;
      default:
        tokens.push(cursor.act(handleLiteral));
        break;
    }

    cursor.consume();
  }

  tokens.push(createToken('EOF', TOKENS.EOF, cursor.startPos(), cursor.startPos()));

  return tokens;
};
