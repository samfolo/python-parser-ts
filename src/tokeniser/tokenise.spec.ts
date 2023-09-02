import {tokenise} from './tokenise';
import {TOKENS} from './tokens';
import {IDENT_FIXTURES, NUMBER_FIXTURES, STRING_FIXTURES, TAGGED_STRING_FIXTURES, TestCase} from './__fixtures__';

describe('tokenise', () => {
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
    ...IDENT_FIXTURES,
    ...NUMBER_FIXTURES,
    ...STRING_FIXTURES,
    ...TAGGED_STRING_FIXTURES,
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
