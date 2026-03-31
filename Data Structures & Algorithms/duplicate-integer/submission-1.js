class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let numsMap = {};
        for (const num of nums){
            if(num in numsMap){
                return true
            }else{
                numsMap[num] = numsMap[num] + 1;
            }
        }

    return false

    }
}
