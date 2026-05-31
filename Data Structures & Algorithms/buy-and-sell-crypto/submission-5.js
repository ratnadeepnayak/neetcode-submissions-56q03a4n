class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let maxProfit = 0;
        let profit = 0;
        let buyingPrice = prices[0];

        for (let i=1; i<prices.length; i++){
            if(prices[i] < buyingPrice){
                buyingPrice = prices[i]
            }else{
                profit = prices[i] - buyingPrice;
                maxProfit = Math.max(maxProfit,profit)
            }
        }

    return maxProfit
    }
}
