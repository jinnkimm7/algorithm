// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3231/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const set = new Set([...nums]);
  const sortedNums = [...set].sort((a, b) => b - a);

  if (sortedNums.length < 3) return sortedNums[0];
  return sortedNums[2];
};

var thirdMax2 = function (nums) {
  let nums2 = [...new Set(nums)]
  if (nums2.length < 3) return Math.max(...nums2)
  nums2.splice(nums2.indexOf(Math.max(...nums2)), 1)
  nums2.splice(nums2.indexOf(Math.max(...nums2)), 1)
  return Math.max(...nums2)
};