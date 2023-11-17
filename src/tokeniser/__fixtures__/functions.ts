import {TestCase} from './types';

export const FUNCTION_FIXTURES: TestCase[] = [
  {
    input: `def foo():
    ...`,
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
        value: 'def',
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
        value: 'foo',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 7,
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
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'OP',
        kind: 'ELLIPSIS',
        value: '...',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def add_three_nums(one, two, three):
    return one + two + three
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
        value: 'def',
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
        value: 'add_three_nums',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 18,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'one',
        startPos: {
          line: 1,
          column: 19,
        },
        endPos: {
          line: 1,
          column: 22,
        },
        lineNo: 1,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'two',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 27,
        },
        lineNo: 1,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'three',
        startPos: {
          line: 1,
          column: 29,
        },
        endPos: {
          line: 1,
          column: 34,
        },
        lineNo: 1,
        colOffset: 29,
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
        kind: 'COLON',
        value: ':',
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
        value: '\n',
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
        value: 'return',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 10,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'one',
        startPos: {
          line: 2,
          column: 11,
        },
        endPos: {
          line: 2,
          column: 14,
        },
        lineNo: 2,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'PLUS',
        value: '+',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'two',
        startPos: {
          line: 2,
          column: 17,
        },
        endPos: {
          line: 2,
          column: 20,
        },
        lineNo: 2,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'PLUS',
        value: '+',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'three',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 28,
        },
        lineNo: 2,
        colOffset: 23,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 28,
        },
        endPos: {
          line: 2,
          column: 29,
        },
        lineNo: 2,
        colOffset: 28,
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
    input: `def default_args(a, b=2):
   return a + b`,
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
        value: 'def',
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
        value: 'default_args',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 16,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '   ',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 3,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 2,
          column: 3,
        },
        endPos: {
          line: 2,
          column: 9,
        },
        lineNo: 2,
        colOffset: 3,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        type: 'OP',
        kind: 'PLUS',
        value: '+',
        startPos: {
          line: 2,
          column: 12,
        },
        endPos: {
          line: 2,
          column: 13,
        },
        lineNo: 2,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def args_function(*args):

    return sum(args)

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
        value: 'def',
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
        value: 'args_function',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 17,
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
        type: 'OP',
        kind: 'STAR',
        value: '*',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'args',
        startPos: {
          line: 1,
          column: 19,
        },
        endPos: {
          line: 1,
          column: 23,
        },
        lineNo: 1,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        value: 'return',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 10,
        },
        lineNo: 3,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'sum',
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
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'args',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 3,
          column: 19,
        },
        endPos: {
          line: 3,
          column: 20,
        },
        lineNo: 3,
        colOffset: 19,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
    input: `def kwargs_function(**kwargs):
    return kwargs`,
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
        value: 'def',
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
        value: 'kwargs_function',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 19,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 1,
          column: 22,
        },
        endPos: {
          line: 1,
          column: 28,
        },
        lineNo: 1,
        colOffset: 22,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 30,
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
        value: 'return',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 10,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 2,
          column: 11,
        },
        endPos: {
          line: 2,
          column: 17,
        },
        lineNo: 2,
        colOffset: 11,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def combined_args_kwargs(*args, **kwargs):
    print(args)
    print(kwargs)
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
        value: 'def',
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
        value: 'combined_args_kwargs',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 24,
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
        kind: 'STAR',
        value: '*',
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
        value: 'args',
        startPos: {
          line: 1,
          column: 26,
        },
        endPos: {
          line: 1,
          column: 30,
        },
        lineNo: 1,
        colOffset: 26,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'OP',
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 1,
          column: 32,
        },
        endPos: {
          line: 1,
          column: 34,
        },
        lineNo: 1,
        colOffset: 32,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 1,
          column: 34,
        },
        endPos: {
          line: 1,
          column: 40,
        },
        lineNo: 1,
        colOffset: 34,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        value: '\n',
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
        value: 'print',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 9,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'args',
        startPos: {
          line: 2,
          column: 10,
        },
        endPos: {
          line: 2,
          column: 14,
        },
        lineNo: 2,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
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
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'kwargs',
        startPos: {
          line: 3,
          column: 10,
        },
        endPos: {
          line: 3,
          column: 16,
        },
        lineNo: 3,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
    input: `def typed_function(a: int, b: int) -> int:
  return a + b`,
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
        value: 'def',
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
        value: 'typed_function',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 18,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'int',
        startPos: {
          line: 1,
          column: 22,
        },
        endPos: {
          line: 1,
          column: 25,
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
        value: 'b',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 33,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 1,
          column: 35,
        },
        endPos: {
          line: 1,
          column: 37,
        },
        lineNo: 1,
        colOffset: 35,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 38,
        },
        endPos: {
          line: 1,
          column: 41,
        },
        lineNo: 1,
        colOffset: 38,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: '\n',
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
        value: 'return',
        startPos: {
          line: 2,
          column: 2,
        },
        endPos: {
          line: 2,
          column: 8,
        },
        lineNo: 2,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        type: 'OP',
        kind: 'PLUS',
        value: '+',
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
        value: 'b',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def all_args(a, b=2, *args, c, d=3, **kwargs):
    print(a, b, args, c, d, kwargs, "All\\nargs!")
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
        value: 'def',
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
        value: 'all_args',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 12,
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
        value: 'a',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        kind: 'EQUAL',
        value: '=',
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
        kind: 'COMMA',
        value: ',',
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
        type: 'OP',
        kind: 'STAR',
        value: '*',
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
        value: 'args',
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
        value: 'c',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'd',
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
        kind: 'EQUAL',
        value: '=',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        kind: 'DOUBLESTAR',
        value: '**',
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
        value: 'kwargs',
        startPos: {
          line: 1,
          column: 38,
        },
        endPos: {
          line: 1,
          column: 44,
        },
        lineNo: 1,
        colOffset: 38,
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 46,
        },
        endPos: {
          line: 1,
          column: 47,
        },
        lineNo: 1,
        colOffset: 46,
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
        value: 'print',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 9,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        value: 'b',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'args',
        startPos: {
          line: 2,
          column: 16,
        },
        endPos: {
          line: 2,
          column: 20,
        },
        lineNo: 2,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 20,
        },
        endPos: {
          line: 2,
          column: 21,
        },
        lineNo: 2,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'c',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 24,
        },
        lineNo: 2,
        colOffset: 23,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'd',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 2,
          column: 28,
        },
        endPos: {
          line: 2,
          column: 34,
        },
        lineNo: 2,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 34,
        },
        endPos: {
          line: 2,
          column: 35,
        },
        lineNo: 2,
        colOffset: 34,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: `"All\\nargs!"`,
        startPos: {
          line: 2,
          column: 36,
        },
        endPos: {
          line: 2,
          column: 48,
        },
        lineNo: 2,
        colOffset: 36,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 48,
        },
        endPos: {
          line: 2,
          column: 49,
        },
        lineNo: 2,
        colOffset: 48,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 49,
        },
        endPos: {
          line: 2,
          column: 50,
        },
        lineNo: 2,
        colOffset: 49,
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
    input: `def outer_function():

    def inner_function():
        return "Hello from inner"

    return inner_function`,
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
        value: 'def',
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
        value: 'outer_function',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 18,
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
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'def',
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
        value: 'inner_function',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 22,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 8,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 4,
          column: 8,
        },
        endPos: {
          line: 4,
          column: 14,
        },
        lineNo: 4,
        colOffset: 8,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Hello from inner"',
        startPos: {
          line: 4,
          column: 15,
        },
        endPos: {
          line: 4,
          column: 33,
        },
        lineNo: 4,
        colOffset: 15,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 33,
        },
        endPos: {
          line: 4,
          column: 34,
        },
        lineNo: 4,
        colOffset: 33,
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
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 4,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 10,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'inner_function',
        startPos: {
          line: 6,
          column: 11,
        },
        endPos: {
          line: 6,
          column: 25,
        },
        lineNo: 6,
        colOffset: 11,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 6,
          column: 25,
        },
        endPos: {
          line: 6,
          column: 26,
        },
        lineNo: 6,
        colOffset: 25,
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
    input: `lambda_function = lambda x, y: x + y`,
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
        value: 'lambda_function',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 15,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'lambda',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 18,
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
        value: 'y',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        kind: 'PLUS',
        value: '+',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
    input: `def single_line_docstring():
    """This is a single-line docstring."""
    pass

def multi_line_docstring():
    """
    This is a multi-line docstring.
    It spans multiple lines.
    """
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
        value: 'def',
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
        value: 'single_line_docstring',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 25,
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"""This is a single-line docstring."""',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 42,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'pass',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 8,
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
        value: 'def',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 3,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'multi_line_docstring',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 24,
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
          column: 24,
        },
        endPos: {
          line: 5,
          column: 25,
        },
        lineNo: 5,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 5,
          column: 25,
        },
        endPos: {
          line: 5,
          column: 26,
        },
        lineNo: 5,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'STRING',
        kind: 'STRING',
        value: `"""
    This is a multi-line docstring.
    It spans multiple lines.
    """`,
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 9,
          column: 7,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 9,
          column: 7,
        },
        endPos: {
          line: 9,
          column: 8,
        },
        lineNo: 9,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'pass',
        startPos: {
          line: 10,
          column: 4,
        },
        endPos: {
          line: 10,
          column: 8,
        },
        lineNo: 10,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 11,
          column: 0,
        },
        endPos: {
          line: 11,
          column: 0,
        },
        lineNo: 11,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 11,
          column: 0,
        },
        endPos: {
          line: 11,
          column: 0,
        },
        lineNo: 11,
        colOffset: 0,
      },
    ],
  },
  {
    input: `def decorator(func):
  def wrapper(*args, **kwargs):
    print("Before function call")
    result = func(*args, **kwargs)
    print("After function call")
    return result
  return wrapper
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
        value: 'def',
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
        value: 'decorator',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 13,
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
        value: 'func',
        startPos: {
          line: 1,
          column: 14,
        },
        endPos: {
          line: 1,
          column: 18,
        },
        lineNo: 1,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        value: '\n',
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
        value: 'def',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'wrapper',
        startPos: {
          line: 2,
          column: 6,
        },
        endPos: {
          line: 2,
          column: 13,
        },
        lineNo: 2,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'OP',
        kind: 'STAR',
        value: '*',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'args',
        startPos: {
          line: 2,
          column: 15,
        },
        endPos: {
          line: 2,
          column: 19,
        },
        lineNo: 2,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 19,
        },
        endPos: {
          line: 2,
          column: 20,
        },
        lineNo: 2,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 2,
          column: 21,
        },
        endPos: {
          line: 2,
          column: 23,
        },
        lineNo: 2,
        colOffset: 21,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 29,
        },
        lineNo: 2,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 29,
        },
        endPos: {
          line: 2,
          column: 30,
        },
        lineNo: 2,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 31,
        },
        endPos: {
          line: 2,
          column: 32,
        },
        lineNo: 2,
        colOffset: 31,
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
        value: 'print',
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
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"Before function call"',
        startPos: {
          line: 3,
          column: 10,
        },
        endPos: {
          line: 3,
          column: 32,
        },
        lineNo: 3,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'result',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 10,
        },
        lineNo: 4,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'func',
        startPos: {
          line: 4,
          column: 13,
        },
        endPos: {
          line: 4,
          column: 17,
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
          column: 17,
        },
        endPos: {
          line: 4,
          column: 18,
        },
        lineNo: 4,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'STAR',
        value: '*',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'args',
        startPos: {
          line: 4,
          column: 19,
        },
        endPos: {
          line: 4,
          column: 23,
        },
        lineNo: 4,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'OP',
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 4,
          column: 25,
        },
        endPos: {
          line: 4,
          column: 27,
        },
        lineNo: 4,
        colOffset: 25,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 4,
          column: 27,
        },
        endPos: {
          line: 4,
          column: 33,
        },
        lineNo: 4,
        colOffset: 27,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 4,
          column: 33,
        },
        endPos: {
          line: 4,
          column: 34,
        },
        lineNo: 4,
        colOffset: 33,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 34,
        },
        endPos: {
          line: 4,
          column: 35,
        },
        lineNo: 4,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'print',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 9,
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
        type: 'STRING',
        kind: 'STRING',
        value: '"After function call"',
        startPos: {
          line: 5,
          column: 10,
        },
        endPos: {
          line: 5,
          column: 31,
        },
        lineNo: 5,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 5,
          column: 31,
        },
        endPos: {
          line: 5,
          column: 32,
        },
        lineNo: 5,
        colOffset: 31,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 32,
        },
        endPos: {
          line: 5,
          column: 33,
        },
        lineNo: 5,
        colOffset: 32,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 10,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'result',
        startPos: {
          line: 6,
          column: 11,
        },
        endPos: {
          line: 6,
          column: 17,
        },
        lineNo: 6,
        colOffset: 11,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 6,
          column: 17,
        },
        endPos: {
          line: 6,
          column: 18,
        },
        lineNo: 6,
        colOffset: 17,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 7,
          column: 2,
        },
        endPos: {
          line: 7,
          column: 2,
        },
        lineNo: 7,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 7,
          column: 2,
        },
        endPos: {
          line: 7,
          column: 8,
        },
        lineNo: 7,
        colOffset: 2,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'wrapper',
        startPos: {
          line: 7,
          column: 9,
        },
        endPos: {
          line: 7,
          column: 16,
        },
        lineNo: 7,
        colOffset: 9,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 8,
          column: 0,
        },
        endPos: {
          line: 8,
          column: 0,
        },
        lineNo: 8,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 8,
          column: 0,
        },
        endPos: {
          line: 8,
          column: 0,
        },
        lineNo: 8,
        colOffset: 0,
      },
    ],
  },
  {
    input: `@decorator
def decorated_function():
    return "Decorated"`,
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
        kind: 'AT',
        value: '@',
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
        value: 'decorator',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 10,
        },
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 3,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'decorated_function',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 22,
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 24,
        },
        lineNo: 2,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 24,
        },
        endPos: {
          line: 2,
          column: 25,
        },
        lineNo: 2,
        colOffset: 24,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'return',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 10,
        },
        lineNo: 3,
        colOffset: 4,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Decorated"',
        startPos: {
          line: 3,
          column: 11,
        },
        endPos: {
          line: 3,
          column: 22,
        },
        lineNo: 3,
        colOffset: 11,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
    input: `async def async_function():
    pass
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
        value: 'async',
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
        value: 'def',
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
        value: 'async_function',
        startPos: {
          line: 1,
          column: 10,
        },
        endPos: {
          line: 1,
          column: 24,
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'pass',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 8,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
    input: `def generator_function():
    
    for i in range(3):
        yield i
    
    return          42
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
        value: 'def',
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
        value: 'generator_function',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 22,
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        value: 'i',
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
        value: 'range',
        startPos: {
          line: 3,
          column: 13,
        },
        endPos: {
          line: 3,
          column: 18,
        },
        lineNo: 3,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 3,
          column: 18,
        },
        endPos: {
          line: 3,
          column: 19,
        },
        lineNo: 3,
        colOffset: 18,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 3,
          column: 19,
        },
        endPos: {
          line: 3,
          column: 20,
        },
        lineNo: 3,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 8,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'yield',
        startPos: {
          line: 4,
          column: 8,
        },
        endPos: {
          line: 4,
          column: 13,
        },
        lineNo: 4,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'i',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 5,
        },
        lineNo: 5,
        colOffset: 4,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 4,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 10,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '42',
        startPos: {
          line: 6,
          column: 20,
        },
        endPos: {
          line: 6,
          column: 22,
        },
        lineNo: 6,
        colOffset: 20,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
    input: `def unpacking_args(a, b, *, c, d):
    return a, b, c, d`,
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
        value: 'def',
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
        value: 'unpacking_args',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 18,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        value: 'b',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        kind: 'STAR',
        value: '*',
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
        value: 'c',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'd',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'return',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 10,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 12,
        },
        endPos: {
          line: 2,
          column: 13,
        },
        lineNo: 2,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'c',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'd',
        startPos: {
          line: 2,
          column: 20,
        },
        endPos: {
          line: 2,
          column: 21,
        },
        lineNo: 2,
        colOffset: 20,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def keyword_only_args(*, a, b):
    return a, b`,
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
        value: 'def',
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
        value: 'keyword_only_args',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 21,
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
        type: 'OP',
        kind: 'STAR',
        value: '*',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        value: 'b',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'return',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 10,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 12,
        },
        endPos: {
          line: 2,
          column: 13,
        },
        lineNo: 2,
        colOffset: 12,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def inline_inner_function(*, a, b):
    def inline_function(): return "Inline"

    return inline_function()

def other_inline_function(): return "Also inline"; other_inline_function()`,
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
        value: 'def',
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
        value: 'inline_inner_function',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 25,
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
        kind: 'STAR',
        value: '*',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'def',
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
        value: 'inline_function',
        startPos: {
          line: 2,
          column: 8,
        },
        endPos: {
          line: 2,
          column: 23,
        },
        lineNo: 2,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 24,
        },
        lineNo: 2,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 24,
        },
        endPos: {
          line: 2,
          column: 25,
        },
        lineNo: 2,
        colOffset: 24,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 2,
          column: 27,
        },
        endPos: {
          line: 2,
          column: 33,
        },
        lineNo: 2,
        colOffset: 27,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Inline"',
        startPos: {
          line: 2,
          column: 34,
        },
        endPos: {
          line: 2,
          column: 42,
        },
        lineNo: 2,
        colOffset: 34,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 10,
        },
        lineNo: 4,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'inline_function',
        startPos: {
          line: 4,
          column: 11,
        },
        endPos: {
          line: 4,
          column: 26,
        },
        lineNo: 4,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 4,
          column: 27,
        },
        endPos: {
          line: 4,
          column: 28,
        },
        lineNo: 4,
        colOffset: 27,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 28,
        },
        endPos: {
          line: 4,
          column: 29,
        },
        lineNo: 4,
        colOffset: 28,
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 3,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'other_inline_function',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 25,
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
          column: 25,
        },
        endPos: {
          line: 6,
          column: 26,
        },
        lineNo: 6,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 6,
          column: 26,
        },
        endPos: {
          line: 6,
          column: 27,
        },
        lineNo: 6,
        colOffset: 26,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 6,
          column: 29,
        },
        endPos: {
          line: 6,
          column: 35,
        },
        lineNo: 6,
        colOffset: 29,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Also inline"',
        startPos: {
          line: 6,
          column: 36,
        },
        endPos: {
          line: 6,
          column: 49,
        },
        lineNo: 6,
        colOffset: 36,
      },
      {
        type: 'OP',
        kind: 'SEMI',
        value: ';',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'other_inline_function',
        startPos: {
          line: 6,
          column: 51,
        },
        endPos: {
          line: 6,
          column: 72,
        },
        lineNo: 6,
        colOffset: 51,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 6,
          column: 72,
        },
        endPos: {
          line: 6,
          column: 73,
        },
        lineNo: 6,
        colOffset: 72,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 6,
          column: 73,
        },
        endPos: {
          line: 6,
          column: 74,
        },
        lineNo: 6,
        colOffset: 73,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 6,
          column: 74,
        },
        endPos: {
          line: 6,
          column: 75,
        },
        lineNo: 6,
        colOffset: 74,
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
    input: `def complex_type_hints(a: List[int], b: Dict[str, float]) -> Union[bool, Tuple[int, int]]:
    return (True, (1, 2)) if a and b else False`,
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
        value: 'def',
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
        value: 'complex_type_hints',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 22,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        kind: 'COLON',
        value: ':',
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
        value: 'List',
        startPos: {
          line: 1,
          column: 26,
        },
        endPos: {
          line: 1,
          column: 30,
        },
        lineNo: 1,
        colOffset: 26,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 31,
        },
        endPos: {
          line: 1,
          column: 34,
        },
        lineNo: 1,
        colOffset: 31,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'Dict',
        startPos: {
          line: 1,
          column: 40,
        },
        endPos: {
          line: 1,
          column: 44,
        },
        lineNo: 1,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'str',
        startPos: {
          line: 1,
          column: 45,
        },
        endPos: {
          line: 1,
          column: 48,
        },
        lineNo: 1,
        colOffset: 45,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 48,
        },
        endPos: {
          line: 1,
          column: 49,
        },
        lineNo: 1,
        colOffset: 48,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'float',
        startPos: {
          line: 1,
          column: 50,
        },
        endPos: {
          line: 1,
          column: 55,
        },
        lineNo: 1,
        colOffset: 50,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 55,
        },
        endPos: {
          line: 1,
          column: 56,
        },
        lineNo: 1,
        colOffset: 55,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 1,
          column: 58,
        },
        endPos: {
          line: 1,
          column: 60,
        },
        lineNo: 1,
        colOffset: 58,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Union',
        startPos: {
          line: 1,
          column: 61,
        },
        endPos: {
          line: 1,
          column: 66,
        },
        lineNo: 1,
        colOffset: 61,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 66,
        },
        endPos: {
          line: 1,
          column: 67,
        },
        lineNo: 1,
        colOffset: 66,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'bool',
        startPos: {
          line: 1,
          column: 67,
        },
        endPos: {
          line: 1,
          column: 71,
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
          column: 71,
        },
        endPos: {
          line: 1,
          column: 72,
        },
        lineNo: 1,
        colOffset: 71,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Tuple',
        startPos: {
          line: 1,
          column: 73,
        },
        endPos: {
          line: 1,
          column: 78,
        },
        lineNo: 1,
        colOffset: 73,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 78,
        },
        endPos: {
          line: 1,
          column: 79,
        },
        lineNo: 1,
        colOffset: 78,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 79,
        },
        endPos: {
          line: 1,
          column: 82,
        },
        lineNo: 1,
        colOffset: 79,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 82,
        },
        endPos: {
          line: 1,
          column: 83,
        },
        lineNo: 1,
        colOffset: 82,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 84,
        },
        endPos: {
          line: 1,
          column: 87,
        },
        lineNo: 1,
        colOffset: 84,
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
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 89,
        },
        endPos: {
          line: 1,
          column: 90,
        },
        lineNo: 1,
        colOffset: 89,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 90,
        },
        endPos: {
          line: 1,
          column: 91,
        },
        lineNo: 1,
        colOffset: 90,
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
        value: 'return',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 10,
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
        value: 'True',
        startPos: {
          line: 2,
          column: 12,
        },
        endPos: {
          line: 2,
          column: 16,
        },
        lineNo: 2,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        kind: 'LPAR',
        value: '(',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
        startPos: {
          line: 2,
          column: 19,
        },
        endPos: {
          line: 2,
          column: 20,
        },
        lineNo: 2,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 20,
        },
        endPos: {
          line: 2,
          column: 21,
        },
        lineNo: 2,
        colOffset: 20,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 24,
        },
        lineNo: 2,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 24,
        },
        endPos: {
          line: 2,
          column: 25,
        },
        lineNo: 2,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 2,
          column: 26,
        },
        endPos: {
          line: 2,
          column: 28,
        },
        lineNo: 2,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
        startPos: {
          line: 2,
          column: 29,
        },
        endPos: {
          line: 2,
          column: 30,
        },
        lineNo: 2,
        colOffset: 29,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'and',
        startPos: {
          line: 2,
          column: 31,
        },
        endPos: {
          line: 2,
          column: 34,
        },
        lineNo: 2,
        colOffset: 31,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
        startPos: {
          line: 2,
          column: 35,
        },
        endPos: {
          line: 2,
          column: 36,
        },
        lineNo: 2,
        colOffset: 35,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'else',
        startPos: {
          line: 2,
          column: 37,
        },
        endPos: {
          line: 2,
          column: 41,
        },
        lineNo: 2,
        colOffset: 37,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'False',
        startPos: {
          line: 2,
          column: 42,
        },
        endPos: {
          line: 2,
          column: 47,
        },
        lineNo: 2,
        colOffset: 42,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 2,
          column: 47,
        },
        endPos: {
          line: 2,
          column: 48,
        },
        lineNo: 2,
        colOffset: 47,
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
    input: `lambda_with_types: Callable[[int, int], int] = lambda x, y: x + y
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
        value: 'lambda_with_types',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 17,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'Callable',
        startPos: {
          line: 1,
          column: 19,
        },
        endPos: {
          line: 1,
          column: 27,
        },
        lineNo: 1,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
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
        kind: 'LSQB',
        value: '[',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 29,
        },
        endPos: {
          line: 1,
          column: 32,
        },
        lineNo: 1,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 34,
        },
        endPos: {
          line: 1,
          column: 37,
        },
        lineNo: 1,
        colOffset: 34,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 40,
        },
        endPos: {
          line: 1,
          column: 43,
        },
        lineNo: 1,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        kind: 'EQUAL',
        value: '=',
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
        value: 'lambda',
        startPos: {
          line: 1,
          column: 47,
        },
        endPos: {
          line: 1,
          column: 53,
        },
        lineNo: 1,
        colOffset: 47,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 54,
        },
        endPos: {
          line: 1,
          column: 55,
        },
        lineNo: 1,
        colOffset: 54,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 55,
        },
        endPos: {
          line: 1,
          column: 56,
        },
        lineNo: 1,
        colOffset: 55,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 1,
          column: 57,
        },
        endPos: {
          line: 1,
          column: 58,
        },
        lineNo: 1,
        colOffset: 57,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 58,
        },
        endPos: {
          line: 1,
          column: 59,
        },
        lineNo: 1,
        colOffset: 58,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 1,
          column: 60,
        },
        endPos: {
          line: 1,
          column: 61,
        },
        lineNo: 1,
        colOffset: 60,
      },
      {
        type: 'OP',
        kind: 'PLUS',
        value: '+',
        startPos: {
          line: 1,
          column: 62,
        },
        endPos: {
          line: 1,
          column: 63,
        },
        lineNo: 1,
        colOffset: 62,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
    input: `def args_with_types(*args: int) -> List[int]:
    return list(args)

def kwargs_with_types(**kwargs: float) -> Dict[str, float]:
    return kwargs`,
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
        value: 'def',
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
        value: 'args_with_types',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 19,
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
        type: 'OP',
        kind: 'STAR',
        value: '*',
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
        value: 'args',
        startPos: {
          line: 1,
          column: 21,
        },
        endPos: {
          line: 1,
          column: 25,
        },
        lineNo: 1,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'int',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 1,
          column: 32,
        },
        endPos: {
          line: 1,
          column: 34,
        },
        lineNo: 1,
        colOffset: 32,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'List',
        startPos: {
          line: 1,
          column: 35,
        },
        endPos: {
          line: 1,
          column: 39,
        },
        lineNo: 1,
        colOffset: 35,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 39,
        },
        endPos: {
          line: 1,
          column: 40,
        },
        lineNo: 1,
        colOffset: 39,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 40,
        },
        endPos: {
          line: 1,
          column: 43,
        },
        lineNo: 1,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        kind: 'COLON',
        value: ':',
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
        value: 'return',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 10,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'list',
        startPos: {
          line: 2,
          column: 11,
        },
        endPos: {
          line: 2,
          column: 15,
        },
        lineNo: 2,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'args',
        startPos: {
          line: 2,
          column: 16,
        },
        endPos: {
          line: 2,
          column: 20,
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
          column: 20,
        },
        endPos: {
          line: 2,
          column: 21,
        },
        lineNo: 2,
        colOffset: 20,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 3,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs_with_types',
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
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 4,
          column: 22,
        },
        endPos: {
          line: 4,
          column: 24,
        },
        lineNo: 4,
        colOffset: 22,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 4,
          column: 24,
        },
        endPos: {
          line: 4,
          column: 30,
        },
        lineNo: 4,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 4,
          column: 30,
        },
        endPos: {
          line: 4,
          column: 31,
        },
        lineNo: 4,
        colOffset: 30,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'float',
        startPos: {
          line: 4,
          column: 32,
        },
        endPos: {
          line: 4,
          column: 37,
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
          column: 37,
        },
        endPos: {
          line: 4,
          column: 38,
        },
        lineNo: 4,
        colOffset: 37,
      },
      {
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 4,
          column: 39,
        },
        endPos: {
          line: 4,
          column: 41,
        },
        lineNo: 4,
        colOffset: 39,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Dict',
        startPos: {
          line: 4,
          column: 42,
        },
        endPos: {
          line: 4,
          column: 46,
        },
        lineNo: 4,
        colOffset: 42,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 4,
          column: 46,
        },
        endPos: {
          line: 4,
          column: 47,
        },
        lineNo: 4,
        colOffset: 46,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'str',
        startPos: {
          line: 4,
          column: 47,
        },
        endPos: {
          line: 4,
          column: 50,
        },
        lineNo: 4,
        colOffset: 47,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 4,
          column: 50,
        },
        endPos: {
          line: 4,
          column: 51,
        },
        lineNo: 4,
        colOffset: 50,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'float',
        startPos: {
          line: 4,
          column: 52,
        },
        endPos: {
          line: 4,
          column: 57,
        },
        lineNo: 4,
        colOffset: 52,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 4,
          column: 57,
        },
        endPos: {
          line: 4,
          column: 58,
        },
        lineNo: 4,
        colOffset: 57,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 4,
          column: 58,
        },
        endPos: {
          line: 4,
          column: 59,
        },
        lineNo: 4,
        colOffset: 58,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 59,
        },
        endPos: {
          line: 4,
          column: 60,
        },
        lineNo: 4,
        colOffset: 59,
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
        value: 'return',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 10,
        },
        lineNo: 5,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 5,
          column: 11,
        },
        endPos: {
          line: 5,
          column: 17,
        },
        lineNo: 5,
        colOffset: 11,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
    input: `def default_none(arg: Optional[int] = None) -> Optional[int]:
    return arg`,
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
        value: 'def',
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
        value: 'default_none',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 16,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg',
        startPos: {
          line: 1,
          column: 17,
        },
        endPos: {
          line: 1,
          column: 20,
        },
        lineNo: 1,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'Optional',
        startPos: {
          line: 1,
          column: 22,
        },
        endPos: {
          line: 1,
          column: 30,
        },
        lineNo: 1,
        colOffset: 22,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 31,
        },
        endPos: {
          line: 1,
          column: 34,
        },
        lineNo: 1,
        colOffset: 31,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        kind: 'EQUAL',
        value: '=',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'None',
        startPos: {
          line: 1,
          column: 38,
        },
        endPos: {
          line: 1,
          column: 42,
        },
        lineNo: 1,
        colOffset: 38,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 1,
          column: 44,
        },
        endPos: {
          line: 1,
          column: 46,
        },
        lineNo: 1,
        colOffset: 44,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Optional',
        startPos: {
          line: 1,
          column: 47,
        },
        endPos: {
          line: 1,
          column: 55,
        },
        lineNo: 1,
        colOffset: 47,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 55,
        },
        endPos: {
          line: 1,
          column: 56,
        },
        lineNo: 1,
        colOffset: 55,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 56,
        },
        endPos: {
          line: 1,
          column: 59,
        },
        lineNo: 1,
        colOffset: 56,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 59,
        },
        endPos: {
          line: 1,
          column: 60,
        },
        lineNo: 1,
        colOffset: 59,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 60,
        },
        endPos: {
          line: 1,
          column: 61,
        },
        lineNo: 1,
        colOffset: 60,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 61,
        },
        endPos: {
          line: 1,
          column: 62,
        },
        lineNo: 1,
        colOffset: 61,
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
        value: 'return',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 10,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'arg',
        startPos: {
          line: 2,
          column: 11,
        },
        endPos: {
          line: 2,
          column: 14,
        },
        lineNo: 2,
        colOffset: 11,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def multiline_def(a: int,
                  b: int,
                  c: int) -> List[int]:
    return [a, b, c]`,
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
        value: 'def',
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
        value: 'multiline_def',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 17,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 21,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NL',
        kind: 'NL',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 19,
        },
        endPos: {
          line: 2,
          column: 20,
        },
        lineNo: 2,
        colOffset: 19,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 2,
          column: 21,
        },
        endPos: {
          line: 2,
          column: 24,
        },
        lineNo: 2,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 24,
        },
        endPos: {
          line: 2,
          column: 25,
        },
        lineNo: 2,
        colOffset: 24,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'c',
        startPos: {
          line: 3,
          column: 18,
        },
        endPos: {
          line: 3,
          column: 19,
        },
        lineNo: 3,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 3,
          column: 19,
        },
        endPos: {
          line: 3,
          column: 20,
        },
        lineNo: 3,
        colOffset: 19,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 3,
          column: 21,
        },
        endPos: {
          line: 3,
          column: 24,
        },
        lineNo: 3,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 3,
          column: 26,
        },
        endPos: {
          line: 3,
          column: 28,
        },
        lineNo: 3,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'List',
        startPos: {
          line: 3,
          column: 29,
        },
        endPos: {
          line: 3,
          column: 33,
        },
        lineNo: 3,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 3,
          column: 34,
        },
        endPos: {
          line: 3,
          column: 37,
        },
        lineNo: 3,
        colOffset: 34,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 3,
          column: 37,
        },
        endPos: {
          line: 3,
          column: 38,
        },
        lineNo: 3,
        colOffset: 37,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 3,
          column: 38,
        },
        endPos: {
          line: 3,
          column: 39,
        },
        lineNo: 3,
        colOffset: 38,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 3,
          column: 39,
        },
        endPos: {
          line: 3,
          column: 40,
        },
        lineNo: 3,
        colOffset: 39,
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
        value: 'return',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 10,
        },
        lineNo: 4,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        kind: 'COMMA',
        value: ',',
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
        value: 'c',
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
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def inline_with_hint(a: int, b: int) -> int: return a + b`,
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
        value: 'def',
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
        value: 'inline_with_hint',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 20,
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
        value: 'a',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 27,
        },
        lineNo: 1,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 31,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 32,
        },
        endPos: {
          line: 1,
          column: 35,
        },
        lineNo: 1,
        colOffset: 32,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'RARROW',
        value: '->',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 40,
        },
        endPos: {
          line: 1,
          column: 43,
        },
        lineNo: 1,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 1,
          column: 45,
        },
        endPos: {
          line: 1,
          column: 51,
        },
        lineNo: 1,
        colOffset: 45,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
        startPos: {
          line: 1,
          column: 52,
        },
        endPos: {
          line: 1,
          column: 53,
        },
        lineNo: 1,
        colOffset: 52,
      },
      {
        type: 'OP',
        kind: 'PLUS',
        value: '+',
        startPos: {
          line: 1,
          column: 54,
        },
        endPos: {
          line: 1,
          column: 55,
        },
        lineNo: 1,
        colOffset: 54,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 57,
        },
        endPos: {
          line: 1,
          column: 58,
        },
        lineNo: 1,
        colOffset: 57,
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
    input: `Vector = List[float]
def function_with_alias(arg: Vector) -> Vector:
    return arg`,
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
        value: 'Vector',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'List',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 13,
        },
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
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
        value: 'float',
        startPos: {
          line: 1,
          column: 14,
        },
        endPos: {
          line: 1,
          column: 19,
        },
        lineNo: 1,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
        value: '\n',
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
        value: 'def',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 3,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'function_with_alias',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 23,
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
          column: 23,
        },
        endPos: {
          line: 2,
          column: 24,
        },
        lineNo: 2,
        colOffset: 23,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'arg',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 27,
        },
        endPos: {
          line: 2,
          column: 28,
        },
        lineNo: 2,
        colOffset: 27,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Vector',
        startPos: {
          line: 2,
          column: 29,
        },
        endPos: {
          line: 2,
          column: 35,
        },
        lineNo: 2,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 35,
        },
        endPos: {
          line: 2,
          column: 36,
        },
        lineNo: 2,
        colOffset: 35,
      },
      {
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 2,
          column: 37,
        },
        endPos: {
          line: 2,
          column: 39,
        },
        lineNo: 2,
        colOffset: 37,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Vector',
        startPos: {
          line: 2,
          column: 40,
        },
        endPos: {
          line: 2,
          column: 46,
        },
        lineNo: 2,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 46,
        },
        endPos: {
          line: 2,
          column: 47,
        },
        lineNo: 2,
        colOffset: 46,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 2,
          column: 47,
        },
        endPos: {
          line: 2,
          column: 48,
        },
        lineNo: 2,
        colOffset: 47,
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
        value: 'return',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 10,
        },
        lineNo: 3,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'arg',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
        type: 'DEDENT',
        kind: 'DEDENT',
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
    input: `def generator_with_types() -> Generator[int, None, None]:
    for i in range(3):
        yield i
    
    if GLOBAL_VAR is not [y for y in range(3)]:
        while True:
            yield 1

            if 20 > 10:
                break
    yield None`,
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
        value: 'def',
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
        value: 'generator_with_types',
        startPos: {
          line: 1,
          column: 4,
        },
        endPos: {
          line: 1,
          column: 24,
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
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 1,
          column: 27,
        },
        endPos: {
          line: 1,
          column: 29,
        },
        lineNo: 1,
        colOffset: 27,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Generator',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 39,
        },
        lineNo: 1,
        colOffset: 30,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 1,
          column: 39,
        },
        endPos: {
          line: 1,
          column: 40,
        },
        lineNo: 1,
        colOffset: 39,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 1,
          column: 40,
        },
        endPos: {
          line: 1,
          column: 43,
        },
        lineNo: 1,
        colOffset: 40,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'None',
        startPos: {
          line: 1,
          column: 45,
        },
        endPos: {
          line: 1,
          column: 49,
        },
        lineNo: 1,
        colOffset: 45,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'None',
        startPos: {
          line: 1,
          column: 51,
        },
        endPos: {
          line: 1,
          column: 55,
        },
        lineNo: 1,
        colOffset: 51,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 1,
          column: 55,
        },
        endPos: {
          line: 1,
          column: 56,
        },
        lineNo: 1,
        colOffset: 55,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 1,
          column: 57,
        },
        endPos: {
          line: 1,
          column: 58,
        },
        lineNo: 1,
        colOffset: 57,
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
        value: 'i',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 2,
          column: 10,
        },
        endPos: {
          line: 2,
          column: 12,
        },
        lineNo: 2,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 2,
          column: 13,
        },
        endPos: {
          line: 2,
          column: 18,
        },
        lineNo: 2,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 2,
          column: 19,
        },
        endPos: {
          line: 2,
          column: 20,
        },
        lineNo: 2,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 20,
        },
        endPos: {
          line: 2,
          column: 21,
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'yield',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 13,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'i',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 5,
        },
        lineNo: 4,
        colOffset: 4,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 4,
        },
        lineNo: 5,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 6,
        },
        lineNo: 5,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'GLOBAL_VAR',
        startPos: {
          line: 5,
          column: 7,
        },
        endPos: {
          line: 5,
          column: 17,
        },
        lineNo: 5,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'is',
        startPos: {
          line: 5,
          column: 18,
        },
        endPos: {
          line: 5,
          column: 20,
        },
        lineNo: 5,
        colOffset: 18,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'not',
        startPos: {
          line: 5,
          column: 21,
        },
        endPos: {
          line: 5,
          column: 24,
        },
        lineNo: 5,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 5,
          column: 25,
        },
        endPos: {
          line: 5,
          column: 26,
        },
        lineNo: 5,
        colOffset: 25,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 5,
          column: 28,
        },
        endPos: {
          line: 5,
          column: 31,
        },
        lineNo: 5,
        colOffset: 28,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
        startPos: {
          line: 5,
          column: 32,
        },
        endPos: {
          line: 5,
          column: 33,
        },
        lineNo: 5,
        colOffset: 32,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 5,
          column: 34,
        },
        endPos: {
          line: 5,
          column: 36,
        },
        lineNo: 5,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
        startPos: {
          line: 5,
          column: 37,
        },
        endPos: {
          line: 5,
          column: 42,
        },
        lineNo: 5,
        colOffset: 37,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 5,
          column: 42,
        },
        endPos: {
          line: 5,
          column: 43,
        },
        lineNo: 5,
        colOffset: 42,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
        startPos: {
          line: 5,
          column: 43,
        },
        endPos: {
          line: 5,
          column: 44,
        },
        lineNo: 5,
        colOffset: 43,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 5,
          column: 44,
        },
        endPos: {
          line: 5,
          column: 45,
        },
        lineNo: 5,
        colOffset: 44,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 5,
          column: 45,
        },
        endPos: {
          line: 5,
          column: 46,
        },
        lineNo: 5,
        colOffset: 45,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 5,
          column: 46,
        },
        endPos: {
          line: 5,
          column: 47,
        },
        lineNo: 5,
        colOffset: 46,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 47,
        },
        endPos: {
          line: 5,
          column: 48,
        },
        lineNo: 5,
        colOffset: 47,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 8,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'while',
        startPos: {
          line: 6,
          column: 8,
        },
        endPos: {
          line: 6,
          column: 13,
        },
        lineNo: 6,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'True',
        startPos: {
          line: 6,
          column: 14,
        },
        endPos: {
          line: 6,
          column: 18,
        },
        lineNo: 6,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 6,
          column: 18,
        },
        endPos: {
          line: 6,
          column: 19,
        },
        lineNo: 6,
        colOffset: 18,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '            ',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 12,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'yield',
        startPos: {
          line: 7,
          column: 12,
        },
        endPos: {
          line: 7,
          column: 17,
        },
        lineNo: 7,
        colOffset: 12,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'if',
        startPos: {
          line: 9,
          column: 12,
        },
        endPos: {
          line: 9,
          column: 14,
        },
        lineNo: 9,
        colOffset: 12,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '20',
        startPos: {
          line: 9,
          column: 15,
        },
        endPos: {
          line: 9,
          column: 17,
        },
        lineNo: 9,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'GREATER',
        value: '>',
        startPos: {
          line: 9,
          column: 18,
        },
        endPos: {
          line: 9,
          column: 19,
        },
        lineNo: 9,
        colOffset: 18,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '10',
        startPos: {
          line: 9,
          column: 20,
        },
        endPos: {
          line: 9,
          column: 22,
        },
        lineNo: 9,
        colOffset: 20,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 9,
          column: 23,
        },
        endPos: {
          line: 9,
          column: 24,
        },
        lineNo: 9,
        colOffset: 23,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '                ',
        startPos: {
          line: 10,
          column: 0,
        },
        endPos: {
          line: 10,
          column: 16,
        },
        lineNo: 10,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'break',
        startPos: {
          line: 10,
          column: 16,
        },
        endPos: {
          line: 10,
          column: 21,
        },
        lineNo: 10,
        colOffset: 16,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 10,
          column: 21,
        },
        endPos: {
          line: 10,
          column: 22,
        },
        lineNo: 10,
        colOffset: 21,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 11,
          column: 4,
        },
        endPos: {
          line: 11,
          column: 4,
        },
        lineNo: 11,
        colOffset: 4,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 11,
          column: 4,
        },
        endPos: {
          line: 11,
          column: 4,
        },
        lineNo: 11,
        colOffset: 4,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 11,
          column: 4,
        },
        endPos: {
          line: 11,
          column: 4,
        },
        lineNo: 11,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'yield',
        startPos: {
          line: 11,
          column: 4,
        },
        endPos: {
          line: 11,
          column: 9,
        },
        lineNo: 11,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'None',
        startPos: {
          line: 11,
          column: 10,
        },
        endPos: {
          line: 11,
          column: 14,
        },
        lineNo: 11,
        colOffset: 10,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 11,
          column: 14,
        },
        endPos: {
          line: 11,
          column: 15,
        },
        lineNo: 11,
        colOffset: 14,
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
    input: `def outer():
    x = "local"
    def inner():
        nonlocal x
        x = "nonlocal"
    inner()

def coroutine_example():
    value = yield
    yield value

x = 0
def function_with_global():
    global x
    x = 10`,
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
        value: 'def',
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
        value: 'outer',
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
        kind: 'LPAR',
        value: '(',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        kind: 'EQUAL',
        value: '=',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"local"',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
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
        value: 'inner',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 13,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 8,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'nonlocal',
        startPos: {
          line: 4,
          column: 8,
        },
        endPos: {
          line: 4,
          column: 16,
        },
        lineNo: 4,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 4,
          column: 17,
        },
        endPos: {
          line: 4,
          column: 18,
        },
        lineNo: 4,
        colOffset: 17,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"nonlocal"',
        startPos: {
          line: 5,
          column: 12,
        },
        endPos: {
          line: 5,
          column: 22,
        },
        lineNo: 5,
        colOffset: 12,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 4,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'inner',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 9,
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
          column: 9,
        },
        endPos: {
          line: 6,
          column: 10,
        },
        lineNo: 6,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
          column: 0,
        },
        endPos: {
          line: 8,
          column: 0,
        },
        lineNo: 8,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
        startPos: {
          line: 8,
          column: 0,
        },
        endPos: {
          line: 8,
          column: 3,
        },
        lineNo: 8,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'coroutine_example',
        startPos: {
          line: 8,
          column: 4,
        },
        endPos: {
          line: 8,
          column: 21,
        },
        lineNo: 8,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 8,
          column: 21,
        },
        endPos: {
          line: 8,
          column: 22,
        },
        lineNo: 8,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 8,
          column: 22,
        },
        endPos: {
          line: 8,
          column: 23,
        },
        lineNo: 8,
        colOffset: 22,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'value',
        startPos: {
          line: 9,
          column: 4,
        },
        endPos: {
          line: 9,
          column: 9,
        },
        lineNo: 9,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 9,
          column: 10,
        },
        endPos: {
          line: 9,
          column: 11,
        },
        lineNo: 9,
        colOffset: 10,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'yield',
        startPos: {
          line: 9,
          column: 12,
        },
        endPos: {
          line: 9,
          column: 17,
        },
        lineNo: 9,
        colOffset: 12,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'yield',
        startPos: {
          line: 10,
          column: 4,
        },
        endPos: {
          line: 10,
          column: 9,
        },
        lineNo: 10,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'value',
        startPos: {
          line: 10,
          column: 10,
        },
        endPos: {
          line: 10,
          column: 15,
        },
        lineNo: 10,
        colOffset: 10,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 10,
          column: 15,
        },
        endPos: {
          line: 10,
          column: 16,
        },
        lineNo: 10,
        colOffset: 15,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 11,
          column: 0,
        },
        endPos: {
          line: 11,
          column: 1,
        },
        lineNo: 11,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
        startPos: {
          line: 12,
          column: 4,
        },
        endPos: {
          line: 12,
          column: 5,
        },
        lineNo: 12,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 12,
          column: 5,
        },
        endPos: {
          line: 12,
          column: 6,
        },
        lineNo: 12,
        colOffset: 5,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
        startPos: {
          line: 13,
          column: 0,
        },
        endPos: {
          line: 13,
          column: 3,
        },
        lineNo: 13,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'function_with_global',
        startPos: {
          line: 13,
          column: 4,
        },
        endPos: {
          line: 13,
          column: 24,
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
          column: 24,
        },
        endPos: {
          line: 13,
          column: 25,
        },
        lineNo: 13,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 13,
          column: 25,
        },
        endPos: {
          line: 13,
          column: 26,
        },
        lineNo: 13,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 13,
          column: 26,
        },
        endPos: {
          line: 13,
          column: 27,
        },
        lineNo: 13,
        colOffset: 26,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 13,
          column: 27,
        },
        endPos: {
          line: 13,
          column: 28,
        },
        lineNo: 13,
        colOffset: 27,
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
        value: 'global',
        startPos: {
          line: 14,
          column: 4,
        },
        endPos: {
          line: 14,
          column: 10,
        },
        lineNo: 14,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 14,
          column: 11,
        },
        endPos: {
          line: 14,
          column: 12,
        },
        lineNo: 14,
        colOffset: 11,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'x',
        startPos: {
          line: 15,
          column: 4,
        },
        endPos: {
          line: 15,
          column: 5,
        },
        lineNo: 15,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 15,
          column: 6,
        },
        endPos: {
          line: 15,
          column: 7,
        },
        lineNo: 15,
        colOffset: 6,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '10',
        startPos: {
          line: 15,
          column: 8,
        },
        endPos: {
          line: 15,
          column: 10,
        },
        lineNo: 15,
        colOffset: 8,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 15,
          column: 10,
        },
        endPos: {
          line: 15,
          column: 11,
        },
        lineNo: 15,
        colOffset: 10,
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
];
