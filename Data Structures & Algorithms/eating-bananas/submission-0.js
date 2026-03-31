class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        //[1,4,3,2] h=9

        let min = 1;
        let max = Math.max(...piles);
        let res = max;

        while (min <= max){
            const mid = Math.floor((min + max)/2);

             let hours = 0;
            for(const pile of piles){
                 hours = hours +  Math.ceil(pile/mid);  
            }

            if(hours <= h){
                res = mid;
                max = mid - 1
            }else{
                min = mid + 1
            }

        }


        return res
    }
}
