class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let ans = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i =0; i< temperatures.length;i++){
            while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]){
                const top = stack.pop();
                let diff = i - top
                ans[top] = diff
            }

            stack.push(i);
        }

        return ans;


    }
}
