class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let maxOfAnArray = Math.max(-Infinity, ...piles);
        console.log(maxOfAnArray);

        for (let i = 1; i <= maxOfAnArray; i++){
            let hours = 0;
            for (let j=0; j <= piles.length - 1;j++){
                hours = hours + Math.ceil(piles[j]/i);
            }

            if(hours <= h){
                return i;
            }

        }
    }
}
