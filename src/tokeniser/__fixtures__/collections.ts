import {TestCase} from './types';

export const COLLECTION_FIXTURES: TestCase[] = [
  {
    input: `[]`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 2,
        },
        endPos: {
          line: 1,
          column: 3,
        },
        lineNo: 1,
        colOffset: 2,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 0,
        },
        lineNo: 2,
        colOffset: 0,
      },
    ],
  },
  {
    input: `{}`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 2,
        },
        endPos: {
          line: 1,
          column: 3,
        },
        lineNo: 1,
        colOffset: 2,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 0,
        },
        lineNo: 2,
        colOffset: 0,
      },
    ],
  },
  {
    input: `()`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 2,
        },
        endPos: {
          line: 1,
          column: 3,
        },
        lineNo: 1,
        colOffset: 2,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 0,
        },
        lineNo: 2,
        colOffset: 0,
      },
    ],
  },
  {
    input: `[1, 2, 3]`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 2,
        },
        endPos: {
          line: 1,
          column: 3,
        },
        lineNo: 1,
        colOffset: 2,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 5,
        },
        lineNo: 1,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 5,
        },
        endPos: {
          line: 1,
          column: 6,
        },
        lineNo: 1,
        colOffset: 5,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 1,
          column: 7,
        },
        endPos: {
          line: 1,
          column: 8,
        },
        lineNo: 1,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 8,
        },
        endPos: {
          line: 1,
          column: 9,
        },
        lineNo: 1,
        colOffset: 8,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 10,
        },
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 0,
        },
        lineNo: 2,
        colOffset: 0,
      },
    ],
  },
  {
    input: `("tuples", 16)`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"tuples"',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 9,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 10,
        },
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '16',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 13,
        },
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 13,
        },
        endPos: {
          line: 1,
          column: 14,
        },
        lineNo: 1,
        colOffset: 13,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 14,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 14,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 0,
        },
        lineNo: 2,
        colOffset: 0,
      },
    ],
  },
  {
    input: `{"a": 1, "b": 2 + 2}`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"a"',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 4,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 5,
        },
        lineNo: 1,
        colOffset: 4,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 7,
        },
        lineNo: 1,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 7,
        },
        endPos: {
          line: 1,
          column: 8,
        },
        lineNo: 1,
        colOffset: 7,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"b"',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 12,
        },
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 12,
        },
        endPos: {
          line: 1,
          column: 13,
        },
        lineNo: 1,
        colOffset: 12,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 1,
          column: 14,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'PLUS',
        value: '+',
        startPos: {
          line: 1,
          column: 16,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 16,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 19,
        },
        lineNo: 1,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 1,
          column: 19,
        },
        endPos: {
          line: 1,
          column: 20,
        },
        lineNo: 1,
        colOffset: 19,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 20,
        },
        endPos: {
          line: 1,
          column: 21,
        },
        lineNo: 1,
        colOffset: 20,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 0,
        },
        lineNo: 2,
        colOffset: 0,
      },
    ],
  },
  {
    input: `{
  "a": 1,
  "b": 2,
}`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"a"',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 5,
        },
        lineNo: 2,
        colOffset: 2,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 5,
        },
        endPos: {
          line: 2,
          column: 6,
        },
        lineNo: 2,
        colOffset: 5,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
        startPos: {
          line: 2,
          column: 7,
        },
        endPos: {
          line: 2,
          column: 8,
        },
        lineNo: 2,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 8,
        },
        endPos: {
          line: 2,
          column: 9,
        },
        lineNo: 2,
        colOffset: 8,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 2,
          column: 9,
        },
        endPos: {
          line: 2,
          column: 10,
        },
        lineNo: 2,
        colOffset: 9,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"b"',
        startPos: {
          line: 3,
          column: 2,
        },
        endPos: {
          line: 3,
          column: 5,
        },
        lineNo: 3,
        colOffset: 2,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 3,
          column: 5,
        },
        endPos: {
          line: 3,
          column: 6,
        },
        lineNo: 3,
        colOffset: 5,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 3,
          column: 7,
        },
        endPos: {
          line: 3,
          column: 8,
        },
        lineNo: 3,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 9,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 3,
          column: 9,
        },
        endPos: {
          line: 3,
          column: 10,
        },
        lineNo: 3,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 1,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 4,
          column: 1,
        },
        endPos: {
          line: 4,
          column: 2,
        },
        lineNo: 4,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 0,
        },
        lineNo: 5,
        colOffset: 0,
      },
    ],
  },
  {
    input: `[1, "two", "\\\\",]`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 2,
        },
        endPos: {
          line: 1,
          column: 3,
        },
        lineNo: 1,
        colOffset: 2,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"two"',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 9,
        },
        lineNo: 1,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 10,
        },
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"\\\\"',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 16,
        },
        lineNo: 1,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 16,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 16,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 17,
        },
        endPos: {
          line: 1,
          column: 18,
        },
        lineNo: 1,
        colOffset: 17,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 0,
        },
        lineNo: 2,
        colOffset: 0,
      },
    ],
  },
  {
    input: `{
    "seven": [
        (6, [3, four]),
        {1, 2},
        {1: 2, 3: 4},
    ],
    19: [4e22, 0x1a, 0b1010],
}`,
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {
          line: 0,
          column: 0,
        },
        endPos: {
          line: 0,
          column: 0,
        },
        lineNo: 0,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"seven"',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 11,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 11,
        },
        endPos: {
          line: 2,
          column: 12,
        },
        lineNo: 2,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 2,
          column: 13,
        },
        endPos: {
          line: 2,
          column: 14,
        },
        lineNo: 2,
        colOffset: 13,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 2,
          column: 14,
        },
        endPos: {
          line: 2,
          column: 15,
        },
        lineNo: 2,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 9,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '6',
        startPos: {
          line: 3,
          column: 9,
        },
        endPos: {
          line: 3,
          column: 10,
        },
        lineNo: 3,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 3,
          column: 10,
        },
        endPos: {
          line: 3,
          column: 11,
        },
        lineNo: 3,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 3,
          column: 12,
        },
        endPos: {
          line: 3,
          column: 13,
        },
        lineNo: 3,
        colOffset: 12,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 3,
          column: 13,
        },
        endPos: {
          line: 3,
          column: 14,
        },
        lineNo: 3,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 3,
          column: 14,
        },
        endPos: {
          line: 3,
          column: 15,
        },
        lineNo: 3,
        colOffset: 14,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'four',
        startPos: {
          line: 3,
          column: 16,
        },
        endPos: {
          line: 3,
          column: 20,
        },
        lineNo: 3,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 3,
          column: 20,
        },
        endPos: {
          line: 3,
          column: 21,
        },
        lineNo: 3,
        colOffset: 20,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 3,
          column: 21,
        },
        endPos: {
          line: 3,
          column: 22,
        },
        lineNo: 3,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 3,
          column: 22,
        },
        endPos: {
          line: 3,
          column: 23,
        },
        lineNo: 3,
        colOffset: 22,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 3,
          column: 23,
        },
        endPos: {
          line: 3,
          column: 24,
        },
        lineNo: 3,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 4,
          column: 8,
        },
        endPos: {
          line: 4,
          column: 9,
        },
        lineNo: 4,
        colOffset: 8,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
        startPos: {
          line: 4,
          column: 9,
        },
        endPos: {
          line: 4,
          column: 10,
        },
        lineNo: 4,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 4,
          column: 10,
        },
        endPos: {
          line: 4,
          column: 11,
        },
        lineNo: 4,
        colOffset: 10,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 4,
          column: 12,
        },
        endPos: {
          line: 4,
          column: 13,
        },
        lineNo: 4,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 4,
          column: 13,
        },
        endPos: {
          line: 4,
          column: 14,
        },
        lineNo: 4,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 4,
          column: 14,
        },
        endPos: {
          line: 4,
          column: 15,
        },
        lineNo: 4,
        colOffset: 14,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 4,
          column: 15,
        },
        endPos: {
          line: 4,
          column: 16,
        },
        lineNo: 4,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 5,
          column: 8,
        },
        endPos: {
          line: 5,
          column: 9,
        },
        lineNo: 5,
        colOffset: 8,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
        startPos: {
          line: 5,
          column: 9,
        },
        endPos: {
          line: 5,
          column: 10,
        },
        lineNo: 5,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 5,
          column: 10,
        },
        endPos: {
          line: 5,
          column: 11,
        },
        lineNo: 5,
        colOffset: 10,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 5,
          column: 12,
        },
        endPos: {
          line: 5,
          column: 13,
        },
        lineNo: 5,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 5,
          column: 13,
        },
        endPos: {
          line: 5,
          column: 14,
        },
        lineNo: 5,
        colOffset: 13,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 5,
          column: 15,
        },
        endPos: {
          line: 5,
          column: 16,
        },
        lineNo: 5,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 5,
          column: 16,
        },
        endPos: {
          line: 5,
          column: 17,
        },
        lineNo: 5,
        colOffset: 16,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '4',
        startPos: {
          line: 5,
          column: 18,
        },
        endPos: {
          line: 5,
          column: 19,
        },
        lineNo: 5,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 5,
          column: 19,
        },
        endPos: {
          line: 5,
          column: 20,
        },
        lineNo: 5,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 5,
          column: 20,
        },
        endPos: {
          line: 5,
          column: 21,
        },
        lineNo: 5,
        colOffset: 20,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 5,
          column: 21,
        },
        endPos: {
          line: 5,
          column: 22,
        },
        lineNo: 5,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 5,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 6,
          column: 5,
        },
        endPos: {
          line: 6,
          column: 6,
        },
        lineNo: 6,
        colOffset: 5,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 6,
          column: 6,
        },
        endPos: {
          line: 6,
          column: 7,
        },
        lineNo: 6,
        colOffset: 6,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '19',
        startPos: {
          line: 7,
          column: 4,
        },
        endPos: {
          line: 7,
          column: 6,
        },
        lineNo: 7,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 7,
          column: 6,
        },
        endPos: {
          line: 7,
          column: 7,
        },
        lineNo: 7,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 7,
          column: 8,
        },
        endPos: {
          line: 7,
          column: 9,
        },
        lineNo: 7,
        colOffset: 8,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '4e22',
        startPos: {
          line: 7,
          column: 9,
        },
        endPos: {
          line: 7,
          column: 13,
        },
        lineNo: 7,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 7,
          column: 13,
        },
        endPos: {
          line: 7,
          column: 14,
        },
        lineNo: 7,
        colOffset: 13,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0x1a',
        startPos: {
          line: 7,
          column: 15,
        },
        endPos: {
          line: 7,
          column: 19,
        },
        lineNo: 7,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 7,
          column: 19,
        },
        endPos: {
          line: 7,
          column: 20,
        },
        lineNo: 7,
        colOffset: 19,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0b1010',
        startPos: {
          line: 7,
          column: 21,
        },
        endPos: {
          line: 7,
          column: 27,
        },
        lineNo: 7,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 7,
          column: 27,
        },
        endPos: {
          line: 7,
          column: 28,
        },
        lineNo: 7,
        colOffset: 27,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 7,
          column: 28,
        },
        endPos: {
          line: 7,
          column: 29,
        },
        lineNo: 7,
        colOffset: 28,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 7,
          column: 29,
        },
        endPos: {
          line: 7,
          column: 30,
        },
        lineNo: 7,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 8,
          column: 0,
        },
        endPos: {
          line: 8,
          column: 1,
        },
        lineNo: 8,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 8,
          column: 1,
        },
        endPos: {
          line: 8,
          column: 2,
        },
        lineNo: 8,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 9,
          column: 0,
        },
        endPos: {
          line: 9,
          column: 0,
        },
        lineNo: 9,
        colOffset: 0,
      },
    ],
  },
];
