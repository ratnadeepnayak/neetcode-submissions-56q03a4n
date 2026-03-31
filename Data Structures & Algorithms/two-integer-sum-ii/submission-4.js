class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //[1,2,3,4] -> output [1,2]
        //array is 1 indexed

        let leftIdx = 0;
        let rightIdx = numbers.length - 1;

        while(leftIdx <= rightIdx){
            const sum = numbers[leftIdx] +  numbers[rightIdx]
            if(sum === target){
                return [leftIdx + 1, rightIdx + 1]
            }else if(sum > target){
                rightIdx --;

            }else if(sum < target){
                leftIdx ++;

            }
        }


    }
}
