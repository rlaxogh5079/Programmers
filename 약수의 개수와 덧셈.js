function solution(left, right) {
  var answer = 0;
  for (var i = left; i < right + 1; i++) {
    var cnt = 0;
    for (var n = 2; n < i + 1; n++) {
      if (i % n == 0) {
        cnt++;
      }
    }
    if (cnt % 2) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
