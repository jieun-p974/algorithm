/**
 * @param {number} n
 * @return {number}
 */
let mem = [];
var climbStairs = function(n) {
    
    if(n <= 1 ) mem[n] = 1;
    if(mem[n]) return mem[n];
    mem[n] = climbStairs(n-1) + climbStairs(n-2);
    return mem[n];
};