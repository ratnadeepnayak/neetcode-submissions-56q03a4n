class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let columns = grid[0].length;

        let queue = [];
        let timeTaken = 0;

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j, 0]);
                }
            }
        }

        while (queue.length > 0) {
            let [row, col, level] = queue.shift();
            for (let [dx, dy] of directions) {
                let nx = dx + row;
                let ny = dy + col;

                if (nx >= 0 && ny >= 0 && nx < rows && ny < columns && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    queue.push([nx, ny, level + 1]);
                    timeTaken = Math.max(timeTaken, level + 1);
                }
            }
        }

        for (let i =0; i < rows; i++){
            for (let j =0; j < columns; j++){
                if(grid[i][j] === 1) return -1
            }
        }

        return timeTaken
    }
}
