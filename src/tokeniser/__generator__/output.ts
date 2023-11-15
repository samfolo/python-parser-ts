const FIXTURE = {
  input: `if x > 5: print("x is greater than 5")

"Yes" if x > 5 else "No"

if num > 0: return True

for i in range(3): print(i, end=' ')

while count > 0: print(count); count -= 1

if x > 5: print("x > 5"); if x > 8: print("x > 8")

squares = [n**2 for n in numbers if n % 2 == 0]

if x < 15: print("x < 15"); x += 5

if x == 20: pass

try: result = 10 / x
except ZeroDivisionError: print("Division by zero!")`,
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
    "value": "if",
    "startPos": {
      "line": 1,
      "column": 0
    },
    "endPos": {
      "line": 1,
      "column": 2
    },
    "lineNo": 1,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 1,
      "column": 3
    },
    "endPos": {
      "line": 1,
      "column": 4
    },
    "lineNo": 1,
    "colOffset": 3
  },
  {
    "type": "OP",
    "kind": "GREATER",
    "value": ">",
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
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "5",
    "startPos": {
      "line": 1,
      "column": 7
    },
    "endPos": {
      "line": 1,
      "column": 8
    },
    "lineNo": 1,
    "colOffset": 7
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 1,
      "column": 8
    },
    "endPos": {
      "line": 1,
      "column": 9
    },
    "lineNo": 1,
    "colOffset": 8
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "print",
    "startPos": {
      "line": 1,
      "column": 10
    },
    "endPos": {
      "line": 1,
      "column": 15
    },
    "lineNo": 1,
    "colOffset": 10
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
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
    "type": "STRING",
    "kind": "STRING",
    "value": "\"x is greater than 5\"",
    "startPos": {
      "line": 1,
      "column": 16
    },
    "endPos": {
      "line": 1,
      "column": 37
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
      "column": 37
    },
    "endPos": {
      "line": 1,
      "column": 38
    },
    "lineNo": 1,
    "colOffset": 37
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 1,
      "column": 38
    },
    "endPos": {
      "line": 1,
      "column": 39
    },
    "lineNo": 1,
    "colOffset": 38
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
    "type": "STRING",
    "kind": "STRING",
    "value": "\"Yes\"",
    "startPos": {
      "line": 3,
      "column": 0
    },
    "endPos": {
      "line": 3,
      "column": 5
    },
    "lineNo": 3,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "if",
    "startPos": {
      "line": 3,
      "column": 6
    },
    "endPos": {
      "line": 3,
      "column": 8
    },
    "lineNo": 3,
    "colOffset": 6
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
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
    "kind": "GREATER",
    "value": ">",
    "startPos": {
      "line": 3,
      "column": 11
    },
    "endPos": {
      "line": 3,
      "column": 12
    },
    "lineNo": 3,
    "colOffset": 11
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "5",
    "startPos": {
      "line": 3,
      "column": 13
    },
    "endPos": {
      "line": 3,
      "column": 14
    },
    "lineNo": 3,
    "colOffset": 13
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "else",
    "startPos": {
      "line": 3,
      "column": 15
    },
    "endPos": {
      "line": 3,
      "column": 19
    },
    "lineNo": 3,
    "colOffset": 15
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"No\"",
    "startPos": {
      "line": 3,
      "column": 20
    },
    "endPos": {
      "line": 3,
      "column": 24
    },
    "lineNo": 3,
    "colOffset": 20
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 3,
      "column": 24
    },
    "endPos": {
      "line": 3,
      "column": 25
    },
    "lineNo": 3,
    "colOffset": 24
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
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
    "type": "NAME",
    "kind": "NAME",
    "value": "if",
    "startPos": {
      "line": 5,
      "column": 0
    },
    "endPos": {
      "line": 5,
      "column": 2
    },
    "lineNo": 5,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "num",
    "startPos": {
      "line": 5,
      "column": 3
    },
    "endPos": {
      "line": 5,
      "column": 6
    },
    "lineNo": 5,
    "colOffset": 3
  },
  {
    "type": "OP",
    "kind": "GREATER",
    "value": ">",
    "startPos": {
      "line": 5,
      "column": 7
    },
    "endPos": {
      "line": 5,
      "column": 8
    },
    "lineNo": 5,
    "colOffset": 7
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "0",
    "startPos": {
      "line": 5,
      "column": 9
    },
    "endPos": {
      "line": 5,
      "column": 10
    },
    "lineNo": 5,
    "colOffset": 9
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 5,
      "column": 10
    },
    "endPos": {
      "line": 5,
      "column": 11
    },
    "lineNo": 5,
    "colOffset": 10
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "return",
    "startPos": {
      "line": 5,
      "column": 12
    },
    "endPos": {
      "line": 5,
      "column": 18
    },
    "lineNo": 5,
    "colOffset": 12
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "True",
    "startPos": {
      "line": 5,
      "column": 19
    },
    "endPos": {
      "line": 5,
      "column": 23
    },
    "lineNo": 5,
    "colOffset": 19
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 5,
      "column": 23
    },
    "endPos": {
      "line": 5,
      "column": 24
    },
    "lineNo": 5,
    "colOffset": 23
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 6,
      "column": 0
    },
    "endPos": {
      "line": 6,
      "column": 1
    },
    "lineNo": 6,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "for",
    "startPos": {
      "line": 7,
      "column": 0
    },
    "endPos": {
      "line": 7,
      "column": 3
    },
    "lineNo": 7,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "i",
    "startPos": {
      "line": 7,
      "column": 4
    },
    "endPos": {
      "line": 7,
      "column": 5
    },
    "lineNo": 7,
    "colOffset": 4
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "in",
    "startPos": {
      "line": 7,
      "column": 6
    },
    "endPos": {
      "line": 7,
      "column": 8
    },
    "lineNo": 7,
    "colOffset": 6
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "range",
    "startPos": {
      "line": 7,
      "column": 9
    },
    "endPos": {
      "line": 7,
      "column": 14
    },
    "lineNo": 7,
    "colOffset": 9
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 7,
      "column": 14
    },
    "endPos": {
      "line": 7,
      "column": 15
    },
    "lineNo": 7,
    "colOffset": 14
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "3",
    "startPos": {
      "line": 7,
      "column": 15
    },
    "endPos": {
      "line": 7,
      "column": 16
    },
    "lineNo": 7,
    "colOffset": 15
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 7,
      "column": 16
    },
    "endPos": {
      "line": 7,
      "column": 17
    },
    "lineNo": 7,
    "colOffset": 16
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 7,
      "column": 17
    },
    "endPos": {
      "line": 7,
      "column": 18
    },
    "lineNo": 7,
    "colOffset": 17
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "print",
    "startPos": {
      "line": 7,
      "column": 19
    },
    "endPos": {
      "line": 7,
      "column": 24
    },
    "lineNo": 7,
    "colOffset": 19
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 7,
      "column": 24
    },
    "endPos": {
      "line": 7,
      "column": 25
    },
    "lineNo": 7,
    "colOffset": 24
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "i",
    "startPos": {
      "line": 7,
      "column": 25
    },
    "endPos": {
      "line": 7,
      "column": 26
    },
    "lineNo": 7,
    "colOffset": 25
  },
  {
    "type": "OP",
    "kind": "COMMA",
    "value": ",",
    "startPos": {
      "line": 7,
      "column": 26
    },
    "endPos": {
      "line": 7,
      "column": 27
    },
    "lineNo": 7,
    "colOffset": 26
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "end",
    "startPos": {
      "line": 7,
      "column": 28
    },
    "endPos": {
      "line": 7,
      "column": 31
    },
    "lineNo": 7,
    "colOffset": 28
  },
  {
    "type": "OP",
    "kind": "EQUAL",
    "value": "=",
    "startPos": {
      "line": 7,
      "column": 31
    },
    "endPos": {
      "line": 7,
      "column": 32
    },
    "lineNo": 7,
    "colOffset": 31
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "' '",
    "startPos": {
      "line": 7,
      "column": 32
    },
    "endPos": {
      "line": 7,
      "column": 35
    },
    "lineNo": 7,
    "colOffset": 32
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 7,
      "column": 35
    },
    "endPos": {
      "line": 7,
      "column": 36
    },
    "lineNo": 7,
    "colOffset": 35
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 7,
      "column": 36
    },
    "endPos": {
      "line": 7,
      "column": 37
    },
    "lineNo": 7,
    "colOffset": 36
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 8,
      "column": 0
    },
    "endPos": {
      "line": 8,
      "column": 1
    },
    "lineNo": 8,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "while",
    "startPos": {
      "line": 9,
      "column": 0
    },
    "endPos": {
      "line": 9,
      "column": 5
    },
    "lineNo": 9,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "count",
    "startPos": {
      "line": 9,
      "column": 6
    },
    "endPos": {
      "line": 9,
      "column": 11
    },
    "lineNo": 9,
    "colOffset": 6
  },
  {
    "type": "OP",
    "kind": "GREATER",
    "value": ">",
    "startPos": {
      "line": 9,
      "column": 12
    },
    "endPos": {
      "line": 9,
      "column": 13
    },
    "lineNo": 9,
    "colOffset": 12
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "0",
    "startPos": {
      "line": 9,
      "column": 14
    },
    "endPos": {
      "line": 9,
      "column": 15
    },
    "lineNo": 9,
    "colOffset": 14
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 9,
      "column": 15
    },
    "endPos": {
      "line": 9,
      "column": 16
    },
    "lineNo": 9,
    "colOffset": 15
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "print",
    "startPos": {
      "line": 9,
      "column": 17
    },
    "endPos": {
      "line": 9,
      "column": 22
    },
    "lineNo": 9,
    "colOffset": 17
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 9,
      "column": 22
    },
    "endPos": {
      "line": 9,
      "column": 23
    },
    "lineNo": 9,
    "colOffset": 22
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "count",
    "startPos": {
      "line": 9,
      "column": 23
    },
    "endPos": {
      "line": 9,
      "column": 28
    },
    "lineNo": 9,
    "colOffset": 23
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 9,
      "column": 28
    },
    "endPos": {
      "line": 9,
      "column": 29
    },
    "lineNo": 9,
    "colOffset": 28
  },
  {
    "type": "OP",
    "kind": "SEMI",
    "value": ";",
    "startPos": {
      "line": 9,
      "column": 29
    },
    "endPos": {
      "line": 9,
      "column": 30
    },
    "lineNo": 9,
    "colOffset": 29
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "count",
    "startPos": {
      "line": 9,
      "column": 31
    },
    "endPos": {
      "line": 9,
      "column": 36
    },
    "lineNo": 9,
    "colOffset": 31
  },
  {
    "type": "OP",
    "kind": "MINEQUAL",
    "value": "-=",
    "startPos": {
      "line": 9,
      "column": 37
    },
    "endPos": {
      "line": 9,
      "column": 39
    },
    "lineNo": 9,
    "colOffset": 37
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "1",
    "startPos": {
      "line": 9,
      "column": 40
    },
    "endPos": {
      "line": 9,
      "column": 41
    },
    "lineNo": 9,
    "colOffset": 40
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 9,
      "column": 41
    },
    "endPos": {
      "line": 9,
      "column": 42
    },
    "lineNo": 9,
    "colOffset": 41
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 10,
      "column": 0
    },
    "endPos": {
      "line": 10,
      "column": 1
    },
    "lineNo": 10,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "if",
    "startPos": {
      "line": 11,
      "column": 0
    },
    "endPos": {
      "line": 11,
      "column": 2
    },
    "lineNo": 11,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 11,
      "column": 3
    },
    "endPos": {
      "line": 11,
      "column": 4
    },
    "lineNo": 11,
    "colOffset": 3
  },
  {
    "type": "OP",
    "kind": "GREATER",
    "value": ">",
    "startPos": {
      "line": 11,
      "column": 5
    },
    "endPos": {
      "line": 11,
      "column": 6
    },
    "lineNo": 11,
    "colOffset": 5
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "5",
    "startPos": {
      "line": 11,
      "column": 7
    },
    "endPos": {
      "line": 11,
      "column": 8
    },
    "lineNo": 11,
    "colOffset": 7
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 11,
      "column": 8
    },
    "endPos": {
      "line": 11,
      "column": 9
    },
    "lineNo": 11,
    "colOffset": 8
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "print",
    "startPos": {
      "line": 11,
      "column": 10
    },
    "endPos": {
      "line": 11,
      "column": 15
    },
    "lineNo": 11,
    "colOffset": 10
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 11,
      "column": 15
    },
    "endPos": {
      "line": 11,
      "column": 16
    },
    "lineNo": 11,
    "colOffset": 15
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"x > 5\"",
    "startPos": {
      "line": 11,
      "column": 16
    },
    "endPos": {
      "line": 11,
      "column": 23
    },
    "lineNo": 11,
    "colOffset": 16
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 11,
      "column": 23
    },
    "endPos": {
      "line": 11,
      "column": 24
    },
    "lineNo": 11,
    "colOffset": 23
  },
  {
    "type": "OP",
    "kind": "SEMI",
    "value": ";",
    "startPos": {
      "line": 11,
      "column": 24
    },
    "endPos": {
      "line": 11,
      "column": 25
    },
    "lineNo": 11,
    "colOffset": 24
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "if",
    "startPos": {
      "line": 11,
      "column": 26
    },
    "endPos": {
      "line": 11,
      "column": 28
    },
    "lineNo": 11,
    "colOffset": 26
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 11,
      "column": 29
    },
    "endPos": {
      "line": 11,
      "column": 30
    },
    "lineNo": 11,
    "colOffset": 29
  },
  {
    "type": "OP",
    "kind": "GREATER",
    "value": ">",
    "startPos": {
      "line": 11,
      "column": 31
    },
    "endPos": {
      "line": 11,
      "column": 32
    },
    "lineNo": 11,
    "colOffset": 31
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "8",
    "startPos": {
      "line": 11,
      "column": 33
    },
    "endPos": {
      "line": 11,
      "column": 34
    },
    "lineNo": 11,
    "colOffset": 33
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 11,
      "column": 34
    },
    "endPos": {
      "line": 11,
      "column": 35
    },
    "lineNo": 11,
    "colOffset": 34
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "print",
    "startPos": {
      "line": 11,
      "column": 36
    },
    "endPos": {
      "line": 11,
      "column": 41
    },
    "lineNo": 11,
    "colOffset": 36
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 11,
      "column": 41
    },
    "endPos": {
      "line": 11,
      "column": 42
    },
    "lineNo": 11,
    "colOffset": 41
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"x > 8\"",
    "startPos": {
      "line": 11,
      "column": 42
    },
    "endPos": {
      "line": 11,
      "column": 49
    },
    "lineNo": 11,
    "colOffset": 42
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 11,
      "column": 49
    },
    "endPos": {
      "line": 11,
      "column": 50
    },
    "lineNo": 11,
    "colOffset": 49
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 11,
      "column": 50
    },
    "endPos": {
      "line": 11,
      "column": 51
    },
    "lineNo": 11,
    "colOffset": 50
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 12,
      "column": 0
    },
    "endPos": {
      "line": 12,
      "column": 1
    },
    "lineNo": 12,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "squares",
    "startPos": {
      "line": 13,
      "column": 0
    },
    "endPos": {
      "line": 13,
      "column": 7
    },
    "lineNo": 13,
    "colOffset": 0
  },
  {
    "type": "OP",
    "kind": "EQUAL",
    "value": "=",
    "startPos": {
      "line": 13,
      "column": 8
    },
    "endPos": {
      "line": 13,
      "column": 9
    },
    "lineNo": 13,
    "colOffset": 8
  },
  {
    "type": "OP",
    "kind": "LSQB",
    "value": "[",
    "startPos": {
      "line": 13,
      "column": 10
    },
    "endPos": {
      "line": 13,
      "column": 11
    },
    "lineNo": 13,
    "colOffset": 10
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "n",
    "startPos": {
      "line": 13,
      "column": 11
    },
    "endPos": {
      "line": 13,
      "column": 12
    },
    "lineNo": 13,
    "colOffset": 11
  },
  {
    "type": "OP",
    "kind": "DOUBLESTAR",
    "value": "**",
    "startPos": {
      "line": 13,
      "column": 12
    },
    "endPos": {
      "line": 13,
      "column": 14
    },
    "lineNo": 13,
    "colOffset": 12
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "2",
    "startPos": {
      "line": 13,
      "column": 14
    },
    "endPos": {
      "line": 13,
      "column": 15
    },
    "lineNo": 13,
    "colOffset": 14
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "for",
    "startPos": {
      "line": 13,
      "column": 16
    },
    "endPos": {
      "line": 13,
      "column": 19
    },
    "lineNo": 13,
    "colOffset": 16
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "n",
    "startPos": {
      "line": 13,
      "column": 20
    },
    "endPos": {
      "line": 13,
      "column": 21
    },
    "lineNo": 13,
    "colOffset": 20
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "in",
    "startPos": {
      "line": 13,
      "column": 22
    },
    "endPos": {
      "line": 13,
      "column": 24
    },
    "lineNo": 13,
    "colOffset": 22
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "numbers",
    "startPos": {
      "line": 13,
      "column": 25
    },
    "endPos": {
      "line": 13,
      "column": 32
    },
    "lineNo": 13,
    "colOffset": 25
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "if",
    "startPos": {
      "line": 13,
      "column": 33
    },
    "endPos": {
      "line": 13,
      "column": 35
    },
    "lineNo": 13,
    "colOffset": 33
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "n",
    "startPos": {
      "line": 13,
      "column": 36
    },
    "endPos": {
      "line": 13,
      "column": 37
    },
    "lineNo": 13,
    "colOffset": 36
  },
  {
    "type": "OP",
    "kind": "PERCENT",
    "value": "%",
    "startPos": {
      "line": 13,
      "column": 38
    },
    "endPos": {
      "line": 13,
      "column": 39
    },
    "lineNo": 13,
    "colOffset": 38
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "2",
    "startPos": {
      "line": 13,
      "column": 40
    },
    "endPos": {
      "line": 13,
      "column": 41
    },
    "lineNo": 13,
    "colOffset": 40
  },
  {
    "type": "OP",
    "kind": "EQEQUAL",
    "value": "==",
    "startPos": {
      "line": 13,
      "column": 42
    },
    "endPos": {
      "line": 13,
      "column": 44
    },
    "lineNo": 13,
    "colOffset": 42
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "0",
    "startPos": {
      "line": 13,
      "column": 45
    },
    "endPos": {
      "line": 13,
      "column": 46
    },
    "lineNo": 13,
    "colOffset": 45
  },
  {
    "type": "OP",
    "kind": "RSQB",
    "value": "]",
    "startPos": {
      "line": 13,
      "column": 46
    },
    "endPos": {
      "line": 13,
      "column": 47
    },
    "lineNo": 13,
    "colOffset": 46
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 13,
      "column": 47
    },
    "endPos": {
      "line": 13,
      "column": 48
    },
    "lineNo": 13,
    "colOffset": 47
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 14,
      "column": 0
    },
    "endPos": {
      "line": 14,
      "column": 1
    },
    "lineNo": 14,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "if",
    "startPos": {
      "line": 15,
      "column": 0
    },
    "endPos": {
      "line": 15,
      "column": 2
    },
    "lineNo": 15,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 15,
      "column": 3
    },
    "endPos": {
      "line": 15,
      "column": 4
    },
    "lineNo": 15,
    "colOffset": 3
  },
  {
    "type": "OP",
    "kind": "LESS",
    "value": "<",
    "startPos": {
      "line": 15,
      "column": 5
    },
    "endPos": {
      "line": 15,
      "column": 6
    },
    "lineNo": 15,
    "colOffset": 5
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "15",
    "startPos": {
      "line": 15,
      "column": 7
    },
    "endPos": {
      "line": 15,
      "column": 9
    },
    "lineNo": 15,
    "colOffset": 7
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 15,
      "column": 9
    },
    "endPos": {
      "line": 15,
      "column": 10
    },
    "lineNo": 15,
    "colOffset": 9
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "print",
    "startPos": {
      "line": 15,
      "column": 11
    },
    "endPos": {
      "line": 15,
      "column": 16
    },
    "lineNo": 15,
    "colOffset": 11
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 15,
      "column": 16
    },
    "endPos": {
      "line": 15,
      "column": 17
    },
    "lineNo": 15,
    "colOffset": 16
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"x < 15\"",
    "startPos": {
      "line": 15,
      "column": 17
    },
    "endPos": {
      "line": 15,
      "column": 25
    },
    "lineNo": 15,
    "colOffset": 17
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 15,
      "column": 25
    },
    "endPos": {
      "line": 15,
      "column": 26
    },
    "lineNo": 15,
    "colOffset": 25
  },
  {
    "type": "OP",
    "kind": "SEMI",
    "value": ";",
    "startPos": {
      "line": 15,
      "column": 26
    },
    "endPos": {
      "line": 15,
      "column": 27
    },
    "lineNo": 15,
    "colOffset": 26
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 15,
      "column": 28
    },
    "endPos": {
      "line": 15,
      "column": 29
    },
    "lineNo": 15,
    "colOffset": 28
  },
  {
    "type": "OP",
    "kind": "PLUSEQUAL",
    "value": "+=",
    "startPos": {
      "line": 15,
      "column": 30
    },
    "endPos": {
      "line": 15,
      "column": 32
    },
    "lineNo": 15,
    "colOffset": 30
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "5",
    "startPos": {
      "line": 15,
      "column": 33
    },
    "endPos": {
      "line": 15,
      "column": 34
    },
    "lineNo": 15,
    "colOffset": 33
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 15,
      "column": 34
    },
    "endPos": {
      "line": 15,
      "column": 35
    },
    "lineNo": 15,
    "colOffset": 34
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 16,
      "column": 0
    },
    "endPos": {
      "line": 16,
      "column": 1
    },
    "lineNo": 16,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "if",
    "startPos": {
      "line": 17,
      "column": 0
    },
    "endPos": {
      "line": 17,
      "column": 2
    },
    "lineNo": 17,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 17,
      "column": 3
    },
    "endPos": {
      "line": 17,
      "column": 4
    },
    "lineNo": 17,
    "colOffset": 3
  },
  {
    "type": "OP",
    "kind": "EQEQUAL",
    "value": "==",
    "startPos": {
      "line": 17,
      "column": 5
    },
    "endPos": {
      "line": 17,
      "column": 7
    },
    "lineNo": 17,
    "colOffset": 5
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "20",
    "startPos": {
      "line": 17,
      "column": 8
    },
    "endPos": {
      "line": 17,
      "column": 10
    },
    "lineNo": 17,
    "colOffset": 8
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 17,
      "column": 10
    },
    "endPos": {
      "line": 17,
      "column": 11
    },
    "lineNo": 17,
    "colOffset": 10
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "pass",
    "startPos": {
      "line": 17,
      "column": 12
    },
    "endPos": {
      "line": 17,
      "column": 16
    },
    "lineNo": 17,
    "colOffset": 12
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 17,
      "column": 16
    },
    "endPos": {
      "line": 17,
      "column": 17
    },
    "lineNo": 17,
    "colOffset": 16
  },
  {
    "type": "NL",
    "kind": "NL",
    "value": "\\n",
    "startPos": {
      "line": 18,
      "column": 0
    },
    "endPos": {
      "line": 18,
      "column": 1
    },
    "lineNo": 18,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "try",
    "startPos": {
      "line": 19,
      "column": 0
    },
    "endPos": {
      "line": 19,
      "column": 3
    },
    "lineNo": 19,
    "colOffset": 0
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 19,
      "column": 3
    },
    "endPos": {
      "line": 19,
      "column": 4
    },
    "lineNo": 19,
    "colOffset": 3
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "result",
    "startPos": {
      "line": 19,
      "column": 5
    },
    "endPos": {
      "line": 19,
      "column": 11
    },
    "lineNo": 19,
    "colOffset": 5
  },
  {
    "type": "OP",
    "kind": "EQUAL",
    "value": "=",
    "startPos": {
      "line": 19,
      "column": 12
    },
    "endPos": {
      "line": 19,
      "column": 13
    },
    "lineNo": 19,
    "colOffset": 12
  },
  {
    "type": "NUMBER",
    "kind": "NUMBER",
    "value": "10",
    "startPos": {
      "line": 19,
      "column": 14
    },
    "endPos": {
      "line": 19,
      "column": 16
    },
    "lineNo": 19,
    "colOffset": 14
  },
  {
    "type": "OP",
    "kind": "SLASH",
    "value": "/",
    "startPos": {
      "line": 19,
      "column": 17
    },
    "endPos": {
      "line": 19,
      "column": 18
    },
    "lineNo": 19,
    "colOffset": 17
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "x",
    "startPos": {
      "line": 19,
      "column": 19
    },
    "endPos": {
      "line": 19,
      "column": 20
    },
    "lineNo": 19,
    "colOffset": 19
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "\\n",
    "startPos": {
      "line": 19,
      "column": 20
    },
    "endPos": {
      "line": 19,
      "column": 21
    },
    "lineNo": 19,
    "colOffset": 20
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "except",
    "startPos": {
      "line": 20,
      "column": 0
    },
    "endPos": {
      "line": 20,
      "column": 6
    },
    "lineNo": 20,
    "colOffset": 0
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "ZeroDivisionError",
    "startPos": {
      "line": 20,
      "column": 7
    },
    "endPos": {
      "line": 20,
      "column": 24
    },
    "lineNo": 20,
    "colOffset": 7
  },
  {
    "type": "OP",
    "kind": "COLON",
    "value": ":",
    "startPos": {
      "line": 20,
      "column": 24
    },
    "endPos": {
      "line": 20,
      "column": 25
    },
    "lineNo": 20,
    "colOffset": 24
  },
  {
    "type": "NAME",
    "kind": "NAME",
    "value": "print",
    "startPos": {
      "line": 20,
      "column": 26
    },
    "endPos": {
      "line": 20,
      "column": 31
    },
    "lineNo": 20,
    "colOffset": 26
  },
  {
    "type": "OP",
    "kind": "LPAR",
    "value": "(",
    "startPos": {
      "line": 20,
      "column": 31
    },
    "endPos": {
      "line": 20,
      "column": 32
    },
    "lineNo": 20,
    "colOffset": 31
  },
  {
    "type": "STRING",
    "kind": "STRING",
    "value": "\"Division by zero!\"",
    "startPos": {
      "line": 20,
      "column": 32
    },
    "endPos": {
      "line": 20,
      "column": 51
    },
    "lineNo": 20,
    "colOffset": 32
  },
  {
    "type": "OP",
    "kind": "RPAR",
    "value": ")",
    "startPos": {
      "line": 20,
      "column": 51
    },
    "endPos": {
      "line": 20,
      "column": 52
    },
    "lineNo": 20,
    "colOffset": 51
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "",
    "startPos": {
      "line": 20,
      "column": 52
    },
    "endPos": {
      "line": 20,
      "column": 53
    },
    "lineNo": 20,
    "colOffset": 52
  },
  {
    "type": "ENDMARKER",
    "kind": "ENDMARKER",
    "value": "",
    "startPos": {
      "line": 21,
      "column": 0
    },
    "endPos": {
      "line": 21,
      "column": 0
    },
    "lineNo": 21,
    "colOffset": 0
  }
]
}