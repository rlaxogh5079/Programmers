function solution(s) {
  return s.slice(s.length / 2 - (1 - (s.length % 2)), s.length / 2 + 1);
}
