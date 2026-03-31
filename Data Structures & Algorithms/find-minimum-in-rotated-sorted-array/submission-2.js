class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

    //    [!3,!4,!5, 6, 1, 2]
    //      l    m     l  m  r 

    // left half is sorted
    //

    let left = 0;
    let right = nums.length - 1;
    let res = Infinity;

    while (left <= right){
        let mid = Math.floor((left + right)/2);

        if(nums[left] <= nums[mid]){
            res = Math.min(res,nums[left]);
            left = mid + 1;
        }else{
            res = Math.min(res,nums[mid])
            right = mid - 1;
        }

    }

    return res;

    }
}
