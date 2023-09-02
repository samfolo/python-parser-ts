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
  {
    input: 'f"I am {age} years old"',
    expected: [
      {
        type: 'STRING',
        value: 'f"I am {age} years old"',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 23},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 23},
        endPos: {line: 1, column: 23},
        lineNo: 1,
        colOffset: 23,
      },
    ],
  },
  {
    input: 'f"I am {height} and {\'a half\'} feet tall"',
    expected: [
      {
        type: 'STRING',
        value: 'f"I am {height} and {\'a half\'} feet tall"',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 41},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 41},
        endPos: {line: 1, column: 41},
        lineNo: 1,
        colOffset: 41,
      },
    ],
  },
  {
    input: 'f"I weigh {weight.to_stone()} stone"',
    expected: [
      {
        type: 'STRING',
        value: 'f"I weigh {weight.to_stone()} stone"',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 36},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 36},
        endPos: {line: 1, column: 36},
        lineNo: 1,
        colOffset: 36,
      },
    ],
  },
  {
    input: 'f"I weigh {weight.to_kg() * 7} kilograms"',
    expected: [
      {
        type: 'STRING',
        value: 'f"I weigh {weight.to_kg() * 7} kilograms"',
        startPos: {line: 1, column: 0},
        endPos: {line: 1, column: 41},
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'EOF',
        value: TOKENS.EOF,
        startPos: {line: 1, column: 41},
        endPos: {line: 1, column: 41},
        lineNo: 1,
        colOffset: 41,
      },
    ],
  },
];
