/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let repeatS = s.repeat(2);
    let sliceS = repeatS.slice(1,-1);
console.log(repeatS, sliceS)
    return sliceS.includes(s);
};