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

export const OPERATORS = {
  SUM: '+',
  SUB: '-',
  MUL: '*',
  DIV: '/',
  FLOOR_DIV: '//',
  MOD: '%',
  MATMUL: '@',
  BIT_AND: '&',
  BIT_OR: '|',
  BIT_XOR: '^',
  LSHIFT: '<<',
  RSHIFT: '>>',
  POWER: '**',
  EQ: '==',
  NOT_EQ: '!=',
  LEGACY_NOT_EQ: '<>',
  LT: '<',
  LTE: '<=',
  GT: '>',
  GTE: '>=',
  AND: 'and',
  OR: 'or',
  NOT: 'not',
  IS: 'is',
  IN: 'in',
} as const;

export const DELIMITERS = {
  LPAREN: '(',
  RPAREN: ')',
  LBRACKET: '[',
  RBRACKET: ']',
  LBRACE: '{',
  RBRACE: '}',
  COMMA: ',',
  COLON: ':',
  DOT: '.',
  SEMICOLON: ';',
  ASSIGN: '=',
  SINGLE_QUOTE: "'",
  DOUBLE_QUOTE: '"',
  TRIPLE_QUOTE: "'''",
} as const;

export const AUGASSIGN = {
  SUM_ASSIGN: '+=',
  SUB_ASSIGN: '-=',
  MUL_ASSIGN: '*=',
  DIV_ASSIGN: '/=',
  MOD_ASSIGN: '%=',
  AND_ASSIGN: '&=',
  OR_ASSIGN: '|=',
  XOR_ASSIGN: '^=',
  LSHIFT_ASSIGN: '<<=',
  RSHIFT_ASSIGN: '>>=',
  POWER_ASSIGN: '**=',
  FLOOR_DIV_ASSIGN: '//=',
} as const;

export const MISCELLANEOUS = {
  WHITESPACE: ' ',
  ELLIPSIS: '...',
  ARROW: '->',
  UNDERSCORE: '_',
  NEWLINE: '\n',
  ESCAPE: '\\',
  EOF: '<EOF>',
  INVALID: '<INVALID>',
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
  value: Token.Value,
  startPos: Token.Position,
  endPos: Token.Position
): Token => ({
  type,
  value,
  startPos,
  endPos,
  lineNo: startPos.line,
  colOffset: startPos.column,
});
