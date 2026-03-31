class NumArray {
    /**
     * @param {number[]}
     */
    constructor(nums) {
        this.prefix = [];

        let total = 0;

        for (let i=0; i<nums.length; i++){
            total =  total + nums[i];
            this.prefix.push(total)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const rightSum = this.prefix[right];
        const leftSum = left === 0 ? 0 : this.prefix[left - 1];

        return rightSum - leftSum
    }
}
