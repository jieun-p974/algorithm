/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    let sum = [0,1];

    for(let i = 2; i < n; i++){
      sum[i] = sum[i-1] + sum[i-2];
    }
    return sum[n-1]+sum[n-2];
};