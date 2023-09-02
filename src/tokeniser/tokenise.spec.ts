import {tokenise} from './tokenise';
import {TOKENS} from './tokens';
import {IDENT_FIXTURES, NUMBER_FIXTURES, STRING_FIXTURES, TAGGED_STRING_FIXTURES, TestCase} from './__fixtures__';
import {OPERATOR_FIXTURES} from './__fixtures__/operators';

describe('tokenise', () => {
  it.each<TestCase>([
    {
      input: '',
      expected: [
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
    ...IDENT_FIXTURES,
    ...NUMBER_FIXTURES,
    ...STRING_FIXTURES,
    ...TAGGED_STRING_FIXTURES,
    ...OPERATOR_FIXTURES,
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
