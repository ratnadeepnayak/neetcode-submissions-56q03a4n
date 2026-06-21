class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        /* */

        let dp = new Array(nums.length).fill(1);
        dp[0] = 1;
        let lisLength = 1;

        for (let i = 1; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], 1 + dp[j]);
                    lisLength = Math.max(lisLength, dp[i]);
                }
            }
        }

        return lisLength;
    }
}
