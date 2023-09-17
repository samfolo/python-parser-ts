const FIXTURE = {
  input: "'\\\\\\''",
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
      type: 'STRING',
      kind: 'STRING',
      value: "'\\\\\\''",
      startPos: {
        line: 1,
        column: 0,
      },
      endPos: {
        line: 1,
        column: 6,
      },
      lineNo: 1,
      colOffset: 0,
    },
    {
      type: 'NEWLINE',
      kind: 'NEWLINE',
      value: '',
      startPos: {
        line: 1,
        column: 6,
      },
      endPos: {
        line: 1,
        column: 7,
      },
      lineNo: 1,
      colOffset: 6,
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
};
