// https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript
// 참고사이트 : https://algoroot.tistory.com/64

function solution(genres, plays) {
  const chart = genres.reduce((obj, genre, i) => {
    if (!obj[genre]) {
      obj[genre] = { totalCount: plays[i], list: [] };
    } else {
      obj[genre].totalCount += plays[i];
    }
    obj[genre].list.push([i, plays[i]]);

    return obj;
  }, {});

  const sorted = Object.values(chart).sort((a, b) => b.totalCount - a.totalCount);
  const sortedList = sorted.map((genre) => genre.list.sort((a, b) => b[1] - a[1]));
  const temp = sortedList.map(list => list.slice(0, 2)).flat();
  const answer = [];
  temp.map(arr => answer.push(arr[0]));

  return answer;
}