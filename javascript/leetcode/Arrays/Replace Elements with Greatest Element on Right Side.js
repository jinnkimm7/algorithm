// https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3259/

var replaceElements = function (arr) {
  const answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const temp = arr.slice(i + 1, arr.length);
    const max = Math.max(...temp);
    answer.push(max);
  }

  answer.push(-1);
  return answer;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));