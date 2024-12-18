class Solution {
    public int solution(String[] spell, String[] dic) {
        int answer = 2;
        int len = spell.length;

        for(String word : dic) {
            int count = 0;            
            
            for(String str : spell) {
                if(word.contains(str)) count++;
            }
            
            if(count == len) {
                answer = 1;
                break;
            }
        }
        
        return answer;
    }
}