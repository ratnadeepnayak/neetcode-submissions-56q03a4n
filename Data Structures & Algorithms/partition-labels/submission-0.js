class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let ans = [];
        let first = new Array(26).fill(-1);
        let last = new Array(26).fill(-1);

        for (let i = 0; i < S.length; i++) {
            let curr = S.charCodeAt(i) - 97;

            if (first[curr] < 0) {
                first[curr] = i;
            }

            last[curr] = i;
        }

        let partitionStart = 0;
        let partitionEnd = 0;

        for (let j = 0; j < S.length; j++) {
            let curr = S.charCodeAt(j) - 97;
            if (j > partitionEnd) {
                ans.push(partitionEnd - partitionStart + 1);
                partitionStart = j;
            }

            partitionEnd = Math.max(last[curr], partitionEnd);
        }
        
        ans.push(S.length - partitionStart);

        return ans;
    }
}