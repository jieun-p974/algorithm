/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealth = [];
    
    for(let m = 0; m < accounts.length; m++){
      for(let n = 0; n <accounts[m].length; n++){
        wealth[m] = accounts[m].reduce((a,b)=>(a+b));
      }
    }
    return Math.max(...wealth)
};