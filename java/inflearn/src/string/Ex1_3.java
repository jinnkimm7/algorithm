package string;

import java.util.Scanner;

public class Ex1_3 {
    public String solution(String input) {
        String answer = "";

        int maxLength = Integer.MIN_VALUE;
        String[] strArr = input.split(" ");

        for (String str : strArr) {
            int length = str.length();
            if (length > maxLength) {
                answer = str;
                maxLength = length;
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        Ex1_3 main = new Ex1_3();
        Scanner sc = new Scanner(System.in);

        String input = sc.nextLine();

        System.out.println(main.solution(input));
    }
}