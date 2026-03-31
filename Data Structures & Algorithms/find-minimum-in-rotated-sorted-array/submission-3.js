class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        /*
        minimum in rotated sorted array
        in rotated sorted array we have on portion sorted
        and other portion is not sorted which will have the minimum 
        */

        let left = 0;
        let right = nums.length - 1;

        while (left < right){
            let mid = Math.floor((left + right)/2);
            if(nums[mid] > nums[right]){
                left = mid + 1;
            }else{
                right = mid;
            }
        }

        return nums[right];
    }

}