const FIXTURE = {
  input: `{
  "a": 1,
  "b": 2,
}`,
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
    "type": "OP",
    "kind": "LBRACE",
    "value": "{",
    "startPos": {
      "line": 1,
      "column": 0
    },
    "endPos": {
      "line": 1,
      "column": 1
    },
    "lineNo": 1,
    "colOffset": 0
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 1,
      "column": 1
    },
    "endPos": {
      "line": 1,
      "column": 2
    },
    "lineNo": 1,
    "colOffset": 1
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"a\"",
    "startPos": {
      "line": 2,
      "column": 2
    },
    "endPos": {
      "line": 2,
      "column": 5
    },
    "lineNo": 2,
    "colOffset": 2
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 2,
      "column": 5
    },
    "endPos": {
      "line": 2,
      "column": 6
    },
    "lineNo": 2,
    "colOffset": 5
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "1",
    "startPos": {
      "line": 2,
      "column": 7
    },
    "endPos": {
      "line": 2,
      "column": 8
    },
    "lineNo": 2,
    "colOffset": 7
  },
  {
    "type": "OP",
    "kind": "COMMA",
    "value": ",",
    "startPos": {
      "line": 2,
      "column": 8
    },
    "endPos": {
      "line": 2,
      "column": 9
    },
    "lineNo": 2,
    "colOffset": 8
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 2,
      "column": 9
    },
    "endPos": {
      "line": 2,
      "column": 10
    },
    "lineNo": 2,
    "colOffset": 9
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"b\"",
    "startPos": {
      "line": 3,
      "column": 2
    },
    "endPos": {
      "line": 3,
      "column": 5
    },
    "lineNo": 3,
    "colOffset": 2
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 3,
      "column": 5
    },
    "endPos": {
      "line": 3,
      "column": 6
    },
    "lineNo": 3,
    "colOffset": 5
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "2",
    "startPos": {
      "line": 3,
      "column": 7
    },
    "endPos": {
      "line": 3,
      "column": 8
    },
    "lineNo": 3,
    "colOffset": 7
  },
  {
    "type": "OP",
    "kind": "COMMA",
    "value": ",",
    "startPos": {
      "line": 3,
      "column": 8
    },
    "endPos": {
      "line": 3,
      "column": 9
    },
    "lineNo": 3,
    "colOffset": 8
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 3,
      "column": 9
    },
    "endPos": {
      "line": 3,
      "column": 10
    },
    "lineNo": 3,
    "colOffset": 9
  },
  {
    "type": "OP",
    "kind": "RBRACE",
    "value": "}",
    "startPos": {
      "line": 4,
      "column": 0
    },
    "endPos": {
      "line": 4,
      "column": 1
    },
    "lineNo": 4,
    "colOffset": 0
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "",
    "startPos": {
      "line": 4,
      "column": 1
    },
    "endPos": {
      "line": 4,
      "column": 2
    },
    "lineNo": 4,
    "colOffset": 1
  },
  {
    "type": "ENDMARKER",
    "kind": "ENDMARKER",
    "value": "",
    "startPos": {
      "line": 5,
      "column": 0
    },
    "endPos": {
      "line": 5,
      "column": 0
    },
    "lineNo": 5,
    "colOffset": 0
  }
]
}