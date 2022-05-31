/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*
    단수가 n개인 계단이 있다.
    당신은 한번에 1칸 또는 2칸을 오를 수 있다.
    당신이 꼭대기까지 올라가는 방법은 몇개 인가?
    n=1일때 방법 1개
    n=2일때 방법 2개
    n=3일때 방법 3개
    n=4일때 방법 5개
    ==> Fn(4) = Fn(3)+Fn(2)
    Fn(3) = Fn(2)+Fn(1)
    ==> Fn(n) = Fn(n-1)+Fn(n-2)
    */
    let arr = [1,2];
    for(let i = 2; i<n; i++){
      arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};
