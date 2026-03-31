class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        /*
        Remember : We cannot just compute even and odd house concept as it will break the 
        below example
           [5,1,1,5]

        We cannot be greedy as greedy makes local decision, here if we make local decision
        it will affect global decision, so we choose DP

        so formula : 
         rob(n) = Max(n+(n-2), (n-1))
        
         */

        let dp = [nums[0], Math.max(nums[0], nums[1])];

        for (let i = 2; i< nums.length; i++){
        
            dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
        }

        return dp[nums.length - 1]
    }
}
