// https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3253/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge1 = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1.pop();
  }
  nums2.forEach(v => nums1.push(v));
  return nums1;
};

const merge2 = function (nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
    nums1.splice(i, 1, nums2[i - m]);
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};