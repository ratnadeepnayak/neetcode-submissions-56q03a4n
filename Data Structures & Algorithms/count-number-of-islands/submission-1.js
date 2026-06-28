class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        /*
            Loop through the entire grid
            Look for neighbors recursively who share the same 1 value
            mark them as visisted somehow
            continue till the end and return totalNoOfIslands
         */

        let totalNoOfIslands = 0;
        let rows = grid.length;
        let columns = grid[0].length;

        function dfs(row, col) {
            if (row < 0 || col < 0 || row >= rows || col >= columns || grid[row][col] === "0") {
                return;
            }

            grid[row][col] = "0";

            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (grid[i][j] === "1") {
                    totalNoOfIslands++;
                    dfs(i, j);
                }
            }
        }

        return totalNoOfIslands
    }
}
