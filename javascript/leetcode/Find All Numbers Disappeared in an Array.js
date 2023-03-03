// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3270/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const arr = Array(n).fill(0).map((v, i) => v + 1 + i);
  const set = new Set(nums);

  return arr.filter(v => !set.has(v));
};