class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sReversed = s.split("").sort().join("");
        const tReversed = t.split("").sort().join("");

        if(sReversed === tReversed){
            return true
        }

        return false


    }
}
