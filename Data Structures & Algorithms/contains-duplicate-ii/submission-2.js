class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let left = 0;
        let window = new Set();

        for (let right = 0; right < nums.length; right++){
            if(right - left > k){
                window.delete(nums[left]);
                left++;
            }

            if(window.has(nums[right])){
                return true
            }

            window.add(nums[right]);
        }

        return false
    }
}
