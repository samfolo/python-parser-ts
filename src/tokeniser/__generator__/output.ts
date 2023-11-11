const FIXTURE = {
  input: `12.5 and "hi\nthere!"`,
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
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "12.5",
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
    "type": "NAME",
    "kind": "NAME",
    "value": "and",
    "startPos": {
      "line": 1,
      "column": 5
    },
    "endPos": {
      "line": 1,
      "column": 8
    },
    "lineNo": 1,
    "colOffset": 5
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"hi\\\\nthere!\"",
    "startPos": {
      "line": 1,
      "column": 9
    },
    "endPos": {
      "line": 1,
      "column": 21
    },
    "lineNo": 1,
    "colOffset": 9
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "",
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