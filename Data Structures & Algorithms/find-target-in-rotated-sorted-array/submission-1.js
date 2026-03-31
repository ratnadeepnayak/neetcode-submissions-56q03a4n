class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //compute the midpoint
        //check if midpoint is equal to the target
       //search for the sorted part/side
       //check if the number exists in the sorted array
       //if not continue the process

        let left = 0;
        let right = nums.length - 1;

        while (left <= right){
            let midpoint = Math.floor((left + right)/ 2);

            if(nums[midpoint] === target){
                return midpoint;
            }

            //left portion is sorted
            if(nums[left] <= nums[midpoint]){
                //check if number exists in sorted array 
                if(nums[left] <= target && target <= nums[midpoint]){
                    right = midpoint - 1;
                }else{
                    left = midpoint + 1;
                }

            }else
            //right portion is sorted
            {
                if(target >= nums[midpoint] && target <= nums[right]){
                    left = midpoint + 1;
                }else{
                    right = midpoint - 1;
                }
            }
        }

        return -1;


    
    }
}
