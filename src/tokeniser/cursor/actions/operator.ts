import {createToken, OPERATORS, AUGASSIGN} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleOperator: Cursor.Action<Token> = (cursor) => {
  switch (cursor.current()) {
    case OPERATORS.AND:
    case OPERATORS.AMPER:
    case OPERATORS.VBAR:
    case OPERATORS.CIRCUMFLEX:
      break;
    case OPERATORS.SLASH:
      return createToken('OP', 'SLASH', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.EQEQUAL:
    case OPERATORS.DOUBLESLASH:
    case OPERATORS.GREATER:
    case OPERATORS.GREATEREQUAL:
    case OPERATORS.IN:
    case OPERATORS.IS:
    case OPERATORS.LEGACY_NOTEQUAL:
    case OPERATORS.LEFTSHIFT:
    case OPERATORS.LESS:
    case OPERATORS.LESSEQUAL:
      break;
    case OPERATORS.AT:
      return createToken('OP', 'AT', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.PERCENT:
      return createToken('OP', 'PERCENT', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.STAR:
      return createToken('OP', 'STAR', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.NOT:
    case OPERATORS.NOTEQUAL:
    case OPERATORS.OR:
    case OPERATORS.DOUBLESTAR:
    case OPERATORS.RIGHTSHIFT:
      break;
    case OPERATORS.MINUS:
      return createToken('OP', 'MINUS', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.PLUS:
      return createToken('OP', 'PLUS', cursor.current(), cursor.startPos(), cursor.endPos());
    default:
  }

  return createToken('ERRORTOKEN', 'ERRORTOKEN', cursor.value(), cursor.startPos(), cursor.endPos());
};
