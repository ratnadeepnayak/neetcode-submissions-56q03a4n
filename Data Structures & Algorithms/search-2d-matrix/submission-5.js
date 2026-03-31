class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;

        let start = 0;
        let end = m -1;

        let rowToBeSearched = null;

        while(start <= end){
            let mid = Math.floor((start + end)/2);

            if((matrix[mid][0] <=target) && (target <= matrix[mid][n-1])){
               rowToBeSearched = mid;
               break;
            }else if(target > matrix[mid][0]){
                start = mid  + 1;
            }else{
                end = mid - 1 
            }  
        }

        if (rowToBeSearched === null) return false;

        let left = 0;
        let right = n-1;

        while(left <= right){
            let mid = Math.floor((left + right)/2);


            if(matrix[rowToBeSearched][mid] === target){
                return true
            }else if(matrix[rowToBeSearched][mid] > target){
                right = mid - 1;
            }else{
                left = mid + 1
            }
        }

        return false;
    }
}
