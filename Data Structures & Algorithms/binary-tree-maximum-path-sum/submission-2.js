/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxSumPath = -Infinity;

        function dfs(curr){

            if(!curr) return 0;

            let leftSum = Math.max(0, dfs(curr.left));
            let rightSum = Math.max(0, dfs(curr.right));

            let currSum = leftSum + rightSum + curr.val;

            maxSumPath = Math.max(currSum, maxSumPath);

            return curr.val + Math.max(leftSum, rightSum);

        }

        dfs(root)

        return maxSumPath
    }
}