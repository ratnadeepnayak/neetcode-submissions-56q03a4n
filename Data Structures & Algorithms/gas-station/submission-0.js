class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let currentGain = 0;
        let totalGain = 0;
        let ans = 0;

        for (let i =0; i< gas.length; i++){
            let gain = gas[i] - cost[i];

            currentGain = gain + currentGain;
            totalGain = gain + totalGain;


            if(currentGain < 0){
                ans = i + 1;
                currentGain = 0;
            }
        }

        return totalGain < 0 ? -1 : ans
    }
}
