class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

       /*
       
        the whole algorithm revolves around having to compute
        the maxSeen on the leftSide
        the maxSeen on the rightSide
        subtract the height

        Math.min(maxLeft, maxRight) - currHeight
       
        */

        let maxL = [];
        let maxR = [];

        maxL[0] = height[0];

        for (let i =1; i<height.length;i++){
            maxL[i] = Math.max(height[i], maxL[i-1])
        }

        maxR[height.length - 1] = height[height.length - 1];

        for (let j=height.length - 2;j >=0;j--){
            maxR[j] = Math.max(height[j],maxR[j+1])
        }

        let ans = 0;

        for (let i =0; i < height.length; i++){
            let trappedWater = Math.min(maxL[i], maxR[i]) - height[i];

            if(trappedWater >= 0){
                ans = ans + trappedWater
            }
        }

        return ans

    }
}
