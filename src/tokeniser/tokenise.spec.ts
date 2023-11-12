import {tokenise} from './tokenise';
import {
  BOOLEAN_FIXTURES,
  CLASS_FIXTURES,
  COLLECTION_FIXTURES,
  COMMENT_FIXTURES,
  COMPREHENSION_FIXTURES,
  CONTROL_FLOW_FIXTURES,
  ENCODING_FIXTURES,
  FUNCTION_EXPRESSION_FIXTURES,
  FUNCTION_FIXTURES,
  IMPORT_FIXTURES,
  LINE_CONTINUATION_FIXTURES,
  NAME_FIXTURES,
  NUMBER_FIXTURES,
  OPERATOR_FIXTURES,
  SPECIAL_CHARACTER_FIXTURES,
  STRING_FIXTURES,
  TAGGED_STRING_FIXTURES,
  WHITESPACE_FIXTURES,
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

  describe.each(
    [
      {skip: false, description: 'names', cases: NAME_FIXTURES},
      {skip: false, description: 'numbers', cases: NUMBER_FIXTURES},
      {skip: false, description: 'strings', cases: STRING_FIXTURES},
      {skip: false, description: 'tagged strings', cases: TAGGED_STRING_FIXTURES},
      {skip: false, description: 'operators', cases: OPERATOR_FIXTURES},
      {skip: false, description: 'collections', cases: COLLECTION_FIXTURES},
      {skip: false, description: 'booleans', cases: BOOLEAN_FIXTURES},
      {skip: true, description: 'classes', cases: CLASS_FIXTURES},
      {skip: true, description: 'comments', cases: COMMENT_FIXTURES},
      {skip: false, description: 'comprehensions', cases: COMPREHENSION_FIXTURES},
      {skip: false, description: 'control flows', cases: CONTROL_FLOW_FIXTURES},
      {skip: true, description: 'encodings', cases: ENCODING_FIXTURES},
      {skip: true, description: 'function expressions', cases: FUNCTION_EXPRESSION_FIXTURES},
      {skip: true, description: 'functions', cases: FUNCTION_FIXTURES},
      {skip: true, description: 'imports', cases: IMPORT_FIXTURES},
      {skip: true, description: 'line continuations', cases: LINE_CONTINUATION_FIXTURES},
      {skip: true, description: 'special characters', cases: SPECIAL_CHARACTER_FIXTURES},
      {skip: true, description: 'whitespaces', cases: WHITESPACE_FIXTURES},
    ].filter(({skip}) => !skip)
  )('$description', ({cases}) => {
    it.each<TestCase>(cases)('it tokenises the input as expected (case $#)', ({input, expected}) => {
      expect(tokenise(input)).toEqual(expected);
    });
  });
});
