class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /*

         {
            4 : 0,
            3 : 1,
            2 : 2,
            1 : 3
         }

         */

        let numsMap = {};

        for (let i=0; i< nums.length; i++){
            let currentNum = nums[i];

            if(currentNum in numsMap){
                return [numsMap[currentNum], i]
            }else{
                let complement = target - currentNum;
                numsMap[complement] = i
            }
        }


    }
}