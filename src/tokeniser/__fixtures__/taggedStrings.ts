import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const TAGGED_STRING_FIXTURES: TestCase[] = [
  {
    input: 'f"Hi there!"',
    expected: [
      {
        type: 'STRING',
        value: 'f"Hi there!"',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 12},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 12},
        endPos: {line: 1, column: 12},
        lineNo: 1,
        colOffset: 12,
      },
    ],
  },
  {
    input: 'f"""Hi there!"""',
    expected: [
      {
        type: 'STRING',
        value: 'f"""Hi there!"""',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 16},
        lineNo: 1,
        colOffset: 0,
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
    input: 'r"""\\""""',
    expected: [
      {
        type: 'STRING',
        value: 'r"""\\""""',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 0,
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
    input: 'b"""\\\\"""',
    expected: [
      {
        type: 'STRING',
        value: 'b"""\\\\"""',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 0,
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
    input: "u'''\\\\'''",
    expected: [
      {
        type: 'STRING',
        value: "u'''\\\\'''",
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 9},
        lineNo: 1,
        colOffset: 0,
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
    input: `u'''\\
\n\\

'Hey'
  \t
..."Hi."\n'''`,
    expected: [
      {
        type: 'STRING',
        value: `u'''\\
\n\\

'Hey'
  \t
..."Hi."\n'''`,
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 32},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 32},
        endPos: {line: 1, column: 32},
        lineNo: 1,
        colOffset: 32,
      },
    ],
  },
];
