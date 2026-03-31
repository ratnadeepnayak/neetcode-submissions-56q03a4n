class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        // let maxOfAnArray = Math.max(-Infinity, ...piles);
        // console.log(maxOfAnArray);

        // for (let i = 1; i <= maxOfAnArray; i++){
        //     let hours = 0;
        //     for (let j=0; j <= piles.length - 1;j++){
        //         hours = hours + Math.ceil(piles[j]/i);
        //     }

        //     if(hours <= h){
        //         return i;
        //     }

        // }

        let left = 1;
        let right = Math.max(...piles);
        let mid = 0;
        let res = right;
        while (left <= right){
            let mid = Math.floor((left + right) /2);
            let hours = 0;
            for (let j=0; j <= piles.length - 1;j++){
                hours = hours + Math.ceil(piles[j]/mid);
            }

            console.log(hours)

            if (hours <= h){
                res = mid
                right = mid - 1;
            }else if(hours > h){
                left = mid + 1;
            }
        }

        return res;

    }
}
