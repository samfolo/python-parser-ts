import {TestCase} from './types';

export const COMPREHENSION_FIXTURES: TestCase[] = [
  {
    input: `[x for x in xes]`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 3,
        },
        endPos: {
          line: 1,
          column: 6,
        },
        lineNo: 1,
        colOffset: 3,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 11,
        },
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'xes',
        startPos: {
          line: 1,
          column: 12,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `[f"Hey {sibling}" for sibling in siblings if sibling in ["Thomas", "Richard", "Harold"]]`,
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
        type: 'STRING',
        kind: 'STRING',
        value: 'f"Hey {sibling}"',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 21,
        },
        lineNo: 1,
        colOffset: 18,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'sibling',
        startPos: {
          line: 1,
          column: 22,
        },
        endPos: {
          line: 1,
          column: 29,
        },
        lineNo: 1,
        colOffset: 22,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 32,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'siblings',
        startPos: {
          line: 1,
          column: 33,
        },
        endPos: {
          line: 1,
          column: 41,
        },
        lineNo: 1,
        colOffset: 33,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 1,
          column: 42,
        },
        endPos: {
          line: 1,
          column: 44,
        },
        lineNo: 1,
        colOffset: 42,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'sibling',
        startPos: {
          line: 1,
          column: 45,
        },
        endPos: {
          line: 1,
          column: 52,
        },
        lineNo: 1,
        colOffset: 45,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 53,
        },
        endPos: {
          line: 1,
          column: 55,
        },
        lineNo: 1,
        colOffset: 53,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 56,
        },
        endPos: {
          line: 1,
          column: 57,
        },
        lineNo: 1,
        colOffset: 56,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Thomas"',
        startPos: {
          line: 1,
          column: 57,
        },
        endPos: {
          line: 1,
          column: 65,
        },
        lineNo: 1,
        colOffset: 57,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 65,
        },
        endPos: {
          line: 1,
          column: 66,
        },
        lineNo: 1,
        colOffset: 65,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Richard"',
        startPos: {
          line: 1,
          column: 67,
        },
        endPos: {
          line: 1,
          column: 76,
        },
        lineNo: 1,
        colOffset: 67,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 76,
        },
        endPos: {
          line: 1,
          column: 77,
        },
        lineNo: 1,
        colOffset: 76,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Harold"',
        startPos: {
          line: 1,
          column: 78,
        },
        endPos: {
          line: 1,
          column: 86,
        },
        lineNo: 1,
        colOffset: 78,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 86,
        },
        endPos: {
          line: 1,
          column: 87,
        },
        lineNo: 1,
        colOffset: 86,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 87,
        },
        endPos: {
          line: 1,
          column: 88,
        },
        lineNo: 1,
        colOffset: 87,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 88,
        },
        endPos: {
          line: 1,
          column: 89,
        },
        lineNo: 1,
        colOffset: 88,
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
    input: `[x + y for x in xes for y in ys]`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'PLUS',
        value: '+',
        startPos: {
          line: 1,
          column: 3,
        },
        endPos: {
          line: 1,
          column: 4,
        },
        lineNo: 1,
        colOffset: 3,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 7,
        },
        endPos: {
          line: 1,
          column: 10,
        },
        lineNo: 1,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 12,
        },
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 13,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 13,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'xes',
        startPos: {
          line: 1,
          column: 16,
        },
        endPos: {
          line: 1,
          column: 19,
        },
        lineNo: 1,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 20,
        },
        endPos: {
          line: 1,
          column: 23,
        },
        lineNo: 1,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 25,
        },
        lineNo: 1,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 26,
        },
        endPos: {
          line: 1,
          column: 28,
        },
        lineNo: 1,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'ys',
        startPos: {
          line: 1,
          column: 29,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 31,
        },
        endPos: {
          line: 1,
          column: 32,
        },
        lineNo: 1,
        colOffset: 31,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 32,
        },
        endPos: {
          line: 1,
          column: 33,
        },
        lineNo: 1,
        colOffset: 32,
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
    input: `{x: y for x, y in zip(keys, values)}`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 9,
        },
        lineNo: 1,
        colOffset: 6,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 10,
        },
        endPos: {
          line: 1,
          column: 11,
        },
        lineNo: 1,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 12,
        },
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'zip',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 21,
        },
        lineNo: 1,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 1,
          column: 21,
        },
        endPos: {
          line: 1,
          column: 22,
        },
        lineNo: 1,
        colOffset: 21,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'keys',
        startPos: {
          line: 1,
          column: 22,
        },
        endPos: {
          line: 1,
          column: 26,
        },
        lineNo: 1,
        colOffset: 22,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 26,
        },
        endPos: {
          line: 1,
          column: 27,
        },
        lineNo: 1,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'values',
        startPos: {
          line: 1,
          column: 28,
        },
        endPos: {
          line: 1,
          column: 34,
        },
        lineNo: 1,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 34,
        },
        endPos: {
          line: 1,
          column: 35,
        },
        lineNo: 1,
        colOffset: 34,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 1,
          column: 35,
        },
        endPos: {
          line: 1,
          column: 36,
        },
        lineNo: 1,
        colOffset: 35,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 36,
        },
        endPos: {
          line: 1,
          column: 37,
        },
        lineNo: 1,
        colOffset: 36,
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
    input: `{x: x**2 for x in range(10) if x % 2 == 0}`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 1,
          column: 5,
        },
        endPos: {
          line: 1,
          column: 7,
        },
        lineNo: 1,
        colOffset: 5,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 23,
        },
        lineNo: 1,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 1,
          column: 23,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 23,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '10',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 26,
        },
        lineNo: 1,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 26,
        },
        endPos: {
          line: 1,
          column: 27,
        },
        lineNo: 1,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 1,
          column: 28,
        },
        endPos: {
          line: 1,
          column: 30,
        },
        lineNo: 1,
        colOffset: 28,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 31,
        },
        endPos: {
          line: 1,
          column: 32,
        },
        lineNo: 1,
        colOffset: 31,
      },
      {
        type: 'OP',
        kind: 'PERCENT',
        value: '%',
        startPos: {
          line: 1,
          column: 33,
        },
        endPos: {
          line: 1,
          column: 34,
        },
        lineNo: 1,
        colOffset: 33,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 1,
          column: 35,
        },
        endPos: {
          line: 1,
          column: 36,
        },
        lineNo: 1,
        colOffset: 35,
      },
      {
        type: 'OP',
        kind: 'EQEQUAL',
        value: '==',
        startPos: {
          line: 1,
          column: 37,
        },
        endPos: {
          line: 1,
          column: 39,
        },
        lineNo: 1,
        colOffset: 37,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
        startPos: {
          line: 1,
          column: 40,
        },
        endPos: {
          line: 1,
          column: 41,
        },
        lineNo: 1,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 1,
          column: 41,
        },
        endPos: {
          line: 1,
          column: 42,
        },
        lineNo: 1,
        colOffset: 41,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 42,
        },
        endPos: {
          line: 1,
          column: 43,
        },
        lineNo: 1,
        colOffset: 42,
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
  x: {
    y: x*y for y in range(3)
  } for x in range(2)
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 3,
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
          column: 3,
        },
        endPos: {
          line: 2,
          column: 4,
        },
        lineNo: 2,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 2,
          column: 6,
        },
        endPos: {
          line: 2,
          column: 7,
        },
        lineNo: 2,
        colOffset: 6,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 5,
        },
        lineNo: 3,
        colOffset: 4,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'STAR',
        value: '*',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 3,
          column: 11,
        },
        endPos: {
          line: 3,
          column: 14,
        },
        lineNo: 3,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 3,
          column: 15,
        },
        endPos: {
          line: 3,
          column: 16,
        },
        lineNo: 3,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 3,
          column: 17,
        },
        endPos: {
          line: 3,
          column: 19,
        },
        lineNo: 3,
        colOffset: 17,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 3,
          column: 20,
        },
        endPos: {
          line: 3,
          column: 25,
        },
        lineNo: 3,
        colOffset: 20,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 3,
          column: 25,
        },
        endPos: {
          line: 3,
          column: 26,
        },
        lineNo: 3,
        colOffset: 25,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 3,
          column: 26,
        },
        endPos: {
          line: 3,
          column: 27,
        },
        lineNo: 3,
        colOffset: 26,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 3,
          column: 27,
        },
        endPos: {
          line: 3,
          column: 28,
        },
        lineNo: 3,
        colOffset: 27,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 3,
          column: 28,
        },
        endPos: {
          line: 3,
          column: 29,
        },
        lineNo: 3,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 4,
          column: 2,
        },
        endPos: {
          line: 4,
          column: 3,
        },
        lineNo: 4,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 7,
        },
        lineNo: 4,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 4,
          column: 10,
        },
        endPos: {
          line: 4,
          column: 12,
        },
        lineNo: 4,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 4,
          column: 13,
        },
        endPos: {
          line: 4,
          column: 18,
        },
        lineNo: 4,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 4,
          column: 18,
        },
        endPos: {
          line: 4,
          column: 19,
        },
        lineNo: 4,
        colOffset: 18,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 4,
          column: 19,
        },
        endPos: {
          line: 4,
          column: 20,
        },
        lineNo: 4,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 4,
          column: 20,
        },
        endPos: {
          line: 4,
          column: 21,
        },
        lineNo: 4,
        colOffset: 20,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 4,
          column: 21,
        },
        endPos: {
          line: 4,
          column: 22,
        },
        lineNo: 4,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 1,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 5,
          column: 1,
        },
        endPos: {
          line: 5,
          column: 2,
        },
        lineNo: 5,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 0,
        },
        lineNo: 6,
        colOffset: 0,
      },
    ],
  },
  {
    input: `{
  x for sublist in outer_list 
    for x in sublist
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 3,
        },
        lineNo: 2,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 7,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'sublist',
        startPos: {
          line: 2,
          column: 8,
        },
        endPos: {
          line: 2,
          column: 15,
        },
        lineNo: 2,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 2,
          column: 16,
        },
        endPos: {
          line: 2,
          column: 18,
        },
        lineNo: 2,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'outer_list',
        startPos: {
          line: 2,
          column: 19,
        },
        endPos: {
          line: 2,
          column: 29,
        },
        lineNo: 2,
        colOffset: 19,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 2,
          column: 30,
        },
        endPos: {
          line: 2,
          column: 31,
        },
        lineNo: 2,
        colOffset: 30,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 7,
        },
        lineNo: 3,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 3,
          column: 10,
        },
        endPos: {
          line: 3,
          column: 12,
        },
        lineNo: 3,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'sublist',
        startPos: {
          line: 3,
          column: 13,
        },
        endPos: {
          line: 3,
          column: 20,
        },
        lineNo: 3,
        colOffset: 13,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
    input: `a = ((y for y in range(3)) for x in range(2))
b = (x for x in iterable if condition)`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        kind: 'EQUAL',
        value: '=',
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
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 8,
        },
        endPos: {
          line: 1,
          column: 11,
        },
        lineNo: 1,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 14,
        },
        endPos: {
          line: 1,
          column: 16,
        },
        lineNo: 1,
        colOffset: 14,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 1,
          column: 17,
        },
        endPos: {
          line: 1,
          column: 22,
        },
        lineNo: 1,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 1,
          column: 22,
        },
        endPos: {
          line: 1,
          column: 23,
        },
        lineNo: 1,
        colOffset: 22,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 1,
          column: 23,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 25,
        },
        lineNo: 1,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 25,
        },
        endPos: {
          line: 1,
          column: 26,
        },
        lineNo: 1,
        colOffset: 25,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 27,
        },
        endPos: {
          line: 1,
          column: 30,
        },
        lineNo: 1,
        colOffset: 27,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 31,
        },
        endPos: {
          line: 1,
          column: 32,
        },
        lineNo: 1,
        colOffset: 31,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 33,
        },
        endPos: {
          line: 1,
          column: 35,
        },
        lineNo: 1,
        colOffset: 33,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 1,
          column: 36,
        },
        endPos: {
          line: 1,
          column: 41,
        },
        lineNo: 1,
        colOffset: 36,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 1,
          column: 41,
        },
        endPos: {
          line: 1,
          column: 42,
        },
        lineNo: 1,
        colOffset: 41,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 1,
          column: 42,
        },
        endPos: {
          line: 1,
          column: 43,
        },
        lineNo: 1,
        colOffset: 42,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 43,
        },
        endPos: {
          line: 1,
          column: 44,
        },
        lineNo: 1,
        colOffset: 43,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 44,
        },
        endPos: {
          line: 1,
          column: 45,
        },
        lineNo: 1,
        colOffset: 44,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 45,
        },
        endPos: {
          line: 1,
          column: 46,
        },
        lineNo: 1,
        colOffset: 45,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 1,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 3,
        },
        lineNo: 2,
        colOffset: 2,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 5,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 2,
          column: 7,
        },
        endPos: {
          line: 2,
          column: 10,
        },
        lineNo: 2,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 2,
          column: 13,
        },
        endPos: {
          line: 2,
          column: 15,
        },
        lineNo: 2,
        colOffset: 13,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 2,
          column: 16,
        },
        endPos: {
          line: 2,
          column: 24,
        },
        lineNo: 2,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 2,
          column: 25,
        },
        endPos: {
          line: 2,
          column: 27,
        },
        lineNo: 2,
        colOffset: 25,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'condition',
        startPos: {
          line: 2,
          column: 28,
        },
        endPos: {
          line: 2,
          column: 37,
        },
        lineNo: 2,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 37,
        },
        endPos: {
          line: 2,
          column: 38,
        },
        lineNo: 2,
        colOffset: 37,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 2,
          column: 38,
        },
        endPos: {
          line: 2,
          column: 39,
        },
        lineNo: 2,
        colOffset: 38,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 0,
        },
        lineNo: 3,
        colOffset: 0,
      },
    ],
  },
  {
    input: `[func(x) for x in iterable]
`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'func',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 5,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 26,
        },
        lineNo: 1,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 26,
        },
        endPos: {
          line: 1,
          column: 27,
        },
        lineNo: 1,
        colOffset: 26,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 27,
        },
        endPos: {
          line: 1,
          column: 28,
        },
        lineNo: 1,
        colOffset: 27,
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
    input: `[x for x in range(10) if x % 2 == 0 and x % 3 == 0]`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 3,
        },
        endPos: {
          line: 1,
          column: 6,
        },
        lineNo: 1,
        colOffset: 3,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 11,
        },
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 1,
          column: 12,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '10',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 20,
        },
        lineNo: 1,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 1,
          column: 22,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 22,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 25,
        },
        endPos: {
          line: 1,
          column: 26,
        },
        lineNo: 1,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'PERCENT',
        value: '%',
        startPos: {
          line: 1,
          column: 27,
        },
        endPos: {
          line: 1,
          column: 28,
        },
        lineNo: 1,
        colOffset: 27,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 1,
          column: 29,
        },
        endPos: {
          line: 1,
          column: 30,
        },
        lineNo: 1,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'EQEQUAL',
        value: '==',
        startPos: {
          line: 1,
          column: 31,
        },
        endPos: {
          line: 1,
          column: 33,
        },
        lineNo: 1,
        colOffset: 31,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
        startPos: {
          line: 1,
          column: 34,
        },
        endPos: {
          line: 1,
          column: 35,
        },
        lineNo: 1,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'and',
        startPos: {
          line: 1,
          column: 36,
        },
        endPos: {
          line: 1,
          column: 39,
        },
        lineNo: 1,
        colOffset: 36,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 40,
        },
        endPos: {
          line: 1,
          column: 41,
        },
        lineNo: 1,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'PERCENT',
        value: '%',
        startPos: {
          line: 1,
          column: 42,
        },
        endPos: {
          line: 1,
          column: 43,
        },
        lineNo: 1,
        colOffset: 42,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 1,
          column: 44,
        },
        endPos: {
          line: 1,
          column: 45,
        },
        lineNo: 1,
        colOffset: 44,
      },
      {
        type: 'OP',
        kind: 'EQEQUAL',
        value: '==',
        startPos: {
          line: 1,
          column: 46,
        },
        endPos: {
          line: 1,
          column: 48,
        },
        lineNo: 1,
        colOffset: 46,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
        startPos: {
          line: 1,
          column: 49,
        },
        endPos: {
          line: 1,
          column: 50,
        },
        lineNo: 1,
        colOffset: 49,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 50,
        },
        endPos: {
          line: 1,
          column: 51,
        },
        lineNo: 1,
        colOffset: 50,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 51,
        },
        endPos: {
          line: 1,
          column: 52,
        },
        lineNo: 1,
        colOffset: 51,
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
    input: `func(x for x in iterable)


`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'func',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 4,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 7,
        },
        endPos: {
          line: 1,
          column: 10,
        },
        lineNo: 1,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 12,
        },
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 13,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 13,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 1,
          column: 16,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 25,
        },
        lineNo: 1,
        colOffset: 24,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 25,
        },
        endPos: {
          line: 1,
          column: 26,
        },
        lineNo: 1,
        colOffset: 25,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 1,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 1,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 0,
        },
        lineNo: 4,
        colOffset: 0,
      },
    ],
  },
  {
    input: `[(x, y) for x in xs for y in ys]`,
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
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 3,
        },
        endPos: {
          line: 1,
          column: 4,
        },
        lineNo: 1,
        colOffset: 3,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 8,
        },
        endPos: {
          line: 1,
          column: 11,
        },
        lineNo: 1,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 14,
        },
        endPos: {
          line: 1,
          column: 16,
        },
        lineNo: 1,
        colOffset: 14,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'xs',
        startPos: {
          line: 1,
          column: 17,
        },
        endPos: {
          line: 1,
          column: 19,
        },
        lineNo: 1,
        colOffset: 17,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 20,
        },
        endPos: {
          line: 1,
          column: 23,
        },
        lineNo: 1,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 25,
        },
        lineNo: 1,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 26,
        },
        endPos: {
          line: 1,
          column: 28,
        },
        lineNo: 1,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'ys',
        startPos: {
          line: 1,
          column: 29,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 31,
        },
        endPos: {
          line: 1,
          column: 32,
        },
        lineNo: 1,
        colOffset: 31,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 32,
        },
        endPos: {
          line: 1,
          column: 33,
        },
        lineNo: 1,
        colOffset: 32,
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
    input: `{x: y for x, y in zip(keys, values) if condition1 if condition2}`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 9,
        },
        lineNo: 1,
        colOffset: 6,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 10,
        },
        endPos: {
          line: 1,
          column: 11,
        },
        lineNo: 1,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 12,
        },
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'zip',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 21,
        },
        lineNo: 1,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 1,
          column: 21,
        },
        endPos: {
          line: 1,
          column: 22,
        },
        lineNo: 1,
        colOffset: 21,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'keys',
        startPos: {
          line: 1,
          column: 22,
        },
        endPos: {
          line: 1,
          column: 26,
        },
        lineNo: 1,
        colOffset: 22,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 26,
        },
        endPos: {
          line: 1,
          column: 27,
        },
        lineNo: 1,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'values',
        startPos: {
          line: 1,
          column: 28,
        },
        endPos: {
          line: 1,
          column: 34,
        },
        lineNo: 1,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 34,
        },
        endPos: {
          line: 1,
          column: 35,
        },
        lineNo: 1,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 1,
          column: 36,
        },
        endPos: {
          line: 1,
          column: 38,
        },
        lineNo: 1,
        colOffset: 36,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'condition1',
        startPos: {
          line: 1,
          column: 39,
        },
        endPos: {
          line: 1,
          column: 49,
        },
        lineNo: 1,
        colOffset: 39,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 1,
          column: 50,
        },
        endPos: {
          line: 1,
          column: 52,
        },
        lineNo: 1,
        colOffset: 50,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'condition2',
        startPos: {
          line: 1,
          column: 53,
        },
        endPos: {
          line: 1,
          column: 63,
        },
        lineNo: 1,
        colOffset: 53,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 1,
          column: 63,
        },
        endPos: {
          line: 1,
          column: 64,
        },
        lineNo: 1,
        colOffset: 63,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 64,
        },
        endPos: {
          line: 1,
          column: 65,
        },
        lineNo: 1,
        colOffset: 64,
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
    input: `[
  {
    x for x in range(
      len(
        [
          {
            y: y**2 for y in range(3)
          } for x in range(2)
        ]
      )
    )
  } for y in range(
    len(
      [
        x for x in iterable if condition1 if condition2
      ]
    )
  )
]
`,
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
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 3,
        },
        lineNo: 2,
        colOffset: 2,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 2,
          column: 3,
        },
        endPos: {
          line: 2,
          column: 4,
        },
        lineNo: 2,
        colOffset: 3,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 5,
        },
        lineNo: 3,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 3,
          column: 6,
        },
        endPos: {
          line: 3,
          column: 9,
        },
        lineNo: 3,
        colOffset: 6,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 3,
          column: 12,
        },
        endPos: {
          line: 3,
          column: 14,
        },
        lineNo: 3,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 3,
          column: 15,
        },
        endPos: {
          line: 3,
          column: 20,
        },
        lineNo: 3,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'len',
        startPos: {
          line: 4,
          column: 6,
        },
        endPos: {
          line: 4,
          column: 9,
        },
        lineNo: 4,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'OP',
        kind: 'LSQB',
        value: '[',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 6,
          column: 10,
        },
        endPos: {
          line: 6,
          column: 11,
        },
        lineNo: 6,
        colOffset: 10,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 6,
          column: 11,
        },
        endPos: {
          line: 6,
          column: 12,
        },
        lineNo: 6,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 7,
          column: 12,
        },
        endPos: {
          line: 7,
          column: 13,
        },
        lineNo: 7,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 7,
          column: 15,
        },
        endPos: {
          line: 7,
          column: 16,
        },
        lineNo: 7,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 7,
          column: 16,
        },
        endPos: {
          line: 7,
          column: 18,
        },
        lineNo: 7,
        colOffset: 16,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 7,
          column: 18,
        },
        endPos: {
          line: 7,
          column: 19,
        },
        lineNo: 7,
        colOffset: 18,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 7,
          column: 20,
        },
        endPos: {
          line: 7,
          column: 23,
        },
        lineNo: 7,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 7,
          column: 24,
        },
        endPos: {
          line: 7,
          column: 25,
        },
        lineNo: 7,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 7,
          column: 26,
        },
        endPos: {
          line: 7,
          column: 28,
        },
        lineNo: 7,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 7,
          column: 29,
        },
        endPos: {
          line: 7,
          column: 34,
        },
        lineNo: 7,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 7,
          column: 34,
        },
        endPos: {
          line: 7,
          column: 35,
        },
        lineNo: 7,
        colOffset: 34,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 7,
          column: 35,
        },
        endPos: {
          line: 7,
          column: 36,
        },
        lineNo: 7,
        colOffset: 35,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 7,
          column: 36,
        },
        endPos: {
          line: 7,
          column: 37,
        },
        lineNo: 7,
        colOffset: 36,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 7,
          column: 37,
        },
        endPos: {
          line: 7,
          column: 38,
        },
        lineNo: 7,
        colOffset: 37,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 8,
          column: 10,
        },
        endPos: {
          line: 8,
          column: 11,
        },
        lineNo: 8,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 8,
          column: 12,
        },
        endPos: {
          line: 8,
          column: 15,
        },
        lineNo: 8,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 8,
          column: 16,
        },
        endPos: {
          line: 8,
          column: 17,
        },
        lineNo: 8,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 8,
          column: 18,
        },
        endPos: {
          line: 8,
          column: 20,
        },
        lineNo: 8,
        colOffset: 18,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 8,
          column: 21,
        },
        endPos: {
          line: 8,
          column: 26,
        },
        lineNo: 8,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 8,
          column: 26,
        },
        endPos: {
          line: 8,
          column: 27,
        },
        lineNo: 8,
        colOffset: 26,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 8,
          column: 27,
        },
        endPos: {
          line: 8,
          column: 28,
        },
        lineNo: 8,
        colOffset: 27,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 8,
          column: 28,
        },
        endPos: {
          line: 8,
          column: 29,
        },
        lineNo: 8,
        colOffset: 28,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 8,
          column: 29,
        },
        endPos: {
          line: 8,
          column: 30,
        },
        lineNo: 8,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 9,
          column: 8,
        },
        endPos: {
          line: 9,
          column: 9,
        },
        lineNo: 9,
        colOffset: 8,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 9,
          column: 9,
        },
        endPos: {
          line: 9,
          column: 10,
        },
        lineNo: 9,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 10,
          column: 6,
        },
        endPos: {
          line: 10,
          column: 7,
        },
        lineNo: 10,
        colOffset: 6,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 10,
          column: 7,
        },
        endPos: {
          line: 10,
          column: 8,
        },
        lineNo: 10,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 11,
          column: 4,
        },
        endPos: {
          line: 11,
          column: 5,
        },
        lineNo: 11,
        colOffset: 4,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 11,
          column: 5,
        },
        endPos: {
          line: 11,
          column: 6,
        },
        lineNo: 11,
        colOffset: 5,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 12,
          column: 2,
        },
        endPos: {
          line: 12,
          column: 3,
        },
        lineNo: 12,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 12,
          column: 4,
        },
        endPos: {
          line: 12,
          column: 7,
        },
        lineNo: 12,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 12,
          column: 8,
        },
        endPos: {
          line: 12,
          column: 9,
        },
        lineNo: 12,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 12,
          column: 10,
        },
        endPos: {
          line: 12,
          column: 12,
        },
        lineNo: 12,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 12,
          column: 13,
        },
        endPos: {
          line: 12,
          column: 18,
        },
        lineNo: 12,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 12,
          column: 18,
        },
        endPos: {
          line: 12,
          column: 19,
        },
        lineNo: 12,
        colOffset: 18,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 12,
          column: 19,
        },
        endPos: {
          line: 12,
          column: 20,
        },
        lineNo: 12,
        colOffset: 19,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'len',
        startPos: {
          line: 13,
          column: 4,
        },
        endPos: {
          line: 13,
          column: 7,
        },
        lineNo: 13,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 13,
          column: 7,
        },
        endPos: {
          line: 13,
          column: 8,
        },
        lineNo: 13,
        colOffset: 7,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 13,
          column: 8,
        },
        endPos: {
          line: 13,
          column: 9,
        },
        lineNo: 13,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 14,
          column: 6,
        },
        endPos: {
          line: 14,
          column: 7,
        },
        lineNo: 14,
        colOffset: 6,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 14,
          column: 7,
        },
        endPos: {
          line: 14,
          column: 8,
        },
        lineNo: 14,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 15,
          column: 8,
        },
        endPos: {
          line: 15,
          column: 9,
        },
        lineNo: 15,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 15,
          column: 10,
        },
        endPos: {
          line: 15,
          column: 13,
        },
        lineNo: 15,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 15,
          column: 14,
        },
        endPos: {
          line: 15,
          column: 15,
        },
        lineNo: 15,
        colOffset: 14,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 15,
          column: 16,
        },
        endPos: {
          line: 15,
          column: 18,
        },
        lineNo: 15,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 15,
          column: 19,
        },
        endPos: {
          line: 15,
          column: 27,
        },
        lineNo: 15,
        colOffset: 19,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 15,
          column: 28,
        },
        endPos: {
          line: 15,
          column: 30,
        },
        lineNo: 15,
        colOffset: 28,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'condition1',
        startPos: {
          line: 15,
          column: 31,
        },
        endPos: {
          line: 15,
          column: 41,
        },
        lineNo: 15,
        colOffset: 31,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 15,
          column: 42,
        },
        endPos: {
          line: 15,
          column: 44,
        },
        lineNo: 15,
        colOffset: 42,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'condition2',
        startPos: {
          line: 15,
          column: 45,
        },
        endPos: {
          line: 15,
          column: 55,
        },
        lineNo: 15,
        colOffset: 45,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 15,
          column: 55,
        },
        endPos: {
          line: 15,
          column: 56,
        },
        lineNo: 15,
        colOffset: 55,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 16,
          column: 6,
        },
        endPos: {
          line: 16,
          column: 7,
        },
        lineNo: 16,
        colOffset: 6,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 16,
          column: 7,
        },
        endPos: {
          line: 16,
          column: 8,
        },
        lineNo: 16,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 17,
          column: 4,
        },
        endPos: {
          line: 17,
          column: 5,
        },
        lineNo: 17,
        colOffset: 4,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 17,
          column: 5,
        },
        endPos: {
          line: 17,
          column: 6,
        },
        lineNo: 17,
        colOffset: 5,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 18,
          column: 2,
        },
        endPos: {
          line: 18,
          column: 3,
        },
        lineNo: 18,
        colOffset: 2,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 18,
          column: 3,
        },
        endPos: {
          line: 18,
          column: 4,
        },
        lineNo: 18,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 19,
          column: 0,
        },
        endPos: {
          line: 19,
          column: 1,
        },
        lineNo: 19,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 19,
          column: 1,
        },
        endPos: {
          line: 19,
          column: 2,
        },
        lineNo: 19,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 20,
          column: 0,
        },
        endPos: {
          line: 20,
          column: 0,
        },
        lineNo: 20,
        colOffset: 0,
      },
    ],
  },
];
