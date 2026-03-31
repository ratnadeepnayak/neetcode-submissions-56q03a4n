class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let area = 0;

        while(left < right){
            let leftNum = heights[left];
            let rightNum = heights[right];

            let currArea = (right - left) * (Math.min(heights[left], heights[right]))
            area = Math.max(area,currArea);

            if(heights[left] < heights[right]){
                left++;
            }else{
                right--;
            }

        }

        return area;
    }
}
