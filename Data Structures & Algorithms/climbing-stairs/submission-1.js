class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor(){
        this.map = {};
    }

    climbStairs(n) {

        if(n <=2 ) return n;
        if (this.map[n]) return this.map[n];

        this.map[n] =  this.climbStairs(n-1) + this.climbStairs(n-2);

        return this.map[n]
    }
}
