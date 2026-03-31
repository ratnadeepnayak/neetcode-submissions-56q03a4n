class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /* Loop through the array
           For the chars - sort and store it as a key and that element as value in an array
           eg: 
           {
            "act" : ["act", "cat"]
           }

           return all the values from the map

           O(nlogn) - time complexity
           O(n) - space complexity

         */
        let map = {};
        for (let i=0; i<strs.length; i++){
            let word = strs[i];
            let sortedWord = word.split("").sort().join("");
     

            if(sortedWord in map){
                map[sortedWord].push(word)
            }else{
                map[sortedWord] = [word]
            }
        }

            return Object.values(map)

    }
}
