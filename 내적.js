function solution(a, b) {
    var answer=0
    for(var index=0;index<a.length;index++){
        answer+=a[index]*b[index]
    }
    return answer;
}