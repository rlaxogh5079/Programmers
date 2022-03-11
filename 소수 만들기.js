const checkPrime = (number) => {
  if (number < 2) return false;
  for (var i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
};

function solution(nums) {
  var answer = 0;
  for (var number1 = 0; number1 < nums.length - 2; number1++) {
    for (var number2 = number1 + 1; number2 < nums.length - 1; number2++) {
      for (var number3 = number2 + 1; number3 < nums.length; number3++) {
        if (checkPrime(nums[number1] + nums[number2] + nums[number3]))
          answer += 1;
      }
    }
  }
  return answer;
}
