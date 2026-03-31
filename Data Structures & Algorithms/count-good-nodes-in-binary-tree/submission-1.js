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
        //preorder traversal
        //always process the root node
        //go left
        //go right
        //return computation

        return this.dfs(root,-Infinity)

    }

    dfs(root,maxValue){
        if(!root){
            return 0
        }

        let count = root.val >= maxValue ? 1 : 0;
        maxValue = Math.max(maxValue, root.val);

        let leftNodes = this.dfs(root.left,maxValue);
        let rightNodes = this.dfs(root.right,maxValue);

        return count + leftNodes + rightNodes
    }
}
