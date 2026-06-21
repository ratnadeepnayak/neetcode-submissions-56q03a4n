class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currMax = nums[0];
        let res = nums[0];

        for (let i =1; i < nums.length; i++){
            currMax = Math.max(nums[i] + currMax, nums[i]);
            res = Math.max(res, currMax);
        }

      return res;
    }
}
