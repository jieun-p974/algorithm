/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let nums = BigInt(digits.join(""))+1n;
    let str = nums.toString();
    let result = [];
console.log(str)
    for (let i = 0; i < str.length; i++){
      result.push(str.substr(i,1));
      console.log(result);
    }return result
};