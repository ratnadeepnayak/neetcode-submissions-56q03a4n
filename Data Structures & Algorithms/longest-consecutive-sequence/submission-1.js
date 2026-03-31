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

        // let numsSet = new Set(nums);
        // let res = 0;
        // for (let num of nums){
        //     let length = 1;
        //     while (numsSet.has(num+ 1)){
        //         length = length + 1;
        //         num++;
        //     }

        //     res = Math.max(res,length);
        // }

        // return res;

        //Improvisation 

        //Store the array into a set
        //check if the current number is begning of a sequence (do that by checking if num -1 is present in the set)
        //if not then consider the length as 1 
        // if yes, continue the process as long as the consecutive num exists

        const numsSet = new Set(nums) 
        let res = 0;
        for (let num of nums){
            let length = 1
            if(!numsSet.has(num -1)){
                while ((numsSet.has(num + 1))){
                    length = length + 1;
                    num++
                }
            }

            res = Math.max(length, res);
        }

        return res;



    }
}
