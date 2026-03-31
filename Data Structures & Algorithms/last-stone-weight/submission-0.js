class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();

        for(let num of stones){
            heap.enqueue(num);
        }

        while(heap.size() > 1){
            let stone1 = heap.dequeue();
            let stone2 = heap.dequeue();

            if(stone1 !== stone2){
                heap.enqueue(stone1 - stone2);
            }
        }

        return heap.size() === 1 ? heap.front() : 0
    }
}
