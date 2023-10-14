function solution(n, words) {
  const answer = [0, 0];

  const set = new Set();
  set.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    if (set.has(word) || word[0] !== words[i - 1][words[i - 1].length - 1]) {
      answer[0] = (i % n) + 1;
      answer[1] = parseInt(i / n) + 1;
      break;
    }
    else set.add(word);
  }

  return answer;
}