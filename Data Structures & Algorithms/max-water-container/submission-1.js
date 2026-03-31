class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        //Brute Force
        //O(n^2) O(n) - space

        // loop through the array
        // initialize a res variable to store the result
        // compute the area with each combination of the array
        // formula length * breadth Min(i,j) * (j - i);
        // update the res with the max of (max or res)

        // let res = 0;
        // for (let i=0; i < heights.length; i++){
        //     for (let j=i+1; j< heights.length;j++){
        //         let area = Math.min(heights[i], heights[j]) * (j -i);
        //         res = Math.max(res,area);
        //     }
        // }

        // return res;


        // Improvised with Two pointers
        // Initialize two pointers left and right
        // while (left < right) compute the area using the above formula
        // if left is less than right - we need to increase the area so increment left
        // else increment right
        // return res;

        let left = 0;
        let right = heights.length - 1;
        let res = 0;

        while(left < right){
            let area = Math.min(heights[left], heights[right]) * (right - left);
            res = Math.max(res, area);

            if(heights[left] <= heights[right]){
                left++;
            }else{
                right--;
            }
        }

        return res;

    }
}
