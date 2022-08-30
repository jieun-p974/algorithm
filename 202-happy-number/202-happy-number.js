/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, dp=[]) {
    if (n === 1) return true;

    let nArray = String(n).split('');
    let calculate = nArray.reduce((sum, element) => sum += Math.pow((element), 2), 0);

    if (dp.includes(calculate)) return false;
    dp.push(calculate)
    return isHappy(calculate, dp);
};