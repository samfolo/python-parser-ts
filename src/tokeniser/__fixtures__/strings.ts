import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const STRING_FIXTURES: TestCase[] = [
  {
    input: '"Hello"',
    expected: [
      {
        type: 'STRING',
        value: 'Hello',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 0,
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
    input: '"Hello world"',
    expected: [
      {
        type: 'STRING',
        value: 'Hello world',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 13},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 13},
        endPos: {line: 1, column: 13},
        lineNo: 1,
        colOffset: 13,
      },
    ],
  },
  {
    input: "'Hi'",
    expected: [
      {
        type: 'STRING',
        value: 'Hi',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 4},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 4,
      },
    ],
  },
  {
    input: "'Quick brown fox'",
    expected: [
      {
        type: 'STRING',
        value: 'Quick brown fox',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 17},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 17},
        endPos: {line: 1, column: 17},
        lineNo: 1,
        colOffset: 17,
      },
    ],
  },
  {
    input: '"\\""',
    expected: [
      {
        type: 'STRING',
        value: '\\"',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 4},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 4,
      },
    ],
  },
  {
    input: "'\\''",
    expected: [
      {
        type: 'STRING',
        value: "\\'",
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 4},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 4,
      },
    ],
  },
  {
    input: '"\\t\\r"',
    expected: [
      {
        type: 'STRING',
        value: '\\t\\r',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 6},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 6,
      },
    ],
  },
  {
    input: "'\\t\\\"\\\0xa'",
    expected: [
      {
        type: 'STRING',
        value: '\\t\\"\\\0xa',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 10},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 10,
      },
    ],
  },
  {
    input: "'\\'\\'\\''",
    expected: [
      {
        type: 'STRING',
        value: "\\'\\'\\'",
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 8},
        lineNo: 1,
        colOffset: 0,
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
    input: "'''doctsring'''",
    expected: [
      {
        type: 'STRING',
        value: 'doctsring',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 15},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 15},
        endPos: {line: 1, column: 15},
        lineNo: 1,
        colOffset: 15,
      },
    ],
  },
  {
    input: "'''\\t\\b'''",
    expected: [
      {
        type: 'STRING',
        value: '\\t\\b',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 10},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 10,
      },
    ],
  },
  {
    input: "'''\\''''",
    expected: [
      {
        type: 'STRING',
        value: "\\'",
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 8},
        lineNo: 1,
        colOffset: 0,
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
    input: "'''\\t\\''''",
    expected: [
      {
        type: 'STRING',
        value: "\\t\\'",
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 10},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 10,
      },
    ],
  },
  {
    input: '"""\\t\\""""',
    expected: [
      {
        type: 'STRING',
        value: '\\t\\"',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 10},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 10,
      },
    ],
  },
  {
    input: '"""Hi " there "" stranger \' :) \'\'""\'"""',
    expected: [
      {
        type: 'STRING',
        value: 'Hi " there "" stranger \' :) \'\'""\'',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 39},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 39},
        endPos: {line: 1, column: 39},
        lineNo: 1,
        colOffset: 39,
      },
    ],
  },
  {
    input: '""""""',
    expected: [
      {
        type: 'STRING',
        value: '',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 6},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 6,
      },
    ],
  },
  {
    input: "''''''",
    expected: [
      {
        type: 'STRING',
        value: '',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 6},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 6,
      },
    ],
  },
];
