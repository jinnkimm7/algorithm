package string;

import java.util.Scanner;

public class Ex1_9 {
    public int solution(String str) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (Character.isDigit(ch)) {
                sb.append(ch);
            }
        }
        return Integer.parseInt(sb.toString());
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();

        Ex1_9 main = new Ex1_9();
        System.out.println(main.solution(str));
    }
}
