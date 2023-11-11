const FIXTURE = {
  input: `f"""I weigh
{weight.to_kg() * 7} kilograms as

\nof {
  date.now().minus(hours=2).to_iso_string()
}"""`,
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
    "type": "STRING",
    "kind": "STRING",
    "value": "f\"\"\"I weigh\\n{weight.to_kg() * 7} kilograms as\\n\\n\\\\nof {\\n  date.now().minus(hours=2).to_iso_string()\\n}\"\"\"",
    "startPos": {
      "line": 1,
      "column": 0
    },
    "endPos": {
      "line": 6,
      "column": 4
    },
    "lineNo": 1,
    "colOffset": 0
  },
  {
    "type": "NEWLINE",
    "kind": "NEWLINE",
    "value": "",
    "startPos": {
      "line": 6,
      "column": 4
    },
    "endPos": {
      "line": 6,
      "column": 5
    },
    "lineNo": 6,
    "colOffset": 4
  },
  {
    "type": "ENDMARKER",
    "kind": "ENDMARKER",
    "value": "",
    "startPos": {
      "line": 7,
      "column": 0
    },
    "endPos": {
      "line": 7,
      "column": 0
    },
    "lineNo": 7,
    "colOffset": 0
  }
]
}