class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // loop through the array
        // initialize a res variable to store the result
        // compute the area with each combination of the array
        // formula length * breadth Min(i,j) * (j - i);
        // update the res with the max of (max or res)

        let res = 0;
        for (let i=0; i < heights.length; i++){
            for (let j=i+1; j< heights.length;j++){
                let area = Math.min(heights[i], heights[j]) * (j -i);
                res = Math.max(res,area);
            }
        }

        return res;

    }
}
