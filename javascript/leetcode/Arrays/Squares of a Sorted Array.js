// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3240/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return (nums.map(v => Math.pow(v, 2))).sort((a, b) => a - b);
};