// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution1(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    // toString(2)은 이진수로 반환하는 것.
    const bin = (arr1[i] | arr2[i]).toString(2);
    // console.log(bin);
    let line = [];
    for (let j = bin.length - n; j < bin.length; j++) { // j가(인덱스값)이 -1일 경우 undefined 반환.
      if (bin[j] === '1') { // 1이면 '#', 그 외 ' '
        line.push('#');
      } else {
        line.push(' ');
      }
    }
    answer.push(line.join(''));
  }
  return answer;
}

function solution2(n, arr1, arr2) {
  arr1 = arr1.map(v => v.toString(2).padStart(n, 0));
  arr2 = arr2.map(v => v.toString(2).padStart(n, 0));

  const arr = arr1.map((v, i) => parseInt(arr1[i]) + parseInt(arr2[i]))
    .map(v => v.toString().padStart(n, 0));

  const answer = arr.map(v => v.split('').map(v => v >= 1 ? '#' : ' ')
    .join(''));

  return answer;
}