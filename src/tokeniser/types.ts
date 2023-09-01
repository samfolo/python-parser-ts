import {ValuesOf} from '../types';
import {AUGASSIGN, BOOLEANS, DELIMITERS, KEYWORDS, MISCELLANEOUS, OPERATORS} from './tokens';

export namespace Token {
  export type KnownType =
    | keyof typeof KEYWORDS
    | keyof typeof OPERATORS
    | keyof typeof AUGASSIGN
    | keyof typeof DELIMITERS
    | keyof typeof MISCELLANEOUS
    | keyof typeof BOOLEANS;

  export type LiteralType =
    // Literals
    | 'INTEGER'
    | 'FLOAT'
    | 'COMPLEX'
    | 'STRING'
    | 'BYTES'

    // Identifiers
    | 'IDENT'

    // Miscellaneous
    | 'TYPE_COMMENT'

    // Whitespace and Comments
    | 'WHITESPACE'
    | 'COMMENT'
    | 'INDENT'
    | 'DEDENT'

    // Errors
    | 'ERROR';

  export type Type = KnownType | LiteralType;

  export namespace KnownValue {
    export type AugAssign = ValuesOf<typeof AUGASSIGN>;
    export type Boolean = ValuesOf<typeof BOOLEANS>;
    export type Delimiter = ValuesOf<typeof DELIMITERS>;
    export type Keyword = ValuesOf<typeof KEYWORDS>;
    export type Miscellaneous = ValuesOf<typeof MISCELLANEOUS>;
    export type Operator = ValuesOf<typeof OPERATORS>;
  }

  export type KnownValue =
    | KnownValue.AugAssign
    | KnownValue.Boolean
    | KnownValue.Delimiter
    | KnownValue.Keyword
    | KnownValue.Miscellaneous
    | KnownValue.Operator;

  export type LiteralValue = string;

  export type Value = KnownValue | LiteralValue;

  export interface Position {
    line: number;
    column: number;
  }
}

interface TokenBase {
  startPosition: Token.Position;
  endPosition: Token.Position;
  columnOffset: number;
  lineNumber: number;
}

interface KnownToken extends TokenBase {
  type: Token.KnownType;
  value: Token.KnownValue;
}

interface LiteralToken extends TokenBase {
  type: Token.LiteralType;
  value: Token.LiteralValue;
}

export type Token = KnownToken | LiteralToken;
