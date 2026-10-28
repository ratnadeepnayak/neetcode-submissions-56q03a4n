class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        /*check the length of both the string, if they don't match return false
          createMap and check frequencies, 
         */

        if(s.length !== t.length) return false;

        const sMap = {};
        const tMap = {};

        for (let i=0; i<s.length; i++){
            if(s[i] in sMap){
                sMap[s[i]] = sMap[s[i]] + 1;
            }else{
                sMap[s[i]] = 1;
            }
        }

        for (let j=0; j < t.length; j++){
            if(t[j] in tMap){
                tMap[t[j]] = tMap[t[j]] + 1
            }else{
                tMap[t[j]] = 1;
            }
        }

        for (let k=0; k < s.length; k++){
            if(sMap[s[k]] !== tMap[s[k]]){
                return false
            } 
        }

    return true
    }
}
