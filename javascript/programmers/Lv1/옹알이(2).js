// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  var answer = 0;

  const can = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babble.includes(can[j].repeat(2))) break;

      babble = babble.split(can[j]).join(' ');
    }

    if (babble.split(' ').join('').length === 0) answer++;
  }

  return answer;
}