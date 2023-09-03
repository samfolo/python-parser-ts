import {ValuesOf} from '../types';
import {AUGASSIGN, BOOLEANS, DELIMITERS, KEYWORDS, MISCELLANEOUS, OPERATORS} from './tokens';

export namespace Token {
  export type Type =
    // Literals
    | 'NUMBER'
    | 'STRING'
    | 'BYTES'

    // Identifiers
    | 'NAME'

    // Miscellaneous
    | 'ENCODING'
    | 'TYPE_COMMENT'
    | 'TYPE_IGNORE'
    | 'N_TOKENS'
    | 'NT_OFFSET'
    | 'OP'
    | 'ENDMARKER'

    // Whitespace and Comments
    | 'WHITESPACE'
    | 'NEWLINE'
    | 'NL' // https://docs.python.org/3/library/token.html#token.NL
    | 'INDENT'
    | 'DEDENT'
    | 'COMMENT'
    | 'SEMI'

    // Errors
    | 'ERRORTOKEN';

  export type Kind =
    | Type
    | keyof typeof KEYWORDS
    | keyof typeof OPERATORS
    | keyof typeof AUGASSIGN
    | keyof typeof DELIMITERS
    | keyof typeof MISCELLANEOUS
    | keyof typeof BOOLEANS;

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

  export type Value = KnownValue | string;

  export interface Position {
    line: number;
    column: number;
  }
}

export interface Token {
  type: Token.Type;
  kind: Token.Kind;
  value: Token.Value;
  startPos: Token.Position;
  endPos: Token.Position;
  colOffset: number;
  lineNo: number;
}
