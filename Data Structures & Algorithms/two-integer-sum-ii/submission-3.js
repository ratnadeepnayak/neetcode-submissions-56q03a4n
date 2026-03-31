class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

       // O(n^2) solution

        // for(let i = 0; i< numbers.length; i++){
        //     for (let j = i+1; j<numbers.length;j++){
        //         const sum = numbers[i] + numbers[j];

        //         if(sum === target){
        //             return [i+1, j+1]
        //         }
        //     }
        // }

        /*. 
        
            We should be able to improvd the time complexity by using two pointer technique 
            1. Initialize left to the beginning and right to the end of the array
            2. Compute the sum
            3. If Sum in greater than the target, decrement right as we need to lower the value
            4. Increment left if the sum is lower than the target
            5. continue the above until left does not pass the right
         */

        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            const sum = numbers[left] + numbers[right];
            if(sum > target){
                right--;
            }else if(sum < target){
                left++;
            }else{
                return [left+1, right+1]
            }
        }

    }
}
