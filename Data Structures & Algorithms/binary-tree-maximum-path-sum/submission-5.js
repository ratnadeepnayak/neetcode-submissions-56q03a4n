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
     * @return {number} branch
     */
    maxPathSum(root) {
        let maxSumPath = -Infinity;

        function traversal(node) {
            
            if (!node) return 0;

            let left = Math.max(traversal(node?.left),0)
            let right = Math.max(traversal(node?.right),0)

            let sum = node?.val + left + right;

            maxSumPath = Math.max(maxSumPath, sum);

            return node?.val + Math.max(left, right) 
        }

        traversal(root)

        return maxSumPath
    }
}
