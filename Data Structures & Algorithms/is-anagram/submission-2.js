class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     const sortedS =  s.split('').sort().join('');
    //     const sortedT = t.split('').sort().join('');

    //     return sortedS === sortedT
    // }


    isAnagram(s,t){
        if(s.length !== t.length){
            return false
        }

        const sFrequency = countFrequencies(s);
        const tFrequency = countFrequencies(t);

    for (const letter in sFrequency) {
        if (sFrequency[letter] !== tFrequency[letter]) {
            return false
        }
    }

    return true

    }


}

function countFrequencies(string) {
    let frequencyObj = {};
    for (const letter of string) {
        if (letter in frequencyObj) {
            frequencyObj[letter] += 1;
        } else {
            frequencyObj[letter] = 1;
        }
    }

    return frequencyObj
}