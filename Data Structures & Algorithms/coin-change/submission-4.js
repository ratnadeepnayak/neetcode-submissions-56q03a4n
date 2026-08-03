class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = {};
        function calculateMinCoins(remAmt){
            let minCoins = Infinity;

            if(remAmt === 0) return 0;
            if(remAmt < 0) return -1;

            if(remAmt in dp){
                return dp[remAmt];
            }

            for (let i=0; i<coins.length; i++){
                let res = calculateMinCoins(remAmt - coins[i]);

                if(res !== -1){
                    minCoins = Math.min(minCoins, 1 + res);
                }
            }
            dp[remAmt] = minCoins === Infinity ? -1 : minCoins
            return dp[remAmt]
        }

        return calculateMinCoins(amount)
    }
}