// https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  const max = Math.max(...arr);
  const maxIndex = arr.indexOf(max);

  if (arr.length <= 2) return false;
  if (maxIndex == arr.length - 1) return false;
  if (maxIndex === 0) return false;

  // increasing area
  for (let i = 0; i < maxIndex; i++) {
    if (arr[i] > arr[i + 1] || arr[i] === arr[i + 1]) return false;
  }

  // decreaing area
  for (let i = maxIndex; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] || arr[i] === arr[i + 1]) return false;
  }

  return true;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));