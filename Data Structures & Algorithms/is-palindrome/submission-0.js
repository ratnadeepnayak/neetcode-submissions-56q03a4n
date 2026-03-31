class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right){
            while (left < right && !this.isAplphaNumeric(s[left])){
                left++;
            }

            while (right > left && !this.isAplphaNumeric(s[right])){
                right--;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            left++;
            right--;

        }

        return true
    }

    isAplphaNumeric(char){
        return (char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z") ||
                (char >= "0" && char <= "9");
    }
}
