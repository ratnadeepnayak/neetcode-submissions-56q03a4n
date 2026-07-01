class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let n = s.length;
        let dp = Array.from({length: n}, () => new Array(n).fill(false));
        let ans = [0,0]

        for (let i=0; i< s.length; i++){
            dp[i][i] = true;

            if( i < s.length-1 && s[i] === s[i+1]){
                dp[i][i+1] = true;
                ans = [i,i+1]
            }
        }

        for (let len = 3; len <= s.length; len++){
            for (let i = 0; i <= s.length - len; i++){
                let j = i + len - 1;

                if(s[i] === s[j] && dp[i+1][j-1] === true){
                    dp[i][j] = true;
                    ans = [i,j];
                }
            }
        }

        console.log(ans)
        console.log(s.substring(ans[0],ans[1]+ 1));

        return s.substring(ans[0],ans[1]+ 1)

    }
}
