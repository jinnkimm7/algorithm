const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const subjectNumber = Number(input[0]);
const scores = input[1].split(' ').map(score => Number(score));
const highestScore = scores.sort((a, b) => b - a)[0];

const newScores = scores.map(score => score / highestScore * 100);

console.log(newScores.reduce((a, b) => a + b, 0) / subjectNumber);