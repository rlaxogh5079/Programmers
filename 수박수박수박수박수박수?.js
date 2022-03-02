function solution(n) {
  answer_list = [];
  for (var index = 0; index < n; index++) {
    answer_list.push(index % 2 ? "박" : "수");
  }
  return answer_list.join("");
}
