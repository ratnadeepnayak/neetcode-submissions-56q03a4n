class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //basic idea of this problem is to find the min element
        //min element occurs when the leftmost element is less than the rightmost
        // we can apply the binary search and check when the midElemernt is in left or right portion
        //if left then look for right portion
        //if right then look for left portion


        let [left,right] = [0, nums.length - 1];
        let min = nums[0];

        while(left<=right){

            if(nums[left] < nums[right]){
                min = Math.min(min, nums[left]);
                break;
            }


            let mid = Math.floor((left + right)/2);
            min = Math.min(min,nums[mid]);
            
            if(nums[mid] >= nums[left]){
                left = mid + 1;
            } else{
                right = mid - 1;
            }
            
        }

    return min

    }
}
