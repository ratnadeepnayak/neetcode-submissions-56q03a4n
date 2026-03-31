class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        /* The brute force solution is to check one by one 
            which will lead to O(n2) time complexity

            We will use a hashmap and store the values and 
            reduce the time complexity to O(n) and space complexity to O(n)
        */
        let map = {};

        for (let i =0; i< nums.length; i++){
            if(nums[i] in map){
                return true
            }else{
                map[nums[i]] = true
            }
        }

        return false
    }
}
