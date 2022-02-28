function solution(d, budget) {
  var answer = 0;
  d.sort((x, y) => x - y);
  for (var index = d.length; index > 0; index--) {
    sliced_d = d.slice(0, index);
    array_sum = sliced_d.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    if (array_sum <= budget) {
      answer = index;
      break;
    }
  }

  return answer;
}
