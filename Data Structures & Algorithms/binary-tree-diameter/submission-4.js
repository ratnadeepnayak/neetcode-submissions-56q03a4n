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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        function dfs(node){

            if(!node) return null;

            let left = dfs(node?.left);
            let right = dfs(node?.right);

            let diameter = left + right;
            maxDiameter = Math.max(maxDiameter, diameter);

            return 1 + Math.max(left, right);

        }


        dfs(root);

        return maxDiameter;
    }
}
