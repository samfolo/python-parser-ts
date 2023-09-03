import {Token} from './types';

export const KEYWORDS = {
  FALSE: 'False',
  NONE: 'None',
  TRUE: 'True',
  AND: 'and',
  AS: 'as',
  ASSERT: 'assert',
  BREAK: 'break',
  CLASS: 'class',
  CONTINUE: 'continue',
  DEF: 'def',
  DEL: 'del',
  ELIF: 'elif',
  ELSE: 'else',
  EXCEPT: 'except',
  FINALLY: 'finally',
  FOR: 'for',
  FROM: 'from',
  GLOBAL: 'global',
  IF: 'if',
  IMPORT: 'import',
  IN: 'in',
  IS: 'is',
  LAMBDA: 'lambda',
  NONLOCAL: 'nonlocal',
  NOT: 'not',
  OR: 'or',
  PASS: 'pass',
  RAISE: 'raise',
  RETURN: 'return',
  TRY: 'try',
  WHILE: 'while',
  WITH: 'with',
  YIELD: 'yield',
  ASYNC: 'async',
  AWAIT: 'await',
} as const;

export const BOOLEANS = {
  TRUE: 'True',
  FALSE: 'False',
  NONE: 'None',
} as const;

export const NUMERIC_LITERALS = {
  DECIMAL: '<DECIMAL>',
  FLOAT: '<FLOAT>',
  COMPLEX: '<COMPLEX>',
  BINARY: '<BINARY>',
  OCTAL: '<OCTAL>',
  HEXADECIMAL: '<HEXADECIMAL>',
} as const;

export const OPERATORS = {
  PLUS: '+',
  MINUS: '-',
  STAR: '*',
  SLASH: '/',
  DOUBLESLASH: '//',
  PERCENT: '%',
  AT: '@',
  AMPER: '&',
  VBAR: '|',
  CIRCUMFLEX: '^',
  LEFTSHIFT: '<<',
  RIGHTSHIFT: '>>',
  DOUBLESTAR: '**',
  EQEQUAL: '==',
  NOTEQUAL: '!=',
  TILDE: '~',
  LEGACY_NOTEQUAL: '<>',
  LESS: '<',
  LESSEQUAL: '<=',
  GREATER: '>',
  GREATEREQUAL: '>=',
  AND: 'and',
  OR: 'or',
  NOT: 'not',
  IS: 'is',
  IN: 'in',
} as const;

export const DELIMITERS = {
  LPAR: '(',
  RPAR: ')',
  LSQB: '[',
  RSQB: ']',
  LBRACE: '{',
  RBRACE: '}',
  COMMA: ',',
  COLON: ':',
  DOT: '.',
  SEMI: ';',
  EQUAL: '=',
  SINGLE_QUOTE: "'",
  DOUBLE_QUOTE: '"',
  TRIPLE_QUOTE: "'''",
} as const;

export const AUGASSIGN = {
  PLUSEQUAL: '+=',
  MINEQUAL: '-=',
  STAREQUAL: '*=',
  SLASHEQUAL: '/=',
  PERCENTEQUAL: '%=',
  AMPEREQUAL: '&=',
  VBAREQUAL: '|=',
  CIRCUMFLEXEQUAL: '^=',
  LEFTSHIFTEQUAL: '<<=',
  RIGHTSHIFTEQUAL: '>>=',
  DOUBLESTAREQUAL: '**=',
  DOUBLESLASHEQUAL: '//=',
  ATEQUAL: '@=',
  COLONEQUAL: ':=',
} as const;

export const MISCELLANEOUS = {
  WHITESPACE: ' ',
  ELLIPSIS: '...',
  RARROW: '->',
  UNDERSCORE: '_',
  NEWLINE: '\n',
  ESCAPE: '\\',
  ENDMARKER: '<ENDMARKER>',
  ERRORTOKEN: '<ERRORTOKEN>',
} as const;

export const TOKENS = {
  ...AUGASSIGN,
  ...BOOLEANS,
  ...DELIMITERS,
  ...KEYWORDS,
  ...MISCELLANEOUS,
  ...OPERATORS,
} as const;

export const createToken = (
  type: Token.Type,
  kind: Token.Kind,
  value: Token.Value,
  startPos: Token.Position,
  endPos: Token.Position
): Token => ({
  type,
  kind,
  value,
  startPos,
  endPos,
  lineNo: startPos.line,
  colOffset: startPos.column,
});
