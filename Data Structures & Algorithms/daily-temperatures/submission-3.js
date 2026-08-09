class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let res = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i=0; i< temperatures.length; i++){
            let currTemp = temperatures[i];

            while(stack.length > 0 && temperatures[stack[stack.length - 1]] < currTemp){
                let top = stack.pop();
                res[top] = i - top;
            }

            stack.push(i);
            

        }

        return res
    }
}
