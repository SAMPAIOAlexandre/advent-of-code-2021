import { readFileSync } from 'fs';

const test = readFileSync('test.txt', 'utf8');
const final = readFileSync('final.txt', 'utf8');

const part1 = (data) => {
  const lines = data.split(',');
  return lines
}

console.log({'Part 1:': part1(test)});

/* console.log({ test, final }); */