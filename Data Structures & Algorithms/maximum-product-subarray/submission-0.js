class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currMax = nums[0];
        let currMin = nums[0];
        let result = nums[0];

        for (let i = 1; i< nums.length; i++){
            let tempMax = Math.max(nums[i]*currMax, nums[i]*currMin, nums[i]);
            let tempMin = Math.min(nums[i]*currMax, nums[i]*currMin, nums[i]);

            currMax = tempMax;
            currMin = tempMin;
            result = Math.max(currMax, result);
        }

        return result
    }
}
