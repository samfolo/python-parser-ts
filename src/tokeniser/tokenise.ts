import {createCursor, handleLiteral, handleNumber, handleString, isDigit} from './cursor';
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
      case TOKENS.AMPER:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'AMPEREQUAL', TOKENS.AMPEREQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'AMPER', TOKENS.AMPER, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.VBAR:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'VBAREQUAL', TOKENS.VBAREQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'VBAR', TOKENS.VBAR, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.CIRCUMFLEX:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'CIRCUMFLEXEQUAL', TOKENS.CIRCUMFLEXEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'CIRCUMFLEX', TOKENS.CIRCUMFLEX, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.SLASH:
        if (cursor.peek() === TOKENS.SLASH) {
          cursor.push();
          if (cursor.peek() === TOKENS.EQUAL) {
            cursor.push();
            tokens.push(
              createToken('OP', 'DOUBLESLASHEQUAL', TOKENS.DOUBLESLASHEQUAL, cursor.startPos(), cursor.endPos())
            );
            break;
          }
          tokens.push(createToken('OP', 'DOUBLESLASH', TOKENS.DOUBLESLASH, cursor.startPos(), cursor.endPos()));
          break;
        }
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'SLASHEQUAL', TOKENS.SLASHEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'SLASH', cursor.current(), cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.GREATER:
        if (cursor.peek() === TOKENS.GREATER) {
          cursor.push();
          if (cursor.peek() === TOKENS.EQUAL) {
            cursor.push();
            tokens.push(
              createToken('OP', 'RIGHTSHIFTEQUAL', TOKENS.RIGHTSHIFTEQUAL, cursor.startPos(), cursor.endPos())
            );
            break;
          }
          tokens.push(createToken('OP', 'RIGHTSHIFT', TOKENS.RIGHTSHIFT, cursor.startPos(), cursor.endPos()));
          break;
        }
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'GREATEREQUAL', TOKENS.GREATEREQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'GREATER', TOKENS.GREATER, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.LESS:
        if (cursor.peek() === TOKENS.LESS) {
          cursor.push();
          if (cursor.peek() === TOKENS.EQUAL) {
            cursor.push();
            tokens.push(createToken('OP', 'LEFTSHIFTEQUAL', TOKENS.LEFTSHIFTEQUAL, cursor.startPos(), cursor.endPos()));
            break;
          }
          tokens.push(createToken('OP', 'LEFTSHIFT', TOKENS.LEFTSHIFT, cursor.startPos(), cursor.endPos()));
          break;
        }
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'LESSEQUAL', TOKENS.LESSEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        if (cursor.peek() === TOKENS.GREATER) {
          cursor.push();
          tokens.push(createToken('OP', 'LEGACY_NOTEQUAL', TOKENS.LEGACY_NOTEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'LESS', TOKENS.LESS, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.AT:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'ATEQUAL', TOKENS.ATEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'AT', TOKENS.AT, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.PERCENT:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'PERCENTEQUAL', TOKENS.PERCENTEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'PERCENT', TOKENS.PERCENT, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.STAR:
        if (cursor.peek() === TOKENS.STAR) {
          cursor.push();
          if (cursor.peek() === TOKENS.EQUAL) {
            cursor.push();
            tokens.push(
              createToken('OP', 'DOUBLESTAREQUAL', TOKENS.DOUBLESTAREQUAL, cursor.startPos(), cursor.endPos())
            );
            break;
          }
          tokens.push(createToken('OP', 'DOUBLESTAR', TOKENS.DOUBLESTAR, cursor.startPos(), cursor.endPos()));
          break;
        }
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'STAREQUAL', TOKENS.STAREQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'STAR', TOKENS.STAR, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.MINUS:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'MINEQUAL', TOKENS.MINEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'MINUS', cursor.current(), cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.PLUS:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'PLUSEQUAL', TOKENS.PLUSEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'PLUS', cursor.current(), cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.BANG:
        if (cursor.peek() !== TOKENS.EQUAL) {
          tokens.push(createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos()));
          break;
        }
        cursor.push();
        tokens.push(createToken('OP', 'NOTEQUAL', TOKENS.NOTEQUAL, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.LPAR:
        tokens.push(createToken('OP', 'LPAR', TOKENS.LPAR, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.RPAR:
        tokens.push(createToken('OP', 'RPAR', TOKENS.RPAR, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.LSQB:
        tokens.push(createToken('OP', 'LSQB', TOKENS.LSQB, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.RSQB:
        tokens.push(createToken('OP', 'RSQB', TOKENS.RSQB, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.LBRACE:
        tokens.push(createToken('OP', 'LBRACE', TOKENS.LBRACE, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.RBRACE:
        tokens.push(createToken('OP', 'RBRACE', TOKENS.RBRACE, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.COMMA:
        tokens.push(createToken('COMMA', 'COMMA', TOKENS.COMMA, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.COLON:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'COLONEQUAL', TOKENS.COLONEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'COLON', TOKENS.COLON, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.TILDE:
        tokens.push(createToken('OP', 'TILDE', TOKENS.TILDE, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.DOT:
        if (isDigit(cursor.peek())) {
          cursor.push();
          tokens.push(cursor.act(handleNumber));
          break;
        }
        tokens.push(createToken('OP', 'DOT', TOKENS.DOT, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.SEMI:
        tokens.push(createToken('SEMI', 'SEMI', TOKENS.SEMI, cursor.startPos(), cursor.endPos()));
        break;
      case TOKENS.SINGLE_QUOTE:
      case TOKENS.DOUBLE_QUOTE:
        tokens.push(cursor.act(handleString));
        break;
      case TOKENS.EQUAL:
        if (cursor.peek() === TOKENS.EQUAL) {
          cursor.push();
          tokens.push(createToken('OP', 'EQEQUAL', TOKENS.EQEQUAL, cursor.startPos(), cursor.endPos()));
          break;
        }
        tokens.push(createToken('OP', 'EQUAL', TOKENS.EQUAL, cursor.startPos(), cursor.endPos()));
        break;
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
