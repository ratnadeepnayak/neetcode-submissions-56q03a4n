class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let visitedNodes = new Set();
      
         while(!visitedNodes.has(n)) {
            visitedNodes.add(n);
            n = this.sumOfSquares(n);
            if(n === 1){
                return true
            }
        }

        return false    
    }


    sumOfSquares(num){
        let sum = 0;
        while(num >0){
            let digit = num % 10;
            sum = sum + (digit * digit);
            num = Math.floor(num/10);
        }

        return sum
    }
}
