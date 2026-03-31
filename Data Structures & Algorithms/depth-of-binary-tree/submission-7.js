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
        function dfs(node){
          if(!node) return 0;

         let leftHeight = dfs(node?.left);
         let rightHeight = dfs(node?.right);
         let currDepth = 1 + Math.max(leftHeight,rightHeight);

         maxDepth = Math.max(maxDepth,currDepth)

         return currDepth

        }

    dfs(root)
    return maxDepth
    }
}
