// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3238/

// 내 풀이
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let arr = [];

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else {
      arr.push(count);
      count = 0;
    }
  }
  arr.push(count);

  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
};

// 다른 사람 풀이
var findMaxConsecutiveOnes2 = function (nums) {
  const ones = nums.join('').split('0').map(v => v.length);
  return Math.max(...ones);
};