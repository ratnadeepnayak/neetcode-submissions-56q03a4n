class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
    let res = "";

    if(strs.length === 0) return res;

    for (let i =0 ;i < strs.length; i++){
        let char = strs[i];
        let charLength = strs[i].length;
        res = res + charLength + "#" + char;
    }

    return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
    if(s.length === 0) return [];
    let res = [];
    let i =0;

    while(i < s.length){
        let j = i; 

        while(s[j] !== "#"){
            j++;
        }

        let length = Number(s.slice(i,j));

        let word = s.slice(j+1,j+1+length);
        res.push(word);

        i = j + 1 + length;


    }

    return res;
    }
}
