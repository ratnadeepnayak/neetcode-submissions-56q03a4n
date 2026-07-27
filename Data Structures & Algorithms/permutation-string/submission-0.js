class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        
        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        for (let i=0;i < s1.length; i++){
            s1Count[s1.charCodeAt(i) - 97]++;
        }

        for (let right = 0; right < s2.length; right++){
            s2Count[s2.charCodeAt(right) - 97]++;

            let currWindow = right - left + 1;

            if(currWindow === s1.length){
                 let res = this.areTwoArraysEqual(s1Count, s2Count);
                 if(res){
                    return true
                 }else{
                    s2Count[s2.charCodeAt(left) - 97]--;
                    left++;
                 }
            }
        }

        return false;


    }

    areTwoArraysEqual(arr1, arr2){
        for (let i =0; i < 26; i++){
            if(arr1[i] !== arr2[i]) return false;
        }

        return true;
    }
}
