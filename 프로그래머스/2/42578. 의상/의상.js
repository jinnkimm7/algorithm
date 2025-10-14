function solution(clothes) {
    let answer = 1;
    
    const map = new Map();
    
    for (const cloth of clothes) {
        const name = cloth[0];
        const kind = cloth[1];
        
        map.set(kind, (map.get(kind) || 0) + 1);
    }
    

     for (const [_, count] of map) {
        answer *= Number(count + 1);
     }
    
    return answer - 1;
}