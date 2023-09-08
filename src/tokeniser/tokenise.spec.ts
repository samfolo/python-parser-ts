import {tokenise} from './tokenise';
import {
  COLLECTION_FIXTURES,
  NAME_FIXTURES,
  NUMBER_FIXTURES,
  STRING_FIXTURES,
  TAGGED_STRING_FIXTURES,
  OPERATOR_FIXTURES,
  TestCase,
} from './__fixtures__';

describe('tokenise', () => {
  describe('empty files', () => {
    it.each<TestCase>([
      {
        input: '',
        expected: [
          {
            type: 'ENCODING',
            kind: 'ENCODING',
            value: 'utf-8',
            startPos: {
              line: 0,
              column: 0,
            },
            endPos: {
              line: 0,
              column: 0,
            },
            lineNo: 0,
            colOffset: 0,
          },
          {
            type: 'ENDMARKER',
            kind: 'ENDMARKER',
            value: '',
            startPos: {
              line: 1,
              column: 0,
            },
            endPos: {
              line: 1,
              column: 0,
            },
            lineNo: 1,
            colOffset: 0,
          },
        ],
      },
    ])('it tokenises the input as expected (case $#)', ({input, expected}) => {
      expect(tokenise(input)).toEqual(expected);
    });
  });

  describe.each([
    // {description: 'names', cases: NAME_FIXTURES},
    // {description: 'numbers', cases: NUMBER_FIXTURES},
    {description: 'strings', cases: STRING_FIXTURES},
    // {description: 'tagged strings', cases: TAGGED_STRING_FIXTURES},
    // {description: 'operators', cases: OPERATOR_FIXTURES},
    // {description: 'collections', cases: COLLECTION_FIXTURES},
  ])('$description', ({cases}) => {
    it.each<TestCase>(cases)('it tokenises the input as expected (case $#)', ({input, expected}) => {
      if (JSON.stringify(tokenise(input)) !== JSON.stringify(expected)) {
        console.log(tokenise(input));
      }
      expect(tokenise(input)).toEqual(expected);
    });
  });
});
