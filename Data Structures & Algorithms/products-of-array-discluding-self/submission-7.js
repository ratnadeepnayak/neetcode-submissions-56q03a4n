class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        /*  
            nums      [1,  2,  4,  6]

            prefix =  [1,  1,  2,  8]
            postfix = [48,  24, 6, 1]
        
            output =  [48, 24, 12, 8]
        */
        let n = nums.length;
        let prefixSum = new Array(n).fill(1);
        let suffixSum = new Array(n).fill(1);

        let res = new Array(n).fill(1);

        for (let i = 1; i<n; i++){
            prefixSum[i] = prefixSum[i-1] * nums[i-1];
        }


        for (let j = n-2; j>=0;j--){
            suffixSum[j] = suffixSum[j+1] * nums[j+1]
        }

        for (let i =0; i< n;i++){
            res[i] = prefixSum[i] * suffixSum[i];
        }

        return res
    }
}
