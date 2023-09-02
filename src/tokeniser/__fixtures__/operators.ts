import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const OPERATOR_FIXTURES: TestCase[] = [
  {
    input: '+',
    expected: [
      {
        type: 'SUM',
        value: '+',
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
    input: '-',
    expected: [
      {
        type: 'SUB',
        value: '-',
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
    input: '1 + 1',
    expected: [
      {
        type: 'NUMBER',
        value: '1',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 2},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'SUM',
        value: '+',
        startPos: {line: 1, column: 3},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 3,
      },
      {
        type: 'NUMBER',
        value: '1',
        startPos: {line: 1, column: 5},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 5,
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
    input: '3 - 2.5',
    expected: [
      {
        type: 'NUMBER',
        value: '3',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 2},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'SUB',
        value: '-',
        startPos: {line: 1, column: 3},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 3,
      },
      {
        type: 'FLOAT',
        value: '2.5',
        startPos: {line: 1, column: 5},
        endPos: {line: 1, column: 8},
        lineNo: 1,
        colOffset: 5,
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
    input: '10. + 6 + 12 - 4',
    expected: [
      {
        type: 'FLOAT',
        value: '10.',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 4},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'SUM',
        value: '+',
        startPos: {line: 1, column: 5},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 5,
      },
      {
        type: 'NUMBER',
        value: '6',
        startPos: {line: 1, column: 7},
        endPos: {line: 1, column: 8},
        lineNo: 1,
        colOffset: 7,
      },
      {
        type: 'SUM',
        value: '+',
        startPos: {line: 1, column: 9},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'NUMBER',
        value: '12',
        startPos: {line: 1, column: 11},
        endPos: {line: 1, column: 13},
        lineNo: 1,
        colOffset: 11,
      },
      {
        type: 'SUB',
        value: '-',
        startPos: {line: 1, column: 14},
        endPos: {line: 1, column: 15},
        lineNo: 1,
        colOffset: 14,
      },
      {
        type: 'NUMBER',
        value: '4',
        startPos: {line: 1, column: 16},
        endPos: {line: 1, column: 17},
        lineNo: 1,
        colOffset: 16,
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
    input: '12   * -1000 /      6',
    expected: [
      {
        type: 'NUMBER',
        value: '12',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 3},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'MUL',
        value: '*',
        startPos: {line: 1, column: 6},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 6,
      },
      {
        type: 'SUB',
        value: '-',
        startPos: {line: 1, column: 8},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 8,
      },
      {
        type: 'NUMBER',
        value: '1000',
        startPos: {line: 1, column: 9},
        endPos: {line: 1, column: 13},
        lineNo: 1,
        colOffset: 9,
      },
      {
        type: 'DIV',
        value: '/',
        startPos: {line: 1, column: 14},
        endPos: {line: 1, column: 15},
        lineNo: 1,
        colOffset: 14,
      },
      {
        type: 'NUMBER',
        value: '6',
        startPos: {line: 1, column: 21},
        endPos: {line: 1, column: 22},
        lineNo: 1,
        colOffset: 21,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 22},
        endPos: {line: 1, column: 22},
        lineNo: 1,
        colOffset: 22,
      },
    ],
  },
];
