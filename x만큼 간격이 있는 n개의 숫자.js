function solution(x, n) {
  var origin_x = x;
  var answer = [];
  for (var index = 0; index < n; index++) {
    answer.push(x);
    x += origin_x;
  }
  return answer;
}
