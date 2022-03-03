function solution(arr1, arr2) {
  for (var index = 0; index < arr1.length; index++) {
    for (var index2 = 0; index2 < arr1[index].length; index2++) {
      arr2[index][index2] += arr1[index][index2];
    }
  }
  return arr2;
}
