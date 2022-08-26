/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let products = 1;
    let sums = 0;
    let nums = n.toString().split("");

    for(let i = 0; i<nums.length;i++){
        products = products*nums[i];
        sums = sums+Number(nums[i]);
    }

    return products - sums;
};