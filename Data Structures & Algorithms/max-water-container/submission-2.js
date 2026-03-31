class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    /* 
        Brute force solution
        1. Check all the combinations and try to maximize the water storage
        2. or each index check the water content with every other index
        3. maxwidth -> (max(i and j) * j -i)
    
    */

    maxArea(heights) {
        let maxWeight = 0;

        for (let i=0; i< heights.length; i++){
            for (let j= i+1; j < heights.length; j++){
                let length = Math.min(heights[i], heights[j]);
                let breadth = j-i;
                let waterContent = length * breadth;

                maxWeight = Math.max(maxWeight, waterContent)
            }
        }

        return maxWeight;
    }
}
