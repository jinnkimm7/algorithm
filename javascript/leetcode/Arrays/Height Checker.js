// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3228/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let count = 0;

  const origin = [...heights];
  const expected = heights.sort((a, b) => a - b);

  for (let i = 0; i < expected.length; i++) {
    if (origin[i] !== expected[i]) count++;
  }

  return count;
};

var heightChecker2 = function (heights) {
  const sortedHeights = [...heights].sort((a, b) => a - b)

  return sortedHeights
    .filter((v, i) => v !== heights[i])
    .length;
};

// Test
console.log(heightChecker2([1, 1, 4, 2, 1, 3]));