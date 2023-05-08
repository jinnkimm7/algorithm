// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3237/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let answer = 0;
  const lengthArr = (nums.map(v => v + '')).map(v => v.length);
  lengthArr.forEach(v => {
    if (v % 2 === 0) answer++;
  })
  return answer;
};

// test case
console.log(findNumbers([12, 345, 2, 6, 7896]));