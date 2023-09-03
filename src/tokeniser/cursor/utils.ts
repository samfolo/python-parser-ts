import {Token} from '../types';

export const isLetter = (char: Token.Value) => typeof char === 'string' && /[A-Za-z_]/.test(char);
export const isDigit = (char: Token.Value): char is Token.Type => typeof char === 'string' && /[0-9]/.test(char);
export const isBinaryDigit = (char: Token.Value): char is Token.Type => typeof char === 'string' && /[01]/.test(char);
export const isOctalDigit = (char: Token.Value): char is Token.Type => typeof char === 'string' && /[0-7]/.test(char);
export const isHexadecimalDigit = (char: Token.Value): char is Token.Type =>
  typeof char === 'string' && /[0-9A-Fa-f]/.test(char);
