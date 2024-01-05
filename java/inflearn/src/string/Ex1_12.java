package string;

import java.util.ArrayList;
import java.util.Scanner;

public class Ex1_12 {
    public char[] solution(int length, String password) {
        char[] answer = new char[length];
        StringBuilder temp1 = new StringBuilder();
        ArrayList<String> passwordList = new ArrayList<>();

        for (int i = 0; i < password.length(); i++) {
            if(password.charAt(i) == '#') {
                temp1.append('1');
            } else if(password.charAt(i) == '*'){
                temp1.append('0');
            }
        }

        for (int i = 0; i < temp1.length(); i += 7) {
            passwordList.add(temp1.substring(i, i + 7));
        }

        for (int i = 0; i < passwordList.size(); i++) {
            String current = passwordList.get(i);
            answer[i] = (char) Integer.parseInt(current,2);
        }

        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        String password = sc.next();

        Ex1_12 main = new Ex1_12();
        for (char ch : main.solution(length, password)) {
            System.out.print(ch);
        }
    }
}
