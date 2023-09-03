import {TOKENS} from '../tokens';

import {TestCase} from './types';

export const TAGGED_STRING_FIXTURES: TestCase[] = [
  {
    input: 'f"Hi there!"',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'f"Hi there!"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 13},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 13},
        endPos: {line: 1, column: 13},
        lineNo: 1,
        colOffset: 13,
      },
    ],
  },
  {
    input: 'f"""Hi there!"""',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'f"""Hi there!"""',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 17},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 17},
        endPos: {line: 1, column: 17},
        lineNo: 1,
        colOffset: 17,
      },
    ],
  },
  {
    input: 'fr"Hi there!"',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'fr"Hi there!"',
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
    input: 'rb"Hi there..."',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'rb"Hi there..."',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 16},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 16},
        endPos: {line: 1, column: 16},
        lineNo: 1,
        colOffset: 16,
      },
    ],
  },
  {
    input: 'bR"Yo"',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'bR"Yo"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 7},
        endPos: {line: 1, column: 7},
        lineNo: 1,
        colOffset: 7,
      },
    ],
  },
  {
    input: "F'\\\\'",
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
        type: 'STRING',
        kind: 'STRING',
        value: "F'\\\\'",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 6},
        endPos: {line: 1, column: 6},
        lineNo: 1,
        colOffset: 6,
      },
    ],
  },
  {
    input: "Rf'...ok'",
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
        type: 'STRING',
        kind: 'STRING',
        value: "Rf'...ok'",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 10},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 10,
      },
    ],
  },
  {
    input: 'r"""\\""""',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'r"""\\""""',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 10},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 10,
      },
    ],
  },
  {
    input: 'b"""\\\\"""',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'b"""\\\\"""',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 10},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 10,
      },
    ],
  },
  {
    input: "u'''\\\\'''",
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
        type: 'STRING',
        kind: 'STRING',
        value: "u'''\\\\'''",
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 10},
        endPos: {line: 1, column: 10},
        lineNo: 1,
        colOffset: 10,
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
        type: 'ENCODING',
        kind: 'ENCODING',
        value: 'utf-8',
        startPos: {line: 0, column: 0},
        endPos: {line: 0, column: 0},
        colOffset: 0,
        lineNo: 0,
      },
      {
        type: 'STRING',
        kind: 'STRING',
        value: `u'''\\
\n\\

'Hey'
  \t
..."Hi."\n'''`,
        startPos: {line: 1, column: 1},
        endPos: {line: 8, column: 4},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 8, column: 4},
        endPos: {line: 8, column: 4},
        lineNo: 8,
        colOffset: 4,
      },
    ],
  },
  {
    input: 'f"I am {age} years old"',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'f"I am {age} years old"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 24},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 24},
        endPos: {line: 1, column: 24},
        lineNo: 1,
        colOffset: 24,
      },
    ],
  },
  {
    input: 'f"I am {height} and {\'a half\'} feet tall"',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'f"I am {height} and {\'a half\'} feet tall"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 42},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 42},
        endPos: {line: 1, column: 42},
        lineNo: 1,
        colOffset: 42,
      },
    ],
  },
  {
    input: 'f"I weigh {weight.to_stone()} stone"',
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
        type: 'STRING',
        kind: 'STRING',
        value: 'f"I weigh {weight.to_stone()} stone"',
        startPos: {line: 1, column: 1},
        endPos: {line: 1, column: 37},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 1, column: 37},
        endPos: {line: 1, column: 37},
        lineNo: 1,
        colOffset: 37,
      },
    ],
  },
  {
    input: `f"""I weigh
{weight.to_kg() * 7} kilograms as

\nof {
    date.now().minus(hours=2).to_iso_string()
}"""`,
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
        type: 'STRING',
        kind: 'STRING',
        value: `f"""I weigh
{weight.to_kg() * 7} kilograms as

\nof {
    date.now().minus(hours=2).to_iso_string()
}"""`,
        startPos: {line: 1, column: 1},
        endPos: {line: 7, column: 5},
        lineNo: 1,
        colOffset: 1,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: TOKENS.ENDMARKER,
        startPos: {line: 7, column: 5},
        endPos: {line: 7, column: 5},
        lineNo: 7,
        colOffset: 5,
      },
    ],
  },
];
