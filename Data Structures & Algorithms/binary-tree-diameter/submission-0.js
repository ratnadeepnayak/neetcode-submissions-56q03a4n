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
        this.res = 0;

        this.dfs(root)

        return this.res;


    }

     dfs(root){
            if(!root){
                return 0
            }

            let leftHeight = this.dfs(root.left);
            let rightHeight = this.dfs(root.right);
            
            this.res = Math.max(this.res,(leftHeight + rightHeight))

            return 1 + Math.max(leftHeight, rightHeight)
        }
}
