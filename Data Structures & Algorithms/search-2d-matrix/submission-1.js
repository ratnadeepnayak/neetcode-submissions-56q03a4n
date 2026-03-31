class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        //search through each position one at a time 
        //and return true if an element is found

        const matrixLength = matrix.length;
        const rowLength = matrix[0].length;

        for (let i=0; i<matrixLength; i++){
            for (let j =0; j < rowLength; j++){
                if(matrix[i][j] === target){
                    return true
                }
            }
        }

        return false;

    }
}
