/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = arr.reduce((a,b)=>(a+b));

console.log(sum)

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 2; j < arr.length; j += 2){
            for(let t = i; t <= j; t++){
                sum += arr[t];
            }
        }
    }return sum
};