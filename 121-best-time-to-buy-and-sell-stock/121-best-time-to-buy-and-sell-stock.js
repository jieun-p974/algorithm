/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /* runtime error
    let diff = [];

    for(let i = 0; i < prices.length; i++){
      for(let j = i+1; j < prices.length; j++){
        diff.push(prices[j] - prices[i]);
      }
    }
    if(Math.max(...diff) < 0) return 0;
    else return Math.max(...diff);
    */

    //discuss 참고
    let left = 0; //buy
    let right = 1; //sell
    let max_profit = 0;
    
    while(right < prices.length){
      if(prices[left] < prices[right]){
        let profit = prices[right] - prices[left];
        max_profit = Math.max(max_profit, profit);
      }else{
        left = right;
      }
      right++;
    }
    return max_profit;
};