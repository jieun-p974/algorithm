/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    let sum = salary.reduce((a,b)=>(a+b)) - (min+max);
    let average = sum  / (salary.length-2);


    return average.toFixed(5);
};