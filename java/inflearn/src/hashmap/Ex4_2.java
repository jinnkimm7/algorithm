package hashmap;

import java.util.HashMap;
import java.util.Scanner;

public class Ex4_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str1 = sc.nextLine();
        String str2 = sc.nextLine();

        Ex4_2 main = new Ex4_2();
        System.out.println(main.solution(str1,str2));
    }

    public String solution(String str1, String str2) {
        String answer = "YES";

        HashMap<Character, Integer> map = new HashMap<>();

        for (char ch : str1.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for (char ch : str2.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for (int count : map.values()) {
            if (count % 2 != 0) {
                answer = "NO";
                break;
            }
        }
        return answer;
    }
}
