function solution(phone_book) {
    let answer = true;
    
    const set = new Set(phone_book);
    
    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.slice(0, i);
            if (set.has(prefix)) answer = false;       
        }
    }
    
    return answer;
}