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
  {
    input: `try:
    do_something()
except Exception:
    do_something_else()
except SecondException as e:
    do_a_third_thing(e)`,
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
        value: 'try',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'do_something',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 16,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 2,
          column: 16,
        },
        endPos: {
          line: 2,
          column: 17,
        },
        lineNo: 2,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 17,
        },
        endPos: {
          line: 2,
          column: 18,
        },
        lineNo: 2,
        colOffset: 17,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 18,
        },
        endPos: {
          line: 2,
          column: 19,
        },
        lineNo: 2,
        colOffset: 18,
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
        value: 'except',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 6,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Exception',
        startPos: {
          line: 3,
          column: 7,
        },
        endPos: {
          line: 3,
          column: 16,
        },
        lineNo: 3,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 3,
          column: 16,
        },
        endPos: {
          line: 3,
          column: 17,
        },
        lineNo: 3,
        colOffset: 16,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 3,
          column: 17,
        },
        endPos: {
          line: 3,
          column: 18,
        },
        lineNo: 3,
        colOffset: 17,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 4,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'do_something_else',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 21,
        },
        lineNo: 4,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 4,
          column: 22,
        },
        endPos: {
          line: 4,
          column: 23,
        },
        lineNo: 4,
        colOffset: 22,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 23,
        },
        endPos: {
          line: 4,
          column: 24,
        },
        lineNo: 4,
        colOffset: 23,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'except',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 6,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'SecondException',
        startPos: {
          line: 5,
          column: 7,
        },
        endPos: {
          line: 5,
          column: 22,
        },
        lineNo: 5,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'as',
        startPos: {
          line: 5,
          column: 23,
        },
        endPos: {
          line: 5,
          column: 25,
        },
        lineNo: 5,
        colOffset: 23,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'e',
        startPos: {
          line: 5,
          column: 26,
        },
        endPos: {
          line: 5,
          column: 27,
        },
        lineNo: 5,
        colOffset: 26,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 5,
          column: 27,
        },
        endPos: {
          line: 5,
          column: 28,
        },
        lineNo: 5,
        colOffset: 27,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 28,
        },
        endPos: {
          line: 5,
          column: 29,
        },
        lineNo: 5,
        colOffset: 28,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 4,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'do_a_third_thing',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 20,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 6,
          column: 20,
        },
        endPos: {
          line: 6,
          column: 21,
        },
        lineNo: 6,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'e',
        startPos: {
          line: 6,
          column: 21,
        },
        endPos: {
          line: 6,
          column: 22,
        },
        lineNo: 6,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 6,
          column: 22,
        },
        endPos: {
          line: 6,
          column: 23,
        },
        lineNo: 6,
        colOffset: 22,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 6,
          column: 23,
        },
        endPos: {
          line: 6,
          column: 24,
        },
        lineNo: 6,
        colOffset: 23,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 0,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 0,
        },
        lineNo: 7,
        colOffset: 0,
      },
    ],
  },
  {
    input: `try:
  do_something()
except Exception:
  if condition:
    do_something_else()


  else:
    do_nothing(x for x in iterable)
finally:
  while rand() > 2:


    print("hello")

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
        value: 'try',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'do_something',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 14,
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
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 15,
        },
        endPos: {
          line: 2,
          column: 16,
        },
        lineNo: 2,
        colOffset: 15,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 16,
        },
        endPos: {
          line: 2,
          column: 17,
        },
        lineNo: 2,
        colOffset: 16,
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
        value: 'except',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 6,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Exception',
        startPos: {
          line: 3,
          column: 7,
        },
        endPos: {
          line: 3,
          column: 16,
        },
        lineNo: 3,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 3,
          column: 16,
        },
        endPos: {
          line: 3,
          column: 17,
        },
        lineNo: 3,
        colOffset: 16,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 3,
          column: 17,
        },
        endPos: {
          line: 3,
          column: 18,
        },
        lineNo: 3,
        colOffset: 17,
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
        value: 'if',
        startPos: {
          line: 4,
          column: 2,
        },
        endPos: {
          line: 4,
          column: 4,
        },
        lineNo: 4,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'condition',
        startPos: {
          line: 4,
          column: 5,
        },
        endPos: {
          line: 4,
          column: 14,
        },
        lineNo: 4,
        colOffset: 5,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 4,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'do_something_else',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 21,
        },
        lineNo: 5,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 5,
          column: 22,
        },
        endPos: {
          line: 5,
          column: 23,
        },
        lineNo: 5,
        colOffset: 22,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 23,
        },
        endPos: {
          line: 5,
          column: 24,
        },
        lineNo: 5,
        colOffset: 23,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 1,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 1,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 8,
          column: 2,
        },
        endPos: {
          line: 8,
          column: 2,
        },
        lineNo: 8,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'else',
        startPos: {
          line: 8,
          column: 2,
        },
        endPos: {
          line: 8,
          column: 6,
        },
        lineNo: 8,
        colOffset: 2,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 8,
          column: 6,
        },
        endPos: {
          line: 8,
          column: 7,
        },
        lineNo: 8,
        colOffset: 6,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 8,
          column: 7,
        },
        endPos: {
          line: 8,
          column: 8,
        },
        lineNo: 8,
        colOffset: 7,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 9,
          column: 0,
        },
        endPos: {
          line: 9,
          column: 4,
        },
        lineNo: 9,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'do_nothing',
        startPos: {
          line: 9,
          column: 4,
        },
        endPos: {
          line: 9,
          column: 14,
        },
        lineNo: 9,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 9,
          column: 14,
        },
        endPos: {
          line: 9,
          column: 15,
        },
        lineNo: 9,
        colOffset: 14,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 9,
          column: 15,
        },
        endPos: {
          line: 9,
          column: 16,
        },
        lineNo: 9,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 9,
          column: 17,
        },
        endPos: {
          line: 9,
          column: 20,
        },
        lineNo: 9,
        colOffset: 17,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 9,
          column: 21,
        },
        endPos: {
          line: 9,
          column: 22,
        },
        lineNo: 9,
        colOffset: 21,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 9,
          column: 23,
        },
        endPos: {
          line: 9,
          column: 25,
        },
        lineNo: 9,
        colOffset: 23,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 9,
          column: 26,
        },
        endPos: {
          line: 9,
          column: 34,
        },
        lineNo: 9,
        colOffset: 26,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 9,
          column: 34,
        },
        endPos: {
          line: 9,
          column: 35,
        },
        lineNo: 9,
        colOffset: 34,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 9,
          column: 35,
        },
        endPos: {
          line: 9,
          column: 36,
        },
        lineNo: 9,
        colOffset: 35,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 10,
          column: 0,
        },
        endPos: {
          line: 10,
          column: 0,
        },
        lineNo: 10,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 10,
          column: 0,
        },
        endPos: {
          line: 10,
          column: 0,
        },
        lineNo: 10,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'finally',
        startPos: {
          line: 10,
          column: 0,
        },
        endPos: {
          line: 10,
          column: 7,
        },
        lineNo: 10,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 10,
          column: 8,
        },
        endPos: {
          line: 10,
          column: 9,
        },
        lineNo: 10,
        colOffset: 8,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '  ',
        startPos: {
          line: 11,
          column: 0,
        },
        endPos: {
          line: 11,
          column: 2,
        },
        lineNo: 11,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'while',
        startPos: {
          line: 11,
          column: 2,
        },
        endPos: {
          line: 11,
          column: 7,
        },
        lineNo: 11,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'rand',
        startPos: {
          line: 11,
          column: 8,
        },
        endPos: {
          line: 11,
          column: 12,
        },
        lineNo: 11,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 11,
          column: 12,
        },
        endPos: {
          line: 11,
          column: 13,
        },
        lineNo: 11,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 11,
          column: 13,
        },
        endPos: {
          line: 11,
          column: 14,
        },
        lineNo: 11,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'GREATER',
        value: '>',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 11,
          column: 17,
        },
        endPos: {
          line: 11,
          column: 18,
        },
        lineNo: 11,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 11,
          column: 18,
        },
        endPos: {
          line: 11,
          column: 19,
        },
        lineNo: 11,
        colOffset: 18,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 11,
          column: 19,
        },
        endPos: {
          line: 11,
          column: 20,
        },
        lineNo: 11,
        colOffset: 19,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 12,
          column: 0,
        },
        endPos: {
          line: 12,
          column: 1,
        },
        lineNo: 12,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 13,
          column: 0,
        },
        endPos: {
          line: 13,
          column: 1,
        },
        lineNo: 13,
        colOffset: 0,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 14,
          column: 0,
        },
        endPos: {
          line: 14,
          column: 4,
        },
        lineNo: 14,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 14,
          column: 4,
        },
        endPos: {
          line: 14,
          column: 9,
        },
        lineNo: 14,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 14,
          column: 9,
        },
        endPos: {
          line: 14,
          column: 10,
        },
        lineNo: 14,
        colOffset: 9,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"hello"',
        startPos: {
          line: 14,
          column: 10,
        },
        endPos: {
          line: 14,
          column: 17,
        },
        lineNo: 14,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 14,
          column: 17,
        },
        endPos: {
          line: 14,
          column: 18,
        },
        lineNo: 14,
        colOffset: 17,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 16,
          column: 0,
        },
        endPos: {
          line: 16,
          column: 0,
        },
        lineNo: 16,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 16,
          column: 0,
        },
        endPos: {
          line: 16,
          column: 0,
        },
        lineNo: 16,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 16,
          column: 0,
        },
        endPos: {
          line: 16,
          column: 0,
        },
        lineNo: 16,
        colOffset: 0,
      },
    ],
  },
  {
    input: `mother = "Mum..."

try:
  ignore_call()
except Exception:
  answer_with(f"""Hi, {mother}""")
else:
  try:
    smash_phone()
  except Exception:
    answer_with(f"""Hi, {mother}""")`,
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
        value: 'mother',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 6,
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
        value: '"Mum..."',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 9,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'try',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 3,
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
          column: 3,
        },
        endPos: {
          line: 3,
          column: 4,
        },
        lineNo: 3,
        colOffset: 3,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'ignore_call',
        startPos: {
          line: 4,
          column: 2,
        },
        endPos: {
          line: 4,
          column: 13,
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
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'except',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 6,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Exception',
        startPos: {
          line: 5,
          column: 7,
        },
        endPos: {
          line: 5,
          column: 16,
        },
        lineNo: 5,
        colOffset: 7,
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 17,
        },
        endPos: {
          line: 5,
          column: 18,
        },
        lineNo: 5,
        colOffset: 17,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '  ',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 2,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'answer_with',
        startPos: {
          line: 6,
          column: 2,
        },
        endPos: {
          line: 6,
          column: 13,
        },
        lineNo: 6,
        colOffset: 2,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 6,
          column: 13,
        },
        endPos: {
          line: 6,
          column: 14,
        },
        lineNo: 6,
        colOffset: 13,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: 'f"""Hi, {mother}"""',
        startPos: {
          line: 6,
          column: 14,
        },
        endPos: {
          line: 6,
          column: 33,
        },
        lineNo: 6,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 6,
          column: 33,
        },
        endPos: {
          line: 6,
          column: 34,
        },
        lineNo: 6,
        colOffset: 33,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 6,
          column: 34,
        },
        endPos: {
          line: 6,
          column: 35,
        },
        lineNo: 6,
        colOffset: 34,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 0,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'else',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 4,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 7,
          column: 4,
        },
        endPos: {
          line: 7,
          column: 5,
        },
        lineNo: 7,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 7,
          column: 5,
        },
        endPos: {
          line: 7,
          column: 6,
        },
        lineNo: 7,
        colOffset: 5,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '  ',
        startPos: {
          line: 8,
          column: 0,
        },
        endPos: {
          line: 8,
          column: 2,
        },
        lineNo: 8,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'try',
        startPos: {
          line: 8,
          column: 2,
        },
        endPos: {
          line: 8,
          column: 5,
        },
        lineNo: 8,
        colOffset: 2,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 8,
          column: 5,
        },
        endPos: {
          line: 8,
          column: 6,
        },
        lineNo: 8,
        colOffset: 5,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 8,
          column: 6,
        },
        endPos: {
          line: 8,
          column: 7,
        },
        lineNo: 8,
        colOffset: 6,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 9,
          column: 0,
        },
        endPos: {
          line: 9,
          column: 4,
        },
        lineNo: 9,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'smash_phone',
        startPos: {
          line: 9,
          column: 4,
        },
        endPos: {
          line: 9,
          column: 15,
        },
        lineNo: 9,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 9,
          column: 15,
        },
        endPos: {
          line: 9,
          column: 16,
        },
        lineNo: 9,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 9,
          column: 16,
        },
        endPos: {
          line: 9,
          column: 17,
        },
        lineNo: 9,
        colOffset: 16,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 9,
          column: 17,
        },
        endPos: {
          line: 9,
          column: 18,
        },
        lineNo: 9,
        colOffset: 17,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 10,
          column: 2,
        },
        endPos: {
          line: 10,
          column: 2,
        },
        lineNo: 10,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'except',
        startPos: {
          line: 10,
          column: 2,
        },
        endPos: {
          line: 10,
          column: 8,
        },
        lineNo: 10,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Exception',
        startPos: {
          line: 10,
          column: 9,
        },
        endPos: {
          line: 10,
          column: 18,
        },
        lineNo: 10,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 10,
          column: 18,
        },
        endPos: {
          line: 10,
          column: 19,
        },
        lineNo: 10,
        colOffset: 18,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 10,
          column: 19,
        },
        endPos: {
          line: 10,
          column: 20,
        },
        lineNo: 10,
        colOffset: 19,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 11,
          column: 0,
        },
        endPos: {
          line: 11,
          column: 4,
        },
        lineNo: 11,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'answer_with',
        startPos: {
          line: 11,
          column: 4,
        },
        endPos: {
          line: 11,
          column: 15,
        },
        lineNo: 11,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'f"""Hi, {mother}"""',
        startPos: {
          line: 11,
          column: 16,
        },
        endPos: {
          line: 11,
          column: 35,
        },
        lineNo: 11,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 11,
          column: 35,
        },
        endPos: {
          line: 11,
          column: 36,
        },
        lineNo: 11,
        colOffset: 35,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 11,
          column: 36,
        },
        endPos: {
          line: 11,
          column: 37,
        },
        lineNo: 11,
        colOffset: 36,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 12,
          column: 0,
        },
        endPos: {
          line: 12,
          column: 0,
        },
        lineNo: 12,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 12,
          column: 0,
        },
        endPos: {
          line: 12,
          column: 0,
        },
        lineNo: 12,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 12,
          column: 0,
        },
        endPos: {
          line: 12,
          column: 0,
        },
        lineNo: 12,
        colOffset: 0,
      },
    ],
  },
  {
    input: `assert 1 + 1 is 2, "Math is dead. Long live math!"`,
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
        value: 'assert',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 6,
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
        kind: 'PLUS',
        value: '+',
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
        value: '1',
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
        value: 'is',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
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
        kind: 'COMMA',
        value: ',',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"Math is dead. Long live math!"',
        startPos: {
          line: 1,
          column: 19,
        },
        endPos: {
          line: 1,
          column: 50,
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
    input: `weather = "sunny"

if weather == "sunny": print("I should take a walk outside!")
elif weather == "cloudy": print("I'm not sure it will rain. Maybe I will take a walk?")
elif weather == "rainy": print("It is raining. I will stay at home.")
else: print("I don't know what the weather is...")`,
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
        value: 'weather',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 7,
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
        type: 'STRING',
        kind: 'STRING',
        value: '"sunny"',
        startPos: {
          line: 1,
          column: 10,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 10,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 2,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'weather',
        startPos: {
          line: 3,
          column: 3,
        },
        endPos: {
          line: 3,
          column: 10,
        },
        lineNo: 3,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'EQEQUAL',
        value: '==',
        startPos: {
          line: 3,
          column: 11,
        },
        endPos: {
          line: 3,
          column: 13,
        },
        lineNo: 3,
        colOffset: 11,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"sunny"',
        startPos: {
          line: 3,
          column: 14,
        },
        endPos: {
          line: 3,
          column: 21,
        },
        lineNo: 3,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'print',
        startPos: {
          line: 3,
          column: 23,
        },
        endPos: {
          line: 3,
          column: 28,
        },
        lineNo: 3,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"I should take a walk outside!"',
        startPos: {
          line: 3,
          column: 29,
        },
        endPos: {
          line: 3,
          column: 60,
        },
        lineNo: 3,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 3,
          column: 60,
        },
        endPos: {
          line: 3,
          column: 61,
        },
        lineNo: 3,
        colOffset: 60,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 3,
          column: 61,
        },
        endPos: {
          line: 3,
          column: 62,
        },
        lineNo: 3,
        colOffset: 61,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'elif',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 4,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'weather',
        startPos: {
          line: 4,
          column: 5,
        },
        endPos: {
          line: 4,
          column: 12,
        },
        lineNo: 4,
        colOffset: 5,
      },
      {
        type: 'OP',
        kind: 'EQEQUAL',
        value: '==',
        startPos: {
          line: 4,
          column: 13,
        },
        endPos: {
          line: 4,
          column: 15,
        },
        lineNo: 4,
        colOffset: 13,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"cloudy"',
        startPos: {
          line: 4,
          column: 16,
        },
        endPos: {
          line: 4,
          column: 24,
        },
        lineNo: 4,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 4,
          column: 24,
        },
        endPos: {
          line: 4,
          column: 25,
        },
        lineNo: 4,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 4,
          column: 26,
        },
        endPos: {
          line: 4,
          column: 31,
        },
        lineNo: 4,
        colOffset: 26,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 4,
          column: 31,
        },
        endPos: {
          line: 4,
          column: 32,
        },
        lineNo: 4,
        colOffset: 31,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: `"I'm not sure it will rain. Maybe I will take a walk?"`,
        startPos: {
          line: 4,
          column: 32,
        },
        endPos: {
          line: 4,
          column: 86,
        },
        lineNo: 4,
        colOffset: 32,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 4,
          column: 86,
        },
        endPos: {
          line: 4,
          column: 87,
        },
        lineNo: 4,
        colOffset: 86,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 87,
        },
        endPos: {
          line: 4,
          column: 88,
        },
        lineNo: 4,
        colOffset: 87,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'elif',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 4,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'weather',
        startPos: {
          line: 5,
          column: 5,
        },
        endPos: {
          line: 5,
          column: 12,
        },
        lineNo: 5,
        colOffset: 5,
      },
      {
        type: 'OP',
        kind: 'EQEQUAL',
        value: '==',
        startPos: {
          line: 5,
          column: 13,
        },
        endPos: {
          line: 5,
          column: 15,
        },
        lineNo: 5,
        colOffset: 13,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"rainy"',
        startPos: {
          line: 5,
          column: 16,
        },
        endPos: {
          line: 5,
          column: 23,
        },
        lineNo: 5,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 5,
          column: 23,
        },
        endPos: {
          line: 5,
          column: 24,
        },
        lineNo: 5,
        colOffset: 23,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 5,
          column: 25,
        },
        endPos: {
          line: 5,
          column: 30,
        },
        lineNo: 5,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 5,
          column: 30,
        },
        endPos: {
          line: 5,
          column: 31,
        },
        lineNo: 5,
        colOffset: 30,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"It is raining. I will stay at home."',
        startPos: {
          line: 5,
          column: 31,
        },
        endPos: {
          line: 5,
          column: 68,
        },
        lineNo: 5,
        colOffset: 31,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 5,
          column: 68,
        },
        endPos: {
          line: 5,
          column: 69,
        },
        lineNo: 5,
        colOffset: 68,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 69,
        },
        endPos: {
          line: 5,
          column: 70,
        },
        lineNo: 5,
        colOffset: 69,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'else',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 4,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 6,
          column: 6,
        },
        endPos: {
          line: 6,
          column: 11,
        },
        lineNo: 6,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'STRING',
        kind: 'STRING',
        value: `"I don't know what the weather is..."`,
        startPos: {
          line: 6,
          column: 12,
        },
        endPos: {
          line: 6,
          column: 49,
        },
        lineNo: 6,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 6,
          column: 49,
        },
        endPos: {
          line: 6,
          column: 50,
        },
        lineNo: 6,
        colOffset: 49,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 6,
          column: 50,
        },
        endPos: {
          line: 6,
          column: 51,
        },
        lineNo: 6,
        colOffset: 50,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 0,
        },
        lineNo: 7,
        colOffset: 0,
      },
    ],
  },
  {
    input: `if x > 5: print("x is greater than 5")

"Yes" if x > 5 else "No"

if num > 0: return True

for i in range(3): print(i, end=' ')

while count > 0: print(count); count -= 1

if x > 5: print("x > 5"); if x > 8: print("x > 8")

squares = [n**2 for n in numbers if n % 2 == 0]

if x < 15: print("x < 15"); x += 5

if x == 20: pass

try: result = 10 / x
except ZeroDivisionError: print("Division by zero!")`,
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
        value: 'x',
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
        kind: 'GREATER',
        value: '>',
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
        value: '5',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 1,
          column: 10,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 10,
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
        type: 'STRING',
        kind: 'STRING',
        value: '"x is greater than 5"',
        startPos: {
          line: 1,
          column: 16,
        },
        endPos: {
          line: 1,
          column: 37,
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
          column: 37,
        },
        endPos: {
          line: 1,
          column: 38,
        },
        lineNo: 1,
        colOffset: 37,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 38,
        },
        endPos: {
          line: 1,
          column: 39,
        },
        lineNo: 1,
        colOffset: 38,
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
        type: 'STRING',
        kind: 'STRING',
        value: '"Yes"',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 5,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 3,
          column: 6,
        },
        endPos: {
          line: 3,
          column: 8,
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
        kind: 'GREATER',
        value: '>',
        startPos: {
          line: 3,
          column: 11,
        },
        endPos: {
          line: 3,
          column: 12,
        },
        lineNo: 3,
        colOffset: 11,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '5',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'else',
        startPos: {
          line: 3,
          column: 15,
        },
        endPos: {
          line: 3,
          column: 19,
        },
        lineNo: 3,
        colOffset: 15,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"No"',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 2,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'num',
        startPos: {
          line: 5,
          column: 3,
        },
        endPos: {
          line: 5,
          column: 6,
        },
        lineNo: 5,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'GREATER',
        value: '>',
        startPos: {
          line: 5,
          column: 7,
        },
        endPos: {
          line: 5,
          column: 8,
        },
        lineNo: 5,
        colOffset: 7,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 5,
          column: 12,
        },
        endPos: {
          line: 5,
          column: 18,
        },
        lineNo: 5,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'True',
        startPos: {
          line: 5,
          column: 19,
        },
        endPos: {
          line: 5,
          column: 23,
        },
        lineNo: 5,
        colOffset: 19,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 23,
        },
        endPos: {
          line: 5,
          column: 24,
        },
        lineNo: 5,
        colOffset: 23,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 1,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 3,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'i',
        startPos: {
          line: 7,
          column: 4,
        },
        endPos: {
          line: 7,
          column: 5,
        },
        lineNo: 7,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 7,
          column: 6,
        },
        endPos: {
          line: 7,
          column: 8,
        },
        lineNo: 7,
        colOffset: 6,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 7,
          column: 9,
        },
        endPos: {
          line: 7,
          column: 14,
        },
        lineNo: 7,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 7,
          column: 14,
        },
        endPos: {
          line: 7,
          column: 15,
        },
        lineNo: 7,
        colOffset: 14,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
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
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 7,
          column: 16,
        },
        endPos: {
          line: 7,
          column: 17,
        },
        lineNo: 7,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 7,
          column: 17,
        },
        endPos: {
          line: 7,
          column: 18,
        },
        lineNo: 7,
        colOffset: 17,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 7,
          column: 19,
        },
        endPos: {
          line: 7,
          column: 24,
        },
        lineNo: 7,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'i',
        startPos: {
          line: 7,
          column: 25,
        },
        endPos: {
          line: 7,
          column: 26,
        },
        lineNo: 7,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 7,
          column: 26,
        },
        endPos: {
          line: 7,
          column: 27,
        },
        lineNo: 7,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'end',
        startPos: {
          line: 7,
          column: 28,
        },
        endPos: {
          line: 7,
          column: 31,
        },
        lineNo: 7,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 7,
          column: 31,
        },
        endPos: {
          line: 7,
          column: 32,
        },
        lineNo: 7,
        colOffset: 31,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: "' '",
        startPos: {
          line: 7,
          column: 32,
        },
        endPos: {
          line: 7,
          column: 35,
        },
        lineNo: 7,
        colOffset: 32,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'while',
        startPos: {
          line: 9,
          column: 0,
        },
        endPos: {
          line: 9,
          column: 5,
        },
        lineNo: 9,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'count',
        startPos: {
          line: 9,
          column: 6,
        },
        endPos: {
          line: 9,
          column: 11,
        },
        lineNo: 9,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'GREATER',
        value: '>',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
        startPos: {
          line: 9,
          column: 14,
        },
        endPos: {
          line: 9,
          column: 15,
        },
        lineNo: 9,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 9,
          column: 15,
        },
        endPos: {
          line: 9,
          column: 16,
        },
        lineNo: 9,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 9,
          column: 17,
        },
        endPos: {
          line: 9,
          column: 22,
        },
        lineNo: 9,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 9,
          column: 22,
        },
        endPos: {
          line: 9,
          column: 23,
        },
        lineNo: 9,
        colOffset: 22,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'count',
        startPos: {
          line: 9,
          column: 23,
        },
        endPos: {
          line: 9,
          column: 28,
        },
        lineNo: 9,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'SEMI',
        value: ';',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'count',
        startPos: {
          line: 9,
          column: 31,
        },
        endPos: {
          line: 9,
          column: 36,
        },
        lineNo: 9,
        colOffset: 31,
      },
      {
        type: 'OP',
        kind: 'MINEQUAL',
        value: '-=',
        startPos: {
          line: 9,
          column: 37,
        },
        endPos: {
          line: 9,
          column: 39,
        },
        lineNo: 9,
        colOffset: 37,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
        startPos: {
          line: 9,
          column: 40,
        },
        endPos: {
          line: 9,
          column: 41,
        },
        lineNo: 9,
        colOffset: 40,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 9,
          column: 41,
        },
        endPos: {
          line: 9,
          column: 42,
        },
        lineNo: 9,
        colOffset: 41,
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
          column: 0,
        },
        endPos: {
          line: 11,
          column: 2,
        },
        lineNo: 11,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 11,
          column: 3,
        },
        endPos: {
          line: 11,
          column: 4,
        },
        lineNo: 11,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'GREATER',
        value: '>',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '5',
        startPos: {
          line: 11,
          column: 7,
        },
        endPos: {
          line: 11,
          column: 8,
        },
        lineNo: 11,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 11,
          column: 8,
        },
        endPos: {
          line: 11,
          column: 9,
        },
        lineNo: 11,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 11,
          column: 10,
        },
        endPos: {
          line: 11,
          column: 15,
        },
        lineNo: 11,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"x > 5"',
        startPos: {
          line: 11,
          column: 16,
        },
        endPos: {
          line: 11,
          column: 23,
        },
        lineNo: 11,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 11,
          column: 23,
        },
        endPos: {
          line: 11,
          column: 24,
        },
        lineNo: 11,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'SEMI',
        value: ';',
        startPos: {
          line: 11,
          column: 24,
        },
        endPos: {
          line: 11,
          column: 25,
        },
        lineNo: 11,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 11,
          column: 26,
        },
        endPos: {
          line: 11,
          column: 28,
        },
        lineNo: 11,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 11,
          column: 29,
        },
        endPos: {
          line: 11,
          column: 30,
        },
        lineNo: 11,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'GREATER',
        value: '>',
        startPos: {
          line: 11,
          column: 31,
        },
        endPos: {
          line: 11,
          column: 32,
        },
        lineNo: 11,
        colOffset: 31,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '8',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 11,
          column: 34,
        },
        endPos: {
          line: 11,
          column: 35,
        },
        lineNo: 11,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 11,
          column: 36,
        },
        endPos: {
          line: 11,
          column: 41,
        },
        lineNo: 11,
        colOffset: 36,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 11,
          column: 41,
        },
        endPos: {
          line: 11,
          column: 42,
        },
        lineNo: 11,
        colOffset: 41,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"x > 8"',
        startPos: {
          line: 11,
          column: 42,
        },
        endPos: {
          line: 11,
          column: 49,
        },
        lineNo: 11,
        colOffset: 42,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 11,
          column: 49,
        },
        endPos: {
          line: 11,
          column: 50,
        },
        lineNo: 11,
        colOffset: 49,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 11,
          column: 50,
        },
        endPos: {
          line: 11,
          column: 51,
        },
        lineNo: 11,
        colOffset: 50,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 12,
          column: 0,
        },
        endPos: {
          line: 12,
          column: 1,
        },
        lineNo: 12,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'squares',
        startPos: {
          line: 13,
          column: 0,
        },
        endPos: {
          line: 13,
          column: 7,
        },
        lineNo: 13,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
          line: 13,
          column: 10,
        },
        endPos: {
          line: 13,
          column: 11,
        },
        lineNo: 13,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'n',
        startPos: {
          line: 13,
          column: 11,
        },
        endPos: {
          line: 13,
          column: 12,
        },
        lineNo: 13,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 13,
          column: 12,
        },
        endPos: {
          line: 13,
          column: 14,
        },
        lineNo: 13,
        colOffset: 12,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 13,
          column: 14,
        },
        endPos: {
          line: 13,
          column: 15,
        },
        lineNo: 13,
        colOffset: 14,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 13,
          column: 16,
        },
        endPos: {
          line: 13,
          column: 19,
        },
        lineNo: 13,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'n',
        startPos: {
          line: 13,
          column: 20,
        },
        endPos: {
          line: 13,
          column: 21,
        },
        lineNo: 13,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 13,
          column: 22,
        },
        endPos: {
          line: 13,
          column: 24,
        },
        lineNo: 13,
        colOffset: 22,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'numbers',
        startPos: {
          line: 13,
          column: 25,
        },
        endPos: {
          line: 13,
          column: 32,
        },
        lineNo: 13,
        colOffset: 25,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 13,
          column: 33,
        },
        endPos: {
          line: 13,
          column: 35,
        },
        lineNo: 13,
        colOffset: 33,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'n',
        startPos: {
          line: 13,
          column: 36,
        },
        endPos: {
          line: 13,
          column: 37,
        },
        lineNo: 13,
        colOffset: 36,
      },
      {
        type: 'OP',
        kind: 'PERCENT',
        value: '%',
        startPos: {
          line: 13,
          column: 38,
        },
        endPos: {
          line: 13,
          column: 39,
        },
        lineNo: 13,
        colOffset: 38,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
        startPos: {
          line: 13,
          column: 40,
        },
        endPos: {
          line: 13,
          column: 41,
        },
        lineNo: 13,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'EQEQUAL',
        value: '==',
        startPos: {
          line: 13,
          column: 42,
        },
        endPos: {
          line: 13,
          column: 44,
        },
        lineNo: 13,
        colOffset: 42,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
        startPos: {
          line: 13,
          column: 45,
        },
        endPos: {
          line: 13,
          column: 46,
        },
        lineNo: 13,
        colOffset: 45,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 13,
          column: 46,
        },
        endPos: {
          line: 13,
          column: 47,
        },
        lineNo: 13,
        colOffset: 46,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 13,
          column: 47,
        },
        endPos: {
          line: 13,
          column: 48,
        },
        lineNo: 13,
        colOffset: 47,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 14,
          column: 0,
        },
        endPos: {
          line: 14,
          column: 1,
        },
        lineNo: 14,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 15,
          column: 0,
        },
        endPos: {
          line: 15,
          column: 2,
        },
        lineNo: 15,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 15,
          column: 3,
        },
        endPos: {
          line: 15,
          column: 4,
        },
        lineNo: 15,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'LESS',
        value: '<',
        startPos: {
          line: 15,
          column: 5,
        },
        endPos: {
          line: 15,
          column: 6,
        },
        lineNo: 15,
        colOffset: 5,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '15',
        startPos: {
          line: 15,
          column: 7,
        },
        endPos: {
          line: 15,
          column: 9,
        },
        lineNo: 15,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 15,
          column: 9,
        },
        endPos: {
          line: 15,
          column: 10,
        },
        lineNo: 15,
        colOffset: 9,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 15,
          column: 11,
        },
        endPos: {
          line: 15,
          column: 16,
        },
        lineNo: 15,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 15,
          column: 16,
        },
        endPos: {
          line: 15,
          column: 17,
        },
        lineNo: 15,
        colOffset: 16,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"x < 15"',
        startPos: {
          line: 15,
          column: 17,
        },
        endPos: {
          line: 15,
          column: 25,
        },
        lineNo: 15,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 15,
          column: 25,
        },
        endPos: {
          line: 15,
          column: 26,
        },
        lineNo: 15,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'SEMI',
        value: ';',
        startPos: {
          line: 15,
          column: 26,
        },
        endPos: {
          line: 15,
          column: 27,
        },
        lineNo: 15,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 15,
          column: 28,
        },
        endPos: {
          line: 15,
          column: 29,
        },
        lineNo: 15,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'PLUSEQUAL',
        value: '+=',
        startPos: {
          line: 15,
          column: 30,
        },
        endPos: {
          line: 15,
          column: 32,
        },
        lineNo: 15,
        colOffset: 30,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '5',
        startPos: {
          line: 15,
          column: 33,
        },
        endPos: {
          line: 15,
          column: 34,
        },
        lineNo: 15,
        colOffset: 33,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 15,
          column: 34,
        },
        endPos: {
          line: 15,
          column: 35,
        },
        lineNo: 15,
        colOffset: 34,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 16,
          column: 0,
        },
        endPos: {
          line: 16,
          column: 1,
        },
        lineNo: 16,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 17,
          column: 0,
        },
        endPos: {
          line: 17,
          column: 2,
        },
        lineNo: 17,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 17,
          column: 3,
        },
        endPos: {
          line: 17,
          column: 4,
        },
        lineNo: 17,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'EQEQUAL',
        value: '==',
        startPos: {
          line: 17,
          column: 5,
        },
        endPos: {
          line: 17,
          column: 7,
        },
        lineNo: 17,
        colOffset: 5,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '20',
        startPos: {
          line: 17,
          column: 8,
        },
        endPos: {
          line: 17,
          column: 10,
        },
        lineNo: 17,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 17,
          column: 10,
        },
        endPos: {
          line: 17,
          column: 11,
        },
        lineNo: 17,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'pass',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 18,
          column: 0,
        },
        endPos: {
          line: 18,
          column: 1,
        },
        lineNo: 18,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'try',
        startPos: {
          line: 19,
          column: 0,
        },
        endPos: {
          line: 19,
          column: 3,
        },
        lineNo: 19,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 19,
          column: 3,
        },
        endPos: {
          line: 19,
          column: 4,
        },
        lineNo: 19,
        colOffset: 3,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'result',
        startPos: {
          line: 19,
          column: 5,
        },
        endPos: {
          line: 19,
          column: 11,
        },
        lineNo: 19,
        colOffset: 5,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 19,
          column: 12,
        },
        endPos: {
          line: 19,
          column: 13,
        },
        lineNo: 19,
        colOffset: 12,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '10',
        startPos: {
          line: 19,
          column: 14,
        },
        endPos: {
          line: 19,
          column: 16,
        },
        lineNo: 19,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'SLASH',
        value: '/',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 19,
          column: 19,
        },
        endPos: {
          line: 19,
          column: 20,
        },
        lineNo: 19,
        colOffset: 19,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 19,
          column: 20,
        },
        endPos: {
          line: 19,
          column: 21,
        },
        lineNo: 19,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'except',
        startPos: {
          line: 20,
          column: 0,
        },
        endPos: {
          line: 20,
          column: 6,
        },
        lineNo: 20,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'ZeroDivisionError',
        startPos: {
          line: 20,
          column: 7,
        },
        endPos: {
          line: 20,
          column: 24,
        },
        lineNo: 20,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 20,
          column: 24,
        },
        endPos: {
          line: 20,
          column: 25,
        },
        lineNo: 20,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 20,
          column: 26,
        },
        endPos: {
          line: 20,
          column: 31,
        },
        lineNo: 20,
        colOffset: 26,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 20,
          column: 31,
        },
        endPos: {
          line: 20,
          column: 32,
        },
        lineNo: 20,
        colOffset: 31,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Division by zero!"',
        startPos: {
          line: 20,
          column: 32,
        },
        endPos: {
          line: 20,
          column: 51,
        },
        lineNo: 20,
        colOffset: 32,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 20,
          column: 51,
        },
        endPos: {
          line: 20,
          column: 52,
        },
        lineNo: 20,
        colOffset: 51,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 20,
          column: 52,
        },
        endPos: {
          line: 20,
          column: 53,
        },
        lineNo: 20,
        colOffset: 52,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 21,
          column: 0,
        },
        endPos: {
          line: 21,
          column: 0,
        },
        lineNo: 21,
        colOffset: 0,
      },
    ],
  },
];
