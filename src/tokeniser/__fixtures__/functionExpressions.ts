import {TestCase} from './types';

export const FUNCTION_EXPRESSION_FIXTURES: TestCase[] = [
  {
    input: `go()`,
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
        value: 'go',
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
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        kind: 'RPAR',
        value: ')',
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
        value: '',
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
    input: `add_two(num_one, num_two)
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
        value: 'add_two',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'num_one',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'num_two',
        startPos: {
          line: 1,
          column: 17,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 17,
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
    input: `keyword_args(
    arg1="Hi", arg2="""Bye""")
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
        value: 'keyword_args',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 12,
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
        type: 'NL',
        kind: 'NL',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg1',
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
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"Hi"',
        startPos: {
          line: 2,
          column: 9,
        },
        endPos: {
          line: 2,
          column: 13,
        },
        lineNo: 2,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg2',
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
        kind: 'EQUAL',
        value: '=',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"""Bye"""',
        startPos: {
          line: 2,
          column: 20,
        },
        endPos: {
          line: 2,
          column: 29,
        },
        lineNo: 2,
        colOffset: 20,
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
    input: `funk(
    arg1, 
    arg2, 
    arg3=[
        'a',
        'b',
        {"name": "c", "value": "d"}
    ]
)
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
        value: 'funk',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'arg1',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg2',
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
        value: 'arg3',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 8,
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
        type: 'OP',
        kind: 'LSQB',
        value: '[',
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
        type: 'STRING',
        kind: 'STRING',
        value: "'a'",
        startPos: {
          line: 5,
          column: 8,
        },
        endPos: {
          line: 5,
          column: 11,
        },
        lineNo: 5,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 5,
          column: 11,
        },
        endPos: {
          line: 5,
          column: 12,
        },
        lineNo: 5,
        colOffset: 11,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'STRING',
        kind: 'STRING',
        value: "'b'",
        startPos: {
          line: 6,
          column: 8,
        },
        endPos: {
          line: 6,
          column: 11,
        },
        lineNo: 6,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
          line: 6,
          column: 12,
        },
        endPos: {
          line: 6,
          column: 13,
        },
        lineNo: 6,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"name"',
        startPos: {
          line: 7,
          column: 9,
        },
        endPos: {
          line: 7,
          column: 15,
        },
        lineNo: 7,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"c"',
        startPos: {
          line: 7,
          column: 17,
        },
        endPos: {
          line: 7,
          column: 20,
        },
        lineNo: 7,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 7,
          column: 20,
        },
        endPos: {
          line: 7,
          column: 21,
        },
        lineNo: 7,
        colOffset: 20,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"value"',
        startPos: {
          line: 7,
          column: 22,
        },
        endPos: {
          line: 7,
          column: 29,
        },
        lineNo: 7,
        colOffset: 22,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"d"',
        startPos: {
          line: 7,
          column: 31,
        },
        endPos: {
          line: 7,
          column: 34,
        },
        lineNo: 7,
        colOffset: 31,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 8,
          column: 4,
        },
        endPos: {
          line: 8,
          column: 5,
        },
        lineNo: 8,
        colOffset: 4,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 9,
          column: 0,
        },
        endPos: {
          line: 9,
          column: 1,
        },
        lineNo: 9,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 9,
          column: 1,
        },
        endPos: {
          line: 9,
          column: 2,
        },
        lineNo: 9,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
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
    ],
  },
  {
    input: `args = [1, 2, 3]
kwargs = {'a': 1, 'b': 2}
do_your_thang(*args, **kwargs)
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
        value: 'args',
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
        kind: 'EQUAL',
        value: '=',
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
        kind: 'LSQB',
        value: '[',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        value: '2',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        value: '3',
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
        value: '\n',
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
        value: 'kwargs',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 6,
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
        kind: 'LBRACE',
        value: '{',
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
        value: "'a'",
        startPos: {
          line: 2,
          column: 10,
        },
        endPos: {
          line: 2,
          column: 13,
        },
        lineNo: 2,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        type: 'STRING',
        kind: 'STRING',
        value: "'b'",
        startPos: {
          line: 2,
          column: 18,
        },
        endPos: {
          line: 2,
          column: 21,
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
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
        kind: 'RBRACE',
        value: '}',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'do_your_thang',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 13,
        },
        lineNo: 3,
        colOffset: 0,
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
        kind: 'STAR',
        value: '*',
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
        kind: 'COMMA',
        value: ',',
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
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 3,
          column: 21,
        },
        endPos: {
          line: 3,
          column: 23,
        },
        lineNo: 3,
        colOffset: 21,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 3,
          column: 23,
        },
        endPos: {
          line: 3,
          column: 29,
        },
        lineNo: 3,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 3,
          column: 29,
        },
        endPos: {
          line: 3,
          column: 30,
        },
        lineNo: 3,
        colOffset: 29,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
    input: `obj = MyClass()
obj.method_name(arg1, arg2)
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
        value: 'obj',
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
        kind: 'EQUAL',
        value: '=',
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
        value: 'MyClass',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 13,
        },
        lineNo: 1,
        colOffset: 6,
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'obj',
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
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        value: 'method_name',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 15,
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
        value: 'arg1',
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
        value: 'arg2',
        startPos: {
          line: 2,
          column: 22,
        },
        endPos: {
          line: 2,
          column: 26,
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
    input: `obj.first_method().second_method(arg)`,
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
        value: 'obj',
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
        kind: 'DOT',
        value: '.',
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
        value: 'first_method',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'DOT',
        value: '.',
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
        value: 'second_method',
        startPos: {
          line: 1,
          column: 19,
        },
        endPos: {
          line: 1,
          column: 32,
        },
        lineNo: 1,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'arg',
        startPos: {
          line: 1,
          column: 33,
        },
        endPos: {
          line: 1,
          column: 36,
        },
        lineNo: 1,
        colOffset: 33,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `lambda_arg(lambda x: x * 2)`,
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
        value: 'lambda_arg',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 10,
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
        value: 'lambda',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 17,
        },
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        value: 'x',
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
        value: '2',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `result = get_function()(arg1, arg2)


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
        value: 'result',
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
        value: 'get_function',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 21,
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
        kind: 'RPAR',
        value: ')',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg1',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 28,
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
        value: 'arg2',
        startPos: {
          line: 1,
          column: 30,
        },
        endPos: {
          line: 1,
          column: 34,
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
    input: `obj_one = MyClass(arg1, arg2)
obj_other_one = MyClass(*args, **kwargs)`,
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
        value: 'obj_one',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'MyClass',
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
        value: 'arg1',
        startPos: {
          line: 1,
          column: 18,
        },
        endPos: {
          line: 1,
          column: 22,
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
        value: 'arg2',
        startPos: {
          line: 1,
          column: 24,
        },
        endPos: {
          line: 1,
          column: 28,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'obj_other_one',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 13,
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
        value: 'MyClass',
        startPos: {
          line: 2,
          column: 16,
        },
        endPos: {
          line: 2,
          column: 23,
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
        kind: 'STAR',
        value: '*',
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
        value: 'args',
        startPos: {
          line: 2,
          column: 25,
        },
        endPos: {
          line: 2,
          column: 29,
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
        kind: 'DOUBLESTAR',
        value: '**',
        startPos: {
          line: 2,
          column: 31,
        },
        endPos: {
          line: 2,
          column: 33,
        },
        lineNo: 2,
        colOffset: 31,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'kwargs',
        startPos: {
          line: 2,
          column: 33,
        },
        endPos: {
          line: 2,
          column: 39,
        },
        lineNo: 2,
        colOffset: 33,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 2,
          column: 39,
        },
        endPos: {
          line: 2,
          column: 40,
        },
        lineNo: 2,
        colOffset: 39,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 2,
          column: 40,
        },
        endPos: {
          line: 2,
          column: 41,
        },
        lineNo: 2,
        colOffset: 40,
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
    input: `outer_function(inner_function(arg))
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
        value: 'outer_function',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 14,
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
        value: 'inner_function',
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 29,
        },
        lineNo: 1,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'arg',
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
    input: `list = [function_name(x) for x in iterable]

tuple = (function_name(x) for x in iterable)

dictionary = {x: function_name(x) for x in iterable}
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
        value: 'list',
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
        kind: 'EQUAL',
        value: '=',
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
        kind: 'LSQB',
        value: '[',
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
        value: 'function_name',
        startPos: {
          line: 1,
          column: 8,
        },
        endPos: {
          line: 1,
          column: 21,
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
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 1,
          column: 25,
        },
        endPos: {
          line: 1,
          column: 28,
        },
        lineNo: 1,
        colOffset: 25,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        value: 'in',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 1,
          column: 34,
        },
        endPos: {
          line: 1,
          column: 42,
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'tuple',
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
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 3,
          column: 6,
        },
        endPos: {
          line: 3,
          column: 7,
        },
        lineNo: 3,
        colOffset: 6,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'function_name',
        startPos: {
          line: 3,
          column: 9,
        },
        endPos: {
          line: 3,
          column: 22,
        },
        lineNo: 3,
        colOffset: 9,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 3,
          column: 26,
        },
        endPos: {
          line: 3,
          column: 29,
        },
        lineNo: 3,
        colOffset: 26,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 3,
          column: 32,
        },
        endPos: {
          line: 3,
          column: 34,
        },
        lineNo: 3,
        colOffset: 32,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 3,
          column: 35,
        },
        endPos: {
          line: 3,
          column: 43,
        },
        lineNo: 3,
        colOffset: 35,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 3,
          column: 43,
        },
        endPos: {
          line: 3,
          column: 44,
        },
        lineNo: 3,
        colOffset: 43,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 3,
          column: 44,
        },
        endPos: {
          line: 3,
          column: 45,
        },
        lineNo: 3,
        colOffset: 44,
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
        value: 'dictionary',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 10,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 5,
          column: 11,
        },
        endPos: {
          line: 5,
          column: 12,
        },
        lineNo: 5,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 5,
          column: 14,
        },
        endPos: {
          line: 5,
          column: 15,
        },
        lineNo: 5,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'function_name',
        startPos: {
          line: 5,
          column: 17,
        },
        endPos: {
          line: 5,
          column: 30,
        },
        lineNo: 5,
        colOffset: 17,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        value: 'for',
        startPos: {
          line: 5,
          column: 34,
        },
        endPos: {
          line: 5,
          column: 37,
        },
        lineNo: 5,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 5,
          column: 38,
        },
        endPos: {
          line: 5,
          column: 39,
        },
        lineNo: 5,
        colOffset: 38,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 5,
          column: 40,
        },
        endPos: {
          line: 5,
          column: 42,
        },
        lineNo: 5,
        colOffset: 40,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 5,
          column: 43,
        },
        endPos: {
          line: 5,
          column: 51,
        },
        lineNo: 5,
        colOffset: 43,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 5,
          column: 51,
        },
        endPos: {
          line: 5,
          column: 52,
        },
        lineNo: 5,
        colOffset: 51,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 52,
        },
        endPos: {
          line: 5,
          column: 53,
        },
        lineNo: 5,
        colOffset: 52,
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
    input: `def callback():
    pass

register_callback(callback)
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
        value: 'callback',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'register_callback',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 17,
        },
        lineNo: 4,
        colOffset: 0,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'callback',
        startPos: {
          line: 4,
          column: 18,
        },
        endPos: {
          line: 4,
          column: 26,
        },
        lineNo: 4,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
    input: `function_name(
    arg1, arg2,
    arg3, arg4,
        arg5, arg6
)
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
        value: 'function_name',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 13,
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'arg1',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg2',
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
        type: 'NL',
        kind: 'NL',
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
        value: 'arg3',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg4',
        startPos: {
          line: 3,
          column: 10,
        },
        endPos: {
          line: 3,
          column: 14,
        },
        lineNo: 3,
        colOffset: 10,
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
        type: 'NL',
        kind: 'NL',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg5',
        startPos: {
          line: 4,
          column: 8,
        },
        endPos: {
          line: 4,
          column: 12,
        },
        lineNo: 4,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg6',
        startPos: {
          line: 4,
          column: 14,
        },
        endPos: {
          line: 4,
          column: 18,
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
        kind: 'RPAR',
        value: ')',
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
        value: '\n',
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
    input: `my_list = [func1(x), func2(y),
           func3(z)]

my_dict = {key: func1(val)
           for key, val in iterable}

my_set = {func1(x),
          func2(y)}
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
        value: 'my_list',
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
        type: 'OP',
        kind: 'LSQB',
        value: '[',
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
        value: 'func1',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 16,
        },
        lineNo: 1,
        colOffset: 11,
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
        value: 'x',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'func2',
        startPos: {
          line: 1,
          column: 21,
        },
        endPos: {
          line: 1,
          column: 26,
        },
        lineNo: 1,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NL',
        kind: 'NL',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'func3',
        startPos: {
          line: 2,
          column: 11,
        },
        endPos: {
          line: 2,
          column: 16,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'z',
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
        kind: 'RPAR',
        value: ')',
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
        kind: 'RSQB',
        value: ']',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'my_dict',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 7,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'key',
        startPos: {
          line: 4,
          column: 11,
        },
        endPos: {
          line: 4,
          column: 14,
        },
        lineNo: 4,
        colOffset: 11,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'func1',
        startPos: {
          line: 4,
          column: 16,
        },
        endPos: {
          line: 4,
          column: 21,
        },
        lineNo: 4,
        colOffset: 16,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'val',
        startPos: {
          line: 4,
          column: 22,
        },
        endPos: {
          line: 4,
          column: 25,
        },
        lineNo: 4,
        colOffset: 22,
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
        type: 'NL',
        kind: 'NL',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
        startPos: {
          line: 5,
          column: 11,
        },
        endPos: {
          line: 5,
          column: 14,
        },
        lineNo: 5,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'key',
        startPos: {
          line: 5,
          column: 15,
        },
        endPos: {
          line: 5,
          column: 18,
        },
        lineNo: 5,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'val',
        startPos: {
          line: 5,
          column: 20,
        },
        endPos: {
          line: 5,
          column: 23,
        },
        lineNo: 5,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'in',
        startPos: {
          line: 5,
          column: 24,
        },
        endPos: {
          line: 5,
          column: 26,
        },
        lineNo: 5,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'iterable',
        startPos: {
          line: 5,
          column: 27,
        },
        endPos: {
          line: 5,
          column: 35,
        },
        lineNo: 5,
        colOffset: 27,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 5,
          column: 35,
        },
        endPos: {
          line: 5,
          column: 36,
        },
        lineNo: 5,
        colOffset: 35,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 36,
        },
        endPos: {
          line: 5,
          column: 37,
        },
        lineNo: 5,
        colOffset: 36,
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
        value: 'my_set',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 6,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 7,
          column: 7,
        },
        endPos: {
          line: 7,
          column: 8,
        },
        lineNo: 7,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
        startPos: {
          line: 7,
          column: 9,
        },
        endPos: {
          line: 7,
          column: 10,
        },
        lineNo: 7,
        colOffset: 9,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'func1',
        startPos: {
          line: 7,
          column: 10,
        },
        endPos: {
          line: 7,
          column: 15,
        },
        lineNo: 7,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NL',
        kind: 'NL',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'func2',
        startPos: {
          line: 8,
          column: 10,
        },
        endPos: {
          line: 8,
          column: 15,
        },
        lineNo: 8,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 8,
          column: 15,
        },
        endPos: {
          line: 8,
          column: 16,
        },
        lineNo: 8,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 8,
          column: 17,
        },
        endPos: {
          line: 8,
          column: 18,
        },
        lineNo: 8,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
        startPos: {
          line: 8,
          column: 18,
        },
        endPos: {
          line: 8,
          column: 19,
        },
        lineNo: 8,
        colOffset: 18,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 8,
          column: 19,
        },
        endPos: {
          line: 8,
          column: 20,
        },
        lineNo: 8,
        colOffset: 19,
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
  {
    input: `result = function_name(arg1
                       ,arg2,
                       arg3
                       , arg4)`,
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
        value: 'result',
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
        value: 'function_name',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 22,
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
        value: 'arg1',
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
        type: 'NL',
        kind: 'NL',
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
        value: 'arg2',
        startPos: {
          line: 2,
          column: 24,
        },
        endPos: {
          line: 2,
          column: 28,
        },
        lineNo: 2,
        colOffset: 24,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'arg3',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg4',
        startPos: {
          line: 4,
          column: 25,
        },
        endPos: {
          line: 4,
          column: 29,
        },
        lineNo: 4,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 4,
          column: 29,
        },
        endPos: {
          line: 4,
          column: 30,
        },
        lineNo: 4,
        colOffset: 29,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `value = outer_function(
    inner_function(
        another_function(
            arg1),
        arg2),
    arg3)`,
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
        value: 'value',
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
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        value: 'outer_function',
        startPos: {
          line: 1,
          column: 8,
        },
        endPos: {
          line: 1,
          column: 22,
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'inner_function',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 18,
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'another_function',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 24,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg1',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NL',
        kind: 'NL',
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
        value: 'arg2',
        startPos: {
          line: 5,
          column: 8,
        },
        endPos: {
          line: 5,
          column: 12,
        },
        lineNo: 5,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 5,
          column: 14,
        },
        endPos: {
          line: 5,
          column: 15,
        },
        lineNo: 5,
        colOffset: 14,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'arg3',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 8,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 6,
          column: 8,
        },
        endPos: {
          line: 6,
          column: 9,
        },
        lineNo: 6,
        colOffset: 8,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `result = function_name(
    arg1, arg2,
    arg3,
    arg4,
        arg5, arg6
)
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
        value: 'result',
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
        value: 'function_name',
        startPos: {
          line: 1,
          column: 9,
        },
        endPos: {
          line: 1,
          column: 22,
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'arg1',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg2',
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
        type: 'NL',
        kind: 'NL',
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
        value: 'arg3',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg4',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 8,
        },
        lineNo: 4,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg5',
        startPos: {
          line: 5,
          column: 8,
        },
        endPos: {
          line: 5,
          column: 12,
        },
        lineNo: 5,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg6',
        startPos: {
          line: 5,
          column: 14,
        },
        endPos: {
          line: 5,
          column: 18,
        },
        lineNo: 5,
        colOffset: 14,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 6,
          column: 1,
        },
        endPos: {
          line: 6,
          column: 2,
        },
        lineNo: 6,
        colOffset: 1,
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
    input: `(lambda x, y: (x + y) * (x - y))(arg1, arg2)`,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'lambda',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 7,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'y',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'PLUS',
        value: '+',
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
        value: 'y',
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
        kind: 'MINUS',
        value: '-',
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
        value: 'y',
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
        kind: 'RPAR',
        value: ')',
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
        kind: 'LPAR',
        value: '(',
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
        value: 'arg1',
        startPos: {
          line: 1,
          column: 33,
        },
        endPos: {
          line: 1,
          column: 37,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg2',
        startPos: {
          line: 1,
          column: 39,
        },
        endPos: {
          line: 1,
          column: 43,
        },
        lineNo: 1,
        colOffset: 39,
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `function_name(
    (arg1, arg2),
    (arg3, arg4)
)
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
        value: 'function_name',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 13,
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'arg1',
        startPos: {
          line: 2,
          column: 5,
        },
        endPos: {
          line: 2,
          column: 9,
        },
        lineNo: 2,
        colOffset: 5,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        value: 'arg2',
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        kind: 'LPAR',
        value: '(',
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
        value: 'arg3',
        startPos: {
          line: 3,
          column: 5,
        },
        endPos: {
          line: 3,
          column: 9,
        },
        lineNo: 3,
        colOffset: 5,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        value: 'arg4',
        startPos: {
          line: 3,
          column: 11,
        },
        endPos: {
          line: 3,
          column: 15,
        },
        lineNo: 3,
        colOffset: 11,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        value: '\n',
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
    input: `my_list[func1(start_index) : func2(end_index)]`,
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
        value: 'my_list',
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
        kind: 'LSQB',
        value: '[',
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
        value: 'func1',
        startPos: {
          line: 1,
          column: 8,
        },
        endPos: {
          line: 1,
          column: 13,
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
        value: 'start_index',
        startPos: {
          line: 1,
          column: 14,
        },
        endPos: {
          line: 1,
          column: 25,
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
        value: 'func2',
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
        kind: 'LPAR',
        value: '(',
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
        value: 'end_index',
        startPos: {
          line: 1,
          column: 35,
        },
        endPos: {
          line: 1,
          column: 44,
        },
        lineNo: 1,
        colOffset: 35,
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
        kind: 'RSQB',
        value: ']',
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
        value: '',
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
];
