class NumArray {
    /**
     * @param {number[]}
     */
    constructor(nums) {
        this.prefix = new Array(nums.length).fill(0);

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                this.prefix[i] = 0 + nums[i];
            } else {
                this.prefix[i] = this.prefix[i-1] + nums[i];
            }
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {

        console.log(this.prefix)

        if (left <= 0) {
            return this.prefix[right];
        } else {
            return this.prefix[right] - this.prefix[left - 1];
        }
    }
}
