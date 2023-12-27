package string;

import java.util.Scanner;

public class Ex1_2 {
    public String solution(String input) {
        String answer = "";
        char[] charArr = input.toCharArray();

        for (char ch : charArr) {
            if (Character.isLowerCase(ch)) {
                answer += Character.toUpperCase(ch);
            } else {
                answer += Character.toLowerCase(ch);
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        Ex1_2 main = new Ex1_2();
        Scanner sc = new Scanner(System.in);
        String input = sc.next();

        System.out.println(main.solution(input));
    }
}
