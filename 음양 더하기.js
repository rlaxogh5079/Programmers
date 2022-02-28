function solution(absolutes, signs) {
  var answer = 0;
  for (var index in absolutes) {
    signs[index] == true
      ? (answer += absolutes[index])
      : (answer -= absolutes[index]);
  }
  return answer;
}
