const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let testCases = Number(input[0])

let line = 1;
while (testCases--) {
  const n = Number(input[line])
  const prices = input[line + 1].split(' ').map(Number);
  let maxPrice = prices[prices.length - 1];
  let profit = 0;

  for (let i = n - 2; i > -1; i--) {
    if (maxPrice > prices[i]) {
      profit = profit + (maxPrice - prices[i]);
    } else {
      maxPrice = Math.max(maxPrice, prices[i]);
    }
  }

  console.log(profit);
  line = line + 2;
}
