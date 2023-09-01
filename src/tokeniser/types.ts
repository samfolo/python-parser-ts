import {AUGASSIGN, BOOLEANS, DELIMITERS, KEYWORDS, MISCELLANEOUS, OPERATORS} from './tokens';

export namespace Token {
  export type KnownType =
    // Keywords
    | keyof typeof KEYWORDS

    // Operators
    | keyof typeof OPERATORS
    | keyof typeof AUGASSIGN

    // Delimiters
    | keyof typeof DELIMITERS

    // Miscellaneous
    | keyof typeof MISCELLANEOUS

    // Booleans
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
    export type AugAssign = (typeof AUGASSIGN)[keyof typeof AUGASSIGN];
    export type Boolean = (typeof BOOLEANS)[keyof typeof BOOLEANS];
    export type Delimiter = (typeof DELIMITERS)[keyof typeof DELIMITERS];
    export type Keyword = (typeof KEYWORDS)[keyof typeof KEYWORDS];
    export type Miscellaneous = (typeof MISCELLANEOUS)[keyof typeof MISCELLANEOUS];
    export type Operator = (typeof OPERATORS)[keyof typeof OPERATORS];
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
  type: Token.Type;
  value: string | Token.KnownValue;
  startPosition: Token.Position;
  endPosition: Token.Position;
  columnOffset: number;
  lineNumber: number;
}

interface KnownToken extends TokenBase {
  type: Token.KnownType;
  value: string | Token.KnownValue;
}

interface LiteralToken extends TokenBase {
  type: Token.LiteralType;
  value: string | Token.LiteralValue;
}

export type Token = KnownToken | LiteralToken;
