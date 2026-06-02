class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        /* 
                [1,    2,    3] | 
                 here  here 

                 [1,2,1,2,1,1,1]
                 [0,0, ]

                 Math.min(reach (i-1) || cost reach(i)+ cost of i) 
         */ 


        let store = [0,0]
        for (let i =2;i<=cost.length;i++){
            store[i] = Math.min((store[i-2]+ cost[i-2]), 
                                 (store[i-1] + cost[i-1])
            )
        }
    
    return store[cost.length]


    }
}
