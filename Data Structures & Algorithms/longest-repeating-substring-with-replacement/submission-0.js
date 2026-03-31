class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let charMap = {};
        let i = 0;
        let maxWS = 0;
        for (let j=0; j<s.length; j++){
            let currChar = s[j];
            if(currChar in charMap){
                charMap[currChar] = charMap[currChar] + 1
            }else{
                charMap[currChar] = 1;
            }

            while(!this.isWindowValid(charMap,k)){
                charMap[s[i]]--;
                i++;
            }

            let currWs = j-i+1;
            maxWS = Math.max(maxWS,currWs)
        }

        return maxWS

    }


    isWindowValid(map, k) {

    let totalCount = 0;
    let maxCount = 0;

    for (let i = 0; i < 26; i++) {

        let char = String.fromCharCode(i + 65);

        if (map[char]) {
            totalCount = totalCount + map[char];
            maxCount = Math.max(maxCount, map[char])
        }
    }


    return (totalCount - maxCount) <= k
}
}