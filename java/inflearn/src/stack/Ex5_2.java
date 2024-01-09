package stack;

import java.util.Scanner;
import java.util.Stack;

public class Ex5_2 {
    public String solution(String s) {
        StringBuilder sb = new StringBuilder();
        char[] chars = s.toCharArray();
        Stack<Character> stack = new Stack<>();

        for (char ch : chars) {
            if (ch == ')') {
                while (stack.peek() != '(') {
                    stack.pop();
                }
                stack.pop();
            } else {
                stack.push(ch);
            }
        }

        for (char ch : stack) {
            sb.append(ch);
        }
        return sb.toString();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        Ex5_2 main = new Ex5_2();
        System.out.println(main.solution(s));
    }
}
