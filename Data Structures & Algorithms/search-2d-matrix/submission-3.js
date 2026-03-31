class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let columns = matrix[0].length;

        let top = 0;
        let bottom = rows - 1;

        while (top <= bottom){
            let mid = Math.floor((top + bottom)/2);

            if(target > matrix[mid][columns - 1]){
                top = mid + 1;
            }else if(target < matrix[mid][0]){
                bottom = mid - 1;
            }else{
                break;
            }
        }

        if(!(top <= bottom)){
            return false
        }

        let selectedRow = Math.floor((top + bottom) / 2);

        let left = 0;
        let right = columns - 1;

        while (left <= right){
            let mid = Math.floor((left + right) /2);
            if(matrix[selectedRow][mid] > target){
                right = mid - 1;
            }else if(matrix[selectedRow][mid] < target){
                left = mid + 1;
            }else{
                return true;
            }
        }

        return false;

    }
}
