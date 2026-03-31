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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a,b) => a.start - b.start);

        let minHeap = new MinPriorityQueue();

        for (let i =0; i<intervals.length; i++){
            if (!minHeap.isEmpty() && minHeap.front() <= intervals[i].start){
                minHeap.pop();
                minHeap.push(intervals[i].end)
            }else{
                minHeap.push(intervals[i].end)
            }

        
        }

        return minHeap.size();
    }
}
