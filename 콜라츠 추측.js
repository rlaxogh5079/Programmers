function solution(num) {
  var limit = 500;
  for (var i = 0; i < limit; i++) {
    if (num == 1) return i;
    if (num % 2 == 0) num = parseInt((num /= 2));
    else num = num * 3 + 1;
  }
  return -1;
}
