let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let time = input[0].split(' ');

let H = parseInt(time[0]);
let M = parseInt(time[1]);

if (M - 45 >= 0) {
  M = M - 45;
} else {
  H = H - 1;
  if (H < 0) H = 23;

  M = 60 + (M - 45);
};

console.log(H + ' ' + M);