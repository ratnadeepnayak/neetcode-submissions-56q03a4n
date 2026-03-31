class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    /* 
        sliding window approach
        start with wondow sioze as 1
        continue until the end of the string
        slowly move forward and check if we have seen the next element
        to check the element we can use hashmap

        if(seen it){
            move the window
            store the current length // return
        }else{
            keep moving
        }
        //zxyzxyz
        {
            z : 1
            x : 1
            y : 1
        }
     */  

    let i = 0;
    let j  = 0;
    let map = {};
    let currWs = 0;
    let maxWs = 0;

    for (let j = 0; j < s.length;j++){
        let char = s[j];

        if(char in map && map[s[j]] >= i){
            i = map[s[j]] + 1;
            map[s[j]] = j;
        }else{
            map[s[j]] = j;
            currWs = j - i + 1;
            maxWs = Math.max(currWs, maxWs)
        }
    }      

return maxWs

    }
}
