package array;

import java.util.Arrays;
import java.util.Scanner;

public class Ex2_10 {
    public int solution(int[][] graph) {
        int answer = 0;
        int[][] mountain = new int[graph.length + 2][graph.length + 2];

        for (int i = 0; i < mountain.length; i++) {
            Arrays.fill(mountain[i], 0);
        }

        for (int i = 1; i <= graph.length; i++) {
            for (int j = 1; j <= graph.length; j++) {
                mountain[i][j] = graph[i - 1][j - 1];
            }
        }

        for (int i = 1; i < mountain.length - 1; i++) {
            for (int j = 1; j < mountain.length - 1; j++) {
                int count = 0;
                int[] dx = {0, 0, 1, -1};
                int[] dy = {1, -1, 0, 0};

                for (int k = 0; k < 4; k++) {
                    int nx = i + dx[k];
                    int ny = j + dy[k];

                    if(mountain[i][j] > mountain[nx][ny]) {
                        count++;
                    }
                }
                if(count == 4) answer++;
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

        Ex2_10 main = new Ex2_10();
        System.out.println(main.solution(graph));
    }
}
