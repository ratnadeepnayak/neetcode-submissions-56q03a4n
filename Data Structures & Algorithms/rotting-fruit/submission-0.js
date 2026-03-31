class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {

        /*
            Get the indices of all the rotten oranges in a queue
            Mark all the adjacent values as rotten per miniute
            Loop through the array and check if anything is remaining or not
         */

        let gridRow = grid.length;
        let gridcolumns = grid[0].length;
        let queue = [];
        for (let i =0; i<gridRow;i++){
            for (let j =0; j<gridcolumns;j++){
                if(grid[i][j] === 2){
                    queue.push([i,j,0])
                }
            }
        }
        let time = 0;
            while(queue.length > 0){
                let[row,column,level] = queue.shift();
                
                //left
                if(column - 1 >= 0 && grid[row][column - 1] === 1){
                    grid[row][column - 1] = 2;
                    queue.push([row,column-1,level+1])
                }
                
                //right
                if(column + 1 < gridcolumns && grid[row][column + 1] === 1){
                    grid[row][column + 1] = 2; 
                    queue.push([row,column+1,level+1])
                }
                
                //top
                if(row - 1 >= 0 && grid[row - 1][column] === 1){ 
                    grid[row - 1][column] = 2; 
                    queue.push([row - 1,column,level+1])
                }
                
                //bottom
                if(row + 1 < grid.length && grid[row + 1][column] === 1){
                    grid[row + 1][column] = 2;
                    queue.push([row + 1, column,level+1]);
                }

                time = Math.max(time,level)

            }

            for (let i =0; i<gridRow;i++){
            for (let j =0; j<gridcolumns;j++){
                if(grid[i][j] === 1){
                    return -1
                }
            }
        }

        return time        

    }
}
