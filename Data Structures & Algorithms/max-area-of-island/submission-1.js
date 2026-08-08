class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let columns = grid[0].length;
        let area = 0;

        function dfs(r,c){
            if(r < 0 || c < 0 || r >= rows || c >= columns || grid[r][c] === 0){
                return 0;
            }

            grid[r][c] = 0;
            let count = 1;
            count = count + dfs(r+1,c);
            count = count + dfs(r-1,c);
            count = count + dfs(r,c+1);
            count = count + dfs(r,c-1);

            return count;
        }


        for (let i =0; i < rows; i++){
            for (let j =0; j < columns; j++){
                if(grid[i][j] === 1){
                    let res = dfs(i,j);
                    area = Math.max(area,res);
                }
            }
        }

        return area;

    }
}