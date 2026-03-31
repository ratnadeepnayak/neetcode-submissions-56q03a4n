class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {


        if(n <=2) return n;

        let store = [0,1,2];

        for (let i =3; i<=n;i++){
            store[i] = store[i-1] + store[i-2];
        }


     return store[n];
        
    }
}
