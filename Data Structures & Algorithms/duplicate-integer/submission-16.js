class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const numsMap = {};

        for (let i=0; i< nums.length; i++){
            let currNumber = nums[i];
            if(currNumber in numsMap){
                return true
            }else{
                numsMap[currNumber] = true
            }
        }

        return false;

    }
}
