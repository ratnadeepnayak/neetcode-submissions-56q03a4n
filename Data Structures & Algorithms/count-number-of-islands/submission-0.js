class Solution {
    /**
     * @param {character[][]}
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let columns = grid[0].length;

        let noOfIsLands = 0;

        function dfs(r,c){
            if(r < 0 || c < 0 || r >= rows || c >= columns || grid[r][c] === "0"){
                return;
            }

            grid[r][c] = "0";
            dfs(r+1,c);
            dfs(r-1,c);
            dfs(r,c+1);
            dfs(r,c-1);

        }


        for (let i=0; i< rows; i++){
            for (let j=0; j < columns; j++){
                if(grid[i][j] === "1"){
                    dfs(i,j);
                    noOfIsLands++;
                }
            }
        }
        
        return noOfIsLands;


    }
}