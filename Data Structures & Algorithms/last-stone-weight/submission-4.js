class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        let heap = new MaxPriorityQueue();

        for (let i =0; i<stones.length; i++){
            heap.enqueue(stones[i]);
        }


        while(heap.size() > 1){
            let stone1 = heap.dequeue();
            let stone2 = heap.dequeue();

            if(stone1 > stone2){
                heap.enqueue(stone1 - stone2);
            }
        }

        return heap.front() || 0

    }
}
