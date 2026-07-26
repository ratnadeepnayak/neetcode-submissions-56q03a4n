class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map = {};

        for (let i=0; i<nums.length;i++){
           let potentialNum = target - nums[i];

           if(potentialNum in map){
                return [map[potentialNum],i]
           }else{
            map[nums[i]] = i;
           }
        }

    }
}
