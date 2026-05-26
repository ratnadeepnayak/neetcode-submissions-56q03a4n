class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /* The idea behind the longest characrer replacement is
           the count of chars - max frequencyzchar < k for the window
           to be valid
         */

        let left = 0;
        let result = 0;
        let maxFreq = 0;
        let count = {};

        for (let right = 0; right < s.length; right++) {
            count[s[right]] = (count[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq, count[s[right]]);

            while (right - left + 1 - maxFreq > k) {
                // window invalid
                count[s[left]]--;
                left++;
            }

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
