class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buyPrice = prices[0];
        let sellPrice = 0;

        for (let i = 1; i< prices.length; i++){
            if(buyPrice < prices[i]){
                let currProfit = prices[i] - buyPrice
                profit = Math.max(currProfit, profit)
            }else{
                buyPrice = prices[i]
            }
        }

        return profit
    }
}
