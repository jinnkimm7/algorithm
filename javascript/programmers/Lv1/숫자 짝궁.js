// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// 시간초과
function solution1(X, Y) {
  X = X.split('');
  Y = Y.split('');

  const temp = [];

  for (let i = 0; i < X.length; i++) {
    const numberX = X[i];
    for (let j = 0; j < Y.length; j++) {
      if (numberX === Y[j]) {
        temp.push(Y[j]);
        Y.splice(j, 1);
        break;
      }
    }
  }

  const sorted = temp.sort((a, b) => b - a).join('');

  if (sorted.length === 0) return '-1';
  if (sorted.split('').every(v => v === '0')) return '0';
  return sorted;
}

// 정답
function solution2(X, Y) {
  X = [...X].map(v => Number(v));
  Y = [...Y].map(v => Number(v));

  const countX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const countY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < X.length; i++) {
    const num = X[i];
    countX[num]++;
  }

  for (let i = 0; i < Y.length; i++) {
    const num = Y[i];
    countY[num]++;
  }

  const commonNums = [];

  for (let i = 0; i < countX.length; i++) {
    const min = Math.min(countX[i], countY[i]);
    if (min === 0) continue;
    else {
      for (let j = 0; j < min; j++) {
        commonNums.push(i);
      }
    }
  }

  const max = commonNums.sort((a, b) => b - a);

  if (max.length === 0) return '-1';
  if (Number(max.join('')) === 0) return '0';

  return max.join('');
}