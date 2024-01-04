package string;

import java.util.Scanner;

public class Ex1_11 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        Ex1_11 main = new Ex1_11();
        System.out.println(main.solution(s));
    }

    public String solution(String s) {
        StringBuilder sb = new StringBuilder();

        int count = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            char current = s.charAt(i);
            if (current == s.charAt(i + 1)) {
                count++;
            } else {
                sb.append(current);
                if(count == 0) continue;
                sb.append(count + 1);
                count = 0;
            }
        }
        sb.append(s.charAt(s.length() - 1));
        if(count != 0) sb.append(count + 1);
        return sb.toString();
    }
}
