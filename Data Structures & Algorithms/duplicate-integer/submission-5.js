class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    /*
        Brute force solution is to loop through all the elements
        and check for each element if it exists or not
        O(n^2) O(1) - solution

        Hashmap solution is to create a hasmap as we loop through all the elements
        check if the element exists in the hasmap and make decision accordingly

    */

    // hasDuplicate(nums) {
    //     for (let i= 0; i<= nums.length-1; i++){
    //         for (let j = i+1; j<=nums.length-1; j++){
    //             if(nums[i] === nums[j]){
    //                 return true
    //             }
    //         }
    //     }

    //     return false;
    // }


    hasDuplicate(nums){
        let numsMap = {};

        for (let i=0;i<=nums.length - 1; i++){
            if (nums[i] in numsMap){
                return true
            }else{
                numsMap[nums[i]] = true
            }
        }

        return false
    }
}
