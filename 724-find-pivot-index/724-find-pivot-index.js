/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((a,c)=>a+c)-nums[0];

    if(leftSum === rightSum) return 0;

    for(i=1; i<nums.length; i++){
        rightSum-=nums[i];
        leftSum+=nums[i-1];
        if(leftSum === rightSum) return i;
    }
    return -1;
};