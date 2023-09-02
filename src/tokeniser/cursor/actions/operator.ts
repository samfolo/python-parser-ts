import {createToken, OPERATORS, AUGASSIGN} from '../../tokens';
import {Token} from '../../types';

import {Cursor} from '../types';

export const handleOperator: Cursor.Action<Token> = (cursor) => {
  switch (cursor.current()) {
    case OPERATORS.AND:
    case OPERATORS.BIT_AND:
    case OPERATORS.BIT_OR:
    case OPERATORS.BIT_XOR:
      break;
    case OPERATORS.DIV:
      return createToken('DIV', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.EQ:
    case OPERATORS.FLOOR_DIV:
    case OPERATORS.GT:
    case OPERATORS.GTE:
    case OPERATORS.IN:
    case OPERATORS.IS:
    case OPERATORS.LEGACY_NOT_EQ:
    case OPERATORS.LSHIFT:
    case OPERATORS.LT:
    case OPERATORS.LTE:
      break;
    case OPERATORS.MATMUL:
      return createToken('MATMUL', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.MOD:
      return createToken('MOD', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.MUL:
      return createToken('MUL', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.NOT:
    case OPERATORS.NOT_EQ:
    case OPERATORS.OR:
    case OPERATORS.POWER:
    case OPERATORS.RSHIFT:
      break;
    case OPERATORS.SUB:
      return createToken('SUB', cursor.current(), cursor.startPos(), cursor.endPos());
    case OPERATORS.SUM:
      return createToken('SUM', cursor.current(), cursor.startPos(), cursor.endPos());
    default:
  }

  return createToken('INVALID', cursor.value(), cursor.startPos(), cursor.endPos());
};
