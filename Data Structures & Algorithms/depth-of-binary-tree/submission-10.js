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
    maxDepth(root) {
        let maxDepth = 0;

        function dfs(curr){
            if(!curr) return 0;

            const left = dfs(curr?.left);
            const right = dfs(curr?.right);

            const depth = 1 + Math.max(left, right);
            maxDepth = Math.max(depth, maxDepth);
            return depth;
        }

        dfs(root);
        return maxDepth;
    }
}