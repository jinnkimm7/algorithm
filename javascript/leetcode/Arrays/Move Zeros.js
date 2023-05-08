// https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3157/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count++;
  }

  for (let i = 0; i < count; i++) {
    const index = nums.indexOf(0);
    nums.splice(index, 1);
    nums.push(0);
  }

  return nums;
};