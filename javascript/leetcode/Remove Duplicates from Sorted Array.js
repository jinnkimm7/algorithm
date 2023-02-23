// https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const nextNum = nums[i + 1];
    if (num === nextNum) {
      nums.splice((i + 1), 1);
      i--;
    }
  }
  return nums.length;
};

var removeDuplicates2 = function (nums) {
  const set = new Set(nums);
  nums.splice(0, nums.length, ...set);
  return nums.length;
};
