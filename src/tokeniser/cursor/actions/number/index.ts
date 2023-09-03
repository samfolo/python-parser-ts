import {Token} from '../../../types';

import {Cursor} from '../../types';

import {handleBinaryNumber, isBinaryNumber} from './binary';
import {handleDecimalNumber} from './decimal';
import {handleHexadecimalNumber, isHexadecimalNumber} from './hexadecimal';
import {handleOctalNumber, isOctalNumber} from './octal';

export const handleNumber: Cursor.Action<Token> = (cursor) => {
  if (cursor.act(isBinaryNumber)) {
    cursor.push(); // to `0b`
    return cursor.act(handleBinaryNumber);
  }

  if (cursor.act(isOctalNumber)) {
    cursor.push(); // to `0o`
    return cursor.act(handleOctalNumber);
  }

  if (cursor.act(isHexadecimalNumber)) {
    cursor.push(); // to `0x`
    return cursor.act(handleHexadecimalNumber);
  }

  return cursor.act(handleDecimalNumber);
};
