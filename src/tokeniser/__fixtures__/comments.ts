import {TestCase} from './types';

export const COMMENT_FIXTURES: TestCase[] = [
  {
    input: `#`,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '#',
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
        value: '',
        startPos: {
          line: 1,
          column: 1,
        },
        endPos: {
          line: 1,
          column: 1,
        },
        lineNo: 1,
        colOffset: 1,
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
    input: `# Hello there`,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Hello there',
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
        type: 'NL',
        kind: 'NL',
        value: '',
        startPos: {
          line: 1,
          column: 13,
        },
        endPos: {
          line: 1,
          column: 13,
        },
        lineNo: 1,
        colOffset: 13,
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
    input: `# Hello there
# This is a comment
# This is another comment
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Hello there',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# This is a comment',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 19,
        },
        lineNo: 2,
        colOffset: 0,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# This is another comment',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 25,
        },
        lineNo: 3,
        colOffset: 0,
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
    input: `# This is a single-line comment
x = 5  # Inline comment`,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# This is a single-line comment',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 31,
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
        value: 'x',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '5',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Inline comment',
        startPos: {
          line: 2,
          column: 7,
        },
        endPos: {
          line: 2,
          column: 23,
        },
        lineNo: 2,
        colOffset: 7,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `x = x + 1  # Increment x`,
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
        value: 'x',
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
        kind: 'PLUS',
        value: '+',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Increment x',
        startPos: {
          line: 1,
          column: 11,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def foo():
    # This function does something important
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# This function does something important',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 44,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NL',
        kind: 'NL',
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
    input: `# print("This won't run")
# a = 10  # This line is also commented out`,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: `# print("This won't run")`,
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 25,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# a = 10  # This line is also commented out',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 43,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '',
        startPos: {
          line: 2,
          column: 43,
        },
        endPos: {
          line: 2,
          column: 43,
        },
        lineNo: 2,
        colOffset: 43,
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
    input: `# Initialize the variables
x = 0
y = 1`,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Initialize the variables',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 26,
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
        value: 'x',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'y',
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
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 3,
          column: 2,
        },
        endPos: {
          line: 3,
          column: 3,
        },
        lineNo: 3,
        colOffset: 2,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        value: '',
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
    input: `while x < 10:
    # Loop body
# End of while loop
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Loop body',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# End of while loop',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 19,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
    input: `while x < 10:
    # Some comment
    pass
if y:
# Some other comment
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Some comment',
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
        type: 'NL',
        kind: 'NL',
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
        value: 'if',
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
        value: 'y',
        startPos: {
          line: 4,
          column: 3,
        },
        endPos: {
          line: 4,
          column: 4,
        },
        lineNo: 4,
        colOffset: 3,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 5,
        },
        endPos: {
          line: 4,
          column: 6,
        },
        lineNo: 4,
        colOffset: 5,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Some other comment',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 20,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'pass',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `def foo():
    """
    This function does something.
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
        type: 'STRING',
        kind: 'STRING',
        value: `"""
    This function does something.
    """`,
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 7,
        },
        lineNo: 2,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 4,
          column: 7,
        },
        endPos: {
          line: 4,
          column: 8,
        },
        lineNo: 4,
        colOffset: 7,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'pass',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 8,
        },
        lineNo: 5,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `result = some_function(long_argument1, long_argument2, 
                       long_argument3)  # Breaking up a long function call`,
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
        value: 'some_function',
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
        value: 'long_argument1',
        startPos: {
          line: 1,
          column: 23,
        },
        endPos: {
          line: 1,
          column: 37,
        },
        lineNo: 1,
        colOffset: 23,
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
        value: 'long_argument2',
        startPos: {
          line: 1,
          column: 39,
        },
        endPos: {
          line: 1,
          column: 53,
        },
        lineNo: 1,
        colOffset: 39,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 1,
          column: 53,
        },
        endPos: {
          line: 1,
          column: 54,
        },
        lineNo: 1,
        colOffset: 53,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'long_argument3',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 37,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Breaking up a long function call',
        startPos: {
          line: 2,
          column: 40,
        },
        endPos: {
          line: 2,
          column: 74,
        },
        lineNo: 2,
        colOffset: 40,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 2,
          column: 74,
        },
        endPos: {
          line: 2,
          column: 75,
        },
        lineNo: 2,
        colOffset: 74,
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
    input: `total = (price * quantity  # Subtotal
         + shipping        # Shipping cost
         - discount)       # Less discount`,
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
        value: 'total',
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
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'price',
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
        kind: 'STAR',
        value: '*',
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
        value: 'quantity',
        startPos: {
          line: 1,
          column: 17,
        },
        endPos: {
          line: 1,
          column: 25,
        },
        lineNo: 1,
        colOffset: 17,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Subtotal',
        startPos: {
          line: 1,
          column: 27,
        },
        endPos: {
          line: 1,
          column: 37,
        },
        lineNo: 1,
        colOffset: 27,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        kind: 'PLUS',
        value: '+',
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
        value: 'shipping',
        startPos: {
          line: 2,
          column: 11,
        },
        endPos: {
          line: 2,
          column: 19,
        },
        lineNo: 2,
        colOffset: 11,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Shipping cost',
        startPos: {
          line: 2,
          column: 27,
        },
        endPos: {
          line: 2,
          column: 42,
        },
        lineNo: 2,
        colOffset: 27,
      },
      {
        type: 'NL',
        kind: 'NL',
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
        type: 'OP',
        kind: 'MINUS',
        value: '-',
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
        value: 'discount',
        startPos: {
          line: 3,
          column: 11,
        },
        endPos: {
          line: 3,
          column: 19,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Less discount',
        startPos: {
          line: 3,
          column: 27,
        },
        endPos: {
          line: 3,
          column: 42,
        },
        lineNo: 3,
        colOffset: 27,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 3,
          column: 42,
        },
        endPos: {
          line: 3,
          column: 43,
        },
        lineNo: 3,
        colOffset: 42,
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
    input: `#!/usr/bin/env python3
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '#!/usr/bin/env python3',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 22,
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
    input: `squares = [x**2  # Square the number
           for x in range(10)]
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
        value: 'squares',
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
        type: 'OP',
        kind: 'DOUBLESTAR',
        value: '**',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Square the number',
        startPos: {
          line: 1,
          column: 17,
        },
        endPos: {
          line: 1,
          column: 36,
        },
        lineNo: 1,
        colOffset: 17,
      },
      {
        type: 'NL',
        kind: 'NL',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'for',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        value: 'in',
        startPos: {
          line: 2,
          column: 17,
        },
        endPos: {
          line: 2,
          column: 19,
        },
        lineNo: 2,
        colOffset: 17,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'range',
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
        kind: 'LPAR',
        value: '(',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '10',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'RSQB',
        value: ']',
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
    input: `if condition:  # Comment right after a colon
# Indented comment on the next line
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
        value: 'condition',
        startPos: {
          line: 1,
          column: 3,
        },
        endPos: {
          line: 1,
          column: 12,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment right after a colon',
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 44,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Indented comment on the next line',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 35,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: '',
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
    input: `result = (1 + 2  # Comment within an expression
          + 3)`,
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        kind: 'PLUS',
        value: '+',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment within an expression',
        startPos: {
          line: 1,
          column: 17,
        },
        endPos: {
          line: 1,
          column: 47,
        },
        lineNo: 1,
        colOffset: 17,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 1,
          column: 47,
        },
        endPos: {
          line: 1,
          column: 48,
        },
        lineNo: 1,
        colOffset: 47,
      },
      {
        type: 'OP',
        kind: 'PLUS',
        value: '+',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
    input: `for i in range(5):
    print(i)
# Comment at the end of the for loop block`,
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
        value: 'i',
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
        value: '5',
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
        value: 'i',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment at the end of the for loop block',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 42,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '',
        startPos: {
          line: 3,
          column: 42,
        },
        endPos: {
          line: 3,
          column: 42,
        },
        lineNo: 3,
        colOffset: 42,
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
    input: `"""This is a multi-line string
that is not assigned to any variable."""
# Comment after multi-line string`,
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
        type: 'STRING',
        kind: 'STRING',
        value: `"""This is a multi-line string
that is not assigned to any variable."""`,
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 40,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment after multi-line string',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 33,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '',
        startPos: {
          line: 3,
          column: 33,
        },
        endPos: {
          line: 3,
          column: 33,
        },
        lineNo: 3,
        colOffset: 33,
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
    input: `
# def unused_function():
#     print("This function is commented out")
#     # Inner comment in a commented-out block
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# def unused_function():',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 24,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '#     print("This function is commented out")',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 45,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 3,
          column: 45,
        },
        endPos: {
          line: 3,
          column: 46,
        },
        lineNo: 3,
        colOffset: 45,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '#     # Inner comment in a commented-out block',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 46,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
    input: `my_list = [
    1, 2,  # Comment between elements
    3, 4   # Another comment
]`,
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
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        kind: 'COMMA',
        value: ',',
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
        value: '2',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment between elements',
        startPos: {
          line: 2,
          column: 11,
        },
        endPos: {
          line: 2,
          column: 37,
        },
        lineNo: 2,
        colOffset: 11,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '3',
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
        kind: 'COMMA',
        value: ',',
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
        value: '4',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Another comment',
        startPos: {
          line: 3,
          column: 11,
        },
        endPos: {
          line: 3,
          column: 28,
        },
        lineNo: 3,
        colOffset: 11,
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
        kind: 'RSQB',
        value: ']',
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
    input: `@decorator
# Comment between decorator and function
def my_function():
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment between decorator and function',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 40,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'my_function',
        startPos: {
          line: 3,
          column: 4,
        },
        endPos: {
          line: 3,
          column: 15,
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'pass',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
    input: `print("# This is not a comment")
""" This is a string with # not an actual comment """`,
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
        value: 'print',
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
        type: 'STRING',
        kind: 'STRING',
        value: '"# This is not a comment"',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 31,
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
        value: '\n',
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
        type: 'STRING',
        kind: 'STRING',
        value: '""" This is a string with # not an actual comment """',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 53,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 2,
          column: 53,
        },
        endPos: {
          line: 2,
          column: 54,
        },
        lineNo: 2,
        colOffset: 53,
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
    input: `try:
    # Comment inside try block
    pass
except Exception:
        # Comment inside except block
    pass
else: # Comment inside else block
    pass
finally:
# Comment inside finally block
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment inside try block',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 30,
        },
        lineNo: 2,
        colOffset: 4,
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
        value: 'except',
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
        value: 'Exception',
        startPos: {
          line: 4,
          column: 7,
        },
        endPos: {
          line: 4,
          column: 16,
        },
        lineNo: 4,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment inside except block',
        startPos: {
          line: 5,
          column: 8,
        },
        endPos: {
          line: 5,
          column: 37,
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
          column: 37,
        },
        endPos: {
          line: 5,
          column: 38,
        },
        lineNo: 5,
        colOffset: 37,
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
        value: 'pass',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment inside else block',
        startPos: {
          line: 7,
          column: 6,
        },
        endPos: {
          line: 7,
          column: 33,
        },
        lineNo: 7,
        colOffset: 6,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 7,
          column: 33,
        },
        endPos: {
          line: 7,
          column: 34,
        },
        lineNo: 7,
        colOffset: 33,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 8,
          column: 0,
        },
        endPos: {
          line: 8,
          column: 4,
        },
        lineNo: 8,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'pass',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 8,
          column: 8,
        },
        endPos: {
          line: 8,
          column: 9,
        },
        lineNo: 8,
        colOffset: 8,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
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
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'finally',
        startPos: {
          line: 9,
          column: 0,
        },
        endPos: {
          line: 9,
          column: 7,
        },
        lineNo: 9,
        colOffset: 0,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment inside finally block',
        startPos: {
          line: 10,
          column: 0,
        },
        endPos: {
          line: 10,
          column: 30,
        },
        lineNo: 10,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 10,
          column: 30,
        },
        endPos: {
          line: 10,
          column: 31,
        },
        lineNo: 10,
        colOffset: 30,
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
        value: 'pass',
        startPos: {
          line: 11,
          column: 4,
        },
        endPos: {
          line: 11,
          column: 8,
        },
        lineNo: 11,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `@ decorator # comment
class A: # comment
    def __init__(self, # comment
                 a: int, # comment
                 b: int, # comment
                 c: int # comment
                 ) -> None:
        # comment
        self.a = a
        
# lorem ipsum dolor sit amet, consectetur
# adipiscing elit, sed do eiusmod tempor 
# incididunt ut labore et dolore magna aliqua.      
       
# Ut enim ad minim veniam, quis nostrud exercitation 
# ullamco laboris nisi ut aliquip ex ea commodo consequat.
#  
# Duis aute irure dolor in reprehenderit in voluptate
    # velit esse cillum dolore eu fugiat nulla pariatur.
def comment_riddled_function( # comment
        a, # comment
        b # comment
        , # comment
        c: Callable # comment
        [int, # comment
         int]# comment
         ) -> A: # comment
    # this is a comment
    if True: # comment
# comment
    # comment
        # comment

            # comment
                # comment
        return # comment
            
            
            # comment
        # comment

# comment

    # comment
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
          column: 2,
        },
        endPos: {
          line: 1,
          column: 11,
        },
        lineNo: 1,
        colOffset: 2,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 1,
          column: 12,
        },
        endPos: {
          line: 1,
          column: 21,
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
        value: 'class',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 5,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'A',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 2,
          column: 9,
        },
        endPos: {
          line: 2,
          column: 18,
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
        value: '__init__',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 16,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 3,
          column: 17,
        },
        endPos: {
          line: 3,
          column: 21,
        },
        lineNo: 3,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 3,
          column: 23,
        },
        endPos: {
          line: 3,
          column: 32,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
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
        kind: 'COLON',
        value: ':',
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
        value: 'int',
        startPos: {
          line: 4,
          column: 20,
        },
        endPos: {
          line: 4,
          column: 23,
        },
        lineNo: 4,
        colOffset: 20,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 4,
          column: 25,
        },
        endPos: {
          line: 4,
          column: 34,
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
        value: 'b',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'int',
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
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 5,
          column: 25,
        },
        endPos: {
          line: 5,
          column: 34,
        },
        lineNo: 5,
        colOffset: 25,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 5,
          column: 34,
        },
        endPos: {
          line: 5,
          column: 35,
        },
        lineNo: 5,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'c',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 6,
          column: 20,
        },
        endPos: {
          line: 6,
          column: 23,
        },
        lineNo: 6,
        colOffset: 20,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 6,
          column: 24,
        },
        endPos: {
          line: 6,
          column: 33,
        },
        lineNo: 6,
        colOffset: 24,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 7,
          column: 19,
        },
        endPos: {
          line: 7,
          column: 21,
        },
        lineNo: 7,
        colOffset: 19,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'None',
        startPos: {
          line: 7,
          column: 22,
        },
        endPos: {
          line: 7,
          column: 26,
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 8,
          column: 8,
        },
        endPos: {
          line: 8,
          column: 17,
        },
        lineNo: 8,
        colOffset: 8,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'self',
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
        value: 'a',
        startPos: {
          line: 9,
          column: 13,
        },
        endPos: {
          line: 9,
          column: 14,
        },
        lineNo: 9,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        value: 'a',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NL',
        kind: 'NL',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# lorem ipsum dolor sit amet, consectetur',
        startPos: {
          line: 11,
          column: 0,
        },
        endPos: {
          line: 11,
          column: 41,
        },
        lineNo: 11,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# adipiscing elit, sed do eiusmod tempor ',
        startPos: {
          line: 12,
          column: 0,
        },
        endPos: {
          line: 12,
          column: 41,
        },
        lineNo: 12,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 12,
          column: 41,
        },
        endPos: {
          line: 12,
          column: 42,
        },
        lineNo: 12,
        colOffset: 41,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# incididunt ut labore et dolore magna aliqua.      ',
        startPos: {
          line: 13,
          column: 0,
        },
        endPos: {
          line: 13,
          column: 52,
        },
        lineNo: 13,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 13,
          column: 52,
        },
        endPos: {
          line: 13,
          column: 53,
        },
        lineNo: 13,
        colOffset: 52,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Ut enim ad minim veniam, quis nostrud exercitation ',
        startPos: {
          line: 15,
          column: 0,
        },
        endPos: {
          line: 15,
          column: 53,
        },
        lineNo: 15,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 15,
          column: 53,
        },
        endPos: {
          line: 15,
          column: 54,
        },
        lineNo: 15,
        colOffset: 53,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        startPos: {
          line: 16,
          column: 0,
        },
        endPos: {
          line: 16,
          column: 58,
        },
        lineNo: 16,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 16,
          column: 58,
        },
        endPos: {
          line: 16,
          column: 59,
        },
        lineNo: 16,
        colOffset: 58,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '#  ',
        startPos: {
          line: 17,
          column: 0,
        },
        endPos: {
          line: 17,
          column: 3,
        },
        lineNo: 17,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Duis aute irure dolor in reprehenderit in voluptate',
        startPos: {
          line: 18,
          column: 0,
        },
        endPos: {
          line: 18,
          column: 53,
        },
        lineNo: 18,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 18,
          column: 53,
        },
        endPos: {
          line: 18,
          column: 54,
        },
        lineNo: 18,
        colOffset: 53,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# velit esse cillum dolore eu fugiat nulla pariatur.',
        startPos: {
          line: 19,
          column: 4,
        },
        endPos: {
          line: 19,
          column: 56,
        },
        lineNo: 19,
        colOffset: 4,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 19,
          column: 56,
        },
        endPos: {
          line: 19,
          column: 57,
        },
        lineNo: 19,
        colOffset: 56,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
        startPos: {
          line: 20,
          column: 0,
        },
        endPos: {
          line: 20,
          column: 3,
        },
        lineNo: 20,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'comment_riddled_function',
        startPos: {
          line: 20,
          column: 4,
        },
        endPos: {
          line: 20,
          column: 28,
        },
        lineNo: 20,
        colOffset: 4,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 20,
          column: 28,
        },
        endPos: {
          line: 20,
          column: 29,
        },
        lineNo: 20,
        colOffset: 28,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 20,
          column: 30,
        },
        endPos: {
          line: 20,
          column: 39,
        },
        lineNo: 20,
        colOffset: 30,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 20,
          column: 39,
        },
        endPos: {
          line: 20,
          column: 40,
        },
        lineNo: 20,
        colOffset: 39,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
        startPos: {
          line: 21,
          column: 8,
        },
        endPos: {
          line: 21,
          column: 9,
        },
        lineNo: 21,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 21,
          column: 9,
        },
        endPos: {
          line: 21,
          column: 10,
        },
        lineNo: 21,
        colOffset: 9,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 21,
          column: 11,
        },
        endPos: {
          line: 21,
          column: 20,
        },
        lineNo: 21,
        colOffset: 11,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 21,
          column: 20,
        },
        endPos: {
          line: 21,
          column: 21,
        },
        lineNo: 21,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'b',
        startPos: {
          line: 22,
          column: 8,
        },
        endPos: {
          line: 22,
          column: 9,
        },
        lineNo: 22,
        colOffset: 8,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 22,
          column: 10,
        },
        endPos: {
          line: 22,
          column: 19,
        },
        lineNo: 22,
        colOffset: 10,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 22,
          column: 19,
        },
        endPos: {
          line: 22,
          column: 20,
        },
        lineNo: 22,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 23,
          column: 8,
        },
        endPos: {
          line: 23,
          column: 9,
        },
        lineNo: 23,
        colOffset: 8,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 23,
          column: 10,
        },
        endPos: {
          line: 23,
          column: 19,
        },
        lineNo: 23,
        colOffset: 10,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 23,
          column: 19,
        },
        endPos: {
          line: 23,
          column: 20,
        },
        lineNo: 23,
        colOffset: 19,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'c',
        startPos: {
          line: 24,
          column: 8,
        },
        endPos: {
          line: 24,
          column: 9,
        },
        lineNo: 24,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 24,
          column: 9,
        },
        endPos: {
          line: 24,
          column: 10,
        },
        lineNo: 24,
        colOffset: 9,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'Callable',
        startPos: {
          line: 24,
          column: 11,
        },
        endPos: {
          line: 24,
          column: 19,
        },
        lineNo: 24,
        colOffset: 11,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 24,
          column: 20,
        },
        endPos: {
          line: 24,
          column: 29,
        },
        lineNo: 24,
        colOffset: 20,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 24,
          column: 29,
        },
        endPos: {
          line: 24,
          column: 30,
        },
        lineNo: 24,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 25,
          column: 8,
        },
        endPos: {
          line: 25,
          column: 9,
        },
        lineNo: 25,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 25,
          column: 9,
        },
        endPos: {
          line: 25,
          column: 12,
        },
        lineNo: 25,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 25,
          column: 12,
        },
        endPos: {
          line: 25,
          column: 13,
        },
        lineNo: 25,
        colOffset: 12,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 25,
          column: 14,
        },
        endPos: {
          line: 25,
          column: 23,
        },
        lineNo: 25,
        colOffset: 14,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 25,
          column: 23,
        },
        endPos: {
          line: 25,
          column: 24,
        },
        lineNo: 25,
        colOffset: 23,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'int',
        startPos: {
          line: 26,
          column: 9,
        },
        endPos: {
          line: 26,
          column: 12,
        },
        lineNo: 26,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 26,
          column: 12,
        },
        endPos: {
          line: 26,
          column: 13,
        },
        lineNo: 26,
        colOffset: 12,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 26,
          column: 13,
        },
        endPos: {
          line: 26,
          column: 22,
        },
        lineNo: 26,
        colOffset: 13,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 26,
          column: 22,
        },
        endPos: {
          line: 26,
          column: 23,
        },
        lineNo: 26,
        colOffset: 22,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 27,
          column: 9,
        },
        endPos: {
          line: 27,
          column: 10,
        },
        lineNo: 27,
        colOffset: 9,
      },
      {
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 27,
          column: 11,
        },
        endPos: {
          line: 27,
          column: 13,
        },
        lineNo: 27,
        colOffset: 11,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'A',
        startPos: {
          line: 27,
          column: 14,
        },
        endPos: {
          line: 27,
          column: 15,
        },
        lineNo: 27,
        colOffset: 14,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 27,
          column: 15,
        },
        endPos: {
          line: 27,
          column: 16,
        },
        lineNo: 27,
        colOffset: 15,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 27,
          column: 17,
        },
        endPos: {
          line: 27,
          column: 26,
        },
        lineNo: 27,
        colOffset: 17,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 27,
          column: 26,
        },
        endPos: {
          line: 27,
          column: 27,
        },
        lineNo: 27,
        colOffset: 26,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# this is a comment',
        startPos: {
          line: 28,
          column: 4,
        },
        endPos: {
          line: 28,
          column: 23,
        },
        lineNo: 28,
        colOffset: 4,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 28,
          column: 23,
        },
        endPos: {
          line: 28,
          column: 24,
        },
        lineNo: 28,
        colOffset: 23,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 29,
          column: 0,
        },
        endPos: {
          line: 29,
          column: 4,
        },
        lineNo: 29,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 29,
          column: 4,
        },
        endPos: {
          line: 29,
          column: 6,
        },
        lineNo: 29,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'True',
        startPos: {
          line: 29,
          column: 7,
        },
        endPos: {
          line: 29,
          column: 11,
        },
        lineNo: 29,
        colOffset: 7,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 29,
          column: 11,
        },
        endPos: {
          line: 29,
          column: 12,
        },
        lineNo: 29,
        colOffset: 11,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 29,
          column: 13,
        },
        endPos: {
          line: 29,
          column: 22,
        },
        lineNo: 29,
        colOffset: 13,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 29,
          column: 22,
        },
        endPos: {
          line: 29,
          column: 23,
        },
        lineNo: 29,
        colOffset: 22,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 30,
          column: 0,
        },
        endPos: {
          line: 30,
          column: 9,
        },
        lineNo: 30,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 30,
          column: 9,
        },
        endPos: {
          line: 30,
          column: 10,
        },
        lineNo: 30,
        colOffset: 9,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 31,
          column: 4,
        },
        endPos: {
          line: 31,
          column: 13,
        },
        lineNo: 31,
        colOffset: 4,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 31,
          column: 13,
        },
        endPos: {
          line: 31,
          column: 14,
        },
        lineNo: 31,
        colOffset: 13,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 32,
          column: 8,
        },
        endPos: {
          line: 32,
          column: 17,
        },
        lineNo: 32,
        colOffset: 8,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 32,
          column: 17,
        },
        endPos: {
          line: 32,
          column: 18,
        },
        lineNo: 32,
        colOffset: 17,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 33,
          column: 0,
        },
        endPos: {
          line: 33,
          column: 1,
        },
        lineNo: 33,
        colOffset: 0,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 34,
          column: 12,
        },
        endPos: {
          line: 34,
          column: 21,
        },
        lineNo: 34,
        colOffset: 12,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 34,
          column: 21,
        },
        endPos: {
          line: 34,
          column: 22,
        },
        lineNo: 34,
        colOffset: 21,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 35,
          column: 16,
        },
        endPos: {
          line: 35,
          column: 25,
        },
        lineNo: 35,
        colOffset: 16,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 35,
          column: 25,
        },
        endPos: {
          line: 35,
          column: 26,
        },
        lineNo: 35,
        colOffset: 25,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 36,
          column: 0,
        },
        endPos: {
          line: 36,
          column: 8,
        },
        lineNo: 36,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 36,
          column: 8,
        },
        endPos: {
          line: 36,
          column: 14,
        },
        lineNo: 36,
        colOffset: 8,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 36,
          column: 15,
        },
        endPos: {
          line: 36,
          column: 24,
        },
        lineNo: 36,
        colOffset: 15,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 36,
          column: 24,
        },
        endPos: {
          line: 36,
          column: 25,
        },
        lineNo: 36,
        colOffset: 24,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 37,
          column: 12,
        },
        endPos: {
          line: 37,
          column: 13,
        },
        lineNo: 37,
        colOffset: 12,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 38,
          column: 12,
        },
        endPos: {
          line: 38,
          column: 13,
        },
        lineNo: 38,
        colOffset: 12,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 39,
          column: 12,
        },
        endPos: {
          line: 39,
          column: 21,
        },
        lineNo: 39,
        colOffset: 12,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 39,
          column: 21,
        },
        endPos: {
          line: 39,
          column: 22,
        },
        lineNo: 39,
        colOffset: 21,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 40,
          column: 8,
        },
        endPos: {
          line: 40,
          column: 17,
        },
        lineNo: 40,
        colOffset: 8,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 40,
          column: 17,
        },
        endPos: {
          line: 40,
          column: 18,
        },
        lineNo: 40,
        colOffset: 17,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 41,
          column: 0,
        },
        endPos: {
          line: 41,
          column: 1,
        },
        lineNo: 41,
        colOffset: 0,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 42,
          column: 0,
        },
        endPos: {
          line: 42,
          column: 9,
        },
        lineNo: 42,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 42,
          column: 9,
        },
        endPos: {
          line: 42,
          column: 10,
        },
        lineNo: 42,
        colOffset: 9,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 43,
          column: 0,
        },
        endPos: {
          line: 43,
          column: 1,
        },
        lineNo: 43,
        colOffset: 0,
      },
      {
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# comment',
        startPos: {
          line: 44,
          column: 4,
        },
        endPos: {
          line: 44,
          column: 13,
        },
        lineNo: 44,
        colOffset: 4,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
        startPos: {
          line: 44,
          column: 13,
        },
        endPos: {
          line: 44,
          column: 14,
        },
        lineNo: 44,
        colOffset: 13,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 45,
          column: 0,
        },
        endPos: {
          line: 45,
          column: 0,
        },
        lineNo: 45,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 45,
          column: 0,
        },
        endPos: {
          line: 45,
          column: 0,
        },
        lineNo: 45,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 45,
          column: 0,
        },
        endPos: {
          line: 45,
          column: 0,
        },
        lineNo: 45,
        colOffset: 0,
      },
    ],
  },
  {
    input: `a = "This is a string" \\
# Comment right after line continuation
" and the string continues"`,
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
        type: 'STRING',
        kind: 'STRING',
        value: '"This is a string"',
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Comment right after line continuation',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 39,
        },
        lineNo: 2,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'STRING',
        kind: 'STRING',
        value: '" and the string continues"',
        startPos: {
          line: 3,
          column: 0,
        },
        endPos: {
          line: 3,
          column: 27,
        },
        lineNo: 3,
        colOffset: 0,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
];
