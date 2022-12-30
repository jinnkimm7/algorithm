// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution1(food) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    food[i] = Math.floor(food[i] / 2);
  }

  for (let i = 1; i < food.length; i++) {
    answer += (i.toString()).repeat(food[i]);
  }

  answer += 0;

  for (let i = food.length; i >= 1; i--) {
    answer += (i.toString()).repeat(food[i]);
  }

  return answer;
}

function solution2(food) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    food[i] = Math.floor(food[i] / 2);
  }

  for (let i = 1; i < food.length; i++) {
    answer += (i.toString()).repeat(food[i]);
  }

  return answer + 0 + [...answer].reverse().join('');
}