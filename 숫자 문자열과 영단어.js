function solution(s) {
  var dict = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  for (var string_number of Object.keys(dict)) {
    s = s.replace(new RegExp(string_number, "g"), dict[string_number]);
  }
  var answer = Number(s);
  return answer;
}
