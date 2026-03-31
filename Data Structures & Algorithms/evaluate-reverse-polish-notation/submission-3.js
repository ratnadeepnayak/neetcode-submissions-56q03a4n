class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        /*
            Take the numbers one by one and then put it back in the stack and 
            return the final answer from the stack
         */

        let stack = [];

        for (let i =0; i<tokens.length; i++){
            if(tokens[i] === "+"){
                let num1 = parseInt(stack.pop());
                let nums2 = parseInt(stack.pop());
                let ans = num1 + nums2;
                stack.push(ans);
            }else if(tokens[i] === "-"){
                let num1 = parseInt(stack.pop());
                let nums2 = parseInt(stack.pop());
                let ans = nums2 - num1;
                stack.push(ans);

            }else if(tokens[i] === "*"){
                let num1 = parseInt(stack.pop());
                let nums2 = parseInt(stack.pop());
                let ans = num1 * nums2;
                stack.push(ans);
            }else if(tokens[i] === "/"){
                let num1 = parseInt(stack.pop());
                let nums2 = parseInt(stack.pop());
                let ans = Math.trunc(nums2/num1)
                stack.push(ans);
            }else{
                stack.push(tokens[i])
            }
        }
        return stack[0];
    }
}
