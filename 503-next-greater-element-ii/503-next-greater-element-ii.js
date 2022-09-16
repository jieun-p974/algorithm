/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let realLength = nums.length;
    let result = [];
    nums = [...nums,...nums];

    for(let i = 0; i < nums.length; i++){
      if(result.length === realLength) break;
      let nextNum;
      for(let j = i+1; j < nums.length; j++){
        if(nums[i] < nums[j]){
          nextNum = nums[j];
          break;
        }
      }
      result.push(nextNum !== undefined ? nextNum : -1);

    }
    return result;
};