class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /* 
        
        anagram - exact same characters as other string
          length is same
          count characters of each string and compare

          Time complexity : O(s) + O(t)
          Space complexity : O(s) + O(t)


        if(s.length !== t.length) return false;

        let sMap = {};
        let tMap = {};

        for (let i =0; i< s.length; i++){
            if(s[i] in sMap){
                sMap[s[i]] = sMap[s[i]]  + 1;
            }else{
                sMap[s[i]]  = 1
            }
        }

        for (let j=0;j<t.length;j++){
            if(t[j] in tMap){
                tMap[t[j]] = tMap[t[j]]  + 1
            }else{
                tMap[t[j]]  = 1
            }
        }

        for (let key in sMap){
            if(sMap[key] !== tMap[key]){
                return false
            }
        }

        return true
        
        */


        /* 
            since this consist of only lowercase english characters, we can further optimize this
        */


        if(s.length !== t.length) return false;

        let count = new Array(26).fill(0);

        for (let i =0; i< s.length;i++){
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
        }

        return count.every(c => c === 0);

    }
}
