import java.util.*;

class Solution {
    public int[] solution(int[] numlist, int n) {
        ArrayList<Integer> arrList = new ArrayList<>();
       
        for(int num : numlist) arrList.add(num);
        
        Collections.sort(arrList, new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
                int gap1 = Math.abs(n - a);
                int gap2 = Math.abs(n - b);
                
                if(gap1 == gap2) return b - a;
                return gap1 - gap2;
            }
        });
        
        int[] answer = new int[arrList.size()];
        
        for(int i = 0; i < arrList.size(); i++) {
            answer[i] = arrList.get(i);
        }
        
        return answer; 
    }
}