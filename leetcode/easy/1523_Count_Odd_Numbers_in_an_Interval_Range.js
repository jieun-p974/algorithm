//1523. Count Odd Numbers in an Interval Range
//주어진 두개의 양수 low, high 사이의 숫자들의 홀수 갯수를 반환
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let a = 0;//홀수 갯수를 저장하는 함수
    for(let i=low; i <= high; i++){
      //low에서 high까지 반복하면서 홀수가 나올때마다 a값을 1씩 증가
        if(i%2 != 0){
           ++a;
    }
  }
return a;
};
