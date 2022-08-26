/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if(n>0){
      let str = n.toString(2)
      let bits = str.match(/1/g).length; 

      return bits;
    }return 0;
};