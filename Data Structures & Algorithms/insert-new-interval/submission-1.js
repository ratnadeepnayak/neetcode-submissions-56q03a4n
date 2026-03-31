class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
    /* Insert all the values of the intervals before the start of the new interval */

    let result = [];
    let start = 0;

    while(start < intervals.length && intervals[start][1] < newInterval[0]){
        result.push(intervals[start]);
        start++;
    }

    /* Insert the new interval where it overlaps */
    while(start < intervals.length && intervals[start][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[start][0],newInterval[0]);
        newInterval[1] = Math.max(intervals[start][1],newInterval[1]); 
        start++;
    }

    result.push(newInterval);

    /* Insert all the intervals after the new interval insertion */
    while(start < intervals.length){
        result.push(intervals[start]);
        start++
    }

    return result
    }
}
