class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        /*

        wordbreak is a problem where we need to find if any word is present in dict
        and also the remaining string returns true too

         */

        let dp = {};

        function isPresent(remS){
            if(remS in dp) return dp[remS];
            if(remS === "") return true;

            for (let i=0; i<remS.length; i++){
                let subStr = remS.substring(0,i+1);

                if(wordDict.includes(subStr) && isPresent(remS.substring(i+1))){
                    return true
                }
            }

            dp[remS] = false;
            return false;
        }

        return isPresent(s)
    }
}
