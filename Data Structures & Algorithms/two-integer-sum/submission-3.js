class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /*
            3,4,5,6 - target = 7

            {
                4 : 0,
                3 : 1,
                2 : 2,
                1 : 3
            }

        */
        let numsMap = {};
        for (let i = 0; i < nums.length; i++) {
            let potentialSum = target - nums[i];

            if(nums[i] in numsMap){
                return [numsMap[nums[i]], i]
            }else{
                numsMap[potentialSum] = i;
            }
        }

        return [-1,-1]
    }
}
