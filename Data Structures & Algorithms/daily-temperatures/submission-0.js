class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        /*
            We will be using a stack to keep track of temperatures greater
            pop elements till we find a greater temperature
            read the elements and update the ans
            push the current element
            
         */

        let stack = [];

        let n = temperatures.length;
        let ans = new Array(n).fill(0);
        for (let i = n-1; i>=0;i--){
            let currElement = temperatures[i];
            console.log("here", stack);
            while(stack?.length > 0 && (temperatures[i] >= temperatures[stack[stack?.length - 1]])){
                stack.pop();
            }

            ans[i] = stack?.length > 0 ? stack[stack?.length - 1] - i : 0

            stack.push(i)
        }

        return ans
    }
}