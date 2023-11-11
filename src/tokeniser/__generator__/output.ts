const FIXTURE = {
  input: `bool("True") or bool(int('''0'''))`,
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
    "value": "bool",
    "startPos": {
      "line": 1,
      "column": 0
    },
    "endPos": {
      "line": 1,
      "column": 4
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
      "column": 4
    },
    "endPos": {
      "line": 1,
      "column": 5
    },
    "lineNo": 1,
    "colOffset": 4
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"True\"",
    "startPos": {
      "line": 1,
      "column": 5
    },
    "endPos": {
      "line": 1,
      "column": 11
    },
    "lineNo": 1,
    "colOffset": 5
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
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
    "type": "NAME",
    "kind": "NAME",
    "value": "or",
    "startPos": {
      "line": 1,
      "column": 13
    },
    "endPos": {
      "line": 1,
      "column": 15
    },
    "lineNo": 1,
    "colOffset": 13
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "bool",
    "startPos": {
      "line": 1,
      "column": 16
    },
    "endPos": {
      "line": 1,
      "column": 20
    },
    "lineNo": 1,
    "colOffset": 16
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
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
    "type": "NAME",
    "kind": "NAME",
    "value": "int",
    "startPos": {
      "line": 1,
      "column": 21
    },
    "endPos": {
      "line": 1,
      "column": 24
    },
    "lineNo": 1,
    "colOffset": 21
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
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
    "type": "STRING",
    "kind": "STRING",
    "value": "'''0'''",
    "startPos": {
      "line": 1,
      "column": 25
    },
    "endPos": {
      "line": 1,
      "column": 32
    },
    "lineNo": 1,
    "colOffset": 25
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 1,
      "column": 32
    },
    "endPos": {
      "line": 1,
      "column": 33
    },
    "lineNo": 1,
    "colOffset": 32
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 1,
      "column": 33
    },
    "endPos": {
      "line": 1,
      "column": 34
    },
    "lineNo": 1,
    "colOffset": 33
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "",
    "startPos": {
      "line": 1,
      "column": 34
    },
    "endPos": {
      "line": 1,
      "column": 35
    },
    "lineNo": 1,
    "colOffset": 34
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