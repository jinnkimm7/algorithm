function solution(lottos, win_nums) {
    let answer = [];
    
    const zeros = lottos.filter(lotto => lotto === 0).length;    
    const matched = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    const max = zeros + matched;
    const min = matched;
    
    const rank = (count) => count >= 2 ? 7 - count : 6;
    
    return [rank(max), rank(min)];
}