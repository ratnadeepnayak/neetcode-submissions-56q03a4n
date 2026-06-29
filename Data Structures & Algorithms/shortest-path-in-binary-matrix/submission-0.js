class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        let rows = grid.length;
        let columns = grid[0].length;
        let n = grid.length;
        if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
        
        let visited = Array.from({ length: n }, () => new Array(n).fill(false));
        let queue = [[0, 0, 1]];
        visited[0][0] = true;

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, -1],
            [-1, 1],
            
        ];

        while (queue.length > 0) {
            let [r, c, level] = queue.shift();

            if (r === rows - 1 && c === columns - 1) {
                return level;
            }

            for (let [dr, dy] of directions) {
                let nx = r + dr;
                let ny = c + dy;

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < rows &&
                    ny < columns &&
                    visited[nx][ny] === false &&
                    grid[nx][ny] === 0
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, level + 1]);
                }
            }
        }

        return -1
    }
}
