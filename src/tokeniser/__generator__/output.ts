const FIXTURE = {
  input: `a = ((y for y in range(3)) for x in range(2))
b = (x for x in iterable if condition)`,
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
    "value": "a",
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
    "type": "OP",
    "kind": "EQUAL",
    "value": "=",
    "startPos": {
      "line": 1,
      "column": 2
    },
    "endPos": {
      "line": 1,
      "column": 3
    },
    "lineNo": 1,
    "colOffset": 2
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
    "value": "y",
    "startPos": {
      "line": 1,
      "column": 6
    },
    "endPos": {
      "line": 1,
      "column": 7
    },
    "lineNo": 1,
    "colOffset": 6
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "for",
    "startPos": {
      "line": 1,
      "column": 8
    },
    "endPos": {
      "line": 1,
      "column": 11
    },
    "lineNo": 1,
    "colOffset": 8
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "y",
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
    "type": "NAME",
    "kind": "NAME",
    "value": "in",
    "startPos": {
      "line": 1,
      "column": 14
    },
    "endPos": {
      "line": 1,
      "column": 16
    },
    "lineNo": 1,
    "colOffset": 14
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "range",
    "startPos": {
      "line": 1,
      "column": 17
    },
    "endPos": {
      "line": 1,
      "column": 22
    },
    "lineNo": 1,
    "colOffset": 17
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
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
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "3",
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
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
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
    "type": "NAME",
    "kind": "NAME",
    "value": "for",
    "startPos": {
      "line": 1,
      "column": 27
    },
    "endPos": {
      "line": 1,
      "column": 30
    },
    "lineNo": 1,
    "colOffset": 27
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 1,
      "column": 31
    },
    "endPos": {
      "line": 1,
      "column": 32
    },
    "lineNo": 1,
    "colOffset": 31
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "in",
    "startPos": {
      "line": 1,
      "column": 33
    },
    "endPos": {
      "line": 1,
      "column": 35
    },
    "lineNo": 1,
    "colOffset": 33
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "range",
    "startPos": {
      "line": 1,
      "column": 36
    },
    "endPos": {
      "line": 1,
      "column": 41
    },
    "lineNo": 1,
    "colOffset": 36
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 1,
      "column": 41
    },
    "endPos": {
      "line": 1,
      "column": 42
    },
    "lineNo": 1,
    "colOffset": 41
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "2",
    "startPos": {
      "line": 1,
      "column": 42
    },
    "endPos": {
      "line": 1,
      "column": 43
    },
    "lineNo": 1,
    "colOffset": 42
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 1,
      "column": 43
    },
    "endPos": {
      "line": 1,
      "column": 44
    },
    "lineNo": 1,
    "colOffset": 43
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 1,
      "column": 44
    },
    "endPos": {
      "line": 1,
      "column": 45
    },
    "lineNo": 1,
    "colOffset": 44
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 1,
      "column": 45
    },
    "endPos": {
      "line": 1,
      "column": 46
    },
    "lineNo": 1,
    "colOffset": 45
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "b",
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
    "type": "OP",
    "kind": "EQUAL",
    "value": "=",
    "startPos": {
      "line": 2,
      "column": 2
    },
    "endPos": {
      "line": 2,
      "column": 3
    },
    "lineNo": 2,
    "colOffset": 2
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 2,
      "column": 4
    },
    "endPos": {
      "line": 2,
      "column": 5
    },
    "lineNo": 2,
    "colOffset": 4
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
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
    "type": "NAME",
    "kind": "NAME",
    "value": "for",
    "startPos": {
      "line": 2,
      "column": 7
    },
    "endPos": {
      "line": 2,
      "column": 10
    },
    "lineNo": 2,
    "colOffset": 7
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 2,
      "column": 11
    },
    "endPos": {
      "line": 2,
      "column": 12
    },
    "lineNo": 2,
    "colOffset": 11
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "in",
    "startPos": {
      "line": 2,
      "column": 13
    },
    "endPos": {
      "line": 2,
      "column": 15
    },
    "lineNo": 2,
    "colOffset": 13
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "iterable",
    "startPos": {
      "line": 2,
      "column": 16
    },
    "endPos": {
      "line": 2,
      "column": 24
    },
    "lineNo": 2,
    "colOffset": 16
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "if",
    "startPos": {
      "line": 2,
      "column": 25
    },
    "endPos": {
      "line": 2,
      "column": 27
    },
    "lineNo": 2,
    "colOffset": 25
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "condition",
    "startPos": {
      "line": 2,
      "column": 28
    },
    "endPos": {
      "line": 2,
      "column": 37
    },
    "lineNo": 2,
    "colOffset": 28
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 2,
      "column": 37
    },
    "endPos": {
      "line": 2,
      "column": 38
    },
    "lineNo": 2,
    "colOffset": 37
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "",
    "startPos": {
      "line": 2,
      "column": 38
    },
    "endPos": {
      "line": 2,
      "column": 39
    },
    "lineNo": 2,
    "colOffset": 38
  },
  {
    "type": "ENDMARKER",
    "kind": "ENDMARKER",
    "value": "",
    "startPos": {
      "line": 3,
      "column": 0
    },
    "endPos": {
      "line": 3,
      "column": 0
    },
    "lineNo": 3,
    "colOffset": 0
  }
]
}