const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let testCases = Number(input[0]);

let line = 1;
while (testCases--) {
  const [length, ants] = input[line].split(' ').map(Number);
  const locations = [];
  for (let i = line + 1; i <= ants + line; i++) locations.push(Number(input[i]));

  let min = 0;
  for (let i = 0; i < locations.length; i++) {
    const current = locations[i];

    const dist = Math.min(current, length - current);
    min = Math.max(min, dist);
  }

  let max = 0;
  for (let i = 0; i < locations.length; i++) {
    const current = locations[i];

    const dist = Math.max(current, length - current);
    max = Math.max(max, dist);
  }

  console.log(min, max);

  line += ants + 1;
}