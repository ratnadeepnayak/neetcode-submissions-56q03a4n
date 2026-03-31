class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const storageMap = {};

        for (const num of nums){
          if(num in storageMap){
            return true
          }else{
            storageMap[num] = true
          }
        }

        return false


    }
}
