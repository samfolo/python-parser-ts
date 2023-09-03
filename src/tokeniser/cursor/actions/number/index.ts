import {Token} from '../../../types';

import {Cursor} from '../../types';

import {handleBinaryNumber, isBinaryNumber} from './binary';
import {handleDecimalNumber} from './decimal';
import {handleHexadecimalNumber, isHexadecimalNumber} from './hexadecimal';
import {handleOctalNumber, isOctalNumber} from './octal';

export const handleNumber: Cursor.Action<Token> = (cursor) => {
  if (cursor.act(isBinaryNumber)) {
    return cursor.act(handleBinaryNumber);
  }

  if (cursor.act(isOctalNumber)) {
    return cursor.act(handleOctalNumber);
  }

  if (cursor.act(isHexadecimalNumber)) {
    return cursor.act(handleHexadecimalNumber);
  }

  return cursor.act(handleDecimalNumber);
};
