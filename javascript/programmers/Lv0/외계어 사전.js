// https://school.programmers.co.kr/learn/courses/30/lessons/120869

// 내 풀이
function solution1(spell, dic) {
  let answer = 0;

  for (let i = 0; i < dic.length; i++) {
    let word = dic[i];
    let count = 0;
    for (let j = 0; j < spell.length; j++) {
      if (word.indexOf(spell[j]) !== -1) count++;
    }

    if (count === spell.length) answer++;
    count = 0;
  }

  return answer === 0 ? 2 : 1;
}

// 다른 사람 풀이
function solution2(spell, dic) {
  return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
}
