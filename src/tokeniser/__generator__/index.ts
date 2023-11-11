#!/usr/bin/env node

import {execSync} from 'child_process';
import fs from 'fs';

import {Token} from '../types';

// Using this as a quick and dirty way to create Python fixtures which accurately represent how Python
// might tokenize a given file.

// This will be discarded once the tokenizer is complete.

const cliDirname = __dirname.replace(/[ ]/, '\\ ');
const output = execSync(`python3 -m tokenize ${cliDirname}/input.py`, {encoding: 'utf-8'});
const exactOutput = execSync(`python3 -m tokenize -e ${cliDirname}/input.py`, {encoding: 'utf-8'});

const result: Token[] = [];

// Iterate over the output lines
const lines = output.trim().split('\n');
const exactLines = exactOutput.trim().split('\n');

for (let lineIndex in lines) {
  const line = lines[lineIndex];
  const exactLine = exactLines[lineIndex];

  const [position, rest] = line.replace(':', '§').split('§');
  const [_exactPosition, exactRest] = exactLine.split(':');

  // Extract positions
  const [start, end] = position?.split('-');
  const [startLine, startCol] = start?.split(',').map(Number);
  const [endLine, endCol] = end?.split(',').map(Number);

  // Extract other data
  const typeAndValue = rest?.trim();
  const tokenType = typeAndValue?.split(' ')?.at(0) as Token.Type;
  const tokenValue = typeAndValue
    ?.slice(tokenType?.length ?? 0)
    ?.trim()
    ?.slice(1, -1);

  const tokenKind = exactRest?.trim()?.split(' ')?.at(0) as Token.Kind;

  result.push({
    type: tokenType,
    kind: tokenKind,
    value: tokenValue,
    startPos: {line: startLine, column: startCol},
    endPos: {line: endLine, column: endCol},
    lineNo: startLine,
    colOffset: startCol,
  });
}

try {
  const file = fs.readFileSync(`${__dirname}/input.py`).toString();
  fs.writeFileSync(
    `${__dirname}/output.ts`,
    `const FIXTURE = {
  input: \`${file}\`,
  expected: ${JSON.stringify(result, null, 2)}
}`
  );
} catch (e) {
  console.error(e);
}
