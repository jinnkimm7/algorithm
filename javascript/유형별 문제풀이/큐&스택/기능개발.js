// Lv2
// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
    let answer = [];
    const left_days = [];
    let stack = [];

    for(let i = 0; i < progresses.length; i++) {
        const progress = progresses[i];
        const speed = speeds[i];

        const left_day = Math.ceil((100 - progress) / speed);
        left_days.push(left_day);
    }

    for(let left_day of left_days) {
        if(stack.length == 0) {
            stack.push(left_day);
        } else {
            if(stack[0] >= left_day) {
                stack.push(left_day);
            } else {
                answer.push(stack.length);
                stack = [];
                stack.push(left_day);
            }
        }
    }

    if(stack.length !== 0) {
        answer.push(stack.length);
    }

    return answer;
}