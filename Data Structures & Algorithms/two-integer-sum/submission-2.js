class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for (let i = 0; i< nums.length;i++){

            let potentialSum = target - nums[i];

            if(potentialSum in map){
                return [map[potentialSum], i]
            }else{
                map[nums[i]] = i
            }

        }
    
    }
}
