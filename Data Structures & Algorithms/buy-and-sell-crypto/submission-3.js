class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyingPrice  = prices[0];
        let maxProfit = 0;
        for (let i =1; i < prices.length; i++){
            if(prices[i] < buyingPrice){
                buyingPrice = prices[i]
            }else{
                let profit = prices[i] - buyingPrice;
                maxProfit = Math.max(profit, maxProfit); 
            }
        }

        return maxProfit;
    }
}
