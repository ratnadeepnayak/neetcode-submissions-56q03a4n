class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for (let i = 0; i< nums.length;i++){

            console.log(map)

            let potentialSum = target - nums[i];

            if(nums[i] in map){
                return [map[nums[i]], i]
            }else{
                map[potentialSum] = i;
            }
        }
    
    }
}
