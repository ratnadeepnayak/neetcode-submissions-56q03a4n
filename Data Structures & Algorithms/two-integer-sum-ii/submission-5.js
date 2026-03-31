class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
           let leftChar = numbers[left];
           let rightChar = numbers[right];
           let sum = leftChar + rightChar
           if(sum === target){
            return [left + 1, right + 1]
           }else if(sum < target){
                left++;
           }else{
            right --;
           }
        }

    }
}
