class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let prefixSum = new Array(nums.length).fill(0);
        let suffixSum = new Array(nums.length).fill(0);

        prefixSum[0] = nums[0];
        for (let i = 1; i < nums.length; i++){
            prefixSum[i] = prefixSum[i -1 ] + nums[i];
        }

        suffixSum[nums.length - 1] = nums[nums.length - 1];

        for (let j=nums.length - 2; j >=0; j--){
            suffixSum[j] = suffixSum[j + 1] + nums[j];
        }


        for ( let i = 0; i < nums.length; i++){
            if(prefixSum[i] === suffixSum[i]){
                return i
            }
        }


        return -1;
    }
}
