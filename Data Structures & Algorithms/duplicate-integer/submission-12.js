class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /*
        
            sort the array
            go one by one and check if i-1 and i are equal, if yes then diplicate found
            O(nlogn) - time complexity
            O(n)  space complexity


            loop through the array and put the numbers into a map;
            if the value already exists - duplicate found
            time complexity - O(n)
            space complexity - O(n)

         */

        let numsMap = new Map();

        for (let i=0; i<nums.length; i++){
            let currNum = nums[i];

            if(numsMap.has(currNum)){
                return true
            }

            numsMap.set(currNum, true)
        }

        return false;
    }
}