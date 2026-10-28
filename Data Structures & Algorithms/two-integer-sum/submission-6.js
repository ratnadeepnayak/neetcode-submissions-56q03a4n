class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = {}
        for (let i=0; i < nums.length; i++){
            let potentialSum = target - nums[i];

            if(potentialSum in numsMap){
                return [numsMap[potentialSum], i]
            }else{
                numsMap[nums[i]] = i;
            }
        }
    }
}
