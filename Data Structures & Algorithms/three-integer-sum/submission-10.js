class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /*
        [-4,-1,-1,0,1,2]
        1. sort the array
        2. start from position 0
           loop from 0 to n-2:
              if(nums[i] === nums[i+1]) continue:

              let left = i+1;
              let right = nums.length - 1;

              while(left < right){
                let currSum = 


              }
        
        */

        let res = [];
        let sortedArray = nums.sort((a,b) => a-b);
        let n = sortedArray.length
        for (let i=0; i< n-2; i++){

            if(i > 0 && sortedArray[i] === sortedArray[i-1]) continue;

            let left = i+1;
            let right = n-1;

            while(left < right){
                let currSum = sortedArray[i] + sortedArray[left] + sortedArray[right];

                if(currSum === 0){
                    let ans = [sortedArray[i],sortedArray[left],sortedArray[right]];
                    res.push(ans);

                    
                    while(left < right && sortedArray[left] === sortedArray[left+1]){
                        left++;
                    }

                    while(left < right && sortedArray[right] === sortedArray[right-1]){
                        right--
                    }
                    left++;
                    right--


                }else if(currSum > 0){
                    right--;
                }else{
                    left++;
                }

            }
        }

       return res
    }
}
