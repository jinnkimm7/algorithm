package string;

import java.util.Scanner;

public class Ex1_1 {
    public int solution(String input1, char input2) {
        int answer = 0;

        input1 = input1.toLowerCase();
        char[] charArr = input1.toCharArray();
        input2 = Character.toLowerCase(input2);

        for (char ch : charArr) {
            if(ch == input2) answer++;
        }

        return answer;
    }
    public static void main(String[] args) {
        Ex1_1 main = new Ex1_1();
        Scanner sc = new Scanner(System.in);

        String input1 = sc.next();
        char input2 = sc.next().charAt(0);

        System.out.println(main.solution(input1, input2));
    }
}