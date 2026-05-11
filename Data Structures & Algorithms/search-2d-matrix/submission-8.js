class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let rows = matrix.length;
        let columns = matrix[0].length;

        let start = 0;
        let end = rows - 1;
        let rowToBeSearched = null;

        while (start <= end){
            let mid = Math.floor((start + end)/2);
            let currStart = matrix[mid][0];
            let currEnd = matrix[mid][columns - 1]
            if(currStart <= target && target <= currEnd){
                rowToBeSearched = mid;
                break;
            }else if(currStart > target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }

        if (rowToBeSearched === null) return false;

        let left = 0;
        let right = columns - 1;

        while(left <= right){
            let mid = Math.floor((left + right)/2);

            if(matrix[rowToBeSearched][mid] === target){
                return true
            }else if(matrix[rowToBeSearched][mid] > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }

        return false;
        

    }
}
