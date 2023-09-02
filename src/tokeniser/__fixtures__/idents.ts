import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const IDENT_FIXTURES: TestCase[] = [
  {
    input: 'a',
    expected: [
      {
        type: 'IDENT',
        value: 'a',
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
    input: 'some_variable',
    expected: [
      {
        type: 'IDENT',
        value: 'some_variable',
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
    input: '_private',
    expected: [
      {
        type: 'IDENT',
        value: '_private',
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
];
