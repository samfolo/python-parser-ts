const FIXTURE = {
  input: `print(len([1, 3][0:1:2]))`,
  expected: [
  {
    "type": "ENCODING",
    "kind": "ENCODING",
    "value": "utf-8",
    "startPos": {
      "line": 0,
      "column": 0
    },
    "endPos": {
      "line": 0,
      "column": 0
    },
    "lineNo": 0,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "print",
    "startPos": {
      "line": 1,
      "column": 0
    },
    "endPos": {
      "line": 1,
      "column": 5
    },
    "lineNo": 1,
    "colOffset": 0
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 1,
      "column": 5
    },
    "endPos": {
      "line": 1,
      "column": 6
    },
    "lineNo": 1,
    "colOffset": 5
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "len",
    "startPos": {
      "line": 1,
      "column": 6
    },
    "endPos": {
      "line": 1,
      "column": 9
    },
    "lineNo": 1,
    "colOffset": 6
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 1,
      "column": 9
    },
    "endPos": {
      "line": 1,
      "column": 10
    },
    "lineNo": 1,
    "colOffset": 9
  },
  {
    "type": "OP",
    "kind": "LSQB",
    "value": "[",
    "startPos": {
      "line": 1,
      "column": 10
    },
    "endPos": {
      "line": 1,
      "column": 11
    },
    "lineNo": 1,
    "colOffset": 10
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "1",
    "startPos": {
      "line": 1,
      "column": 11
    },
    "endPos": {
      "line": 1,
      "column": 12
    },
    "lineNo": 1,
    "colOffset": 11
  },
  {
    "type": "OP",
    "kind": "COMMA",
    "value": ",",
    "startPos": {
      "line": 1,
      "column": 12
    },
    "endPos": {
      "line": 1,
      "column": 13
    },
    "lineNo": 1,
    "colOffset": 12
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "3",
    "startPos": {
      "line": 1,
      "column": 14
    },
    "endPos": {
      "line": 1,
      "column": 15
    },
    "lineNo": 1,
    "colOffset": 14
  },
  {
    "type": "OP",
    "kind": "RSQB",
    "value": "]",
    "startPos": {
      "line": 1,
      "column": 15
    },
    "endPos": {
      "line": 1,
      "column": 16
    },
    "lineNo": 1,
    "colOffset": 15
  },
  {
    "type": "OP",
    "kind": "LSQB",
    "value": "[",
    "startPos": {
      "line": 1,
      "column": 16
    },
    "endPos": {
      "line": 1,
      "column": 17
    },
    "lineNo": 1,
    "colOffset": 16
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "0",
    "startPos": {
      "line": 1,
      "column": 17
    },
    "endPos": {
      "line": 1,
      "column": 18
    },
    "lineNo": 1,
    "colOffset": 17
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 1,
      "column": 18
    },
    "endPos": {
      "line": 1,
      "column": 19
    },
    "lineNo": 1,
    "colOffset": 18
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "1",
    "startPos": {
      "line": 1,
      "column": 19
    },
    "endPos": {
      "line": 1,
      "column": 20
    },
    "lineNo": 1,
    "colOffset": 19
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 1,
      "column": 20
    },
    "endPos": {
      "line": 1,
      "column": 21
    },
    "lineNo": 1,
    "colOffset": 20
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "2",
    "startPos": {
      "line": 1,
      "column": 21
    },
    "endPos": {
      "line": 1,
      "column": 22
    },
    "lineNo": 1,
    "colOffset": 21
  },
  {
    "type": "OP",
    "kind": "RSQB",
    "value": "]",
    "startPos": {
      "line": 1,
      "column": 22
    },
    "endPos": {
      "line": 1,
      "column": 23
    },
    "lineNo": 1,
    "colOffset": 22
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 1,
      "column": 23
    },
    "endPos": {
      "line": 1,
      "column": 24
    },
    "lineNo": 1,
    "colOffset": 23
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 1,
      "column": 24
    },
    "endPos": {
      "line": 1,
      "column": 25
    },
    "lineNo": 1,
    "colOffset": 24
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "",
    "startPos": {
      "line": 1,
      "column": 25
    },
    "endPos": {
      "line": 1,
      "column": 26
    },
    "lineNo": 1,
    "colOffset": 25
  },
  {
    "type": "ENDMARKER",
    "kind": "ENDMARKER",
    "value": "",
    "startPos": {
      "line": 2,
      "column": 0
    },
    "endPos": {
      "line": 2,
      "column": 0
    },
    "lineNo": 2,
    "colOffset": 0
  }
]
}