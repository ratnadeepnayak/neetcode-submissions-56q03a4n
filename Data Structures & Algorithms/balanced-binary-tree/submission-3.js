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
     * @return {boolean}
     */
    isBalanced(root) {

        return this.dfs(root)[0]

    }

    dfs(root){
        //return [boolean, height]

        if(!root){
            return [true,0]
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const valCheck = Math.abs(left[1] - right[1]) <= 1

        const isBalanced = left[0] && right[0] && valCheck;

        return [isBalanced, 1 + Math.max(left[1],right[1])]
    }
}
