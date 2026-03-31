class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       //brute force solution would include looping through all the elements 
       //this would be O(n^3) solution

       /*
         1. sort the inout
         2. have a pointer at the start
         3. have a pointer at the end of the array
         4. compute the sum
            if the sum > 0 - reduce it and 
            if the sum is < 0 increment the left pointer
            if equal, increment left, decrement right and also check for duplicates

        */

        let res = [];
        nums.sort((a, b) => a - b);

        for(let i=0; i< nums.length; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i+1;
            let right = nums.length - 1;
            while(left < right){
                const sum = nums[i] + nums[left] + nums[right];
                if(sum > 0){
                    right --;
                }else if(sum < 0){
                    left ++;
                }else{
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    while(left < right && nums[left] === nums[left - 1]){
                        left++;
                    }
                }
            }

        }
        return res;
    }
}
