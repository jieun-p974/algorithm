/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let num1 = BigInt(`0b${a}`);
    let num2 = BigInt(`0b${b}`);

console.log(num1, num2)
    return (num1+num2).toString(2);
};