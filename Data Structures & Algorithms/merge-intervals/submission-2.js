class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        const newIntervals = intervals.sort((a, b) => a[0] - b[0]);

        let res = [];

        res.push(newIntervals[0]);

        for (let i =1; i < newIntervals.length; i++){
            let lastIndex = res.length - 1;

            if(newIntervals[i][0] <= res[lastIndex][1]){

                res[lastIndex][0] = Math.min(res[lastIndex][0],newIntervals[i][0]);
                res[lastIndex][1] = Math.max(res[lastIndex][1],newIntervals[i][1]);

            }else{
                res.push(newIntervals[i])
            }
        }

        return res;

    }
}
