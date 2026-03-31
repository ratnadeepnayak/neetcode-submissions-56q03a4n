class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */

    //Intution to use Heaps here
    //As we are using nlogn to constantly sort the array, we can achiveve the same with heaps
    //We will use minHeap

    /*
    -----Algorithm-------
    Add all the numbers to the heap
    Also if the length of the heap is greater than the k, dequque it
    Push the number into the heap;
    If the number exceeds dequeu again
    return the root;

    */

    constructor(k, nums) {
        this.minHeap = new MinPriorityQueue();
        this.k = k;

        for (const num of nums){
            this.minHeap.enqueue(num)
        }

        while(this.minHeap.size() > k){
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);
        if(this.minHeap.size() > this.k){
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }



}
