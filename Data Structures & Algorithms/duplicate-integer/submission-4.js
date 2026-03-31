class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    /*
        Brute force solution is to loop through all the elements
        and check for each element if it exists or not

    */

    hasDuplicate(nums) {
        for (let i= 0; i<= nums.length-1; i++){
            for (let j = i+1; j<=nums.length-1; j++){
                if(nums[i] === nums[j]){
                    return true
                }
            }
        }

        return false;
    }
}
