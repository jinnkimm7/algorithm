package hashmap;

import java.util.HashMap;
import java.util.Scanner;

public class Ex4_1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String result = sc.next();

        Ex4_1 main = new Ex4_1();
        System.out.println(main.solution(result));
    }

    public char solution(String result) {
        char answer = ' ';
        HashMap<Character, Integer> map = new HashMap<>();
        char[] chars = result.toCharArray();

        for (char ch : chars) {
            if (!map.containsKey(ch)) {
                map.put(ch, 1);
            } else {
                map.put(ch, map.get(ch) + 1);
            }
        }

        int maxCount = Integer.MIN_VALUE;
        for (char key : map.keySet()) {
            if (map.get(key) > maxCount) {
                maxCount = map.get(key);
                answer = key;
            }
        }

        return answer;
    }
}
