// https://school.programmers.co.kr/learn/courses/30/lessons/120896?language=javascript

// 내 풀이 
function solution(s) {
  var answer = '';
  
  s = s.split('');
  
  for(let i = 0; i < s.length; i++) {
      let count = 0;
      
      for(let j = 0; j < s.length; j++) {
          if(i === j) continue;
          
          if(s[i] === s[j]) count++;
      }
      
      if(count === 0) answer += s[i];
  }
  return answer.split('').sort().join('');
}

// 다른 풀이
// function solution(s) {
//   var answer = [];
  
//   for(const ch of s) if (s.indexOf(ch) === s.lastIndexOf(ch)) answer.push(ch);
  
//   return answer.sort().join('');
// }