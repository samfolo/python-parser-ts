import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const NAME_FIXTURES: TestCase[] = [
  {
    input: 'a',
    expected: [
      {
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {line: 0, column: 0},
        endPos: {line: 0, column: 0},
        colOffset: 0,
        lineNo: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'a',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 2},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
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
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {line: 0, column: 0},
        endPos: {line: 0, column: 0},
        colOffset: 0,
        lineNo: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: 'some_variable',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 14},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
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
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {line: 0, column: 0},
        endPos: {line: 0, column: 0},
        colOffset: 0,
        lineNo: 0,
      },
      {
        type: 'NAME',
        kind: 'NAME',
        value: '_private',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 9},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 9,
      },
    ],
  },
];