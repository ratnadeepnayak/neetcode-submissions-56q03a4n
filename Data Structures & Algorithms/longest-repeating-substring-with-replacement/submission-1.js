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
        let map = {};
        let maxFreq = 0;

        for (let right = 0; right < s.length; right++){
            map[s[right]] = (map[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq, map[s[right]]);

            if((right - left + 1) - maxFreq > k){
                map[s[left]]--;
                left++;
            }


            result = Math.max(right - left + 1, result);
        }
        return result;
    }
}