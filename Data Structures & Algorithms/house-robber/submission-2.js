class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        /*
            to compute the house at the ith point
            rob(i) = Math.max(rob[i-1], rob[i-2]+rob[i])
         */

        let dp = [nums[0], Math.max(nums[0],nums[1])];
        let n = nums.length;
        for (let i = 2; i<n; i++){
            dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
        }

        return dp[nums.length - 1];
    }
}
