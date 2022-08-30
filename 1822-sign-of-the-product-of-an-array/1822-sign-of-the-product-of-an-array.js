/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let signFunc = (x) => {
        if (x>0) return 1;
        else if (x<0) return -1;
        else return 0;
    }

    let product = 1;

    product = nums.reduce((a,b)=>(a*b));
    console.log(signFunc(product));
    return signFunc(product);
};