function solution(array, commands) {
  var answer = [];
  for (var command of commands) {
    var new_array = array.slice(command[0] - 1, command[1]);
    new_array.sort((a, b) => a - b);
    console.log(new_array);
    answer.push(new_array[command[2] - 1]);
  }
  return answer;
}
