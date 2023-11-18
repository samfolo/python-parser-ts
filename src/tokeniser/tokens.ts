import {Token} from './types';

const reverseLookup = (lookup: Record<string, string>) =>
  Object.entries(lookup).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});

const KEYWORD_OPERATORS = {
  AND: 'and',
  OR: 'or',
  NOT: 'not',
  IS: 'is',
  IN: 'in',
} as const;

export const BLOCK_KEYWORDS = {
  CLASS: 'class',
  DEF: 'def',
  IF: 'if',
  ELIF: 'elif',
  ELSE: 'else',
  TRY: 'try',
  EXCEPT: 'except',
  FINALLY: 'finally',
  FOR: 'for',
  WHILE: 'while',
  WITH: 'with',
} as const;

export const KEYWORDS = {
  FALSE: 'False',
  NONE: 'None',
  TRUE: 'True',
  AS: 'as',
  ASSERT: 'assert',
  BREAK: 'break',
  CONTINUE: 'continue',
  DEL: 'del',
  FROM: 'from',
  GLOBAL: 'global',
  IMPORT: 'import',
  LAMBDA: 'lambda',
  NONLOCAL: 'nonlocal',
  PASS: 'pass',
  RAISE: 'raise',
  RETURN: 'return',
  YIELD: 'yield',
  ASYNC: 'async',
  AWAIT: 'await',
  ...BLOCK_KEYWORDS,
  ...KEYWORD_OPERATORS,
} as const;

export const BOOLEANS = {
  TRUE: 'True',
  FALSE: 'False',
  NONE: 'None',
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
  ...KEYWORD_OPERATORS,
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
  TAB: '\t',
  BACKSLASH: '\\',
  HASH: '#',
  BANG: '!',
  ENDMARKER: '',
  ERRORTOKEN: '',
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

const BLOCK_KEYWORD_LOOKUP = reverseLookup(BLOCK_KEYWORDS);
export const isBlockKeyword = (value: string) => Boolean(BLOCK_KEYWORD_LOOKUP[value]);
