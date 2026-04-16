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
    goodNodes(root) {
        let goodNodes = 0;
        function dfs(curr, val){
            if(!curr) return 0;

            if(curr.val >= val){
                goodNodes++;
            }

            let currMax = Math.max(val, curr?.val);

            dfs(curr?.left,currMax);
            dfs(curr?.right, currMax);
            
        }

        dfs(root, root.val)

        return goodNodes;
    }
}