class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    /*
    Brute force solution is to check all the indices one by one and
    sum it up and check if it matches the target element.
    Time complexity - O(n^2)
    Space complexity - O(1)

    */ 
    twoSum(nums, target) {

    let numsMap = {};

    for (let i=0; i< nums.length; i++){
        let potentialTarget = target - nums[i];

        if(potentialTarget in numsMap){
            return [numsMap[potentialTarget], i]
        }else{
            numsMap[nums[i]] = i;
        }
    }


    }
}
