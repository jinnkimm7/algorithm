# JavaScript 입력

1. fs모듈
- 입력데이터가 텍스트 형태로 주어지는 경우, `파일시스템` 모듈을 사용한다.
- 기능 : 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기
- 백준의 경우 /dev/stdin
```javascript
// input.txt
123
456
789 1000

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);

//
['123', '456', '789 1000']
```

2. readline 모듈
- 한 줄씩 입력받아 처리하여 정답을 출력할때는 `readline`을 사용할 수 있다.
```javascript
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function(line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  input.push(line);
}).on('close', function() {
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
  console.log(input);
  process.exit();
});
```