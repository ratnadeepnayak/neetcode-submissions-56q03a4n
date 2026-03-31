class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // brute force 

        //create a set
        //start with each number
        //check if num + 1 exists
        // if yes then add to the count and store a variable for result
        //return the result

        let numsSet = new Set(nums);
        let res = 0;
        for (let num of nums){
            let length = 1;
            while (numsSet.has(num+ 1)){
                length = length + 1;
                num++;
            }

            res = Math.max(res,length);
        }

    return res;

    }
}
