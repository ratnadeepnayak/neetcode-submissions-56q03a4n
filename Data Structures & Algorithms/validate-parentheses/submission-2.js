class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        /*  
            maintain a map of what brackets correspond to closing bracket
            Loop through th string
                put all opening brackets into a stack
                if opening bracket - add to a stack
                if closing - pop and check if it matches with the closing one
            rerturn true or false accordingly
         */

        let bracketMap = {
            '(' : ')',
            '[' : ']',
            '{' : '}'
        }
        let stack = [];

        for (let i= 0;i < s.length;i++){
     
            if(s[i] in bracketMap){
                stack.push(s[i]);
            }else{
                let curr = stack.pop();
                if(s[i] !== bracketMap[curr]){
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
