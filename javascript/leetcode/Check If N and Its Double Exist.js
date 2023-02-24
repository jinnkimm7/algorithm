// https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] === arr[j] * 2) return true;
    }
  }
  return false;
};

var checkIfExist2 = function (arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] / 2) || set.has(arr[i] * 2)) return true;
    else {
      set.add(arr[i]);
    }
  }
  return false;
};