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

export const KEYWORDS = {
  FALSE: 'False',
  NONE: 'None',
  TRUE: 'True',
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
  LAMBDA: 'lambda',
  NONLOCAL: 'nonlocal',
  PASS: 'pass',
  RAISE: 'raise',
  RETURN: 'return',
  TRY: 'try',
  WHILE: 'while',
  WITH: 'with',
  YIELD: 'yield',
  ASYNC: 'async',
  AWAIT: 'await',
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
  ESCAPE: '\\',
  BANG: '!',
  ENDMARKER: '!ENDMARKER',
  ERRORTOKEN: '!ERRORTOKEN',
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

const KEYWORD_LOOKUP = reverseLookup(KEYWORDS);
export const getKeywordKind = (value: string) => (KEYWORD_LOOKUP[value] as Token.Kind) ?? null;

const KEYWORD_OPERATOR_LOOKUP = reverseLookup(KEYWORD_OPERATORS);
export const getKeywordOperatorKind = (value: string): Token.Kind =>
  (KEYWORD_OPERATOR_LOOKUP[value] as Token.Kind) ?? null;
