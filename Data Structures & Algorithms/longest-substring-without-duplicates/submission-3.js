class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left = 0;
        let map = new Map();
        let currWindow = 0;
        let longestWindow = 0;

        for (let right = 0; right < s.length; right++){

            let currChar = s[right];

            if(map.has(currChar) && map.get(currChar) >= left){
                left = map.get(currChar) + 1;
            }

            currWindow = right - left + 1;
            longestWindow = Math.max(longestWindow,currWindow)
            map.set(currChar, right);
        }

   return longestWindow


    }
}
