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
];
