// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// 48/100
function solution(cards1, cards2, goal) {
  let goalDoubleArr = [];
  for (let i = 0; i < goal.length; i += 2) {
    goalDoubleArr.push(goal.slice(i, i + 2));
  }

  const minLen = Math.min(cards1.length, cards2.length);
  const maxLen = Math.max(cards1.length, cards2.length);

  let cards = [];
  for (let i = 0; i < minLen; i++) {
    cards.push([cards1[i], cards2[i]]);
  }
  if (cards1[maxLen - 1]) cards.push([cards1[maxLen - 1]]);
  if (cards2[maxLen - 1]) cards.push([cards2[maxLen - 1]]);

  goalDoubleArr = (goalDoubleArr.map(v => v.sort())).map(v => v.join('')).join('');
  cards = (cards.map(v => v.sort())).map(v => v.join('')).join('');

  if (goalDoubleArr === cards) return 'Yes';
  return 'No';
}