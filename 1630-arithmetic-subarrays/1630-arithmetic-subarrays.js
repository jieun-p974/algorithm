/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let result = Array(l.length).fill(true);
    
    for(let i = 0; i < l.length; i++){
      let temp = nums.slice(l[i], r[i]+1);

      temp.sort((a,b)=>(a-b));
      let diff = temp[1] - temp[0];

      for(let j = 1; j < temp.length; j++){
        if(temp[j]-temp[j-1] !== diff) result[i] = false;
      }
    }return result;
};