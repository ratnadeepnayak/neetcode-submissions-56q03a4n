class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let charSet = new Set();
        let left = 0;
        let maxLength = 0;
        let n = s.length;

        for (let right = 0; right < n; right++){
            let currChar = s[right];

            while(charSet.has(currChar)){
                charSet.delete(s[left]);
                left++;
            }

            charSet.add(currChar);

            let currWindow = right - left + 1;
            maxLength = Math.max(maxLength,currWindow);

        }

        return maxLength

    }
}