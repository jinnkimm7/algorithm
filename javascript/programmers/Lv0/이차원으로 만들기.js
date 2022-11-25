// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  const answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, n + i));
  }

  return answer;
}