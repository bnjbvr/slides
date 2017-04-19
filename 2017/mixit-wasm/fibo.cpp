extern void print_dom(int key, int value);

int fibo(int n) {
  if (n <= 1)
    return n;

  int prevprev = fibo(n - 2);
  print_dom(n - 2, prevprev);

  int prev = fibo(n - 1);
  print_dom(n - 1, prev);

  return prevprev + prev;
}
