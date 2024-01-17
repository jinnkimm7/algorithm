package bfs;

// 5 6
//101010
//111111
//000001
//111111
//111111

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Ex_1 {
    static int n;
    static int m;
    static int[][] graph = new int[201][201];
    static int[] dx = new int[]{1, -1, 0, 0};
    static int[] dy = new int[]{0, 0, 1, -1};
    static void bfs(int x, int y) {
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{x, y});
        
        while (queue.size() != 0) {
            int[] coords = queue.poll();
            x = coords[0];
            y = coords[1];

            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];
                if(nx >= n || nx <= -1 || ny >= m || ny <= -1) continue;
                if(graph[nx][ny] == 0) continue;
                if (graph[nx][ny] == 1) {
                    graph[nx][ny] = graph[x][y] + 1;
                    queue.offer(new int[]{nx, ny});
                }
            }
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            String input = sc.nextLine();
            for (int j = 0; j < m; j++) {
                graph[i][j] = Integer.parseInt(String.valueOf(input.charAt(j)));
            }
        }

        bfs(0,0);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                System.out.print(graph[i][j]);
            }
            System.out.println();
        }
        System.out.println(graph[n - 1][m - 1]);
    }
}