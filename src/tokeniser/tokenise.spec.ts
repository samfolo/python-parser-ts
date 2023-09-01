import {tokenise} from './tokenise';
import {Token} from './types';

describe('tokenise', () => {
  interface TestCase {
    input: string;
    expected: Token[];
  }

  it.each<TestCase>([{input: '', expected: []}])(
    'it tokenises the input as expected (case $#)',
    ({input, expected}) => {
      expect(tokenise(input)).toEqual(expected);
    }
  );
});
