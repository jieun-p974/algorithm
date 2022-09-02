/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /* 연속으로 0이 나올때 해결할 수 없음
    for(let i = 0; i < nums.length; i++){
      
      if( nums[i] === 0){
        nums.splice(i,1);
        nums.push(0);
        console.log(nums);
      }
      
    }return nums;*/
    let count = 0;
    for(let i = 0; i < nums.length; i++){
      
      if( nums[i] === 0){
        nums.splice(i,1);
        i--;
        count++;
        console.log(nums);
      }
    }
    for(let j = 0;j < count; j++){
      nums.push(0);
    }
};