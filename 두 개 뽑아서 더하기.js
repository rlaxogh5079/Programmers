function solution(numbers) {
  var answer = new Set();
  for (var index = 0; index < numbers.length; index++) {
    for (var index2 = index + 1; index2 < numbers.length; index2++) {
      answer.add(numbers[index] + numbers[index2]);
    }
  }
  answer = Array.from(answer).sort((x, y) => x - y);
  return answer;
}
