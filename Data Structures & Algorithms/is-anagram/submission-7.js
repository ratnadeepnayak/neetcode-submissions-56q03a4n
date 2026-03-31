class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    /*
        Brute force solution will be to reverse both the strings and compare
        Time complexity
        O(n) - split
        O(nlong) - sort
        O(n) - join
        Snce these are happening sequentially we add them
        so time complexity will be O(nlogn)

        space complexity - O(1) or O(n + m) depending on the algorithim



    
    */ 

    // isAnagram(s, t) {
    //     let sReversed = s.split("").sort().join("");
    //     let tReverse = t.split("").sort().join("");

    //     return sReversed === tReverse
    // }


    isAnagram(s,t){
        if(s.length !== t.length){
            return false;
        }

        const countS = {};
        const countT = {};

        for (let i=0; i< s.length; i++){
            if(s[i] in countS){
                countS[s[i]] = countS[s[i]] + 1;
            }else{
                countS[s[i]] = 1;
            }
        }

        for (let i=0; i< t.length; i++){
            if(t[i] in countT){
                countT[t[i]]  = countT[t[i]]  + 1;
            }else{
                countT[t[i]] = 1;
            }
        }

        for (const key in countS){
            if(countS[key] !== countT[key]){
                return false
            }
        }

    return true

    }
}
