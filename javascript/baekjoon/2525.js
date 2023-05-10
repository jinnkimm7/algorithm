let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let time = input[0].split(' ');

let inputHour = parseInt(time[0]);
let inputMinute = parseInt(time[1]);
let timer = parseInt(input[1]);

let hour = inputHour;
let minute = inputMinute + timer;

while (minute >= 60) {
  hour += 1;
  if (hour === 24) hour = 0;
  minute -= 60;
}

console.log(hour + ' ' + minute);