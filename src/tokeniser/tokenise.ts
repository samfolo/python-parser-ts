import {
  createCursor,
  handleIdent,
  handleNumber,
  handleString,
  handleTaggedString,
  isDigit,
  isLetter,
  isMaybeTaggedString,
} from './cursor';
import {createToken, TOKENS} from './tokens';
import type {Token} from './types';

export const tokenise = (input: string): Token[] => {
  const tokens: Token[] = [];
  const cursor = createCursor(input);

  while (!cursor.done()) {
    switch (cursor.current()) {
      case TOKENS.FALSE:
      case TOKENS.NONE:
      case TOKENS.TRUE:
      case TOKENS.AND:
      case TOKENS.AS:
      case TOKENS.ASSERT:
      case TOKENS.BREAK:
      case TOKENS.CLASS:
      case TOKENS.CONTINUE:
      case TOKENS.DEF:
      case TOKENS.DEL:
      case TOKENS.ELIF:
      case TOKENS.ELSE:
      case TOKENS.EXCEPT:
      case TOKENS.FINALLY:
      case TOKENS.FOR:
      case TOKENS.FROM:
      case TOKENS.GLOBAL:
      case TOKENS.IF:
      case TOKENS.IMPORT:
      case TOKENS.IN:
      case TOKENS.IS:
      case TOKENS.LAMBDA:
      case TOKENS.NONLOCAL:
      case TOKENS.NOT:
      case TOKENS.OR:
      case TOKENS.PASS:
      case TOKENS.RAISE:
      case TOKENS.RETURN:
      case TOKENS.TRY:
      case TOKENS.WHILE:
      case TOKENS.WITH:
      case TOKENS.YIELD:
      case TOKENS.ASYNC:
      case TOKENS.AWAIT:
      case TOKENS.TRUE:
      case TOKENS.FALSE:
      case TOKENS.NONE:
      case TOKENS.SUM:
      case TOKENS.SUB:
      case TOKENS.MUL:
      case TOKENS.DIV:
      case TOKENS.FLOOR_DIV:
      case TOKENS.MOD:
      case TOKENS.MATMUL:
      case TOKENS.BIT_AND:
      case TOKENS.BIT_OR:
      case TOKENS.BIT_XOR:
      case TOKENS.LSHIFT:
      case TOKENS.RSHIFT:
      case TOKENS.POWER:
      case TOKENS.EQ:
      case TOKENS.NOT_EQ:
      case TOKENS.LEGACY_NOT_EQ:
      case TOKENS.LT:
      case TOKENS.LTE:
      case TOKENS.GT:
      case TOKENS.GTE:
      case TOKENS.AND:
      case TOKENS.OR:
      case TOKENS.NOT:
      case TOKENS.IS:
      case TOKENS.IN:
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
      case TOKENS.TRIPLE_QUOTE:
        tokens.push(createToken('INVALID', cursor.value(), cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.ASSIGN:
      case TOKENS.PLUS_ASSIGN:
      case TOKENS.MINUS_ASSIGN:
      case TOKENS.MULT_ASSIGN:
      case TOKENS.DIV_ASSIGN:
      case TOKENS.MOD_ASSIGN:
      case TOKENS.AND_ASSIGN:
      case TOKENS.OR_ASSIGN:
      case TOKENS.XOR_ASSIGN:
      case TOKENS.LSHIFT_ASSIGN:
      case TOKENS.RSHIFT_ASSIGN:
      case TOKENS.POWER_ASSIGN:
      case TOKENS.FLOOR_DIV_ASSIGN:
      case TOKENS.ELLIPSIS:
      case TOKENS.ARROW:
      case TOKENS.NEWLINE:
      case TOKENS.EOF:
      case TOKENS.INVALID:
        break;
      default: {
        if (isLetter(cursor.current())) {
          if (isMaybeTaggedString(cursor.current())) {
            if (cursor.peek() === TOKENS.SINGLE_QUOTE || cursor.peek() === TOKENS.DOUBLE_QUOTE) {
              tokens.push(cursor.act(handleTaggedString));
              break;
            }
          }

          tokens.push(cursor.act(handleIdent));
          break;
        }

        if (isDigit(cursor.current())) {
          tokens.push(cursor.act(handleNumber));
          break;
        }

        tokens.push(createToken('INVALID', cursor.value(), cursor.startPos(), cursor.endPos()));
        break;
      }
    }

    cursor.consume();
  }

  tokens.push(createToken('EOF', TOKENS.EOF, cursor.startPos(), cursor.startPos()));

  return tokens;
};
