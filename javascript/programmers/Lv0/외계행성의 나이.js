// https://school.programmers.co.kr/learn/courses/30/lessons/120834?language=javascript

function solution(age) {
  let answer = '';

  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  age.toString().split('').map((v) => {
    answer += alpha[v];
  })

  return answer;
}