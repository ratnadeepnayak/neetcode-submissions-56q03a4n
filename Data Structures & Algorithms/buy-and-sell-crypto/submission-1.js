class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) { 

    /*
        We can buy on 1 day and try to sell on any other day
    
    */

    let profit = 0;
    let buyPrice = prices[0];

    for (let i =1; i< prices.length;i++){
        if(prices[i] > buyPrice){
            profit = Math.max(profit, (prices[i]-buyPrice))
        }else{
            buyPrice = Math.min(buyPrice,prices[i])
        }
    }

    return profit

    }
}
