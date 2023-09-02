import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const STRING_FIXTURES: TestCase[] = [
  {
    input: '"Hello"',
    expected: [
      {
        type: 'STRING',
        value: '"Hello"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 8},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 8},
        endPos: {line: 1, column: 8},
        lineNo: 1,
        colOffset: 8,
      },
    ],
  },
  {
    input: '"Hello world"',
    expected: [
      {
        type: 'STRING',
        value: '"Hello world"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 14},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 14},
        endPos: {line: 1, column: 14},
        lineNo: 1,
        colOffset: 14,
      },
    ],
  },
  {
    input: "'Hi'",
    expected: [
      {
        type: 'STRING',
        value: "'Hi'",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 5},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 5,
      },
    ],
  },
  {
    input: "'Quick brown fox'",
    expected: [
      {
        type: 'STRING',
        value: "'Quick brown fox'",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 18},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 18},
        endPos: {line: 1, column: 18},
        lineNo: 1,
        colOffset: 18,
      },
    ],
  },
  {
    input: '"\\""',
    expected: [
      {
        type: 'STRING',
        value: '"\\""',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 5},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 5,
      },
    ],
  },
  {
    input: '"\\\\"',
    expected: [
      {
        type: 'STRING',
        value: '"\\\\"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 5},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 5,
      },
    ],
  },
  {
    input: "'\\\\'",
    expected: [
      {
        type: 'STRING',
        value: "'\\\\'",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 5},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 5,
      },
    ],
  },
  {
    input: "'\\''",
    expected: [
      {
        type: 'STRING',
        value: "'\\''",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 5},
        endPos: {line: 1, column: 5},
        lineNo: 1,
        colOffset: 5,
      },
    ],
  },
  {
    input: '"\\t\\r"',
    expected: [
      {
        type: 'STRING',
        value: '"\\t\\r"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 7},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 7,
      },
    ],
  },
  {
    input: "'\\t\\\"\\\0xa'",
    expected: [
      {
        type: 'STRING',
        value: "'\\t\\\"\\\0xa'",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 11},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 11},
        endPos: {line: 1, column: 11},
        lineNo: 1,
        colOffset: 11,
      },
    ],
  },
  {
    input: "'\\'\\'\\''",
    expected: [
      {
        type: 'STRING',
        value: "'\\'\\'\\''",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 9},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 9,
      },
    ],
  },
  {
    input: "'''doctsring'''",
    expected: [
      {
        type: 'STRING',
        value: "'''doctsring'''",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 16},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 16},
        endPos: {line: 1, column: 16},
        lineNo: 1,
        colOffset: 16,
      },
    ],
  },
  {
    input: "'''\\t\\b'''",
    expected: [
      {
        type: 'STRING',
        value: "'''\\t\\b'''",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 11},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 11},
        endPos: {line: 1, column: 11},
        lineNo: 1,
        colOffset: 11,
      },
    ],
  },
  {
    input: "'''\\''''",
    expected: [
      {
        type: 'STRING',
        value: "'''\\''''",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 9},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 9,
      },
    ],
  },
  {
    input: "'''\\t\\''''",
    expected: [
      {
        type: 'STRING',
        value: "'''\\t\\''''",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 11},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 11},
        endPos: {line: 1, column: 11},
        lineNo: 1,
        colOffset: 11,
      },
    ],
  },
  {
    input: '"""\\t\\""""',
    expected: [
      {
        type: 'STRING',
        value: '"""\\t\\""""',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 11},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 11},
        endPos: {line: 1, column: 11},
        lineNo: 1,
        colOffset: 11,
      },
    ],
  },
  {
    input: '"""Hi " there "" stranger \' :) \'\'""\'"""',
    expected: [
      {
        type: 'STRING',
        value: '"""Hi " there "" stranger \' :) \'\'""\'"""',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 40},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 40},
        endPos: {line: 1, column: 40},
        lineNo: 1,
        colOffset: 40,
      },
    ],
  },
  {
    input: '""""""',
    expected: [
      {
        type: 'STRING',
        value: '""""""',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 7},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 7,
      },
    ],
  },
  {
    input: "''''''",
    expected: [
      {
        type: 'STRING',
        value: "''''''",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 7},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 7,
      },
    ],
  },
  {
    input: `'''
This is a multiline string
'''`,
    expected: [
      {
        type: 'STRING',
        value: `'''
This is a multiline string
'''`,
        startPos: {line: 1, column: 1},
        endPos: {line: 3, column: 4},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 3, column: 4},
        endPos: {line: 3, column: 4},
        lineNo: 3,
        colOffset: 4,
      },
    ],
  },
  {
    input: `"""


"""`,
    expected: [
      {
        type: 'STRING',
        value: `"""


"""`,
        startPos: {line: 1, column: 1},
        endPos: {line: 4, column: 4},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 4, column: 4},
        endPos: {line: 4, column: 4},
        lineNo: 4,
        colOffset: 4,
      },
    ],
  },
];
