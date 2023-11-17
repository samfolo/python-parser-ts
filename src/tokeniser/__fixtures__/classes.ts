import {TestCase} from './types';

export const CLASS_FIXTURES: TestCase[] = [
  {
    input: `class MyClass:
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
        value: 'class',
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
        kind: 'COLON',
        value: ':',
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
        value: '',
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
    input: `class MyClass:
    def __init__(self, arg1, arg2):
        self.arg1 = arg1
        self.arg2 = arg2`,
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
        value: 'class',
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
        kind: 'COLON',
        value: ':',
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
        value: '__init__',
        startPos: {
          line: 2,
          column: 8,
        },
        endPos: {
          line: 2,
          column: 16,
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
        value: 'self',
        startPos: {
          line: 2,
          column: 17,
        },
        endPos: {
          line: 2,
          column: 21,
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
        value: 'arg1',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 27,
        },
        lineNo: 2,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        value: 'arg2',
        startPos: {
          line: 2,
          column: 29,
        },
        endPos: {
          line: 2,
          column: 33,
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
          column: 33,
        },
        endPos: {
          line: 2,
          column: 34,
        },
        lineNo: 2,
        colOffset: 33,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
        value: 'self',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 12,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg1',
        startPos: {
          line: 3,
          column: 13,
        },
        endPos: {
          line: 3,
          column: 17,
        },
        lineNo: 3,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg1',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
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
        kind: 'DOT',
        value: '.',
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
        value: 'arg2',
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
        kind: 'EQUAL',
        value: '=',
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
          line: 4,
          column: 20,
        },
        endPos: {
          line: 4,
          column: 24,
        },
        lineNo: 4,
        colOffset: 20,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `class MyClass:
    def method1(self):
        pass

    def method2(self, arg):
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
        value: 'class',
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
        kind: 'COLON',
        value: ':',
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
        value: 'method1',
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
        value: 'self',
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
        value: 'pass',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 12,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'def',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 7,
        },
        lineNo: 5,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'method2',
        startPos: {
          line: 5,
          column: 8,
        },
        endPos: {
          line: 5,
          column: 15,
        },
        lineNo: 5,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'self',
        startPos: {
          line: 5,
          column: 16,
        },
        endPos: {
          line: 5,
          column: 20,
        },
        lineNo: 5,
        colOffset: 16,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'arg',
        startPos: {
          line: 5,
          column: 22,
        },
        endPos: {
          line: 5,
          column: 25,
        },
        lineNo: 5,
        colOffset: 22,
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
        value: 'pass',
        startPos: {
          line: 6,
          column: 8,
        },
        endPos: {
          line: 6,
          column: 12,
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
    input: `class MyClass:
    @staticmethod
    def static_method():
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
        value: 'class',
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
        kind: 'COLON',
        value: ':',
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
        kind: 'AT',
        value: '@',
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
        value: 'staticmethod',
        startPos: {
          line: 2,
          column: 5,
        },
        endPos: {
          line: 2,
          column: 17,
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
        value: 'static_method',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 21,
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
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        value: 'pass',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `class MyClass:
    def __init__(self):
        self.__private_var = 1
        self._protected_var = 2

    def __private_method(self):
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
        value: 'class',
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
        kind: 'COLON',
        value: ':',
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
        value: '__init__',
        startPos: {
          line: 2,
          column: 8,
        },
        endPos: {
          line: 2,
          column: 16,
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
        value: 'self',
        startPos: {
          line: 2,
          column: 17,
        },
        endPos: {
          line: 2,
          column: 21,
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
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'self',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 12,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        type: 'NAME',
        kind: 'NAME',
        value: '__private_var',
        startPos: {
          line: 3,
          column: 13,
        },
        endPos: {
          line: 3,
          column: 26,
        },
        lineNo: 3,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
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
        kind: 'DOT',
        value: '.',
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
        value: '_protected_var',
        startPos: {
          line: 4,
          column: 13,
        },
        endPos: {
          line: 4,
          column: 27,
        },
        lineNo: 4,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'def',
        startPos: {
          line: 6,
          column: 4,
        },
        endPos: {
          line: 6,
          column: 7,
        },
        lineNo: 6,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '__private_method',
        startPos: {
          line: 6,
          column: 8,
        },
        endPos: {
          line: 6,
          column: 24,
        },
        lineNo: 6,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 6,
          column: 24,
        },
        endPos: {
          line: 6,
          column: 25,
        },
        lineNo: 6,
        colOffset: 24,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 6,
          column: 25,
        },
        endPos: {
          line: 6,
          column: 29,
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 6,
          column: 31,
        },
        endPos: {
          line: 6,
          column: 32,
        },
        lineNo: 6,
        colOffset: 31,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 7,
          column: 0,
        },
        endPos: {
          line: 7,
          column: 8,
        },
        lineNo: 7,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'pass',
        startPos: {
          line: 7,
          column: 8,
        },
        endPos: {
          line: 7,
          column: 12,
        },
        lineNo: 7,
        colOffset: 8,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `class BaseClassOne:
    pass

class DerivedClass(BaseClassOne):
    pass


class BaseClassTwo:
    pass

class MultiDerived(BaseClassOne, BaseClassTwo):
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
        value: 'class',
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
        value: 'BaseClassOne',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 18,
        },
        lineNo: 1,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'class',
        startPos: {
          line: 4,
          column: 0,
        },
        endPos: {
          line: 4,
          column: 5,
        },
        lineNo: 4,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'DerivedClass',
        startPos: {
          line: 4,
          column: 6,
        },
        endPos: {
          line: 4,
          column: 18,
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
        value: 'BaseClassOne',
        startPos: {
          line: 4,
          column: 19,
        },
        endPos: {
          line: 4,
          column: 31,
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 4,
          column: 32,
        },
        endPos: {
          line: 4,
          column: 33,
        },
        lineNo: 4,
        colOffset: 32,
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
        value: '\n',
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
        value: 'class',
        startPos: {
          line: 8,
          column: 0,
        },
        endPos: {
          line: 8,
          column: 5,
        },
        lineNo: 8,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'BaseClassTwo',
        startPos: {
          line: 8,
          column: 6,
        },
        endPos: {
          line: 8,
          column: 18,
        },
        lineNo: 8,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'pass',
        startPos: {
          line: 9,
          column: 4,
        },
        endPos: {
          line: 9,
          column: 8,
        },
        lineNo: 9,
        colOffset: 4,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'class',
        startPos: {
          line: 11,
          column: 0,
        },
        endPos: {
          line: 11,
          column: 5,
        },
        lineNo: 11,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'MultiDerived',
        startPos: {
          line: 11,
          column: 6,
        },
        endPos: {
          line: 11,
          column: 18,
        },
        lineNo: 11,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'BaseClassOne',
        startPos: {
          line: 11,
          column: 19,
        },
        endPos: {
          line: 11,
          column: 31,
        },
        lineNo: 11,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'BaseClassTwo',
        startPos: {
          line: 11,
          column: 33,
        },
        endPos: {
          line: 11,
          column: 45,
        },
        lineNo: 11,
        colOffset: 33,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 11,
          column: 45,
        },
        endPos: {
          line: 11,
          column: 46,
        },
        lineNo: 11,
        colOffset: 45,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 11,
          column: 46,
        },
        endPos: {
          line: 11,
          column: 47,
        },
        lineNo: 11,
        colOffset: 46,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 11,
          column: 47,
        },
        endPos: {
          line: 11,
          column: 48,
        },
        lineNo: 11,
        colOffset: 47,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
        startPos: {
          line: 12,
          column: 0,
        },
        endPos: {
          line: 12,
          column: 4,
        },
        lineNo: 12,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'pass',
        startPos: {
          line: 12,
          column: 4,
        },
        endPos: {
          line: 12,
          column: 8,
        },
        lineNo: 12,
        colOffset: 4,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 13,
          column: 0,
        },
        endPos: {
          line: 13,
          column: 0,
        },
        lineNo: 13,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 13,
          column: 0,
        },
        endPos: {
          line: 13,
          column: 0,
        },
        lineNo: 13,
        colOffset: 0,
      },
    ],
  },
  {
    input: `class MyClass:
    def __init__(self, name: str) -> None:
        self.name = name
        
    def __str__(self):
        return "MyClass instance"

    def __len__(self):
        return 0`,
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
        value: 'class',
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
        kind: 'COLON',
        value: ':',
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
        value: '__init__',
        startPos: {
          line: 2,
          column: 8,
        },
        endPos: {
          line: 2,
          column: 16,
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
        value: 'self',
        startPos: {
          line: 2,
          column: 17,
        },
        endPos: {
          line: 2,
          column: 21,
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
        value: 'name',
        startPos: {
          line: 2,
          column: 23,
        },
        endPos: {
          line: 2,
          column: 27,
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
        value: 'str',
        startPos: {
          line: 2,
          column: 29,
        },
        endPos: {
          line: 2,
          column: 32,
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
        type: 'OP',
        kind: 'RARROW',
        value: '->',
        startPos: {
          line: 2,
          column: 34,
        },
        endPos: {
          line: 2,
          column: 36,
        },
        lineNo: 2,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'None',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'self',
        startPos: {
          line: 3,
          column: 8,
        },
        endPos: {
          line: 3,
          column: 12,
        },
        lineNo: 3,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'name',
        startPos: {
          line: 3,
          column: 13,
        },
        endPos: {
          line: 3,
          column: 17,
        },
        lineNo: 3,
        colOffset: 13,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'name',
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
        value: 'def',
        startPos: {
          line: 5,
          column: 4,
        },
        endPos: {
          line: 5,
          column: 7,
        },
        lineNo: 5,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '__str__',
        startPos: {
          line: 5,
          column: 8,
        },
        endPos: {
          line: 5,
          column: 15,
        },
        lineNo: 5,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'self',
        startPos: {
          line: 5,
          column: 16,
        },
        endPos: {
          line: 5,
          column: 20,
        },
        lineNo: 5,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'return',
        startPos: {
          line: 6,
          column: 8,
        },
        endPos: {
          line: 6,
          column: 14,
        },
        lineNo: 6,
        colOffset: 8,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"MyClass instance"',
        startPos: {
          line: 6,
          column: 15,
        },
        endPos: {
          line: 6,
          column: 33,
        },
        lineNo: 6,
        colOffset: 15,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
        value: 'def',
        startPos: {
          line: 8,
          column: 4,
        },
        endPos: {
          line: 8,
          column: 7,
        },
        lineNo: 8,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '__len__',
        startPos: {
          line: 8,
          column: 8,
        },
        endPos: {
          line: 8,
          column: 15,
        },
        lineNo: 8,
        colOffset: 8,
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
        value: 'self',
        startPos: {
          line: 8,
          column: 16,
        },
        endPos: {
          line: 8,
          column: 20,
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
          column: 20,
        },
        endPos: {
          line: 8,
          column: 21,
        },
        lineNo: 8,
        colOffset: 20,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'return',
        startPos: {
          line: 9,
          column: 8,
        },
        endPos: {
          line: 9,
          column: 14,
        },
        lineNo: 9,
        colOffset: 8,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '0',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
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
    input: `class OuterClass:
    lambda_function = lambda self, x: x + 1
    
    if x > 2:
        def __init__(self):
            self.name = 'John'
            self.age = 20
    else:
        def __init__(self):
            self.name = 'Not John'
            self.age = 20
    
    def __call__(self, x):
        return x + 1
    
    class InnerClass:
        __slots__ = ['name', 'age']

        def __init__(self):
            self.name = 'Little John'
            self.age = 6`,
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
        value: 'class',
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
        value: 'OuterClass',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 16,
        },
        lineNo: 1,
        colOffset: 6,
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
        value: 'lambda_function',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 19,
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
        value: 'lambda',
        startPos: {
          line: 2,
          column: 22,
        },
        endPos: {
          line: 2,
          column: 28,
        },
        lineNo: 2,
        colOffset: 22,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 2,
          column: 29,
        },
        endPos: {
          line: 2,
          column: 33,
        },
        lineNo: 2,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 2,
          column: 33,
        },
        endPos: {
          line: 2,
          column: 34,
        },
        lineNo: 2,
        colOffset: 33,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 2,
          column: 36,
        },
        endPos: {
          line: 2,
          column: 37,
        },
        lineNo: 2,
        colOffset: 36,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
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
        type: 'OP',
        kind: 'PLUS',
        value: '+',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        type: 'NL',
        kind: 'NL',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 4,
          column: 4,
        },
        endPos: {
          line: 4,
          column: 6,
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
        type: 'OP',
        kind: 'GREATER',
        value: '>',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '2',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 8,
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
        type: 'NAME',
        kind: 'NAME',
        value: '__init__',
        startPos: {
          line: 5,
          column: 12,
        },
        endPos: {
          line: 5,
          column: 20,
        },
        lineNo: 5,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 5,
          column: 21,
        },
        endPos: {
          line: 5,
          column: 25,
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
        value: '            ',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 12,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 6,
          column: 12,
        },
        endPos: {
          line: 6,
          column: 16,
        },
        lineNo: 6,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 6,
          column: 16,
        },
        endPos: {
          line: 6,
          column: 17,
        },
        lineNo: 6,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'name',
        startPos: {
          line: 6,
          column: 17,
        },
        endPos: {
          line: 6,
          column: 21,
        },
        lineNo: 6,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'STRING',
        kind: 'STRING',
        value: "'John'",
        startPos: {
          line: 6,
          column: 24,
        },
        endPos: {
          line: 6,
          column: 30,
        },
        lineNo: 6,
        colOffset: 24,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 7,
          column: 12,
        },
        endPos: {
          line: 7,
          column: 16,
        },
        lineNo: 7,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'age',
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
        kind: 'EQUAL',
        value: '=',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '20',
        startPos: {
          line: 7,
          column: 23,
        },
        endPos: {
          line: 7,
          column: 25,
        },
        lineNo: 7,
        colOffset: 23,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'else',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 8,
          column: 9,
        },
        endPos: {
          line: 8,
          column: 10,
        },
        lineNo: 8,
        colOffset: 9,
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
        value: 'def',
        startPos: {
          line: 9,
          column: 8,
        },
        endPos: {
          line: 9,
          column: 11,
        },
        lineNo: 9,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '__init__',
        startPos: {
          line: 9,
          column: 12,
        },
        endPos: {
          line: 9,
          column: 20,
        },
        lineNo: 9,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 9,
          column: 20,
        },
        endPos: {
          line: 9,
          column: 21,
        },
        lineNo: 9,
        colOffset: 20,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 9,
          column: 21,
        },
        endPos: {
          line: 9,
          column: 25,
        },
        lineNo: 9,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 9,
          column: 25,
        },
        endPos: {
          line: 9,
          column: 26,
        },
        lineNo: 9,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 9,
          column: 26,
        },
        endPos: {
          line: 9,
          column: 27,
        },
        lineNo: 9,
        colOffset: 26,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 9,
          column: 27,
        },
        endPos: {
          line: 9,
          column: 28,
        },
        lineNo: 9,
        colOffset: 27,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '            ',
        startPos: {
          line: 10,
          column: 0,
        },
        endPos: {
          line: 10,
          column: 12,
        },
        lineNo: 10,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 10,
          column: 12,
        },
        endPos: {
          line: 10,
          column: 16,
        },
        lineNo: 10,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 10,
          column: 16,
        },
        endPos: {
          line: 10,
          column: 17,
        },
        lineNo: 10,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'name',
        startPos: {
          line: 10,
          column: 17,
        },
        endPos: {
          line: 10,
          column: 21,
        },
        lineNo: 10,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 10,
          column: 22,
        },
        endPos: {
          line: 10,
          column: 23,
        },
        lineNo: 10,
        colOffset: 22,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: "'Not John'",
        startPos: {
          line: 10,
          column: 24,
        },
        endPos: {
          line: 10,
          column: 34,
        },
        lineNo: 10,
        colOffset: 24,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 10,
          column: 34,
        },
        endPos: {
          line: 10,
          column: 35,
        },
        lineNo: 10,
        colOffset: 34,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 11,
          column: 12,
        },
        endPos: {
          line: 11,
          column: 16,
        },
        lineNo: 11,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 11,
          column: 16,
        },
        endPos: {
          line: 11,
          column: 17,
        },
        lineNo: 11,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'age',
        startPos: {
          line: 11,
          column: 17,
        },
        endPos: {
          line: 11,
          column: 20,
        },
        lineNo: 11,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 11,
          column: 21,
        },
        endPos: {
          line: 11,
          column: 22,
        },
        lineNo: 11,
        colOffset: 21,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '20',
        startPos: {
          line: 11,
          column: 23,
        },
        endPos: {
          line: 11,
          column: 25,
        },
        lineNo: 11,
        colOffset: 23,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 11,
          column: 25,
        },
        endPos: {
          line: 11,
          column: 26,
        },
        lineNo: 11,
        colOffset: 25,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '\n',
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
        value: 'def',
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
        type: 'NAME',
        kind: 'NAME',
        value: '__call__',
        startPos: {
          line: 13,
          column: 8,
        },
        endPos: {
          line: 13,
          column: 16,
        },
        lineNo: 13,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 13,
          column: 16,
        },
        endPos: {
          line: 13,
          column: 17,
        },
        lineNo: 13,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 13,
          column: 17,
        },
        endPos: {
          line: 13,
          column: 21,
        },
        lineNo: 13,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 13,
          column: 21,
        },
        endPos: {
          line: 13,
          column: 22,
        },
        lineNo: 13,
        colOffset: 21,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 13,
          column: 23,
        },
        endPos: {
          line: 13,
          column: 24,
        },
        lineNo: 13,
        colOffset: 23,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
        value: 'return',
        startPos: {
          line: 14,
          column: 8,
        },
        endPos: {
          line: 14,
          column: 14,
        },
        lineNo: 14,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'x',
        startPos: {
          line: 14,
          column: 15,
        },
        endPos: {
          line: 14,
          column: 16,
        },
        lineNo: 14,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'PLUS',
        value: '+',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 16,
          column: 4,
        },
        endPos: {
          line: 16,
          column: 4,
        },
        lineNo: 16,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'class',
        startPos: {
          line: 16,
          column: 4,
        },
        endPos: {
          line: 16,
          column: 9,
        },
        lineNo: 16,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'InnerClass',
        startPos: {
          line: 16,
          column: 10,
        },
        endPos: {
          line: 16,
          column: 20,
        },
        lineNo: 16,
        colOffset: 10,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 16,
          column: 20,
        },
        endPos: {
          line: 16,
          column: 21,
        },
        lineNo: 16,
        colOffset: 20,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 16,
          column: 21,
        },
        endPos: {
          line: 16,
          column: 22,
        },
        lineNo: 16,
        colOffset: 21,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 17,
          column: 0,
        },
        endPos: {
          line: 17,
          column: 8,
        },
        lineNo: 17,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '__slots__',
        startPos: {
          line: 17,
          column: 8,
        },
        endPos: {
          line: 17,
          column: 17,
        },
        lineNo: 17,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 17,
          column: 18,
        },
        endPos: {
          line: 17,
          column: 19,
        },
        lineNo: 17,
        colOffset: 18,
      },
      {
        type: 'OP',
        kind: 'LSQB',
        value: '[',
        startPos: {
          line: 17,
          column: 20,
        },
        endPos: {
          line: 17,
          column: 21,
        },
        lineNo: 17,
        colOffset: 20,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: "'name'",
        startPos: {
          line: 17,
          column: 21,
        },
        endPos: {
          line: 17,
          column: 27,
        },
        lineNo: 17,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
        startPos: {
          line: 17,
          column: 27,
        },
        endPos: {
          line: 17,
          column: 28,
        },
        lineNo: 17,
        colOffset: 27,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: "'age'",
        startPos: {
          line: 17,
          column: 29,
        },
        endPos: {
          line: 17,
          column: 34,
        },
        lineNo: 17,
        colOffset: 29,
      },
      {
        type: 'OP',
        kind: 'RSQB',
        value: ']',
        startPos: {
          line: 17,
          column: 34,
        },
        endPos: {
          line: 17,
          column: 35,
        },
        lineNo: 17,
        colOffset: 34,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 17,
          column: 35,
        },
        endPos: {
          line: 17,
          column: 36,
        },
        lineNo: 17,
        colOffset: 35,
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
        value: 'def',
        startPos: {
          line: 19,
          column: 8,
        },
        endPos: {
          line: 19,
          column: 11,
        },
        lineNo: 19,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '__init__',
        startPos: {
          line: 19,
          column: 12,
        },
        endPos: {
          line: 19,
          column: 20,
        },
        lineNo: 19,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        value: 'self',
        startPos: {
          line: 19,
          column: 21,
        },
        endPos: {
          line: 19,
          column: 25,
        },
        lineNo: 19,
        colOffset: 21,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 19,
          column: 25,
        },
        endPos: {
          line: 19,
          column: 26,
        },
        lineNo: 19,
        colOffset: 25,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 19,
          column: 26,
        },
        endPos: {
          line: 19,
          column: 27,
        },
        lineNo: 19,
        colOffset: 26,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 19,
          column: 27,
        },
        endPos: {
          line: 19,
          column: 28,
        },
        lineNo: 19,
        colOffset: 27,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '            ',
        startPos: {
          line: 20,
          column: 0,
        },
        endPos: {
          line: 20,
          column: 12,
        },
        lineNo: 20,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 20,
          column: 12,
        },
        endPos: {
          line: 20,
          column: 16,
        },
        lineNo: 20,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 20,
          column: 16,
        },
        endPos: {
          line: 20,
          column: 17,
        },
        lineNo: 20,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'name',
        startPos: {
          line: 20,
          column: 17,
        },
        endPos: {
          line: 20,
          column: 21,
        },
        lineNo: 20,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 20,
          column: 22,
        },
        endPos: {
          line: 20,
          column: 23,
        },
        lineNo: 20,
        colOffset: 22,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: "'Little John'",
        startPos: {
          line: 20,
          column: 24,
        },
        endPos: {
          line: 20,
          column: 37,
        },
        lineNo: 20,
        colOffset: 24,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 20,
          column: 37,
        },
        endPos: {
          line: 20,
          column: 38,
        },
        lineNo: 20,
        colOffset: 37,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 21,
          column: 12,
        },
        endPos: {
          line: 21,
          column: 16,
        },
        lineNo: 21,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 21,
          column: 16,
        },
        endPos: {
          line: 21,
          column: 17,
        },
        lineNo: 21,
        colOffset: 16,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'age',
        startPos: {
          line: 21,
          column: 17,
        },
        endPos: {
          line: 21,
          column: 20,
        },
        lineNo: 21,
        colOffset: 17,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
        startPos: {
          line: 21,
          column: 21,
        },
        endPos: {
          line: 21,
          column: 22,
        },
        lineNo: 21,
        colOffset: 21,
      },
      {
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '6',
        startPos: {
          line: 21,
          column: 23,
        },
        endPos: {
          line: 21,
          column: 24,
        },
        lineNo: 21,
        colOffset: 23,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 21,
          column: 24,
        },
        endPos: {
          line: 21,
          column: 25,
        },
        lineNo: 21,
        colOffset: 24,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 22,
          column: 0,
        },
        endPos: {
          line: 22,
          column: 0,
        },
        lineNo: 22,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 22,
          column: 0,
        },
        endPos: {
          line: 22,
          column: 0,
        },
        lineNo: 22,
        colOffset: 0,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 22,
          column: 0,
        },
        endPos: {
          line: 22,
          column: 0,
        },
        lineNo: 22,
        colOffset: 0,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 22,
          column: 0,
        },
        endPos: {
          line: 22,
          column: 0,
        },
        lineNo: 22,
        colOffset: 0,
      },
    ],
  },
  {
    input: `MyClass = type('MyClass', (BaseClass,), {'attr': 1, 'method': lambda self: "Hello"})`,
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
        value: 'MyClass',
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
        value: 'type',
        startPos: {
          line: 1,
          column: 10,
        },
        endPos: {
          line: 1,
          column: 14,
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
        type: 'STRING',
        kind: 'STRING',
        value: "'MyClass'",
        startPos: {
          line: 1,
          column: 15,
        },
        endPos: {
          line: 1,
          column: 24,
        },
        lineNo: 1,
        colOffset: 15,
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
        value: 'BaseClass',
        startPos: {
          line: 1,
          column: 27,
        },
        endPos: {
          line: 1,
          column: 36,
        },
        lineNo: 1,
        colOffset: 27,
      },
      {
        type: 'OP',
        kind: 'COMMA',
        value: ',',
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
        type: 'OP',
        kind: 'LBRACE',
        value: '{',
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
        type: 'STRING',
        kind: 'STRING',
        value: "'attr'",
        startPos: {
          line: 1,
          column: 41,
        },
        endPos: {
          line: 1,
          column: 47,
        },
        lineNo: 1,
        colOffset: 41,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NUMBER',
        kind: 'NUMBER',
        value: '1',
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
        kind: 'COMMA',
        value: ',',
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
        type: 'STRING',
        kind: 'STRING',
        value: "'method'",
        startPos: {
          line: 1,
          column: 52,
        },
        endPos: {
          line: 1,
          column: 60,
        },
        lineNo: 1,
        colOffset: 52,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'lambda',
        startPos: {
          line: 1,
          column: 62,
        },
        endPos: {
          line: 1,
          column: 68,
        },
        lineNo: 1,
        colOffset: 62,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
        startPos: {
          line: 1,
          column: 69,
        },
        endPos: {
          line: 1,
          column: 73,
        },
        lineNo: 1,
        colOffset: 69,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 1,
          column: 73,
        },
        endPos: {
          line: 1,
          column: 74,
        },
        lineNo: 1,
        colOffset: 73,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: '"Hello"',
        startPos: {
          line: 1,
          column: 75,
        },
        endPos: {
          line: 1,
          column: 82,
        },
        lineNo: 1,
        colOffset: 75,
      },
      {
        type: 'OP',
        kind: 'RBRACE',
        value: '}',
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
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 1,
          column: 83,
        },
        endPos: {
          line: 1,
          column: 84,
        },
        lineNo: 1,
        colOffset: 83,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 1,
          column: 84,
        },
        endPos: {
          line: 1,
          column: 85,
        },
        lineNo: 1,
        colOffset: 84,
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
    input: `class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
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
        value: 'class',
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
        value: 'Singleton',
        startPos: {
          line: 1,
          column: 6,
        },
        endPos: {
          line: 1,
          column: 15,
        },
        lineNo: 1,
        colOffset: 6,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: '_instance',
        startPos: {
          line: 2,
          column: 4,
        },
        endPos: {
          line: 2,
          column: 13,
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
        value: 'None',
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
        value: 'def',
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
        value: '__new__',
        startPos: {
          line: 4,
          column: 8,
        },
        endPos: {
          line: 4,
          column: 15,
        },
        lineNo: 4,
        colOffset: 8,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'cls',
        startPos: {
          line: 4,
          column: 16,
        },
        endPos: {
          line: 4,
          column: 19,
        },
        lineNo: 4,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 5,
          column: 0,
        },
        endPos: {
          line: 5,
          column: 8,
        },
        lineNo: 5,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'if',
        startPos: {
          line: 5,
          column: 8,
        },
        endPos: {
          line: 5,
          column: 10,
        },
        lineNo: 5,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'cls',
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
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        value: '_instance',
        startPos: {
          line: 5,
          column: 15,
        },
        endPos: {
          line: 5,
          column: 24,
        },
        lineNo: 5,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'is',
        startPos: {
          line: 5,
          column: 25,
        },
        endPos: {
          line: 5,
          column: 27,
        },
        lineNo: 5,
        colOffset: 25,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'None',
        startPos: {
          line: 5,
          column: 28,
        },
        endPos: {
          line: 5,
          column: 32,
        },
        lineNo: 5,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 5,
          column: 33,
        },
        endPos: {
          line: 5,
          column: 34,
        },
        lineNo: 5,
        colOffset: 33,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '            ',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 12,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'cls',
        startPos: {
          line: 6,
          column: 12,
        },
        endPos: {
          line: 6,
          column: 15,
        },
        lineNo: 6,
        colOffset: 12,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 6,
          column: 15,
        },
        endPos: {
          line: 6,
          column: 16,
        },
        lineNo: 6,
        colOffset: 15,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '_instance',
        startPos: {
          line: 6,
          column: 16,
        },
        endPos: {
          line: 6,
          column: 25,
        },
        lineNo: 6,
        colOffset: 16,
      },
      {
        type: 'OP',
        kind: 'EQUAL',
        value: '=',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'super',
        startPos: {
          line: 6,
          column: 28,
        },
        endPos: {
          line: 6,
          column: 33,
        },
        lineNo: 6,
        colOffset: 28,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
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
        type: 'OP',
        kind: 'DOT',
        value: '.',
        startPos: {
          line: 6,
          column: 35,
        },
        endPos: {
          line: 6,
          column: 36,
        },
        lineNo: 6,
        colOffset: 35,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '__new__',
        startPos: {
          line: 6,
          column: 36,
        },
        endPos: {
          line: 6,
          column: 43,
        },
        lineNo: 6,
        colOffset: 36,
      },
      {
        type: 'OP',
        kind: 'LPAR',
        value: '(',
        startPos: {
          line: 6,
          column: 43,
        },
        endPos: {
          line: 6,
          column: 44,
        },
        lineNo: 6,
        colOffset: 43,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'cls',
        startPos: {
          line: 6,
          column: 44,
        },
        endPos: {
          line: 6,
          column: 47,
        },
        lineNo: 6,
        colOffset: 44,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
        startPos: {
          line: 6,
          column: 47,
        },
        endPos: {
          line: 6,
          column: 48,
        },
        lineNo: 6,
        colOffset: 47,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 6,
          column: 48,
        },
        endPos: {
          line: 6,
          column: 49,
        },
        lineNo: 6,
        colOffset: 48,
      },
      {
        type: 'DEDENT',
        kind: 'DEDENT',
        value: '',
        startPos: {
          line: 7,
          column: 8,
        },
        endPos: {
          line: 7,
          column: 8,
        },
        lineNo: 7,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'return',
        startPos: {
          line: 7,
          column: 8,
        },
        endPos: {
          line: 7,
          column: 14,
        },
        lineNo: 7,
        colOffset: 8,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'cls',
        startPos: {
          line: 7,
          column: 15,
        },
        endPos: {
          line: 7,
          column: 18,
        },
        lineNo: 7,
        colOffset: 15,
      },
      {
        type: 'OP',
        kind: 'DOT',
        value: '.',
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
        value: '_instance',
        startPos: {
          line: 7,
          column: 19,
        },
        endPos: {
          line: 7,
          column: 28,
        },
        lineNo: 7,
        colOffset: 19,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
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
    input: `@dataclass
class MyDataClass:
    field1: int
    field2: str

class RegularClass(MyDataClass):
    def method(self):
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
        value: 'dataclass',
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
        value: 'MyDataClass',
        startPos: {
          line: 2,
          column: 6,
        },
        endPos: {
          line: 2,
          column: 17,
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
        value: 'field1',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        value: 'int',
        startPos: {
          line: 3,
          column: 12,
        },
        endPos: {
          line: 3,
          column: 15,
        },
        lineNo: 3,
        colOffset: 12,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'field2',
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
        kind: 'COLON',
        value: ':',
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
        value: 'str',
        startPos: {
          line: 4,
          column: 12,
        },
        endPos: {
          line: 4,
          column: 15,
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
        value: 'class',
        startPos: {
          line: 6,
          column: 0,
        },
        endPos: {
          line: 6,
          column: 5,
        },
        lineNo: 6,
        colOffset: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'RegularClass',
        startPos: {
          line: 6,
          column: 6,
        },
        endPos: {
          line: 6,
          column: 18,
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
        value: 'MyDataClass',
        startPos: {
          line: 6,
          column: 19,
        },
        endPos: {
          line: 6,
          column: 30,
        },
        lineNo: 6,
        colOffset: 19,
      },
      {
        type: 'OP',
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
        startPos: {
          line: 6,
          column: 31,
        },
        endPos: {
          line: 6,
          column: 32,
        },
        lineNo: 6,
        colOffset: 31,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '\n',
        startPos: {
          line: 6,
          column: 32,
        },
        endPos: {
          line: 6,
          column: 33,
        },
        lineNo: 6,
        colOffset: 32,
      },
      {
        type: 'INDENT',
        kind: 'INDENT',
        value: '    ',
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
        type: 'NAME',
        kind: 'NAME',
        value: 'def',
        startPos: {
          line: 7,
          column: 4,
        },
        endPos: {
          line: 7,
          column: 7,
        },
        lineNo: 7,
        colOffset: 4,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'method',
        startPos: {
          line: 7,
          column: 8,
        },
        endPos: {
          line: 7,
          column: 14,
        },
        lineNo: 7,
        colOffset: 8,
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
        type: 'NAME',
        kind: 'NAME',
        value: 'self',
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
        kind: 'RPAR',
        value: ')',
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
        type: 'OP',
        kind: 'COLON',
        value: ':',
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
        type: 'INDENT',
        kind: 'INDENT',
        value: '        ',
        startPos: {
          line: 8,
          column: 0,
        },
        endPos: {
          line: 8,
          column: 8,
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
          column: 8,
        },
        endPos: {
          line: 8,
          column: 12,
        },
        lineNo: 8,
        colOffset: 8,
      },
      {
        type: 'NEWLINE',
        kind: 'NEWLINE',
        value: '',
        startPos: {
          line: 8,
          column: 12,
        },
        endPos: {
          line: 8,
          column: 13,
        },
        lineNo: 8,
        colOffset: 12,
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
