class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let left = 0;
        let right = s.length - 1;

        while (left < right){

            while(left < right && !this.isAlphaNumeric(s[left])){
                left++;
            }

            while(left < right && !this.isAlphaNumeric(s[right])){
                right--;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }

            left++;
            right--;

        }

    return true

    }


    isAlphaNumeric(char){
            if((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <=90) ||
              (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <=122) || 
              (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <=56)){
                return true
              }else{
                return false
              }
    }

}