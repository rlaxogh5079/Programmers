function solution(numbers) {
  var answer = 45 - numbers.reduce((cur, acc) => cur + acc, 0);
  return answer;
}
