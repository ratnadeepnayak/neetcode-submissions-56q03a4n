class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsMap = {};

        for (let i=0; i<nums.length; i++){
            if(nums[i] in numsMap){
                return true
            }else{
                numsMap[nums[i]] = true;
            }
        }

        return false
    }
}
