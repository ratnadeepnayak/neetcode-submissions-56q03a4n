class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        /* 
            ------------------

            The main intution behind this is that a number is a subsequence
            that a number also has (number - 1 ) present

            1. store all numbers in map
            2. For each number check if this is a start of the sequence
               if yes - continut till you find (number +1)
               if not - just ignore and nove on because
         */


        let numsMap = {};
        let maxLength = 0;
        for (let i =0; i< nums.length; i++){
            if(nums[i] in numsMap){
                numsMap[nums[i]] = numsMap[nums[i]] + 1
            }else{
                numsMap[nums[i]] = 1;
            }
        }

        for (let i =0; i<nums.length; i++){
            let curretNum = nums[i];
            let previousNum = curretNum - 1
            if(!(previousNum in numsMap)){
                let length = 1;
                let nextNum = curretNum + 1;
                while(nextNum in numsMap){
                    length++;
                    nextNum = nextNum + 1;
                }

                maxLength = Math.max(maxLength, length); 
            }

        }

        return maxLength
    }
}
