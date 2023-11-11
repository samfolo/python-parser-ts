const FIXTURE = {
  input: `func(x for x in iterable)


`,
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
    "value": "func",
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
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
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
    "value": "for",
    "startPos": {
      "line": 1,
      "column": 7
    },
    "endPos": {
      "line": 1,
      "column": 10
    },
    "lineNo": 1,
    "colOffset": 7
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
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
    "value": "in",
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
    "value": "iterable",
    "startPos": {
      "line": 1,
      "column": 16
    },
    "endPos": {
      "line": 1,
      "column": 24
    },
    "lineNo": 1,
    "colOffset": 16
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
    "value": "\\n",
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
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 2,
      "column": 0
    },
    "endPos": {
      "line": 2,
      "column": 1
    },
    "lineNo": 2,
    "colOffset": 0
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 3,
      "column": 0
    },
    "endPos": {
      "line": 3,
      "column": 1
    },
    "lineNo": 3,
    "colOffset": 0
  },
  {
    "type": "ENDMARKER",
    "kind": "ENDMARKER",
    "value": "",
    "startPos": {
      "line": 4,
      "column": 0
    },
    "endPos": {
      "line": 4,
      "column": 0
    },
    "lineNo": 4,
    "colOffset": 0
  }
]
}