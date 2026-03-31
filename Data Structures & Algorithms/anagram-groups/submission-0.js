class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

      const anagramMap = {};
      for (const str of strs){
        console.log(str);
        const sortedStr = str.split("").sort().join("");

        if(sortedStr in anagramMap){
            anagramMap[sortedStr].push(str)
        }else{
            anagramMap[sortedStr] = [str];
        }
      }

      return Object.values(anagramMap)

    }
}
