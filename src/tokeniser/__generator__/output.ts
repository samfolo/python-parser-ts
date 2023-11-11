const FIXTURE = {
  input: `__main__`,
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
      type: 'NAME',
      kind: 'NAME',
      value: '__main__',
      startPos: {
        line: 1,
        column: 0,
      },
      endPos: {
        line: 1,
        column: 8,
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
        column: 8,
      },
      endPos: {
        line: 1,
        column: 9,
      },
      lineNo: 1,
      colOffset: 8,
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
