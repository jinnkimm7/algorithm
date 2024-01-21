package dfs;

import java.util.*;

public class B_1260 {
    static int n;
    static int m;
    static int v;
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
    static boolean[] visited;

    static void dfs(int start) {
        visited[start] = true;
        System.out.print(start + " ");

        for (int next : graph.get(start)) {
            if (!visited[next]) {
                dfs(next);
            }
        }
    }

    static void bfs(int start) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        visited[start] = true;

        while (queue.size() != 0) {
            int x = queue.poll();
            System.out.print(x + " ");

            for (int next : graph.get(x)) {
                if (!visited[next]) {
                    queue.offer(next);
                    visited[next] = true;
                }
            }
        }

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();
        v = sc.nextInt();
        sc.nextLine();

        visited = new boolean[n + 1];

        // graph 초기화
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<Integer>());
        }
        for (int i = 0; i < m; i++) {
            int x = sc.nextInt();
            int y = sc.nextInt();

            graph.get(x).add(y);
            graph.get(y).add(x);
        }

        for (int i = 0; i <= n; i++) {
            Collections.sort(graph.get(i));
        }

        dfs(v);
        System.out.println();
        visited = new boolean[n + 1];

        bfs(v);
    }

}
