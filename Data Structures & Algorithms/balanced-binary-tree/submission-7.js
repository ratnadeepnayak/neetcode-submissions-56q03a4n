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
        let ans = true;

        function dfs(node){
            if(!node) return true;

            if(ans === false){
                return
            }

            let left = dfs(node?.left);
            let right = dfs(node?.right);



            let height = Math.abs(left - right);

            if(height > 1){
                ans = ans && false;
            }

            return 1 + Math.max(left, right);
        }

        dfs(root);

        return ans;
    }
}
