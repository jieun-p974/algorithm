/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSum = [];

    for(let i = 0; i < nums.length; i++){
      runningSum[i] = (nums.slice(0,i+1)).reduce((a,c)=>a+c)
    }return runningSum;
};