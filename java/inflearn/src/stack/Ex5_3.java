package stack;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Stack;

public class Ex5_3 {
    public int solution(int[][] graph, int[] moves) {
        int answer = 0;
        ArrayList<Integer> list = new ArrayList<>();
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < moves.length; i++) {
            int move = moves[i];
            for (int j = 0; j < graph.length; j++) {
                if (graph[j][move - 1] == 0) continue;

                list.add(graph[j][move - 1]);
                graph[j][move - 1] = 0;
                break;
            }
        }

        for (int doll : list) {
            if (stack.isEmpty()) {
                stack.push(doll);
            } else {
                if (stack.peek() == doll) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(doll);
                }
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] graph = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                graph[i][j] = sc.nextInt();
            }
        }

        int m = sc.nextInt();
        int[] moves = new int[m];
        for (int i = 0; i < m; i++) {
            moves[i] = sc.nextInt();
        }

        Ex5_3 main = new Ex5_3();
        System.out.println(main.solution(graph, moves));
    }
}
