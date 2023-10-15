function solution1(numbers, target) {
  let answer = 0;

  const selected = [];

  function dfs(depth) {
    if (depth === numbers.length) {
      let temp = 0;
      if (selected[0] === '+') temp = numbers[0];
      else if (selected[0] === '-') temp = parseInt('-' + numbers[0]);

      for (let i = 1; i < selected.length; i++) {
        if (selected[i] === '+') {
          temp += numbers[i];
        } else if (selected[i] === '-') {
          temp -= numbers[i];
        }
      }

      if (temp === target) answer++;
      return;
    }

    for (let op of ['+', '-']) {
      selected.push(op);
      dfs(depth + 1);
      selected.pop();
    }
  }

  dfs(0);

  return answer;
}

function solution2(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(depth, sum) {
    if (depth === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);

  return answer;
}