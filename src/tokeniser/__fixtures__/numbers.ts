import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const NUMBER_FIXTURES: TestCase[] = [
  {
    input: '0',
    expected: [
      {
        type: 'INTEGER',
        value: '0',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 1},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 1},
        lineNo: 1,
        colOffset: 1,
      },
    ],
  },
  {
    input: '55',
    expected: [
      {
        type: 'INTEGER',
        value: '55',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 2},
        lineNo: 1,
        colOffset: 0,
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
    input: '0.',
    expected: [
      {
        type: 'FLOAT',
        value: '0.',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 2},
        lineNo: 1,
        colOffset: 0,
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
    input: '20.234',
    expected: [
      {
        type: 'FLOAT',
        value: '20.234',
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
