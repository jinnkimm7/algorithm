package recursive;

public class Ex7_1 {
    public void recursive(int n) {
        if (n <= 0) {
            return;
        } else {
            recursive(n - 1);
            System.out.print(n + " ");
        }
    }
    public static void main(String[] args) {
        Ex7_1 main = new Ex7_1();
        main.recursive(10);
    }
}
