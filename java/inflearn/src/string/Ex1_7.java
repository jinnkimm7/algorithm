package string;

import java.util.Scanner;

public class Ex1_7 {
    public String solution(String str) {
        String answer = "YES";
        str = str.toLowerCase();
        int strLength = str.length();

        for (int i = 0; i < strLength / 2; i++) {
            if (str.charAt(i) != str.charAt(strLength - 1 - i)) {
                answer = "NO";
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();

        Ex1_7 main = new Ex1_7();
        System.out.println(main.solution(str));
    }
}
