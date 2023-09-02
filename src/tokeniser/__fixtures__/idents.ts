import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const IDENT_FIXTURES: TestCase[] = [
  {
    input: 'a',
    expected: [
      {
        type: 'IDENT',
        value: 'a',
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
    input: 'some_variable',
    expected: [
      {
        type: 'IDENT',
        value: 'some_variable',
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
    input: '_private',
    expected: [
      {
        type: 'IDENT',
        value: '_private',
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
];
