// https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3247/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));