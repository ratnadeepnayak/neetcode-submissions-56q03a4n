class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    /*
        Brute force solution will be to reverse both the strings and compare

    
    */ 

    isAnagram(s, t) {
        let sReversed = s.split("").sort().join("");
        let tReverse = t.split("").sort().join("");

        return sReversed === tReverse
    }
}
