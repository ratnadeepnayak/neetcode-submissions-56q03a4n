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
        let maxPathSum = -Infinity;
        function dfs(node){
            if(!node) return 0;

            let leftCount = Math.max(0,dfs(node?.left)) ;
            let rightCount = Math.max(0,dfs(node?.right));

            
            let currVal = leftCount + rightCount + node.val;

            maxPathSum = Math.max(maxPathSum,currVal)

            return node.val + Math.max(leftCount,rightCount);

        }

        dfs(root);
        return maxPathSum
    }
}
