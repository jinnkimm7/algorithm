function solution(arr) {
    const ans = [];
    
    arr.forEach(num => {
       if(ans.length == 0) ans.push(num);
        
       const peek = ans[ans.length - 1];
       
       if(peek !== num) ans.push(num);
    });
    
    return ans;
}