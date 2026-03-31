class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        /*
            we will use one loop to start from 1 house and go till n-1
            we will start another loop start from 2 house and go till end
            and get max out of two
         */
        if(nums.length === 1) return nums[0];

        if(nums.length === 2) return Math.max(nums[0], nums[1])

        let max1 = -Infinity;
        let dp1 = [nums[0], Math.max(nums[0], nums[1])];
        let n = nums.length;
        for (let i=2; i<=n-2; i++){
            dp1[i] = Math.max(dp1[i-1], dp1[i-2] + nums[i]);
        }
        max1 = dp1[dp1.length - 1];

        let max2 = - Infinity;
        let dp2 = [0, nums[1], Math.max(nums[1], nums[2])];

        for (let i = 3; i <= nums.length - 1; i++){
            dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i]);
        }

        max2 = dp2[dp2.length - 1];

        return Math.max(max1, max2)

    }
}
