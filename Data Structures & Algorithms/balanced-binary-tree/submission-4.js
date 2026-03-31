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

        let ans = true

        function dfs(node){
            if(!node) return 0;

            let leftHeight = dfs(node.left);
            let rightHeight = dfs(node.right);
            
            if(Math.abs(rightHeight - leftHeight) > 1){
                ans = ans && false
            }

            return 1 + Math.max(leftHeight,rightHeight)
        }

        dfs(root);

        return ans
    }
}
