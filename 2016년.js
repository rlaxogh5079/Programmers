function solution(a, b) {
  var answer = "";
  while (a > 0) {
    if (a == 2 || a == 4 || a == 6 || a == 8 || a == 9 || a == 11) b += 31;
    else if (a == 5 || a == 7 || a == 10 || a == 12) b += 30;
    else if (a == 3) b += 29;
    a -= 1;
  }
  b %= 7;
  if (b == 0) answer = "THU";
  else if (b == 1) answer = "FRI";
  else if (b == 2) answer = "SAT";
  else if (b == 3) answer = "SUN";
  else if (b == 4) answer = "MON";
  else if (b == 5) answer = "TUE";
  else answer = "WED";
  return answer;
}
