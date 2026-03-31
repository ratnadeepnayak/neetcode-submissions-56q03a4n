class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor(){
        this.store = [0,1,2]
    }

    climbStairs(n) {

        for (let i =3; i<=n;i++){
           this.store[i] = this.store[i-1] + this.store[i-2]
        }

       return this.store[n]

    }
}
