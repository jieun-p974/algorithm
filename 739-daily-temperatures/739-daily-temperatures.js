/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    let bag = [];

    for (let i=0; i < temps.length; i++){
        let count = 0;
        for (let j= i; j < temps.length; j++){
            if (temps[j] > temps[i]) {
                break;
            } else {
                count++;
            }
            
            if (j === temps.length - 1){
                count = 0;
            }
        }
        
        bag.push(count);
    }
    
    return bag;
};