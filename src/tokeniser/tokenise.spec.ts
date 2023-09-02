import {tokenise} from './tokenise';
import {TOKENS} from './tokens';
import {Token} from './types';

describe('tokenise', () => {
  interface TestCase {
    input: string;
    expected: Token[];
  }

  it.each<TestCase>([
    {
      input: '',
      expected: [
        {
          type: 'EOF',
          value: TOKENS.EOF,
          startPos: {line: 1, column: 0},
          endPos: {line: 1, column: 0},
          lineNo: 1,
          colOffset: 0,
        },
      ],
    },
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
    // {input: '{}', expected: []},
    // {input: '[]', expected: []},
    // {input: '', expected: []},
  ])('it tokenises the input as expected (case $#)', ({input, expected}) => {
    if (JSON.stringify(tokenise(input)) !== JSON.stringify(expected)) {
      console.log(tokenise(input));
    }
    expect(tokenise(input)).toEqual(expected);
  });
});
