import {tokenise} from './tokenise';
import {TOKENS} from './tokens';
import {NAME_FIXTURES, NUMBER_FIXTURES, STRING_FIXTURES, TAGGED_STRING_FIXTURES, TestCase} from './__fixtures__';
import {OPERATOR_FIXTURES} from './__fixtures__/operators';

describe('tokenise', () => {
  it.each<TestCase>([
    {
      input: '',
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
          type: 'ENDMARKER',
          kind: 'ENDMARKER',
          value: TOKENS.ENDMARKER,
          startPos: {line: 1, column: 1},
          endPos: {line: 1, column: 1},
          lineNo: 1,
          colOffset: 1,
        },
      ],
    },
    ...NAME_FIXTURES,
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
