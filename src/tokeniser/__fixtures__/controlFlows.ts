import {TestCase} from './types';

export const CONTROL_FLOW_FIXTURES: TestCase[] = [
  {
    input: `if True:
  pass`,
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
        value: 'if',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'True',
        startPos: {
          line: 1,
          column: 3,
        },
        endPos: {
          line: 1,
          column: 7,
        },
        lineNo: 1,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '  ',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 2,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'pass',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 6,
        },
        lineNo: 2,
        colOffset: 2,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
    input: `while x < 10:
    x += 1
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
        value: 'while',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 5,
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
        kind: 'LESS',
        value: '<',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '10',
        startPos: {
          line: 1,
          column: 10,
        },
        endPos: {
          line: 1,
          column: 12,
        },
        lineNo: 1,
        colOffset: 10,
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 4,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'OP',
        kind: 'PLUSEQUAL',
        value: '+=',
        startPos: {
          line: 2,
          column: 6,
        },
        endPos: {
          line: 2,
          column: 8,
        },
        lineNo: 2,
        colOffset: 6,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 10,
        },
        endPos: {
          line: 2,
          column: 11,
        },
        lineNo: 2,
        colOffset: 10,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
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
    input: `if 3 @ 24.2 is 6:
  go()
else:
  stop('now')
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
        value: 'if',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
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
        type: 'OP',
        kind: 'AT',
        value: '@',
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
        value: '24.2',
        startPos: {
          line: 1,
          column: 7,
        },
        endPos: {
          line: 1,
          column: 11,
        },
        lineNo: 1,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'is',
        startPos: {
          line: 1,
          column: 12,
        },
        endPos: {
          line: 1,
          column: 14,
        },
        lineNo: 1,
        colOffset: 12,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '6',
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
        kind: 'COLON',
        value: ':',
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
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '  ',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 2,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'go',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 4,
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'else',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 4,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '  ',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 2,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'stop',
        startPos: {
          line: 4,
          column: 2,
        },
        endPos: {
          line: 4,
          column: 6,
        },
        lineNo: 4,
        colOffset: 2,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 4,
          column: 6,
        },
        endPos: {
          line: 4,
          column: 7,
        },
        lineNo: 4,
        colOffset: 6,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: "'now'",
        startPos: {
          line: 4,
          column: 7,
        },
        endPos: {
          line: 4,
          column: 12,
        },
        lineNo: 4,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
    input: `for x in range(1000 ** 1000):
  while True is not False:
    while False is not True:
      print("Never gonna give you up, never gonna let you down")`,
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
        value: 'for',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 3,
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
        value: 'in',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 8,
        },
        lineNo: 1,
        colOffset: 6,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 14,
        },
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1000',
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 19,
        },
        lineNo: 1,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 1,
          column: 20,
        },
        endPos: {
          line: 1,
          column: 22,
        },
        lineNo: 1,
        colOffset: 20,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1000',
        startPos: {
          line: 1,
          column: 23,
        },
        endPos: {
          line: 1,
          column: 27,
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 28,
        },
        endPos: {
          line: 1,
          column: 29,
        },
        lineNo: 1,
        colOffset: 28,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '  ',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 2,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'while',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 7,
        },
        lineNo: 2,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'True',
        startPos: {
          line: 2,
          column: 8,
        },
        endPos: {
          line: 2,
          column: 12,
        },
        lineNo: 2,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'is',
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
        value: 'not',
        startPos: {
          line: 2,
          column: 16,
        },
        endPos: {
          line: 2,
          column: 19,
        },
        lineNo: 2,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'False',
        startPos: {
          line: 2,
          column: 20,
        },
        endPos: {
          line: 2,
          column: 25,
        },
        lineNo: 2,
        colOffset: 20,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 25,
        },
        endPos: {
          line: 2,
          column: 26,
        },
        lineNo: 2,
        colOffset: 25,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 26,
        },
        endPos: {
          line: 2,
          column: 27,
        },
        lineNo: 2,
        colOffset: 26,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 4,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'while',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 9,
        },
        lineNo: 3,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'False',
        startPos: {
          line: 3,
          column: 10,
        },
        endPos: {
          line: 3,
          column: 15,
        },
        lineNo: 3,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'is',
        startPos: {
          line: 3,
          column: 16,
        },
        endPos: {
          line: 3,
          column: 18,
        },
        lineNo: 3,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'not',
        startPos: {
          line: 3,
          column: 19,
        },
        endPos: {
          line: 3,
          column: 22,
        },
        lineNo: 3,
        colOffset: 19,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'True',
        startPos: {
          line: 3,
          column: 23,
        },
        endPos: {
          line: 3,
          column: 27,
        },
        lineNo: 3,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '      ',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 6,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 4,
          column: 6,
        },
        endPos: {
          line: 4,
          column: 11,
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
          column: 11,
        },
        endPos: {
          line: 4,
          column: 12,
        },
        lineNo: 4,
        colOffset: 11,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Never gonna give you up, never gonna let you down"',
        startPos: {
          line: 4,
          column: 12,
        },
        endPos: {
          line: 4,
          column: 63,
        },
        lineNo: 4,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 4,
          column: 63,
        },
        endPos: {
          line: 4,
          column: 64,
        },
        lineNo: 4,
        colOffset: 63,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 4,
          column: 64,
        },
        endPos: {
          line: 4,
          column: 65,
        },
        lineNo: 4,
        colOffset: 64,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
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
      {
        type: 'DEDENT',
        kind: 'DEDENT',
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
      {
        type: 'DEDENT',
        kind: 'DEDENT',
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
    input: `if bear.is_home():
    if bear.is_hungry() and cave.has_food():
        for food in cave.foods():
            bear.eat(food)

            if bear.is_full():
                break
    elif bear.is_hungry() and not cave.has_food():
        bear.search_for_food()

        if bear.cannot_find_food({"timeout": "1 hour"}):
            bear.go_home()
    else:
        bear.sleep()

        while bear.is_sleeping():
            bear.dream()
else:
    bear.go_home()
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
        value: 'if',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 2,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 1,
          column: 3,
        },
        endPos: {
          line: 1,
          column: 7,
        },
        lineNo: 1,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        value: 'is_home',
        startPos: {
          line: 1,
          column: 8,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 4,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 6,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 2,
          column: 7,
        },
        endPos: {
          line: 2,
          column: 11,
        },
        lineNo: 2,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        value: 'is_hungry',
        startPos: {
          line: 2,
          column: 12,
        },
        endPos: {
          line: 2,
          column: 21,
        },
        lineNo: 2,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 2,
          column: 21,
        },
        endPos: {
          line: 2,
          column: 22,
        },
        lineNo: 2,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 22,
        },
        endPos: {
          line: 2,
          column: 23,
        },
        lineNo: 2,
        colOffset: 22,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'and',
        startPos: {
          line: 2,
          column: 24,
        },
        endPos: {
          line: 2,
          column: 27,
        },
        lineNo: 2,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'cave',
        startPos: {
          line: 2,
          column: 28,
        },
        endPos: {
          line: 2,
          column: 32,
        },
        lineNo: 2,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 2,
          column: 32,
        },
        endPos: {
          line: 2,
          column: 33,
        },
        lineNo: 2,
        colOffset: 32,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'has_food',
        startPos: {
          line: 2,
          column: 33,
        },
        endPos: {
          line: 2,
          column: 41,
        },
        lineNo: 2,
        colOffset: 33,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 2,
          column: 41,
        },
        endPos: {
          line: 2,
          column: 42,
        },
        lineNo: 2,
        colOffset: 41,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 42,
        },
        endPos: {
          line: 2,
          column: 43,
        },
        lineNo: 2,
        colOffset: 42,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 43,
        },
        endPos: {
          line: 2,
          column: 44,
        },
        lineNo: 2,
        colOffset: 43,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 44,
        },
        endPos: {
          line: 2,
          column: 45,
        },
        lineNo: 2,
        colOffset: 44,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 8,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 11,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'food',
        startPos: {
          line: 3,
          column: 12,
        },
        endPos: {
          line: 3,
          column: 16,
        },
        lineNo: 3,
        colOffset: 12,
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
        value: 'cave',
        startPos: {
          line: 3,
          column: 20,
        },
        endPos: {
          line: 3,
          column: 24,
        },
        lineNo: 3,
        colOffset: 20,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 3,
          column: 24,
        },
        endPos: {
          line: 3,
          column: 25,
        },
        lineNo: 3,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'foods',
        startPos: {
          line: 3,
          column: 25,
        },
        endPos: {
          line: 3,
          column: 30,
        },
        lineNo: 3,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 3,
          column: 30,
        },
        endPos: {
          line: 3,
          column: 31,
        },
        lineNo: 3,
        colOffset: 30,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 3,
          column: 31,
        },
        endPos: {
          line: 3,
          column: 32,
        },
        lineNo: 3,
        colOffset: 31,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 3,
          column: 32,
        },
        endPos: {
          line: 3,
          column: 33,
        },
        lineNo: 3,
        colOffset: 32,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 3,
          column: 33,
        },
        endPos: {
          line: 3,
          column: 34,
        },
        lineNo: 3,
        colOffset: 33,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '            ',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 12,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 4,
          column: 12,
        },
        endPos: {
          line: 4,
          column: 16,
        },
        lineNo: 4,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 4,
          column: 16,
        },
        endPos: {
          line: 4,
          column: 17,
        },
        lineNo: 4,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'eat',
        startPos: {
          line: 4,
          column: 17,
        },
        endPos: {
          line: 4,
          column: 20,
        },
        lineNo: 4,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'food',
        startPos: {
          line: 4,
          column: 21,
        },
        endPos: {
          line: 4,
          column: 25,
        },
        lineNo: 4,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 4,
          column: 25,
        },
        endPos: {
          line: 4,
          column: 26,
        },
        lineNo: 4,
        colOffset: 25,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 26,
        },
        endPos: {
          line: 4,
          column: 27,
        },
        lineNo: 4,
        colOffset: 26,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 6,
          column: 12,
        },
        endPos: {
          line: 6,
          column: 14,
        },
        lineNo: 6,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 6,
          column: 15,
        },
        endPos: {
          line: 6,
          column: 19,
        },
        lineNo: 6,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 6,
          column: 19,
        },
        endPos: {
          line: 6,
          column: 20,
        },
        lineNo: 6,
        colOffset: 19,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'is_full',
        startPos: {
          line: 6,
          column: 20,
        },
        endPos: {
          line: 6,
          column: 27,
        },
        lineNo: 6,
        colOffset: 20,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 6,
          column: 27,
        },
        endPos: {
          line: 6,
          column: 28,
        },
        lineNo: 6,
        colOffset: 27,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 6,
          column: 28,
        },
        endPos: {
          line: 6,
          column: 29,
        },
        lineNo: 6,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 6,
          column: 29,
        },
        endPos: {
          line: 6,
          column: 30,
        },
        lineNo: 6,
        colOffset: 29,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 6,
          column: 30,
        },
        endPos: {
          line: 6,
          column: 31,
        },
        lineNo: 6,
        colOffset: 30,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '                ',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 16,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'break',
        startPos: {
          line: 7,
          column: 16,
        },
        endPos: {
          line: 7,
          column: 21,
        },
        lineNo: 7,
        colOffset: 16,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 7,
          column: 21,
        },
        endPos: {
          line: 7,
          column: 22,
        },
        lineNo: 7,
        colOffset: 21,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 8,
          column: 4,
        },
        endPos: {
          line: 8,
          column: 4,
        },
        lineNo: 8,
        colOffset: 4,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 8,
          column: 4,
        },
        endPos: {
          line: 8,
          column: 4,
        },
        lineNo: 8,
        colOffset: 4,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 8,
          column: 4,
        },
        endPos: {
          line: 8,
          column: 4,
        },
        lineNo: 8,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'elif',
        startPos: {
          line: 8,
          column: 4,
        },
        endPos: {
          line: 8,
          column: 8,
        },
        lineNo: 8,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 8,
          column: 9,
        },
        endPos: {
          line: 8,
          column: 13,
        },
        lineNo: 8,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 8,
          column: 13,
        },
        endPos: {
          line: 8,
          column: 14,
        },
        lineNo: 8,
        colOffset: 13,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'is_hungry',
        startPos: {
          line: 8,
          column: 14,
        },
        endPos: {
          line: 8,
          column: 23,
        },
        lineNo: 8,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 8,
          column: 23,
        },
        endPos: {
          line: 8,
          column: 24,
        },
        lineNo: 8,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 8,
          column: 24,
        },
        endPos: {
          line: 8,
          column: 25,
        },
        lineNo: 8,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'and',
        startPos: {
          line: 8,
          column: 26,
        },
        endPos: {
          line: 8,
          column: 29,
        },
        lineNo: 8,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'not',
        startPos: {
          line: 8,
          column: 30,
        },
        endPos: {
          line: 8,
          column: 33,
        },
        lineNo: 8,
        colOffset: 30,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'cave',
        startPos: {
          line: 8,
          column: 34,
        },
        endPos: {
          line: 8,
          column: 38,
        },
        lineNo: 8,
        colOffset: 34,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 8,
          column: 38,
        },
        endPos: {
          line: 8,
          column: 39,
        },
        lineNo: 8,
        colOffset: 38,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'has_food',
        startPos: {
          line: 8,
          column: 39,
        },
        endPos: {
          line: 8,
          column: 47,
        },
        lineNo: 8,
        colOffset: 39,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 8,
          column: 47,
        },
        endPos: {
          line: 8,
          column: 48,
        },
        lineNo: 8,
        colOffset: 47,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 8,
          column: 48,
        },
        endPos: {
          line: 8,
          column: 49,
        },
        lineNo: 8,
        colOffset: 48,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 8,
          column: 49,
        },
        endPos: {
          line: 8,
          column: 50,
        },
        lineNo: 8,
        colOffset: 49,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 8,
          column: 50,
        },
        endPos: {
          line: 8,
          column: 51,
        },
        lineNo: 8,
        colOffset: 50,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 9,
          column: 0,
        },
        endPos: {
          line: 9,
          column: 8,
        },
        lineNo: 9,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 9,
          column: 8,
        },
        endPos: {
          line: 9,
          column: 12,
        },
        lineNo: 9,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 9,
          column: 12,
        },
        endPos: {
          line: 9,
          column: 13,
        },
        lineNo: 9,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'search_for_food',
        startPos: {
          line: 9,
          column: 13,
        },
        endPos: {
          line: 9,
          column: 28,
        },
        lineNo: 9,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 9,
          column: 28,
        },
        endPos: {
          line: 9,
          column: 29,
        },
        lineNo: 9,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 9,
          column: 29,
        },
        endPos: {
          line: 9,
          column: 30,
        },
        lineNo: 9,
        colOffset: 29,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 9,
          column: 30,
        },
        endPos: {
          line: 9,
          column: 31,
        },
        lineNo: 9,
        colOffset: 30,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 10,
          column: 0,
        },
        endPos: {
          line: 10,
          column: 1,
        },
        lineNo: 10,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 11,
          column: 8,
        },
        endPos: {
          line: 11,
          column: 10,
        },
        lineNo: 11,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 11,
          column: 11,
        },
        endPos: {
          line: 11,
          column: 15,
        },
        lineNo: 11,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 11,
          column: 15,
        },
        endPos: {
          line: 11,
          column: 16,
        },
        lineNo: 11,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'cannot_find_food',
        startPos: {
          line: 11,
          column: 16,
        },
        endPos: {
          line: 11,
          column: 32,
        },
        lineNo: 11,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 11,
          column: 32,
        },
        endPos: {
          line: 11,
          column: 33,
        },
        lineNo: 11,
        colOffset: 32,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 11,
          column: 33,
        },
        endPos: {
          line: 11,
          column: 34,
        },
        lineNo: 11,
        colOffset: 33,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"timeout"',
        startPos: {
          line: 11,
          column: 34,
        },
        endPos: {
          line: 11,
          column: 43,
        },
        lineNo: 11,
        colOffset: 34,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 11,
          column: 43,
        },
        endPos: {
          line: 11,
          column: 44,
        },
        lineNo: 11,
        colOffset: 43,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"1 hour"',
        startPos: {
          line: 11,
          column: 45,
        },
        endPos: {
          line: 11,
          column: 53,
        },
        lineNo: 11,
        colOffset: 45,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 11,
          column: 53,
        },
        endPos: {
          line: 11,
          column: 54,
        },
        lineNo: 11,
        colOffset: 53,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 11,
          column: 54,
        },
        endPos: {
          line: 11,
          column: 55,
        },
        lineNo: 11,
        colOffset: 54,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 11,
          column: 55,
        },
        endPos: {
          line: 11,
          column: 56,
        },
        lineNo: 11,
        colOffset: 55,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 11,
          column: 56,
        },
        endPos: {
          line: 11,
          column: 57,
        },
        lineNo: 11,
        colOffset: 56,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '            ',
        startPos: {
          line: 12,
          column: 0,
        },
        endPos: {
          line: 12,
          column: 12,
        },
        lineNo: 12,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 12,
          column: 12,
        },
        endPos: {
          line: 12,
          column: 16,
        },
        lineNo: 12,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 12,
          column: 16,
        },
        endPos: {
          line: 12,
          column: 17,
        },
        lineNo: 12,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'go_home',
        startPos: {
          line: 12,
          column: 17,
        },
        endPos: {
          line: 12,
          column: 24,
        },
        lineNo: 12,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 12,
          column: 24,
        },
        endPos: {
          line: 12,
          column: 25,
        },
        lineNo: 12,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 12,
          column: 25,
        },
        endPos: {
          line: 12,
          column: 26,
        },
        lineNo: 12,
        colOffset: 25,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 12,
          column: 26,
        },
        endPos: {
          line: 12,
          column: 27,
        },
        lineNo: 12,
        colOffset: 26,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 13,
          column: 4,
        },
        endPos: {
          line: 13,
          column: 4,
        },
        lineNo: 13,
        colOffset: 4,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 13,
          column: 4,
        },
        endPos: {
          line: 13,
          column: 4,
        },
        lineNo: 13,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'else',
        startPos: {
          line: 13,
          column: 4,
        },
        endPos: {
          line: 13,
          column: 8,
        },
        lineNo: 13,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 13,
          column: 9,
        },
        endPos: {
          line: 13,
          column: 10,
        },
        lineNo: 13,
        colOffset: 9,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 14,
          column: 0,
        },
        endPos: {
          line: 14,
          column: 8,
        },
        lineNo: 14,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 14,
          column: 8,
        },
        endPos: {
          line: 14,
          column: 12,
        },
        lineNo: 14,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 14,
          column: 12,
        },
        endPos: {
          line: 14,
          column: 13,
        },
        lineNo: 14,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'sleep',
        startPos: {
          line: 14,
          column: 13,
        },
        endPos: {
          line: 14,
          column: 18,
        },
        lineNo: 14,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 14,
          column: 18,
        },
        endPos: {
          line: 14,
          column: 19,
        },
        lineNo: 14,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 14,
          column: 19,
        },
        endPos: {
          line: 14,
          column: 20,
        },
        lineNo: 14,
        colOffset: 19,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 14,
          column: 20,
        },
        endPos: {
          line: 14,
          column: 21,
        },
        lineNo: 14,
        colOffset: 20,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 15,
          column: 0,
        },
        endPos: {
          line: 15,
          column: 1,
        },
        lineNo: 15,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'while',
        startPos: {
          line: 16,
          column: 8,
        },
        endPos: {
          line: 16,
          column: 13,
        },
        lineNo: 16,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 16,
          column: 14,
        },
        endPos: {
          line: 16,
          column: 18,
        },
        lineNo: 16,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 16,
          column: 18,
        },
        endPos: {
          line: 16,
          column: 19,
        },
        lineNo: 16,
        colOffset: 18,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'is_sleeping',
        startPos: {
          line: 16,
          column: 19,
        },
        endPos: {
          line: 16,
          column: 30,
        },
        lineNo: 16,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 16,
          column: 30,
        },
        endPos: {
          line: 16,
          column: 31,
        },
        lineNo: 16,
        colOffset: 30,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 16,
          column: 31,
        },
        endPos: {
          line: 16,
          column: 32,
        },
        lineNo: 16,
        colOffset: 31,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 16,
          column: 32,
        },
        endPos: {
          line: 16,
          column: 33,
        },
        lineNo: 16,
        colOffset: 32,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 16,
          column: 33,
        },
        endPos: {
          line: 16,
          column: 34,
        },
        lineNo: 16,
        colOffset: 33,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '            ',
        startPos: {
          line: 17,
          column: 0,
        },
        endPos: {
          line: 17,
          column: 12,
        },
        lineNo: 17,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 17,
          column: 12,
        },
        endPos: {
          line: 17,
          column: 16,
        },
        lineNo: 17,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 17,
          column: 16,
        },
        endPos: {
          line: 17,
          column: 17,
        },
        lineNo: 17,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'dream',
        startPos: {
          line: 17,
          column: 17,
        },
        endPos: {
          line: 17,
          column: 22,
        },
        lineNo: 17,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 17,
          column: 22,
        },
        endPos: {
          line: 17,
          column: 23,
        },
        lineNo: 17,
        colOffset: 22,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 17,
          column: 23,
        },
        endPos: {
          line: 17,
          column: 24,
        },
        lineNo: 17,
        colOffset: 23,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 17,
          column: 24,
        },
        endPos: {
          line: 17,
          column: 25,
        },
        lineNo: 17,
        colOffset: 24,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 18,
          column: 0,
        },
        endPos: {
          line: 18,
          column: 0,
        },
        lineNo: 18,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 18,
          column: 0,
        },
        endPos: {
          line: 18,
          column: 0,
        },
        lineNo: 18,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 18,
          column: 0,
        },
        endPos: {
          line: 18,
          column: 0,
        },
        lineNo: 18,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'else',
        startPos: {
          line: 18,
          column: 0,
        },
        endPos: {
          line: 18,
          column: 4,
        },
        lineNo: 18,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 18,
          column: 4,
        },
        endPos: {
          line: 18,
          column: 5,
        },
        lineNo: 18,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 18,
          column: 5,
        },
        endPos: {
          line: 18,
          column: 6,
        },
        lineNo: 18,
        colOffset: 5,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 19,
          column: 0,
        },
        endPos: {
          line: 19,
          column: 4,
        },
        lineNo: 19,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bear',
        startPos: {
          line: 19,
          column: 4,
        },
        endPos: {
          line: 19,
          column: 8,
        },
        lineNo: 19,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 19,
          column: 8,
        },
        endPos: {
          line: 19,
          column: 9,
        },
        lineNo: 19,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'go_home',
        startPos: {
          line: 19,
          column: 9,
        },
        endPos: {
          line: 19,
          column: 16,
        },
        lineNo: 19,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 19,
          column: 16,
        },
        endPos: {
          line: 19,
          column: 17,
        },
        lineNo: 19,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 19,
          column: 17,
        },
        endPos: {
          line: 19,
          column: 18,
        },
        lineNo: 19,
        colOffset: 17,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 19,
          column: 18,
        },
        endPos: {
          line: 19,
          column: 19,
        },
        lineNo: 19,
        colOffset: 18,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
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
