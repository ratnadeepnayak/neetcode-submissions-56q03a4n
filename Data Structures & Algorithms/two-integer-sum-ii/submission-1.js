class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //use two pointers
        // first at the beginning and one at the end
        // Add them, 
        //if sum > targetNum -> decrease right pointer
        //if sum < targetNum - > increase left pointer
        // found the solution [left, right]

        let left = 0;
        let right = numbers.length - 1;

        while (left < right){
            let potentialTarget = numbers[left] + numbers[right];

            if(potentialTarget > target){
                right --;
            }else if(potentialTarget < target){
                left ++;
            }else{
                return [left + 1, right+ 1]
            }
        }

    }
}
