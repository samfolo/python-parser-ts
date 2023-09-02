import {Token} from '../types';

export const isMaybeTaggedString = (char: Token.Value) => typeof char === 'string' && /[frub]/.test(char);
export const isLetter = (char: Token.Value) => typeof char === 'string' && /[A-Za-z_]/.test(char);
export const isDigit = (char: Token.Value): char is Token.Type => typeof char === 'string' && !isNaN(Number(char));
