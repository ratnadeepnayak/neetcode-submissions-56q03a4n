/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const newIntervals = intervals.sort((a,b) => a.start - b.start);

        for (let i=1; i<newIntervals.length; i++){
            if(newIntervals[i].start < newIntervals[i-1].end){
                return false
            }
        }

        return true
    }
}