/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    /*
    이진 문자열 s, 정수 k가 주어짐
    s의 부분문자열들을 만들고 2의 k승 값까지 부분 문자열이 존재하면 true 아니면 false
    s = 00110110, k = 2일때
    부분문자열은 [00][01][10][11]이 생김
    2의 k승은 4
    00 = 0
    01 = 1
    10 = 2
    11 = 3
    */

    let set = new Set();
    let start = 0, end = k-1;
    let pow = Math.pow(2, k);

    while(end < s.length){
      set.add(s.slice(start,end+1));
      start++;
      end++;
      if(set.size == pow){
        return true;
      }
    }
    return false;
};
