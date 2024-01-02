package string;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Ex1_6 {
    public String solution(String str) {
        StringBuilder sb = new StringBuilder();
        Set<Character> set = new HashSet<>();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (!set.contains(ch)) {
                set.add(ch);
                sb.append(ch);
            }
        }
        return sb.toString();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();

        Ex1_6 main = new Ex1_6();
        System.out.println(main.solution(str));
    }
}
