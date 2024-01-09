package stack;

import java.util.Scanner;
import java.util.Stack;

public class Ex5_1 {
    public String solution(String s) {
        char[] chars = s.toCharArray();
        Stack<Character> stack = new Stack();

        for (char ch : chars) {
            if (stack.isEmpty()) {
                stack.push(ch);
            } else {
                if (stack.peek() == '(' && ch == ')') {
                    stack.pop();
                } else {
                    stack.push(ch);
                }
            }
        }

        return stack.isEmpty() ? "YES" : "NO";
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        Ex5_1 main = new Ex5_1();
        System.out.println(main.solution(s));
    }
}
