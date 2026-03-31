class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
    // length of the string
    let n = s.length;

    let dp = Array.from({ length: n }, () => Array(n).fill(null));

    // answer counter
    let ans = 0;

    for (let i =0; i <s.length; i++){
        dp[i][i] = true;
        ans++;
         if(i < s.length - 1 && s[i] === s[i + 1]){
            dp[i][i+1] = true;
            ans++;
         }
    }


        for (let len = 3; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                let start = i;
                let end = i + len - 1;

                if (s[start] === s[end] && dp[start + 1][end - 1]) {
                    dp[start][end] = true;
                    ans++;
                }
            }
        }

return ans;

    }
}
