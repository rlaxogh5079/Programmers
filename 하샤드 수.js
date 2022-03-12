function solution(x) {
  let arr = x
    .toString()
    .split("")
    .map((x) => parseInt(x));
  return !Boolean(x % arr.reduce((acc, cur) => acc + cur, 0));
}
