class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {

        let arr = new Array(26).fill(0);
        let maxFrequency = 0
        for (let i =0; i < tasks.length; i++){
            let char = tasks[i].charCodeAt() - 65;
            arr[char]++;
            maxFrequency = Math.max( arr[char],maxFrequency)
        }

        let maxFrequenceyCharCount = 0;

        for (let i =0; i< 26;i++){
            if(arr[i] === maxFrequency){
                maxFrequenceyCharCount++;
            }
        }

        let ans = ((n+1) *  (maxFrequency -1)) + maxFrequenceyCharCount;

        return ans < tasks.length ? tasks.length : ans

    }
}
