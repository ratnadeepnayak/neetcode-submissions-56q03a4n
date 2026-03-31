class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //1 approach - Brute force
        // O(n^2) - time complexity
        // O(n) - space complexity 

        // let res = new Array(nums.length).fill(1);

        // for (let i =0; i<nums.length; i++){
        //     for(let j=0; j< nums.length; j++){
        //         if( i !== j){
        //             res[i] = res[i] * nums[j]
        //         }
        //     }
        // }

        // return res;


        // 2 approach -

        const leftSum = new Array(nums.length)
        const rightSum = new Array(nums.length)
        leftSum[0] = 1;
        rightSum[nums.length - 1] = 1;

        for (let i = 1; i<nums.length; i++){
            leftSum[i] = leftSum[i - 1]  * nums[i - 1];
        } 

        console.log(leftSum);

        for (let j = nums.length - 2; j >= 0; j--){
            rightSum[j] = rightSum[j + 1] * nums[j + 1];
        };

        console.log(rightSum);

        let res = new Array(nums.length);

        for (let k=0; k<nums.length; k++){
            res[k] = leftSum[k] * rightSum[k]
        } 

        return res;

    }
}
