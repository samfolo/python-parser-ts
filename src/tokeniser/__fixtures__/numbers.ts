import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const NUMBER_FIXTURES: TestCase[] = [
  {
    input: '0',
    expected: [
      {
        type: 'NUMBER',
        value: '0',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 2},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 2},
        endPos: {line: 1, column: 2},
        lineNo: 1,
        colOffset: 2,
      },
    ],
  },
  {
    input: '55',
    expected: [
      {
        type: 'NUMBER',
        value: '55',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 3},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 3},
        endPos: {line: 1, column: 3},
        lineNo: 1,
        colOffset: 3,
      },
    ],
  },
  {
    input: '0.',
    expected: [
      {
        type: 'FLOAT',
        value: '0.',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 3},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 3},
        endPos: {line: 1, column: 3},
        lineNo: 1,
        colOffset: 3,
      },
    ],
  },
  {
    input: '20.234',
    expected: [
      {
        type: 'FLOAT',
        value: '20.234',
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
    input: '0b01101',
    expected: [
      {
        type: 'NUMBER',
        value: '0b01101',
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
    input: '0B110001',
    expected: [
      {
        type: 'NUMBER',
        value: '0B110001',
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
    input: '0o10735251',
    expected: [
      {
        type: 'NUMBER',
        value: '0o10735251',
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
    input: '0O01662',
    expected: [
      {
        type: 'NUMBER',
        value: '0O01662',
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
    input: '1_000_000_000',
    expected: [
      {
        type: 'NUMBER',
        value: '1_000_000_000',
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
    input: '1_000.000',
    expected: [
      {
        type: 'FLOAT',
        value: '1_000.000',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 1,
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
    input: '1_0_00.00_0_0_13_1',
    expected: [
      {
        type: 'FLOAT',
        value: '1_0_00.00_0_0_13_1',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 19},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 19},
        endPos: {line: 1, column: 19},
        lineNo: 1,
        colOffset: 19,
      },
    ],
  },
  {
    input: '0xFF_AA_bc',
    expected: [
      {
        type: 'NUMBER',
        value: '0xFF_AA_bc',
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
    input: '0B0_1_100_1011',
    expected: [
      {
        type: 'NUMBER',
        value: '0B0_1_100_1011',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 15},
        lineNo: 1,
        colOffset: 1,
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
    input: '0o0_7_3456',
    expected: [
      {
        type: 'NUMBER',
        value: '0o0_7_3456',
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
    input: '1234.567j',
    expected: [
      {
        type: 'COMPLEX',
        value: '1234.567j',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 1,
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
    input: '9004_5_67J',
    expected: [
      {
        type: 'COMPLEX',
        value: '9004_5_67J',
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
];
