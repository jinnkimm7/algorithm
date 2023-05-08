// https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3260/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const evens = [];
  const odds = [];

  nums.forEach(v => {
    if (v % 2 === 0) evens.push(v);
    else odds.push(v);
  });

  return [...evens, ...odds];
};