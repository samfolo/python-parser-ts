import {TestCase} from './types';

export const COMMENT_FIXTURES: TestCase[] = [
  {
    input: `# Hello there`,
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
        type: 'COMMENT',
        kind: 'COMMENT',
        value: '# Hello there',
        startPos: {
          line: 1,
          column: 0,
        },
        endPos: {
          line: 1,
          column: 13,
        },
        lineNo: 1,
        colOffset: 0,
      },
      {
        type: 'NL',
        kind: 'NL',
        value: '',
        startPos: {
          line: 1,
          column: 13,
        },
        endPos: {
          line: 1,
          column: 13,
        },
        lineNo: 1,
        colOffset: 13,
      },
      {
        type: 'ENDMARKER',
        kind: 'ENDMARKER',
        value: '',
        startPos: {
          line: 2,
          column: 0,
        },
        endPos: {
          line: 2,
          column: 0,
        },
        lineNo: 2,
        colOffset: 0,
      },
    ],
  },
];
