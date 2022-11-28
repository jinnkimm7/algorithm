function solution(array) {
  var answer = 0;
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) obj[array[i]] = 1;
    else obj[array[i]] = obj[array[i]] + 1;
  }

  const frequency = [...Object.values(obj)];
  const max = Math.max(...frequency);

  if (frequency.indexOf(max) !== frequency.lastIndexOf(max)) return -1;
  else {
    return parseInt(Object.keys(obj).find(key => obj[key] === max));
  }
}

console.log(solution([1, 2, 3, 3, 3, 4], 3));
console.log(solution([1, 1, 2, 2], -1));
console.log(solution([1], 1));