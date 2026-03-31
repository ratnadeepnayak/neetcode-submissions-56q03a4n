class KthLargest { 
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        const heap = new MinPriorityQueue();
        this.k = k;
        this.heap = heap;

        for (let i = 0; i< nums.length; i++){
           this.add(nums[i])
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);

        if(this.heap.size() > this.k){
            this.heap.dequeue();
        }

        return this.heap.front();
    }
}