class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.arr = nums;
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.arr.push(val);
        this.arr.sort((a,b) => a-b);
        //[1,2,3,4,5];
        let indexToRemove = (this.arr.length) - this.k;

        return this.arr[indexToRemove];
    }
}
