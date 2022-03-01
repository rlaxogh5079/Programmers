function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (var index = 0; index < participant.length; index++) {
    if (participant[index] !== completion[index]) {
      return participant[index];
    }
  }
}
